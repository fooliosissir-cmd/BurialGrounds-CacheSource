/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3126

function cs2_3126(intArg0: component, intArg1: number): void {
    if (ccFind(intArg0, intArg1) == 1) {
        if (intArg1 == 0) {
            ccSetGraphic(Graphic.world_select_updown_arrows_0);
        } else {
            ccSetGraphic(Graphic.world_select_updown_arrows_1);
        }
    }
}
