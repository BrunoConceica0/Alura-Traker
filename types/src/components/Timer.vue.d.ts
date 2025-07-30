declare const _default: import("vue").DefineComponent<{}, {
    timerString: import("vue").ComputedRef<string>;
    startTimer: () => void;
    stopTimer: () => void;
    isRunning: import("vue").Ref<boolean, boolean>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "timer-finished"[], "timer-finished", import("vue").PublicProps, Readonly<{}> & Readonly<{
    "onTimer-finished"?: ((...args: any[]) => any) | undefined;
}>, {}, {}, {
    Stopwatch: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        timerString: {
            type: StringConstructor;
        };
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        timerString: {
            type: StringConstructor;
        };
    }>> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
