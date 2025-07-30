import type IProjects from "../interfaces/IProjects";
declare const _default: import("vue").DefineComponent<{}, {
    handleTimerFinished: (timer: number) => void;
    task: import("vue").Ref<string, string>;
    projects: import("vue").ComputedRef<IProjects[]>;
    idProject: import("vue").Ref<string, string>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("isSalveTask" | "IdProject")[], "isSalveTask" | "IdProject", import("vue").PublicProps, Readonly<{}> & Readonly<{
    onIdProject?: ((...args: any[]) => any) | undefined;
    onIsSalveTask?: ((...args: any[]) => any) | undefined;
}>, {}, {}, {
    Timer: import("vue").DefineComponent<{}, {
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
    SelectorProject: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        idProject: {
            type: StringConstructor;
            required: true;
            default: string;
        };
    }>, {
        updateProject: (value: string) => void;
        projects: import("vue").ComputedRef<IProjects[]>;
        idProject: string;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:idProject"[], "update:idProject", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        idProject: {
            type: StringConstructor;
            required: true;
            default: string;
        };
    }>> & Readonly<{
        "onUpdate:idProject"?: ((...args: any[]) => any) | undefined;
    }>, {
        idProject: string;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
