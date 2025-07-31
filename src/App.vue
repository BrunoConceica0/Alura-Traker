<template>
  <div id="app">
    <main class="main-container" :class="{ 'theme-dark': themeDarkActive }">
      <div class="flex w-1/4 h-screen max-2xl:h-auto max-2xl:w-full">
        <Sidebar @theme-changed="themeChanged" />
      </div>
      <Notification />
      <router-view />
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Notification from "./components/Notification.vue";
import Sidebar from "./components/Sidebar.vue";

export default defineComponent({
  name: "App",
  components: { Sidebar, Notification },

  setup() {
    const themeDarkActive = ref(false);

    const themeChanged = (isDarkMode: boolean) => {
      themeDarkActive.value = isDarkMode;
    };

    return { themeChanged, themeDarkActive };
  },
});
</script>

<style scoped></style>
