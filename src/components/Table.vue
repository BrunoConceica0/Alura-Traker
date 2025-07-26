<template>
  <div class="table_container">
    <table class="table_main">
      <thead class="bg-gray-100">
        <tr>
          <th class="table-th">Projeto</th>
          <th class="table-th">ID</th>
        </tr>
      </thead>
      <tbody class="table-thead">
        <tr
          v-for="project in listProjects"
          :key="project.id"
          class="hover:bg-gray-50"
        >
          <td class="table-td">{{ project.name }}</td>
          <td class="table-td">{{ project.id }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type IProjects from "../interfaces/IProjects";
export default defineComponent({
  name: "Table",
  props: {
    listProjects: {
      type: Array as () => IProjects[],
      required: true,
    },
  },
});
</script>
