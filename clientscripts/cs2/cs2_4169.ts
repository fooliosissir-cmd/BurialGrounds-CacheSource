/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4169

function cs2_4169(intArg0: number): void {
    if (testBit(varp_286, intArg0) == 1) {
        ccSetGraphic(Graphic.radio_buttons_1);
    } else {
        ccSetGraphic(Graphic.radio_buttons_0);
    }
}
