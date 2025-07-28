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
import { computed, defineComponent, ref } from "vue";
import Table from "../../components/Table.vue";
import { useStore } from "../../store/index";
export default defineComponent({
  name: "Projects",
  components: { Table },

  setup() {
    const nameProject = ref("");
    // Lista de projetos

    const store = useStore();

    const salveProject = () => {
      if (!nameProject.value.trim()) {
        alert("O nome do projeto não pode estar vazio!");
        return;
      } else {
        store.commit("ADD_PROJECT", nameProject.value);
        nameProject.value = "";
      }
    };

    return {
      nameProject,
      salveProject,
      store,
      // A lista de projetos sem do IProdutos que é tipado com mutante vuex, usando o store.commit("ADD_PROJECT", nameProject.value);
      listProjects: computed(() => store.state.projects),
    };
  },
});
</script>
