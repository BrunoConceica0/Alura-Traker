<template>
  <div class="box-form">
    <form
      class="p-4 grid grid-cols-[3fr_1fr]"
      aria-label="Formulário para criação de uma nova tarefa."
    >
      <input
        type="text"
        class="input-tasks"
        placeholder="Qual tarefa você deseja iniciar?"
        v-model="task"
      />
      <div class="flex flex-col justify-center ml-4">
        <Timer @timer-finished="handleTimerFinished" />
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Timer from "./Timer.vue";

export default defineComponent({
  components: { Timer },
  name: "Form",
  setup() {
    const task = ref("");
    const handleTimerFinished = (timer: number): void => {
      task.value = "";
      console.log(`Timer finished after ${timer} seconds`);
      console.log(task.value);
    };
    return { handleTimerFinished, task };
  },
});
</script>
