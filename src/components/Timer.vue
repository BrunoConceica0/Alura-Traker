<template>
  <div class="flex items-center justify-between">
    <Stopwatch :timerString="timerString" />
    <div class="space-x-1 flex flex-row">
      <button
        @click="startTimer"
        type="button"
        class="btnBox text-gray-800"
        :disabled="isRunning"
        :class="{ 'opacity-50 cursor-not-allowed': isRunning }"
      >
        <font-awesome-icon icon="play" />
        <span>play</span>
      </button>

      <button
        @click="stopTimer"
        type="button"
        class="btnBox text-gray-800"
        :disabled="!isRunning"
        :class="{ 'opacity-50 cursor-not-allowed': !isRunning }"
      >
        <font-awesome-icon icon="stop" />
        <span>stop</span>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import Stopwatch from "./Stopwatch.vue";

export default defineComponent({
  name: "Timer",
  emits: ["timer-finished"],
  components: { Stopwatch },
  setup(_, { emit }) {
    const timer = ref(0);
    let stopwatch: number | null = null;
    const isRunning = ref(false);

    const startTimer = () => {
      if (stopwatch !== null) return;
      stopwatch = setInterval(() => {
        if (!isRunning.value) {
          isRunning.value = true;
        }
        timer.value++;
      }, 1000);
    };

    const stopTimer = () => {
      if (stopwatch !== null) {
        isRunning.value = false;
        clearInterval(stopwatch);
        emit("timer-finished", timer.value);
        timer.value = 0;
        stopwatch = null;
      }
    };

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
    return { timerString, startTimer, stopTimer, isRunning };
  },
});
</script>

<style scoped></style>
