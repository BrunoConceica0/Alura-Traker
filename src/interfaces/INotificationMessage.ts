export const typeNotification = {
  SUCCESS: "SUCCESS",
  FAILURE: "FAILURE",
  ATTENTION: "ATTENTION",
} as const;
export default interface Notification {
  title: string;
  text: string;
  type: typeNotification;
  id: number;
}
export type typeNotification =
  (typeof typeNotification)[keyof typeof typeNotification];
