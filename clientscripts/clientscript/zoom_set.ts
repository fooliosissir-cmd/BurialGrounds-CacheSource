/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,zoom_set]

function clientscript_zoom_set(): void {
    if (cs2_1420() == 0) {
        mes("You cannot currently alter your camera zoom.");
        return;
    }

    if (varc_1971 < 170) {
        varc_1971 = 270;
    }
    let int0: number = scale(4, 5, varc_1971);

    if (int0 < 170) {
        int0 = 170;
    } else if (int0 > 216) {
        int0 = 216;
    }
    viewportSetZoom(int0, varc_1971);
    viewportSetfov(180, 180);
    camSetfollowheight(400);
}
