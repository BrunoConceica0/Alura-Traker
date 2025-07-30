import type IProjects from "./IProjects";
export default interface ITask {
    durationInSeconds: number;
    description: string;
    projects: IProjects;
}
