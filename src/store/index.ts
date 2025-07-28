import type IProjects from "../interfaces/IProjects";
import type { InjectionKey } from "vue";
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
    ADD_PROJECT(state: State, nameProject: string) {
      const project = {
        id: new Date().toISOString(),
        name: nameProject,
      } as IProjects;
      state.projects.push(project);
    },
  },
});

export function useStore(): Store<State> {
  return baseUseStore(key);
}
