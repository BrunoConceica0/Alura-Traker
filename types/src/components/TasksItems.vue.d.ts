import type ITask from "../interfaces/ITask";
import formatTime from "../utils/FormatTime";
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    task: {
        type: () => ITask;
        required: true;
    };
}>, {
    formatTime: typeof formatTime;
    TaskEmpyt: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    task: {
        type: () => ITask;
        required: true;
    };
}>> & Readonly<{}>, {}, {}, {
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
