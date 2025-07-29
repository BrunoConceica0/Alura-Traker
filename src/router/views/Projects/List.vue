<template>
  <section class="">
    <router-link :to="{ path: '/projects/new' }" class="projects-link">
      <span> <font-awesome-icon icon="fa-plus" /></span>
      <span>Novo Projeto</span>
    </router-link>
    <Form />
    <Table :listProjects="listProjects" />
  </section>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import Table from "../../../components/Table.vue";
import Form from "../../../router/views/Projects/Form.vue";
import { useStore } from "../../../store/index";

export default defineComponent({
  name: "List",
  components: { Table, Form },

  setup() {
    const store = useStore();
    // Lista de projetos

    const listProjects = computed(() => {
      return store.state.projects;
    });

    return {
      listProjects,
    };
  },
});
</script>
