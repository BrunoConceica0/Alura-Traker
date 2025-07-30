import { typeNotification } from "../interfaces/INotificationMessage";
export declare function useNotify(): {
    notify: (type: typeNotification, title: string, text: string) => void;
};
