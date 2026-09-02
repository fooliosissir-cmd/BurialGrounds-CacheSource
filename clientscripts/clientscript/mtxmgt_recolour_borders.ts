/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,mtxmgt_recolour_borders]

function mtxmgt_recolour_borders(): void {
    let int0: number = 0;
    let int1: component = -1;

    while (int0 < enumGetoutputcount(Enum.enum_5962)) {
        int1 = enumOp(type_int, type_component, Enum.enum_5962, int0);
        if (int1 != -1 && ccFind(int1, 1) == 1) {
            if (varc_1967 == int0) {
                ccSetGraphic(Graphic.km_colourpickerbox_1);
            } else {
                ccSetGraphic(Graphic.km_colourpickerbox_0);
            }
        }
        int0 = int0 + 1;
    }
}
