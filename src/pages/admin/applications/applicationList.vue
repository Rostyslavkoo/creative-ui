<template>
  <div>
    <q-table
      title="Заявки на вступ"
      :data="applicationData"
      :columns="columns"
      row-key="_id"
      bordered
      class="no-shadow"
      square
      hide-pagination
      :filter="searchQuery"
    >
      <template v-slot:top>
        <span class="text-h6"> Заявки на вступ </span>
        <q-space />

        <q-input
          outlined
          dense
          label="Пошук"
          v-model.trim="searchQuery"
          clearable
          hide-bottom-space
        >
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>
    </q-table>
  </div>
</template>

<script>
import applicatoinServe from "./applicationServe";

export default {
  mixins: [applicatoinServe],
};
</script>

<style></style>
