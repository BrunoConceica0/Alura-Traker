// Passando o IdProject para o componente Form.vue, para eles se comunicarem entra do componente usando o Vuex
import type IProjects from "./IProjects";

export default interface ITask {
  durationInSeconds: number;
  description: string;
  projects: IProjects;
}
