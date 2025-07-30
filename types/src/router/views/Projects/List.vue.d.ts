declare const _default: import("vue").DefineComponent<{}, {
    listProjects: import("vue").ComputedRef<import("../../../interfaces/IProjects.ts").default[]>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {
    Table: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        listProjects: {
            type: () => import("../../../interfaces/IProjects.ts").default[];
            required: true;
        };
    }>, {
        deleteProject: (id: string) => void;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        listProjects: {
            type: () => import("../../../interfaces/IProjects.ts").default[];
            required: true;
        };
    }>> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    Form: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        id: {
            type: StringConstructor;
        };
    }>, {
        salveProject: () => void;
        nameProject: import("vue").Ref<string, string>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        id: {
            type: StringConstructor;
        };
    }>> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
