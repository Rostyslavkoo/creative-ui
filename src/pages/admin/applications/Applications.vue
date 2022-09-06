<template>
  <AdminLayout>
    <q-page padding>
    
      <application-list />
    </q-page>
  </AdminLayout>
</template>

<script>
import AdminLayout from "src/layouts/admin/adminLayout.vue";
import ApplicationList from "./applicationList.vue";
export default {
  mounted(){
    document.title = 'Креатив | Головна'
  },
  components: { AdminLayout, ApplicationList },
};
</script>

<style></style>
