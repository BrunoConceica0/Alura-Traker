<template>
  <section>
    <strong class="stopwatchText">{{ timerString }}</strong>
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
