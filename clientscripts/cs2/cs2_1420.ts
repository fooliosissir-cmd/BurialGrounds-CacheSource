/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1420

function cs2_1420(): number {
    if (varc_173 != 1 && (varbit_cutscene_status != 1 || (varbit_cutscene_status == 1 && varbit_10196 == 1)) && camModeisfollowplayer() == 1) {
        return 1;
    } else {
        return 0;
    }
}
