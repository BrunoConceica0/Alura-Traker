<template>
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
      <button type="submit" class="btnBox">Salvar</button>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { useStore } from "../../../store/index";
import { useRouter } from "vue-router";
import type IProjects from "../../../interfaces/IProjects";
export default defineComponent({
  name: "Form",
  props: {
    id: {
      type: String,
    },
  },
  setup(props) {
    const store = useStore();
    const router = useRouter();

    const nameProject = ref("");
    const salveProject = () => {
      if (!nameProject.value.trim()) {
        alert("O nome do projeto não pode estar vazio!");
        return;
      } else {
        if (props.id) {
          // Editar Projeto
          store.commit("CHANGE_PROJECT", {
            id: props.id,
            name: nameProject.value,
          });
        } else {
          store.commit("ADD_PROJECT", nameProject.value);
          nameProject.value = "";
        }
        router.push("/projects");
      }
    };
    onMounted(() => {
      if (props.id) {
        const project = (store.state.projects as IProjects[]).find(
          (project) => project.id === props.id
        );
        nameProject.value = project?.name || "";
      }
    });

    return {
      salveProject,
      nameProject,
    };
  },
});
</script>
