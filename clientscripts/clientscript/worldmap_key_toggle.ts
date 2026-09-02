/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,worldmap_key_toggle]

function worldmap_key_toggle(intArg0: number, intArg1: component, intArg2: number, intArg3: number, intArg4: number, intArg5: boolean, strArg0: string): void {
    if (intArg0 != 1) {
        return;
    }

    if (ccFind(intArg1, intArg2) == 1) {
        ccSetOp(1, strArg0);
    }

    if (ccFind(intArg1, intArg3) == 1) {
        ccSetOp(1, strArg0);
    }

    if (ccFind(intArg1, intArg4) == 1) {
        if (intArg5 == true) {
            ccSetHide(false);
        } else {
            ccSetHide(true);
        }
    }

    if (intArg2 == 11) {
        worldMapDisableelementcategory(950, intArg5);
    }
    soundSynth(Sound.sound_2266, 1, 0);
}
