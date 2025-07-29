<template>
  <section class="container p-[1.25rem] project-container">
    <h1 class="title">Projetos</h1>
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
import Table from "../../components/Table.vue";
import Form from "../../router/views/Projects/Form.vue";
import { useStore } from "../../store/index";

export default defineComponent({
  name: "Projects",
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
