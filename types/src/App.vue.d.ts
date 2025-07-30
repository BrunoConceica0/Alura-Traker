declare const _default: import("vue").DefineComponent<{}, {
    themeChanged: (isDarkMode: boolean) => void;
    themeDarkActive: import("vue").Ref<boolean, boolean>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {
    Sidebar: import("vue").DefineComponent<{}, {
        toggleDarkMode: () => void;
        isDarkMode: import("vue").ComputedRef<"Desativa modo escuro" | "Ativa modo escuro">;
        themeDarkActive: import("vue").Ref<boolean, boolean>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "theme-changed"[], "theme-changed", import("vue").PublicProps, Readonly<{}> & Readonly<{
        "onTheme-changed"?: ((...args: any[]) => any) | undefined;
    }>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    Notification: import("vue").DefineComponent<{}, {
        notifications: import("vue").ComputedRef<import("./interfaces/INotificationMessage.ts").default[]>;
        context: {
            SUCCESS: string;
            ATTENTION: string;
            FAILURE: string;
        };
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
