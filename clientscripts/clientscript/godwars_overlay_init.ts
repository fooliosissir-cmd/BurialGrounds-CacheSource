/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,godwars_overlay_init]

function godwars_overlay_init(intArg0: component, intArg1: component, intArg2: component, intArg3: component, intArg4: component, intArg5: component, intArg6: component, intArg7: component, intArg8: component, intArg9: component, intArg10: component, intArg11: component): void {
    let int12: number = parawidth(ifGetText(intArg1), 512, Graphic.p11_full);
    let int13: number = parawidth(ifGetText(intArg2), 512, Graphic.p11_full);
    let int14: number = parawidth(ifGetText(intArg3), 512, Graphic.p11_full);
    let int15: number = parawidth(ifGetText(intArg4), 512, Graphic.p11_full);
    let int16: number = parawidth(ifGetText(intArg5), 512, Graphic.p11_full);
    let int17: number = parawidth(ifGetText(intArg10), 512, Graphic.p11_full);

    cs2_2337(intArg0);
    ifSetOnTimer(hook(cs2_2336, "Ii", [intArg0, getWindowMode()]), intArg0);
    cs2_2335(intArg0, intArg2, intArg3, intArg4, intArg5, int12, int13, int14, int15, int16, intArg6, intArg7, intArg8, intArg9, intArg10, intArg11, int17);
    ifSetOnVarTransmit(hook(godwars_overlay_vartransmit, "IIIIIiiiiiIIIIIIiY", [intArg0, intArg2, intArg3, intArg4, intArg5, int12, int13, int14, int15, int16, intArg6, intArg7, intArg8, intArg9, intArg10, intArg11, int17], [1048, 1058, 2040]), intArg0);
    ifSetSize(100, 75, 0, 0, Component.interface_601.component_601_0);
    ifSetTrans(255, Component.interface_601.component_601_1);
    varc_1435 = 255;
}
