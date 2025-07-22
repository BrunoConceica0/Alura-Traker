<template>
  <div class="box-form">
    <form
      class="p-4 grid grid-cols-[3fr_1fr]"
      aria-label="Formulário para criação de uma nova tarefa."
      @submit.prevent="criarTarefa"
    >
      <input
        type="text"
        v-model="tarefa"
        class="input-tasks"
        placeholder="Qual tarefa você deseja iniciar?"
      />
      <div class="flex flex-col justify-center ml-4">
        <div class="flex items-center justify-between">
          <section>
            <strong class="text-sm text-gray-700">{{ tempo }}</strong>
          </section>
          <div class="space-x-1 flex flex-row">
            <button
              type="button"
              class="btnBox text-gray-800"
              @click="startTimer"
            >
              <font-awesome-icon icon="play" />
              <span>play</span>
            </button>

            <button
              type="button"
              class="btnBox text-gray-800"
              @click="stopTimer"
            >
              <font-awesome-icon icon="stop" />
              <span>stop</span>
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Form",
  setup() {
    const tarefa = ref("");
    const tempo = ref("00:00:00");
    let timer: number | null = null;
    let segundos = 0;

    function formatarTempo(seg: number) {
      const hrs = Math.floor(seg / 3600)
        .toString()
        .padStart(2, "0");
      const mins = Math.floor((seg % 3600) / 60)
        .toString()
        .padStart(2, "0");
      const secs = (seg % 60).toString().padStart(2, "0");
      return `${hrs}:${mins}:${secs}`;
    }

    function startTimer() {
      if (timer) return; // já está rodando
      timer = setInterval(() => {
        segundos++;
        tempo.value = formatarTempo(segundos);
      }, 1000);
    }

    function stopTimer() {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
    }

    function criarTarefa() {
      if (!tarefa.value.trim()) return alert("Digite uma tarefa!");
      // faça o que quiser com a tarefa, ex: emitir evento, salvar, etc.
      alert(`Tarefa criada: ${tarefa.value}`);
      tarefa.value = "";
      segundos = 0;
      tempo.value = "00:00:00";
      stopTimer();
    }

    return { tarefa, tempo, startTimer, stopTimer, criarTarefa };
  },
});
</script>

<style scoped></style>
