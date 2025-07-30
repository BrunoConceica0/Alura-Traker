import { store } from "../store";
import { typeNotification } from "../interfaces/INotificationMessage";
import { NOTIFICATION } from "../store/type-mutations";

export function useNotify() {
  const notify = (
    type: typeNotification,
    title: string,
    text: string
  ): void => {
    store.commit(NOTIFICATION, {
      title,
      text,
      type,
    });
  };

  return { notify };
}
