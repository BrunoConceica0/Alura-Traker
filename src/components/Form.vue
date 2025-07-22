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
      />
      <div class="flex flex-col justify-center ml-4">
        <div class="flex items-center justify-between">
          <section>
            <strong class="text-sm text-gray-700 mx-4">{{
              timerString
            }}</strong>
          </section>
          <div class="space-x-1 flex flex-row">
            <button
              @click="startTimer"
              type="button"
              class="btnBox text-gray-800"
            >
              <font-awesome-icon icon="play" />
              <span>play</span>
            </button>

            <button
              @click="stopTimer"
              type="button"
              class="btnBox text-gray-800"
            >
              <font-awesome-icon icon="stop" />
              <span>stop</span>
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";

export default defineComponent({
  name: "Form",
  setup() {
    const timer = ref(0);
    let setIntervalId: number | null = null;

    function startTimer() {
      if (setIntervalId !== null) return; // já está rodando
      setIntervalId = setInterval(() => {
        timer.value++;
      }, 1000);
    }

    function stopTimer() {
      if (setIntervalId !== null) {
        clearInterval(setIntervalId);
        setIntervalId = null;
      }
    }

    const timerString = computed(() => {
      const h = Math.floor(timer.value / 3600)
        .toString()
        .padStart(2, "0");
      const m = Math.floor((timer.value % 3600) / 60)
        .toString()
        .padStart(2, "0");
      const s = (timer.value % 60).toString().padStart(2, "0");
      return `${h}:${m}:${s}`;
    });

    return { timer, startTimer, stopTimer, timerString };
  },
});
</script>

<style scoped></style>
