<template>
  <div class="task box">
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "TasksEmpty",
});
</script>
