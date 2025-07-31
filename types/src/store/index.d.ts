import type IProjects from "@/interfaces/IProjects";
import type INotificationMessage from "@/interfaces/INotificationMessage";
import type { InjectionKey } from "vue";
import { Store } from "vuex";
interface State {
    projects: IProjects[];
    notification: INotificationMessage[];
}
export declare const key: InjectionKey<Store<State>>;
export declare const store: Store<State>;
export declare function useStore(): Store<State>;
export {};
