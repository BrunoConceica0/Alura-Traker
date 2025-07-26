<template>
  <div class="flex flex-col w-3/4 h-min">
    <Form @isSalveTask="salveTask" />
    <div v-if="listTasks.length">
      <TasksItems
        v-for="(task, index) in listTasks"
        :key="index"
        :task="task"
      />
    </div>
    <TasksEmpty v-else>Você não esta muito produtivo hoje :( </TasksEmpty>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Form from "../../components/Form.vue";
import TasksItems from "../../components/TasksItems.vue";
import TasksEmpty from "../../components/TaskEmpyt.vue";
import type ITask from "../../interfaces/ITask";

export default defineComponent({
  components: { Form, TasksItems, TasksEmpty },
  name: "Tasks",
  setup() {
    const listTasks = ref<ITask[]>([]);

    const salveTask = (task: ITask) => {
      listTasks.value.push(task);
    };
    return { listTasks, salveTask };
  },
});
</script>

<style></style>
