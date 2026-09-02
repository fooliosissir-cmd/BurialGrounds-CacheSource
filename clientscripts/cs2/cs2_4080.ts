/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4080

function cs2_4080(): void {
    if (ifFind(Component.xmas10_seal_scoring.reset_end1) == 1) {
        ccSetGraphic(Graphic.set_but_end_2_1);
    }

    if (ifFind(Component.xmas10_seal_scoring.reset_end2) == 1) {
        ccSetGraphic(Graphic.set_but_end_2_4);
    }

    if (ifFind(Component.xmas10_seal_scoring.reset_mid) == 1) {
        ccSetGraphic(Graphic.set_but_fill_2_1);
    }
}
