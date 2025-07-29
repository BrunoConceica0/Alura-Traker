<template>
  <div class="flex flex-col justify-center ml-4">
    <select
      :value="idProject"
      @change="updateProject(($event.target as HTMLSelectElement).value)"
      class="selector-container"
    >
      <option value="">Selecione um projeto</option>
      <option v-for="project in projects" :key="project.id" :value="project.id">
        {{ project.name }}
      </option>
    </select>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import { key } from "../store";

export default defineComponent({
  name: "SelectorProject",
  props: {
    idProject: {
      type: String,
      required: true,
      default: "",
    },
  },
  emits: ["update:idProject"],
  setup(props, { emit }) {
    const store = useStore(key);

    const updateProject = (value: string) => {
      emit("update:idProject", value);
    };

    const projects = computed(() => store.state.projects);

    return { updateProject, projects, idProject: props.idProject };
  },
});
</script>
