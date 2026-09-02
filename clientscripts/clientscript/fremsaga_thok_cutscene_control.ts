/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,fremsaga_thok_cutscene_control]

function fremsaga_thok_cutscene_control(intArg0: number): void {
    switch (varc_fremsaga_thok_cutscene) {
        case 1:
            fremsaga_thok_cutscene_1(intArg0);
            break;
        default:
            camReset();
            break;
    }
}
