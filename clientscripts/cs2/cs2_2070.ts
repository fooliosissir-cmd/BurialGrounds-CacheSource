/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2070

function cs2_2070(intArg0: number, intArg1: number, intArg2: component, intArg3: component, intArg4: component): void {
    if (intArg0 != 1) {
        return;
    }

    if (intArg1 >= varc_sidebook_pagecount || intArg1 < 0) {
        return;
    }
    varc_sidebook_currentpage = intArg1;
    soundVorbisVolume(3550, 1, 0, 100);
    proc_sidebook_build(intArg2, intArg3, intArg4);
}
