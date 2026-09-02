/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_957

function cs2_957(intArg0: component, intArg1: component, intArg2: component): void {
    if (varbit_fairyrings_log_order == 0) {
        cs2_959(intArg0, intArg1, 0);
        ifSetGraphic(Graphic.grand_exchange_misc_graphics_6, intArg2);
    } else {
        cs2_959(intArg0, intArg1, 1);
        ifSetGraphic(Graphic.grand_exchange_misc_graphics_7, intArg2);
    }
}
