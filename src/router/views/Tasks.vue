<template>
  <div class="container" @click="modal">
    <Form @isSalveTask="salveTask" />
    <div v-if="listTasks.length">
      <TasksItems
        v-for="(task, index) in listTasks"
        :key="index"
        :task="task"
        @click="openModal(task)"
      />
    </div>
    <TasksEmpty v-else>Você não está muito produtivo hoje :(</TasksEmpty>

    <Modal v-if="selectedTask" :task="selectedTask" @close="closeModal" />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from "vue";
import Form from "@/components/Form.vue";
import TasksItems from "@/components/TasksItems.vue";
import TasksEmpty from "@/components/TasksEmpty.vue";
import Modal from "@/components/Modal.vue";
import { useStore } from "@/store/index";
import type ITask from "@/interfaces/ITask";
import { GET_PROJECTS, GET_TASKS, REGISTER_TASKS } from "@/store/type-actions";

export default defineComponent({
  components: { Form, TasksItems, TasksEmpty, Modal },
  name: "Tasks",
  setup() {
    const store = useStore();
    const selectedTask = ref<ITask | null>(null);

    store.dispatch(GET_PROJECTS);
    store.dispatch(GET_TASKS);

    const listTasks = computed(() => store.state.tasks);

    const salveTask = (task: ITask) => {
      store.dispatch(REGISTER_TASKS, task);
    };

    const modal = () => void {


      
    };
    const openModal = (task: ITask) => {
      selectedTask.value = task;
    };

    const closeModal = () => {
      selectedTask.value = null;
    };

    return {
      listTasks,
      salveTask,
      selectedTask,
      openModal,
      closeModal,
      modal,
    };
  },
});
</script>
