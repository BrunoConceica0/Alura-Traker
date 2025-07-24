<template>
  <div class="font-bold my-1.5 box bg-[#faf0ca]">
    <div class="flex"></div>
    <div class="w-7/12">{{ task.description }}</div>
    <div>
      <Stopwatch :timerString="formatTime(task.durationInSeconds)" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Stopwatch from "./Stopwatch.vue";
import type ITask from "../interfaces/ITask";
import formatTime from "../utils/FormatTime";

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
    return { formatTime };
  },
});
</script>
