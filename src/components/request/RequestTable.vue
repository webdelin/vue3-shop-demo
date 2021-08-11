<template>
  <h4 v-if="requests.length === 0" class="text-center">Liste ist Leer.</h4>
  <table v-else class="table">
    <thead>
      <tr>
        <th>#</th>
        <th>Name:</th>
        <th>Tel:</th>
        <th>Summe:</th>
        <th>Status:</th>
        <th>Aktion:</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(req, idx) in requests" :key="req.id">
        <td>{{ idx + 1 }}</td>
        <td>{{ req.name }}</td>
        <td>{{ req.phone }}</td>
        <td>{{ currency(req.amount) }}</td>
        <td><app-status :type="req.status"></app-status></td>
        <td><router-link :to="`/details/${req.id}`">details</router-link></td>
      </tr>
    </tbody>
  </table>
</template>
<script>
import { currency } from "../../utils/currency";
import AppStatus from "@/components/ui/AppStatus";
export default {
  props: ["requests"],
  components: { AppStatus },
  setup() {
    return { currency };
  },
};
</script>