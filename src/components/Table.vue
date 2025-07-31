<template>
  <div>
    <table class="table_main">
      <thead class="bg-gray-100">
        <tr>
          <th class="table-th">Projeto</th>
          <th class="table-th">ID</th>
          <th class="table-th">Acões</th>
        </tr>
      </thead>
      <tbody class="table-thead">
        <tr
          v-for="project in listProjects"
          :key="project.id"
          class="hover:bg-gray-50"
        >
          <td class="table-td">{{ project.name }}</td>
          <td class="table-td">{{ project.id }}</td>
          <td class="table-td">
            <div class="flex gap-5 items-center">
              <router-link
                :to="{ name: 'Edit project', params: { id: project.id } }"
              >
                <span>
                  <font-awesome-icon icon="fa-pencil" class="icon" /> </span
              ></router-link>
              <button class="btn-delete" @click="deleteProject(project.id)">
                <span>
                  <font-awesome-icon icon="fa-trash" class="icon" />
                </span>
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useNotify } from "@/hooks/notify";
import { typeNotification } from "@/interfaces/INotificationMessage";
import { store } from "@/store";
import { DELETE_PROJECT } from "@/store/type-actions";
import type IProjects from "@/interfaces/IProjects";

export default defineComponent({
  props: {
    listProjects: {
      type: Array as () => IProjects[],
      required: true,
    },
  },
  setup() {
    const { notify } = useNotify();

    const deleteProject = (id: string) => {
      store.dispatch(DELETE_PROJECT, id).then(() => {
        notify(
          typeNotification.SUCCESS,
          "Projeto Deletado!",
          "O Projeto foi deletado com sucesso"
        );
      });
    };

    return { deleteProject };
  },
});
</script>
