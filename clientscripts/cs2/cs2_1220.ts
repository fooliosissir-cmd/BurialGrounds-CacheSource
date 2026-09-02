/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1220

function cs2_1220(intArg0: component, intArg1: component): void {
    if (detailGetStereo() == 1) {
        ifSetGraphic(Graphic.check_box_2_2, intArg1);
        ifSetGraphic(Graphic.check_box_2_0, intArg0);
    } else {
        ifSetGraphic(Graphic.check_box_2_2, intArg0);
        ifSetGraphic(Graphic.check_box_2_0, intArg1);
    }
}
