<template>
  <div class="box">
    <form
      class="p-4 grid grid-cols-[3fr_1fr_1fr]"
      aria-label="Formulário para criação de uma nova tarefa."
    >
      <input
        type="text"
        class="input-tasks"
        placeholder="Qual tarefa você deseja iniciar?"
        v-model="task"
      />
      <div class="flex flex-col justify-center ml-4">
        <select
          v-model="IdProject"
          class="w-full px-4 py-2 border-2 border-blue-500 rounded-md text-gray-700 text-base focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-600 bg-white appearance-none cursor-pointer"
        >
          <option value="">Selecione um projeto</option>
          <option
            v-for="project in projects"
            :key="project.id"
            :value="project.id"
          >
            {{ project.name }}
          </option>
        </select>
      </div>
      <div class="flex flex-col justify-center ml-4">
        <Timer @timer-finished="handleTimerFinished" />
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import Timer from "./Timer.vue";
import { useStore } from "vuex";
import { key } from "../store";
import type IProjects from "../interfaces/IProjects";

export default defineComponent({
  components: { Timer },
  name: "Form",
  emits: ["isSalveTask"],
  setup(_, { emit }) {
    const task = ref("");
    const IdProject = ref("")

    // Importa a store do Vuex
    const store = useStore(key);

    //Exponha os projetos da store para uso no componente veux

    const projects = computed<IProjects[]>(() => store.state.projects);

    const handleTimerFinished = (timer: number): void => {
      emit("isSalveTask", {
        durationInSeconds: timer,
        description: task.value,
        projects: projects.value.find(
          (projetc) => projetc.id === IdProject.value
        ),
      });
      task.value = "";
    };

    return {
      handleTimerFinished,
      task,
      projects,
      // Exponha o IdProject para uso no componente
      IdProject,
    };
  },
});
</script>
