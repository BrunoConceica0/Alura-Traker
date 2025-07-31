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
import Table from "@/components/Table.vue";
import Form from "@/router/views/Projects/Form.vue";
import { useStore } from "@/store/index";
import { GET_PROJECTS } from "@/store/type-actions";

export default defineComponent({
  name: "List",
  components: { Table, Form },

  setup() {
    const store = useStore();
    // Lista de projetos
    store.dispatch(GET_PROJECTS);

    const listProjects = computed(() => {
      return store.state.projects;
    });

    return {
      listProjects,
    };
  },
});
</script>
