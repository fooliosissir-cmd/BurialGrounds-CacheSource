/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,quickchat_menu_scroll]

function proc_quickchat_menu_scroll(intArg0: number): void {
    let int1: component = enumOp(type_int, type_component, Enum.enum_1550, intArg0);
    let int2: component = ifGetLayer(int1);

    if (ifGetScrollWidth(int2) == 0) {
        ifSetScrollSize(ifGetWidth(int2), 0, int2);
    }
    let int3: number = ifGetWidth(int1);
    let int4: number = ifGetX(int1);

    while (intArg0 > 0) {
        intArg0 = intArg0 - 1;
        int1 = enumOp(type_int, type_component, Enum.enum_1550, intArg0);
        if (ifGetHide(int1) == 0 && int3 + ifGetWidth(int1) <= ifGetWidth(int2)) {
            int3 = int3 + ifGetWidth(int1);
            int4 = ifGetX(int1);
        } else {
            intArg0 = -1;
        }
    }

    if (ifGetScrollX(int2) == int4) {
        ifSetOnTimer(noHook(""), int2);
    } else {
        ifSetOnTimer(hook(clientscript_quickchat_menu_scroll, "Ii", [int2, int4]), int2);
    }
}
