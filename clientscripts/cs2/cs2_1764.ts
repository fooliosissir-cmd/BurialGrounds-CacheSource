/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1764

function cs2_1764(intArg0: component, intArg1: component, intArg2: number, intArg3: number): void {
    let int4: number = ifGetWidth(intArg0) - ifGetWidth(intArg1);

    intArg2 = max(intArg2, 0);
    intArg2 = min(intArg2, int4);

    switch (intArg3) {
        case 0:
            detailMusicVol(scale(intArg2, int4, 255));
            cs2_1159();
            break;
        case 1:
            detailSoundVol(scale(intArg2, int4, 127));
            cs2_1165();
            break;
        case 2:
            detailBgsoundvol(scale(intArg2, int4, 127));
            cs2_1162();
            break;
        case 3:
            detailSpeechvol(scale(intArg2, int4, 127));
            cs2_5873();
            break;
    }
}
