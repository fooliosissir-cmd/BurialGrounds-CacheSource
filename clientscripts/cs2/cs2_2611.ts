/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2611

function cs2_2611(intArg0: number, intArg1: number): void {
    if (intArg1 == 1) {
        viewportSetZoom(256, 320);
        camForceAngle(383, 0);
    }
    cs2_2612(moveCoord(coord(), -16, 0, -16), intArg0);
}
