/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1795

function cs2_1795(intArg0: component, intArg1: component): void {
    let int2: graphic = Graphic.options_radio_buttons_0;
    let int3: graphic = Graphic.options_radio_buttons_2;

    if (varbit_clanwars_ffatype == 1) {
        if (varbit_cws_warning_31 == 1) {
            ifSetGraphic(int3, intArg1);
            ifSetOnOp(hook(graphic_swapper, "Id", [intArg1, int2]), intArg0);
        } else {
            ifSetGraphic(int2, intArg1);
            ifSetOnOp(hook(graphic_swapper, "Id", [intArg1, int3]), intArg0);
        }
    } else if (varbit_cws_warning_22 == 1) {
        ifSetGraphic(int3, intArg1);
        ifSetOnOp(hook(graphic_swapper, "Id", [intArg1, int2]), intArg0);
    } else {
        ifSetGraphic(int2, intArg1);
        ifSetOnOp(hook(graphic_swapper, "Id", [intArg1, int3]), intArg0);
    }
}
