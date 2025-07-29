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
import {
  ADD_PROJECT,
  CHANGE_PROJECT,
  NOTIFICATION,
} from "../../../store/type-mutations";
import { typeNotification } from "../../../interfaces/INotificationMessage";
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
        store.commit("NOTIFICATION", {
          title: "Campo obrigatório",
          text: "O nome do projeto não pode estar vazio!",
          type: typeNotification.FAILURE,
        });
      } else {
        if (props.id) {
          // Editar Projeto
          store.commit(CHANGE_PROJECT, {
            id: props.id,
            name: nameProject.value,
          });
        } else {
          store.commit(ADD_PROJECT, nameProject.value);
          nameProject.value = "";
        }
        store.commit(NOTIFICATION, {
          title: "Novo Projeto salvo",
          text: "Pronto! Seu projeto já esta disponível",
          type: typeNotification.SUCCESS,
        });
        router.push("/projects");
      }
    };
    onMounted(() => {
      if (props.id) {
        const project = (store.state.projects as IProjects[]).find(
          (project) => project.id === props.id
        );
        store.commit(NOTIFICATION, {
          title: "Cuidado",
          text: "Seu projeto esta sendo editado!",
          type: typeNotification.ATTENTION,
        });
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
