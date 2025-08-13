<template>
  <Teleport to="body">
    <div
      class="fixed inset-0 bg-gray-950/60 flex items-center justify-center z-50 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      @click="handleOverlayClick"
      @keydown.esc="closeModal"
    >
      <!-- Modal Container -->
      <div
        ref="modalRef"
        class="bg-white rounded-lg shadow-xl max-w-md w-full p-6 relative transform transition-all duration-200 ease-out"
        role="document"
        @click.stop
      >
        <!-- Header com botão de fechar -->
        <header class="flex items-center justify-between mb-4">
          <h2 id="modal-title" class="text-xl font-semibold text-gray-900">
            Detalhes da Tarefa
          </h2>

          <button
            ref="closeButtonRef"
            type="button"
            class="inline-flex items-center justify-center w-8 h-8 text-gray-400 bg-transparent rounded-lg hover:bg-gray-200 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            aria-label="Fechar modal"
            @click="closeModal"
          >
            <svg
              class="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
          </button>
        </header>

        <main>
          <p id="modal-description" class="text-gray-700 mb-6 leading-relaxed">
            {{
              task?.description ||
              "Nenhuma descrição disponível para esta tarefa."
            }}
          </p>

          <div
            v-if="task?.projects?.name || task?.durationInSeconds"
            class="bg-gray-50 rounded-lg p-3 mb-6 space-y-2"
          >
            <dl class="space-y-1">
              <div v-if="task?.projects?.name">
                <dt class="text-sm font-medium text-gray-500">Projeto:</dt>
                <dd class="text-sm text-gray-900">{{ task.projects.name }}</dd>
              </div>
              <div v-if="task?.durationInSeconds">
                <dt class="text-sm font-medium text-gray-500">Duração:</dt>
                <dd class="text-sm text-gray-900">
                  {{ formatDuration(task.durationInSeconds) }}
                </dd>
              </div>
            </dl>
          </div>
        </main>

        <!-- Footer com ações -->
        <footer
          class="flex justify-end space-x-3 pt-4 border-t border-gray-200"
        >
          <button
            type="button"
            class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            @click="closeModal"
          >
            Cancelar
          </button>

          <button
            type="button"
            class="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            @click="confirmAction"
          >
            Confirmar
          </button>
        </footer>
      </div>
    </div>
  </Teleport>
</template>

<script lang="ts" setup>
import { ref, nextTick, onMounted, onUnmounted } from "vue";
import type ITask from "@/interfaces/ITask";

defineProps<{
  task: ITask;
}>();

const emit = defineEmits<{
  close: [];
  confirm: [task: ITask];
}>();

const modalRef = ref<HTMLDivElement>();
const closeButtonRef = ref<HTMLButtonElement>();

let previousActiveElement: Element | null = null;

const closeModal = (): void => {
  emit("close");
};

const confirmAction = (): void => {
  closeModal();
};

const handleOverlayClick = (event: Event): void => {
  // Fechar modal apenas se clicar no overlay, não no conteúdo
  if (event.target === event.currentTarget) {
    closeModal();
  }
};

const formatDuration = (seconds: number): string => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  const parts = [];
  if (hours > 0) parts.push(`${hours}h`);
  if (minutes > 0) parts.push(`${minutes}m`);
  if (secs > 0 || parts.length === 0) parts.push(`${secs}s`);

  return parts.join(" ");
};

// Gerenciamento de foco para acessibilidade
const trapFocus = (event: KeyboardEvent): void => {
  if (!modalRef.value) return;

  const focusableElements = modalRef.value.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );

  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[
    focusableElements.length - 1
  ] as HTMLElement;

  if (event.key === "Tab") {
    if (event.shiftKey) {
      // Shift + Tab - volta para o último elemento se estiver no primeiro
      if (document.activeElement === firstElement) {
        lastElement.focus();
        event.preventDefault();
      }
    } else {
      // Tab - vai para o primeiro elemento se estiver no último
      if (document.activeElement === lastElement) {
        firstElement.focus();
        event.preventDefault();
      }
    }
  }
};

// Lifecycle hooks
onMounted(async () => {
  // Salvar elemento que tinha foco antes do modal
  previousActiveElement = document.activeElement;

  // Focar no botão de fechar após o modal aparecer
  await nextTick();
  closeButtonRef.value?.focus();

  // Adicionar listener para trap de foco
  document.addEventListener("keydown", trapFocus);

  // Prevenir scroll do body
  document.body.style.overflow = "hidden";
});

onUnmounted(() => {
  // Remover listener
  document.removeEventListener("keydown", trapFocus);

  // Restaurar scroll do body
  document.body.style.overflow = "";

  // Restaurar foco para elemento anterior
  if (previousActiveElement instanceof HTMLElement) {
    previousActiveElement.focus();
  }
});
</script>

<style scoped>
/* Animações suaves para entrada/saída do modal */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.v-enter-active .transform,
.v-leave-active .transform {
  transition: transform 0.2s ease;
}

.v-enter-from .transform {
  transform: scale(0.95) translate(-50%, -50%);
}

.v-leave-to .transform {
  transform: scale(0.95) translate(-50%, -50%);
}
</style>
