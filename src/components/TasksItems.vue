<template>
  <TaskEmpyt>
    <div class="task box">
      <div class="flex"></div>
      <div class="w-7/12">{{ task.description || "Tarefa sem descrição" }}</div>
      <div>
        <Stopwatch :timerString="formatTime(task.durationInSeconds)" />
      </div>
    </div>
  </TaskEmpyt>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Stopwatch from "./Stopwatch.vue";
import type ITask from "../interfaces/ITask";
import formatTime from "../utils/FormatTime";
import TaskEmpyt from "./TaskEmpyt.vue";

export default defineComponent({
  name: "Tasks",
  components: { Stopwatch },
  props: {
    task: {
      type: Object as () => ITask,
      required: true,
    },
  },
  setup() {
    return { formatTime, TaskEmpyt };
  },
});
</script>
