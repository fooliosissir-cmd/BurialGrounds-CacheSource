/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3418

function cs2_3418(intArg0: component, intArg1: number, intArg2: number): void {
    let int3: graphic = Graphic.km_colourpickerbox_1;
    let int4: graphic = Graphic.km_colourpickerbox_0;

    if (intArg2 == intArg1) {
        if (ccFind(intArg0, 1) == 1) {
            ccSetGraphic(int3);
            ifSetOnMouseOver(noHook(""), intArg0);
            ifSetOnMouseLeave(noHook(""), intArg0);
        }
    } else if (ccFind(intArg0, 1) == 1) {
        ccSetGraphic(int4);
        ifSetOnMouseOver(hook(cc_graphic_swapper, "Iid", [event_com, ccGetId(), int3]), intArg0);
        ifSetOnMouseLeave(hook(cc_graphic_swapper, "Iid", [event_com, ccGetId(), int4]), intArg0);
    }
}
