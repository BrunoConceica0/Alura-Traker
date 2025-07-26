<template>
  <section class="container p-[1.25rem]">
    <h1 class="title">Projetos</h1>
    <form @submit.prevent="salveProject">
      <div class="mb-4 relative">
        <label for="nomeProject" id="nomeProject" class="project-label">
          Nome do Projeto
        </label>
        <input
          type="text"
          id="nomeProject"
          v-model="nameProject"
          placeholder="Digite seu projeto"
          class="project-input"
        />
      </div>
      <div class="mb-4 relative">
        <button type="submit" class="btnBox">Salva</button>
      </div>
    </form>
    <Table :listProjects="listProjects" />
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Table from "../../components/Table.vue";
import type IProjects from "../../interfaces/IProjects";
export default defineComponent({
  name: "Projects",
  components: { Table },

  setup() {
    const nameProject = ref("");
    // Lista de projetos
    const listProjects = ref<IProjects[]>([]);

    const salveProject = () => {
      const project: IProjects = {
        id: new Date().toISOString(),
        name: nameProject.value,
      };
      console.log("Projeto salvo:", project);
      nameProject.value = "";
      // Adiciona o projeto à lista
      listProjects.value.push(project);
      return project;
    };

    return { nameProject, salveProject, listProjects };
  },
});
</script>
