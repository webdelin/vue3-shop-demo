<template>
  <app-loader v-if="loading" />
  <app-page v-else title="Startseite">
    <template #header>
      <button class="btn primary" @click="modal = true">Start</button>
    </template>
    <request-filter v-model="filter"></request-filter>
    <request-table :requests="requests"></request-table>
    <teleport to="body">
      <app-modal v-if="modal" title="Erstelle Inseart" @close="modal = false">
        <request-modal @created="modal = false"></request-modal>
      </app-modal>
    </teleport>
  </app-page>
</template>
b
<script>
import { ref, computed, onMounted } from "vue";
import { useStore } from "vuex";
import AppPage from "@/components/ui/AppPage";
import AppModal from "@/components/ui/AppModal";
import RequestTable from "@/components/request/RequestTable";
import RequestModal from "@/components/request/RequestModal";
import RequestFilter from "@/components/request/RequestFilter";
import AppLoader from "@/components/ui/AppLoader";
export default {
  components: {
    AppPage,
    RequestTable,
    AppModal,
    RequestModal,
    AppLoader,
    RequestFilter,
  },
  setup() {
    const store = useStore();
    const modal = ref(false);
    const loading = ref(false);
    const filter = ref({})
    onMounted(async () => {
      loading.value = true;
      await store.dispatch("request/LOAD_DATA");
      loading.value = false;
    });
    const requests = computed(() => store.getters["request/REQUESTS"]
    .filter(req => {
      if(filter.value.name){
        return req.name.includes(filter.value.name)
      }
      return req
    })
    .filter(req => {
      if(filter.value.status){
        return filter.value.status === req.status
      }
      return req
    })
    );
    return {
      modal,
      requests,
      loading,
      filter
    };
  },
};
</script>
