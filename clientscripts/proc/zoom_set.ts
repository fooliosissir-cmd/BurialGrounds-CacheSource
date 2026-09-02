/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,zoom_set]

function proc_zoom_set(intArg0: number, intArg1: number): void {
    if (cs2_1420() == 0) {
        mes("You cannot currently alter your camera zoom.");
        return;
    }
    varc_1971 = 170 + scale(intArg0, intArg1, 100);

    if (varc_1971 <= 170) {
        varc_1971 = 170;
    } else if (varc_1971 >= 270) {
        varc_1971 = 270;
    }
    let int2: number = scale(4, 5, varc_1971);

    if (int2 < 170) {
        int2 = 170;
    } else if (int2 > 216) {
        int2 = 216;
    }
    viewportSetZoom(int2, varc_1971);
    viewportSetfov(180, 180);
    camSetfollowheight(400);
}
