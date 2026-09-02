/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4731

function cs2_4731(intArg0: number, intArg1: number): void {
    let [int2, int3, int4] = getMousebuttons();
    let int5: number = camGetAngleYa() + (varc_1653 - intArg0) * 2;
    let int6: number = camGetAngleXa() - (varc_1654 - intArg1);

    if (int3 == 1 && varc_173 != 1 && (varbit_cutscene_status != 1 || (varbit_cutscene_status == 1 && varbit_10196 == 1)) && camModeisfollowplayer() == 1) {
        camForceAngle(int6, int5);
    }
    varc_1653 = intArg0;
    varc_1654 = intArg1;
}
