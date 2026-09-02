/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2007

function cs2_2007(intArg0: component, intArg1: component, intArg2: number, intArg3: number): void {
    ifSetdraggable(intArg0, -1, intArg1);
    let int4: number = ifGetWidth(intArg0) - ifGetWidth(intArg1);
    let int5: number = scale(detailGetLoginVol(), 255, int4);
    ifSetPosition(int5, 0, 0, 0, intArg1);

    if (detailGetLoginVol() > 0) {
        if (intArg3 == 1) {
            ifSetGraphic(Graphic.graphic_4123, Component.interface_744.component_744_108);
        } else {
            ifSetGraphic(Graphic.graphic_4118, Component.interface_744.component_744_108);
        }
    } else if (intArg3 == 1) {
        ifSetGraphic(Graphic.graphic_4124, Component.interface_744.component_744_108);
    } else {
        ifSetGraphic(Graphic.graphic_4119, Component.interface_744.component_744_108);
    }

    if (intArg2 == 1) {
        varc_1394 = detailGetLoginVol();
    }
}
