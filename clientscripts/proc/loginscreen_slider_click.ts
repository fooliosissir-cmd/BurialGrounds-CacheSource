/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,loginscreen_slider_click]

function proc_loginscreen_slider_click(intArg0: component, intArg1: component, intArg2: number, intArg3: number): void {
    if (intArg2 >= ifGetX(intArg1) && intArg2 <= ifGetX(intArg1) + ifGetWidth(intArg1)) {
        return;
    }
    let int4: number = ifGetWidth(intArg0) - ifGetWidth(intArg1);
    let int5: number = ifGetWidth(intArg1) / 2;

    if (intArg2 == -1) {
        intArg2 = ifGetWidth(intArg0);
    }
    intArg2 = max(intArg2 - int5, 0);
    intArg2 = min(intArg2, int4);

    switch (intArg3) {
        case 0:
            detailSoundVol(scale(intArg2, int4, 127));
            cs2_1217(intArg0, intArg1);
            break;
        case 1:
            detailMusicVol(scale(intArg2, int4, 255));
            loginscreen_musicvol(intArg0, intArg1);
            break;
        case 2:
            detailBgsoundvol(scale(intArg2, int4, 127));
            cs2_1218(intArg0, intArg1);
            break;
        case 5:
            detailSpeechvol(scale(intArg2, int4, 127));
            cs2_5868(intArg0, intArg1);
            break;
        case 3:
            detailBrightness(min(scale(intArg2, int4, 4), 3) + 1);
            loginscreen_brightness(intArg0, intArg1);
            break;
        case 4:
            detailLoginVol(scale(intArg2, int4, 255));
            cs2_2007(intArg0, intArg1, 1, 1);
            break;
        case 6:
            proc_zoom_set(intArg2, int4);
            loginscreen_zoom(intArg0, intArg1);
            break;
    }
}
