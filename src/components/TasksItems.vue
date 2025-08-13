<template>
  <div class="task box">
    <div class="w-7/12">{{ task.description || "Tarefa sem descrição" }}</div>
    <div class="flex w-1/2">
      {{ task.projects?.name || "N/D" }}
    </div>
    <div>
      <Stopwatch :timerString="formatTime(task.durationInSeconds)" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import Stopwatch from "./Stopwatch.vue";
import type ITask from "@/interfaces/ITask";
import formatTime from "@/utils/FormatTime";

defineOptions({ name: "TasksItems" });

defineProps({
  task: {
    type: Object as () => ITask,
    required: true,
  },
});
</script>
