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

      <!-- v-model:idProject se conecta com `idProject` no setup -->
      <SelectorProject v-model:idProject="idProject" />

      <div class="flex flex-col justify-center ml-4">
        <Timer @timer-finished="handleTimerFinished" />
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import Timer from "./Timer.vue";
import SelectorProject from "./SelectorProject.vue";
import { useStore } from "vuex";
import { key } from "../store";
import type IProjects from "../interfaces/IProjects";

export default defineComponent({
  components: { Timer, SelectorProject },
  name: "Form",
  emits: ["isSalveTask", "IdProject"],

  setup(_, { emit }) {
    const task = ref("");
    const idProject = ref("");

    const store = useStore(key);
    const projects = computed<IProjects[]>(() => store.state.projects);

    const handleTimerFinished = (timer: number): void => {
      const selectedProject = projects.value.find(
        (project) => project.id === idProject.value
      );

      emit("isSalveTask", {
        durationInSeconds: timer,
        description: task.value,
        projects: selectedProject,
      });

      emit("IdProject", idProject.value);

      task.value = "";
    };

    return {
      handleTimerFinished,
      task,
      projects,
      idProject,
    };
  },
});
</script>
