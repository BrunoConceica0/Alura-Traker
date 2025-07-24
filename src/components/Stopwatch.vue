<template>
  <section>
    <strong class="text-sm text-gray-700 mx-4 dark:text-white">{{
      timerString
    }}</strong>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    timerString: {
      type: String,
    },
  },
});
</script>

<style></style>
