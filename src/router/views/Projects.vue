<template>
  <div class="container p-[1.25rem] project-container">
    <h1 class="title">Projetos</h1>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Project",
});
</script>

<style></style>
