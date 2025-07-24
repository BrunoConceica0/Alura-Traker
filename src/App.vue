<template>
  <div id="app">
    <main
      class="flex flex-wrap gap-0"
      :class="{ 'theme-dark': themeDarkActive }"
    >
      <div class="flex w-1/4 h-screen">
        <Sidebar @theme-changed="themeChanged" />
      </div>
      <div class="flex flex-col w-3/4 h-min">
        <Form @isSalveTask="salveTask" />
        <div v-if="listTasks.length">
          <Tasks v-for="(task, index) in listTasks" :key="index" :task="task" />
        </div>
        <TasksEmpty v-else>Você não esta muito produtivo hoje :( </TasksEmpty>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Sidebar from "./components/Sidebar.vue";
import Form from "./components/Form.vue";
import Tasks from "./components/Tasks.vue";
import TasksEmpty from "./components/TaskEmpyt.vue";
import type ITask from "./interfaces/ITask";

export default defineComponent({
  name: "App",
  components: { Sidebar, Form, Tasks, TasksEmpty },

  setup() {
    const listTasks = ref<ITask[]>([]);
    const themeDarkActive = ref(false);

    const salveTask = (task: ITask) => {
      listTasks.value.push(task);
    };
    const themeChanged = (isDarkMode: boolean) => {
      themeDarkActive.value = isDarkMode;
    };

    return { listTasks, salveTask, themeChanged, themeDarkActive };
  },
});
</script>

<style scoped></style>
