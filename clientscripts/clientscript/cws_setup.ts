/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,cws_setup]

function cws_setup(intArg0: component, intArg1: component, intArg2: number): void {
    let int3: number = cs2_166(intArg2);
    let int4: graphic = Graphic.warning_icons_1;

    if (int3 >= 7) {
        ifSetHide(false, intArg0);
        ifSetGraphic(Graphic.warning_icons_2, intArg1);
        ifSetOnClick(hook(graphic_swapper, "Id", [intArg1, int4]), intArg0);
    } else if (int3 == 6) {
        ifSetHide(false, intArg0);
        ifSetGraphic(Graphic.warning_icons_1, intArg1);
        int4 = Graphic.warning_icons_2;
        ifSetOnClick(hook(graphic_swapper, "Id", [intArg1, int4]), intArg0);
    } else {
        ifSetHide(true, intArg0);
        ifSetOnClick(noHook(""), intArg0);
    }
}
