/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1128

function cs2_1128(intArg0: component): void {
    if (varbit_autocast_defmode == 1) {
        ifSetGraphic(Graphic.graphic_1703, intArg0);
    } else if (varc_993 == 1) {
        ifSetGraphic(Graphic.graphic_1702, intArg0);
    } else {
        ifSetGraphic(Graphic.graphic_1701, intArg0);
    }
}
