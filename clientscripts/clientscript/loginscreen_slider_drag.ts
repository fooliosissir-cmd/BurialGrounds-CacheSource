/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,loginscreen_slider_drag]

function loginscreen_slider_drag(intArg0: component, intArg1: component, intArg2: number, intArg3: number): void {
    let int4: number = max(ifGetWidth(intArg0) - ifGetWidth(intArg1), 1);

    intArg2 = min(max(intArg2, 0), int4);

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
