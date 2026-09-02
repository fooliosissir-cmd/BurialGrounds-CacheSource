/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_736

function cs2_736(intArg0: component, intArg1: number, intArg2: component, intArg3: number): void {
    let int4: component = Component.interface_746.component_746_0;
    let int5: component = Component.interface_548.component_548_0;
    let int6: component = Component.interface_548.component_548_1;

    if (intArg0 == -1) {
        ifSetHide(true, int4);
        ifSetPosition(0, 0, 0, 0, int4);
        ifSetOnTimer(noHook(""), Component.interface_746.component_746_56);
        ifSetHide(true, int5);
        ifSetHide(true, int6);
        ifSetPosition(0, 0, 0, 0, int5);
        ifSetPosition(0, 0, 0, 0, int6);
        ifSetOnTimer(noHook(""), Component.interface_548.component_548_7);
        return;
    }
    ifSetHide(false, int4);
    ifSetPosition(ifGetWidth(ifGetParentLayer(int4)) / 2, ifGetHeight(ifGetParentLayer(int4)) / 2, 0, 0, int4);
    cs2_2755(intArg0, intArg1, int4);

    if (intArg0 != -1) {
        ifSetOnTimer(hook(cs2_2754, "IiI", [intArg0, intArg1, int4]), Component.interface_746.component_746_56);
    } else {
        ifSetOnTimer(noHook(""), Component.interface_746.component_746_56);
    }
    let int7: number = 0;
    let int8: number = 0;
    let int9: number = 0;
    let int10: number = 0;

    if (ccFind(intArg2, intArg3) == 1 || (intArg3 == -1 && ifFind(intArg2) == 1)) {
        [int7, int8] = [cc_getx_absolute(), cc_gety_absolute()];
        [int9, int10] = [ccGetWidth(), ccGetHeight()];
    } else {
        return;
    }
    let int11: component = ifGetLayer(int5);
    let int12: number = 0;
    let int13: number = 0;
    let int14: number = 0;
    let int15: number = 0;
    let int16: number = 0;
    let int17: number = 0;
    [int12, int13] = [if_getx_absolute(int11), trh_esc_mouseleave(int11)];
    [int14, int15] = [ifGetWidth(int11), ifGetHeight(int11)];
    [int16, int17] = [int12 + int14, int13 + int15];
    let int18: number = 0;
    let int19: number = 0;

    if (int7 + int9 >= int12 && int7 <= int16 && int8 + int10 >= int13 && int8 <= int17) {
        int4 = int5;
    } else {
        int4 = int6;
        int11 = ifGetLayer(int6);
        [int12, int13] = [if_getx_absolute(int11), trh_esc_mouseleave(int11)];
        [int14, int15] = [ifGetWidth(int11), ifGetHeight(int11)];
        [int16, int17] = [int12 + int14, int13 + int15];
    }
    [int18, int19] = [int7 - int12, int8 - int13];
    ifSetHide(false, int4);
    cs2_1176(int4, int7, int8, int9, int10, int18, int19, int12, int13, int14, int15);
    ifSetOnTimer(hook(cs2_836, "Iiiiiiiiiii", [int4, int7, int8, int9, int10, int18, int19, int12, int13, int14, int15]), Component.interface_548.component_548_7);
}
