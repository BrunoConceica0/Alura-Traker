<template>
  <div id="app">
    <main class="flex flex-wrap gap-0">
      <div class="flex w-1/4">
        <Sidebar />
      </div>
      <div class="flex w-3/4">
        <Form />
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Sidebar from "./components/Sidebar.vue";
import Form from "./components/Form.vue";
export default defineComponent({
  name: "App",
  components: { Sidebar, Form },
});
</script>

<style scoped></style>
