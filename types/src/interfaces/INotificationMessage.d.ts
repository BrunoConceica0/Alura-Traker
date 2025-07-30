export declare const typeNotification: {
    readonly SUCCESS: "SUCCESS";
    readonly FAILURE: "FAILURE";
    readonly ATTENTION: "ATTENTION";
};
export default interface Notification {
    title: string;
    text: string;
    type: typeNotification;
    id: number;
}
export type typeNotification = (typeof typeNotification)[keyof typeof typeNotification];
