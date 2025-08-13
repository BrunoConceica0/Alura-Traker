<template>
  <div
    class="fixed inset-0 bg-gray-950/60 bg-opacity-50 flex items-center justify-center z-50"
  >
    <div class="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative">
      <button
        @click="$emit('close')"
        class="absolute top-3 right-3 text-gray-500 hover:text-gray-700 cursor-pointer"
      >
        &times;
      </button>
      <h2 class="text-xl font-semibold mb-4">Detalhes da Tarefa</h2>
      <p class="text-gray-700 mb-6">
        {{ task?.description || "Nenhuma descrição disponível." }}
      </p>
      <div class="flex justify-end space-x-2">
        <button
          @click="$emit('close')"
          class="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
        >
          Cancelar
        </button>
        <button
          class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Confirmar
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type ITask from "@/interfaces/ITask";

export default defineComponent({
  name: "Modal",
  props: {
    task: {
      type: Object as () => ITask,
      required: true,
    },
  },
  emits: ["close"],
});
</script>
