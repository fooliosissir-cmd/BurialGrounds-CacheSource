/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6239

function cs2_6239(intArg0: number): void {
    if (intArg0 == 1) {
        if (getWindowMode() >= 2) {
            viewportSetZoom(370, 370);
            viewportSetfov(128, 128);
        } else {
            viewportSetZoom(280, 280);
            viewportSetfov(160, 160);
        }
    } else {
        viewportSetZoom(0, 0);
        viewportSetfov(0, 0);
    }
}
