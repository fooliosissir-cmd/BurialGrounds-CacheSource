/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3132

function cs2_3132(intArg0: component, intArg1: number, intArg2: number): void {
    if (ccFind(intArg0, intArg1) == 1) {
        if (varc_998 == intArg2 || varc_999 == intArg2) {
            ccSetGraphic(Graphic.graphic_1541);
        } else {
            ccSetGraphic(Graphic.graphic_1545);
        }
    }
    ifSetHide(true, Component.interface_910.component_910_65);
    ifSetHide(true, Component.interface_910.component_910_66);
}
