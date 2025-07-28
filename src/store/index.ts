import type IProjects from "../interfaces/IProjects";
import type { InjectionKey } from "vue";
import { createStore, Store } from "vuex";

interface State {
  projects: IProjects[];
}

export const key: InjectionKey<Store<State>> = Symbol("store");
export const store = createStore<State>({
  state: {
    projects: [
      {
        id: new Date().toISOString(),
        name: "New Project",
      },
      {
        id: new Date().toISOString(),
        name: "Vuex Project",
      },
      {
        id: new Date().toISOString(),
        name: "TypeScript Project",
      },
    ],
  },
});
