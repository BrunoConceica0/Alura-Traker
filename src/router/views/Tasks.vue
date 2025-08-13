<template>
  <div class="container" @click="closeModal">
    <Form @isSalveTask="salveTask" @click.stop />
    <div v-if="listTasks.length" @click.stop>
      <TasksItems
        v-for="(task, index) in listTasks"
        :key="index"
        :task="task"
        @click="openModal(task)"
      />
    </div>
    <TasksEmpty v-else @click.stop>
      Você não está muito produtivo hoje :(
    </TasksEmpty>

    <Modal v-if="selectedTask" :task="selectedTask" @close="closeModal" />
  </div>
</template>

<script lang="ts" setup>
import Form from "@/components/Form.vue";
import TasksItems from "@/components/TasksItems.vue";
import TasksEmpty from "@/components/TasksEmpty.vue";
import Modal from "@/components/Modal.vue";
import { useStore } from "@/store/index";
import type ITask from "@/interfaces/ITask";
import { GET_PROJECTS, GET_TASKS, REGISTER_TASKS } from "@/store/type-actions";
import { computed, ref } from "vue";

defineOptions({ name: "Tasks" });

const store = useStore();
const selectedTask = ref<ITask | null>(null);

store.dispatch(GET_PROJECTS);
store.dispatch(GET_TASKS);

const listTasks = computed(() => store.state.tasks);

const salveTask = (task: ITask) => {
  store.dispatch(REGISTER_TASKS, task);
};

const openModal = (task: ITask) => {
  selectedTask.value = task;
};

const closeModal = () => {
  selectedTask.value = null;
};
</script>
