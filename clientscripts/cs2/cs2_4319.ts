/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4319

function cs2_4319(intArg0: number, intArg1: number): void {
    let int2: number = 0;
    let int3: number = 0;
    let int4: component = Component.interface_1096.component_1096_52;
    let int5: component = Component.interface_1096.component_1096_51;
    let int6: component = Component.interface_1096.component_1096_76;
    let int7: component = Component.interface_1096.component_1096_151;
    let int8: component = Component.interface_1096.component_1096_47;
    let int9: number = 71827534;

    if (intArg0 > 0) {
        int2 = intArg0 - 1;
    } else {
        int2 = 0;
        int3 = ifGetHeight(int4);
        if (intArg1 == 0) {
            int3 = int3 + 6;
            ifSetvflip(false, int6);
            ifSetvflip(false, int7);
            ifSetOp(1, "Hide", int8);
            ifSetOnOpt(hook(cs2_4319, "ii", [0, 1]), int8);
        } else {
            ifSetHide(true, Component.interface_1096.component_1096_70);
            int3 = int3 - 6;
            ifSetvflip(true, int6);
            ifSetvflip(true, int7);
            ifSetOp(1, "Show", int8);
            ifSetOnOpt(hook(cs2_4319, "ii", [0, 0]), int8);
        }
        int3 = min(int3, 224);
        int3 = max(int3, 115);
        ifSetSize(ifGetWidth(int4), int3, 0, 0, int4);
        ifSetSize(ifGetWidth(int5), int3 - 62, 0, 1, int5);
        if (intArg1 == 0 && int3 >= 224) {
            ifSetHide(false, Component.interface_1096.component_1096_70);
            ifSetOnTimer(noHook(""), int4);
        } else if (intArg1 == 1 && int3 <= 115) {
            ifSetOnTimer(noHook(""), int4);
        } else {
            ifSetOnTimer(hook(cs2_4319, "ii", [int2, intArg1]), int4);
        }
        cs2_4302();
    }
}
