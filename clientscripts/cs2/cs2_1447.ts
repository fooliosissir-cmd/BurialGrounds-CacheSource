/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1447

function cs2_1447(intArg0: number): void {
    let int1: number = 0;
    let int2: component = enumOp(type_int, type_component, Enum.enum_1617, int1);

    while (int2 != -1) {
        if (int1 == intArg0) {
            ifSetHide(false, int2);
        } else {
            ifSetHide(true, int2);
        }
        int1 = int1 + 1;
        int2 = enumOp(type_int, type_component, Enum.enum_1617, int1);
    }

    if (intArg0 > 0) {
        ifSetOnOp(hook(cs2_1446, "i", [intArg0 - 1]), Component.interface_767.component_767_64);
        ifSetTrans(0, Component.interface_767.component_767_64);
    } else {
        ifSetOnOp(noHook(""), Component.interface_767.component_767_64);
        ifSetTrans(200, Component.interface_767.component_767_64);
    }

    if (intArg0 < int1 - 1) {
        ifSetOnOp(hook(cs2_1446, "i", [intArg0 + 1]), Component.interface_767.component_767_63);
        ifSetTrans(0, Component.interface_767.component_767_63);
    } else {
        ifSetOnOp(noHook(""), Component.interface_767.component_767_63);
        ifSetTrans(200, Component.interface_767.component_767_63);
    }
    ifSetText("Page " + tostring(intArg0 + 1) + " of " + tostring(int1), Component.interface_767.component_767_62);
}
