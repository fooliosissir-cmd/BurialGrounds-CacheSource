/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5582

function cs2_5582(intArg0: component, intArg1: component): void {
    let int2: number = 240;

    if (stringLength(ifGetText(intArg1)) > 0) {
        int2 = parawidth(ifGetText(intArg1), 500, Graphic.verdana_11pt_regular) + 80;
        if (int2 > ifGetWidth(intArg0)) {
            ifSetSize(int2, 20, 0, 0, Component.interface_1193.component_1193_11);
            ifSetSize(int2, 20, 0, 0, Component.interface_1193.component_1193_13);
            ifSetSize(int2, 20, 0, 0, Component.interface_1193.component_1193_14);
            ifSetSize(int2, 20, 0, 0, Component.interface_1193.component_1193_15);
        }
        if (ifGetHide(Component.interface_1193.component_1193_11) == 1) {
            ifSetColour(colour(0x666666), Component.interface_1193.component_1193_3);
            ifSetColour(colour(0x666666), Component.interface_1193.component_1193_12);
            hookMouseEnter(noHook(""), Component.interface_1193.component_1193_11);
            hookMouseExit(noHook(""), Component.interface_1193.component_1193_11);
            ifSetHide(false, Component.interface_1193.component_1193_11);
            ifSetHide(false, Component.interface_1193.component_1193_3);
        }
        if (ifGetHide(Component.interface_1193.component_1193_13) == 1) {
            ifSetColour(colour(0x666666), Component.interface_1193.component_1193_23);
            ifSetColour(colour(0x666666), Component.interface_1193.component_1193_24);
            hookMouseEnter(noHook(""), Component.interface_1193.component_1193_13);
            hookMouseExit(noHook(""), Component.interface_1193.component_1193_13);
            ifSetHide(false, Component.interface_1193.component_1193_13);
            ifSetHide(false, Component.interface_1193.component_1193_23);
        }
        if (ifGetHide(Component.interface_1193.component_1193_14) == 1) {
            ifSetColour(colour(0x666666), Component.interface_1193.component_1193_28);
            ifSetColour(colour(0x666666), Component.interface_1193.component_1193_29);
            hookMouseEnter(noHook(""), Component.interface_1193.component_1193_14);
            hookMouseExit(noHook(""), Component.interface_1193.component_1193_14);
            ifSetHide(false, Component.interface_1193.component_1193_14);
            ifSetHide(false, Component.interface_1193.component_1193_28);
        }
        if (ifGetHide(Component.interface_1193.component_1193_15) == 1) {
            ifSetColour(colour(0x666666), Component.interface_1193.component_1193_33);
            ifSetColour(colour(0x666666), Component.interface_1193.component_1193_34);
            hookMouseEnter(noHook(""), Component.interface_1193.component_1193_15);
            hookMouseExit(noHook(""), Component.interface_1193.component_1193_15);
            ifSetHide(false, Component.interface_1193.component_1193_15);
            ifSetHide(false, Component.interface_1193.component_1193_33);
        }
        int2 = parawidth(ifGetText(Component.interface_1193.component_1193_19), 500, Graphic.graphic_4040) + 80;
        if (int2 > ifGetWidth(Component.interface_1193.component_1193_5)) {
            ifSetSize(int2, 30, 0, 0, Component.interface_1193.component_1193_5);
        }
        ifSetOnTimer(noHook(""), intArg0);
    }
}
