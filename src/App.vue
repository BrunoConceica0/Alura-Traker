<template>
  <div id="app">
    <main class="flex flex-wrap gap-0">
      <div class="flex w-1/4 h-screen">
        <Sidebar />
      </div>
      <div class="flex flex-col w-3/4 h-min">
        <Form @isSalveTask="salveTask" />
        <div class="p-[1.25rem]">
          <Tasks v-for="(task, index) in listTasks" :key="index" :task="task" />
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Sidebar from "./components/Sidebar.vue";
import Form from "./components/Form.vue";
import Tasks from "./components/Tasks.vue";
import type ITask from "./interfaces/ITask";

export default defineComponent({
  name: "App",
  setup() {
    const listTasks = ref<ITask[]>([]);

    const salveTask = (task: ITask) => {
      listTasks.value.push(task);
    };

    return { listTasks, salveTask };
  },
  components: { Sidebar, Form, Tasks },
});
</script>

<style scoped></style>
