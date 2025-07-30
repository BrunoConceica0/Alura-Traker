import type IProjects from "@/interfaces/IProjects";
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    listProjects: {
        type: () => IProjects[];
        required: true;
    };
}>, {
    deleteProject: (id: string) => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    listProjects: {
        type: () => IProjects[];
        required: true;
    };
}>> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
