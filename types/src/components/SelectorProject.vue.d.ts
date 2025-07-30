declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    idProject: {
        type: StringConstructor;
        required: true;
        default: string;
    };
}>, {
    updateProject: (value: string) => void;
    projects: import("vue").ComputedRef<import("../interfaces/IProjects.ts").default[]>;
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
export default _default;
