/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,loginscreen_slider_click_icon]

function loginscreen_slider_click_icon(intArg0: component, intArg1: component): void {
    let int2: number = detailGetLoginVol();

    if (int2 == 0 && varc_1394 > 0 && varc_1394 <= 255) {
        detailLoginVol(varc_1394);
    } else if (int2 > 0) {
        detailLoginVol(0);
    }
    cs2_2007(intArg0, intArg1, 0, 1);
}
