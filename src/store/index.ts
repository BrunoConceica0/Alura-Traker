import type IProjects from "@/interfaces/IProjects";
import type INotificationMessage from "@/interfaces/INotificationMessage";
import type { InjectionKey } from "vue";
import {
  ADD_PROJECT,
  NOTIFICATION,
  SET_PROJECTS,
  DELETE_PROJECTS,
  SET_TASKS,
  ADD_TASKS,
} from "./type-mutations";
import {
  GET_PROJECTS,
  REGISTER_PROJECTS,
  CHANGE_PROJECT,
  DELETE_PROJECT,
  GET_TASKS,
  REGISTER_TASKS,
} from "./type-actions";
import { createStore, Store, useStore as baseUseStore } from "vuex";
import http from "@/http/index";
import type ITask from "@/interfaces/ITask";
interface State {
  projects: IProjects[];
  notification: INotificationMessage[];
  tasks: ITask[];
}

export const key: InjectionKey<Store<State>> = Symbol("store");
export const store = createStore<State>({
  state: {
    tasks: [],
    projects: [],
    notification: [],
  },
  mutations: {
    [ADD_PROJECT](state: State, nameProject: string) {
      const project = {
        id: new Date().toISOString(),
        name: nameProject,
      } as IProjects;
      state.projects.push(project);
    },
    [CHANGE_PROJECT](state: State, project: IProjects) {
      const index = state.projects.findIndex((p) => p.id === project.id);

      if (index !== -1) {
        state.projects[index] = project;
      }
    },
    [DELETE_PROJECT](state: State, id: string) {
      state.projects = state.projects.filter((p) => p.id !== id);
    },

    [SET_PROJECTS](state: State, projects: IProjects[]) {
      state.projects = projects;
    },
    [SET_TASKS](state: State, tasks: ITask[]) {
      state.tasks = tasks;
    },
    [ADD_TASKS](state: State, listTasks: ITask) {
      state.tasks.push(listTasks);
    },
    [NOTIFICATION](state: State, newNotification: INotificationMessage) {
      state.notification.push(newNotification);
      // Para remove o alert
      newNotification.id = new Date().getTime();
      setTimeout(() => {
        state.notification = state.notification.filter(
          (n) => n.id !== newNotification.id
        );
      }, 3000);
    },
  },
  actions: {
    // Assicrona com axios para trabalha com api usando o commit
    [GET_PROJECTS]({ commit }) {
      http.get("project").then((r) => commit(SET_PROJECTS, r.data));
    },
    [REGISTER_PROJECTS](context, nameProject: string) {
      return http.post("/project", { name: nameProject });
    },
    [CHANGE_PROJECT](context, project: IProjects) {
      return http.put(`/project/${project.id}`, project);
    },
    [DELETE_PROJECT]({ commit }, id: string) {
      return http.delete(`/project/${id}`).then(() => {
        commit(DELETE_PROJECTS, id);
      });
    },
    [GET_TASKS]({ commit }) {
      http.get("tasks").then((r) => commit(SET_TASKS, r.data));
    },
    [REGISTER_TASKS]({ commit }, listTasks: ITask) {
      return http
        .post(`/tasks`, listTasks)
        .then((r) => commit(ADD_TASKS, r.data));
    },
  },
});

export function useStore(): Store<State> {
  return baseUseStore(key);
}
