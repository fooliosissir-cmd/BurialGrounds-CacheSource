/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,quickchat_return]

function proc_quickchat_return(intArg0: component, intArg1: number): void {
    let int2: number = intArg1 + 1;
    let int3: component = enumOp(type_int, type_component, Enum.enum_1550, int2);
    let int4: component = enumOp(type_int, type_component, Enum.enum_1551, int2);

    while (int3 != -1) {
        ccDeleteAll(int3);
        ccDeleteAll(int4);
        ifSetHide(true, int3);
        ifSetOnKey(noHook(""), int3);
        int3 = enumOp(type_int, type_component, Enum.enum_1550, int2);
        int4 = enumOp(type_int, type_component, Enum.enum_1551, int2);
        int2 = int2 + 1;
    }
    int2 = intArg1 + 1;

    while (ccFind(intArg0, int2) == 1) {
        ccDelete();
        if (ccFind<1>(Component.interface_137.component_137_2, int2) == 1) {
            ccDelete<1>();
        }
        int2 = int2 + 1;
    }
    int2 = 0;
    int3 = enumOp(type_int, type_component, Enum.enum_1550, intArg1);
    int4 = enumOp(type_int, type_component, Enum.enum_1551, intArg1);

    while (ccFind(int3, int2) == 1) {
        ccSetOnMouseOver(hook(cs2_1082, "iIi", [intArg1, int4, int2]));
        ccSetOnMouseLeave(hook(cs2_1083, "iIi", [intArg1, int4, int2]));
        if (ccFind<1>(int4, int2) == 1) {
            ccSetHide<1>(true);
        }
        int2 = int2 + 1;
    }
    varc_128 = -1;
    proc_quickchat_menu_scroll(intArg1);
    quickchat_path_scroll(intArg0, intArg1);
}
