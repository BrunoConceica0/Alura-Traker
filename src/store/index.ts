import type IProjects from "../interfaces/IProjects";
import type { InjectionKey } from "vue";
import { ADD_PROJECT, CHANGE_PROJECT, DELETE_PROJECT } from "./type-mutations";
import { createStore, Store, useStore as baseUseStore } from "vuex";
interface State {
  projects: IProjects[];
}

export const key: InjectionKey<Store<State>> = Symbol("store");
export const store = createStore<State>({
  state: {
    projects: [],
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
  },
});

export function useStore(): Store<State> {
  return baseUseStore(key);
}
