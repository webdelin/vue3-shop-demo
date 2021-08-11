<template>
  <app-loader v-if="loading"></app-loader>
  <app-page back v-else-if="details" :title="`Details ${$route.params.id}`">
    <p><strong>Name: </strong> {{details.name}}</p>
    <p><strong>Telefon: </strong> {{details.phone}}</p>
    <p><strong>Summe: </strong> {{currency(details.amount)}}</p>
    <p><strong>Status: </strong> <app-status :type="details.status"/></p>
    <div class="form-control">
      <label for="status">Status</label>
      <select id="status" v-model="status">
        <option value="active">Aktiv</option>
        <option value="pending">In Arbeit</option>
        <option value="done">Beendet</option>
        <option value="cancel">Geschloßen</option>
      </select>
    </div>
    <button class="btn danger" @click="remove">Löschen?</button>
    <button class="btn" v-if="hasChanges" @click="update">Update</button>
  </app-page>
  <h3 v-else class="text-center text-white">
    Details für ID: {{ id }} nich grfunden!
  </h3>
</template>

<script>
import { ref, onMounted, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
import {currency} from '../utils/currency'
import AppPage from "@/components/ui/AppPage.vue";
import AppLoader from "@/components/ui/AppLoader.vue";
import AppStatus from "@/components/ui/AppStatus.vue";
export default {
  components: { AppPage, AppLoader, AppStatus },
  setup() {
    const loading = ref(true);
    const details = ref({});
    const status = ref()
    const route = useRoute();
    const router = useRouter();
    const store = useStore();
    onMounted(async () => {
      loading.value = true;
      details.value = await store.dispatch(
        "request/LOAD_DETAILS",
        route.params.id
      );
      status.value = details.value?.status
      loading.value = false;
    });
    const hasChanges = computed(()=>details.value.status !== status.value)
    const remove = async ()=> {
      await store.dispatch('request/DELETE_ITEM', route.params.id)
      router.push('/')
    }
    const update = async ()=> {
      const data = {...details.value,status:status.value, id:route.params.id}
      await store.dispatch('request/UPDATE_ITEM', data)
      details.value.status = status.value
    }
    return {
      details,
      loading,
      currency,
      remove,
      update,
      status,
      hasChanges
    };
  },
};
</script>

<style>
</style>