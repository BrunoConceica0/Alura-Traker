<template>
  <div class="container">
    <Form @isSalveTask="salveTask" />
    <div v-if="listTasks.length">
      <TasksItems
        v-for="(task, index) in listTasks"
        :key="index"
        :task="task"
      />
    </div>
    <TasksEmpty v-else>Você não está muito produtivo hoje :(</TasksEmpty>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import Form from "@/components/Form.vue";
import TasksItems from "@/components/TasksItems.vue";
import TasksEmpty from "@/components/TasksEmpty.vue";
import { useStore } from "@/store/index";
import type ITask from "@/interfaces/ITask";
import { GET_PROJECTS } from "@/store/type-actions";
import { GET_TASKS, REGISTER_TASKS } from "@/store/type-actions";

export default defineComponent({
  components: { Form, TasksItems, TasksEmpty },
  name: "Tasks",
  setup() {
    const store = useStore();

    store.dispatch(GET_PROJECTS);
    store.dispatch(GET_TASKS);

    const listTasks = computed(() => store.state.tasks);
    store;
    const salveTask = (task: ITask) => {
      store.dispatch(REGISTER_TASKS, task);
    };
    return { listTasks, salveTask };
  },
});
</script>

<style></style>
