export enum typeNotification {
  SUCCESS,
  FAILURE,
  ATTENTION,
}
export default interface Notification {
  title: string;
  text: string;
  type: typeNotification;
  id: number;
}
