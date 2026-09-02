/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5594

function cs2_5594(intArg0: component, intArg1: component): void {
    let int2: number = 240;
    let int3: number = 20;

    if (stringLength(ifGetText(intArg1)) > 0) {
        int2 = parawidth(ifGetText(intArg1), 500, Graphic.verdana_11pt_regular) + 80;
        int3 = max(1, paraheight(ifGetText(intArg1), 500, Graphic.verdana_11pt_regular)) * 18;
        if (int3 > 18 && stringLength(ifGetText(Component.interface_1188.component_1188_14)) == 0) {
            ifSetPosition(0, 35, 1, 0, Component.interface_1188.component_1188_11);
            ifSetPosition(0, 80, 1, 0, Component.interface_1188.component_1188_13);
        }
        if (int2 > ifGetWidth(intArg0)) {
            ifSetSize(int2, int3, 0, 0, Component.interface_1188.component_1188_11);
            ifSetSize(int2, int3, 0, 0, Component.interface_1188.component_1188_13);
            ifSetSize(int2, int3, 0, 0, Component.interface_1188.component_1188_14);
            ifSetSize(int2, int3, 0, 0, Component.interface_1188.component_1188_15);
            ifSetSize(int2, int3, 0, 0, Component.interface_1188.component_1188_16);
        }
        int2 = parawidth(ifGetText(Component.interface_1188.component_1188_20), 500, Graphic.graphic_4040) + 80;
        if (int2 > ifGetWidth(Component.interface_1188.component_1188_5)) {
            ifSetSize(int2, 30, 0, 0, Component.interface_1188.component_1188_5);
        }
        ifSetOnTimer(noHook(""), intArg0);
    }
}
