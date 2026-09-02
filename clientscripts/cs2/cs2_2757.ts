/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2757

function cs2_2757(intArg0: number): void {
    if (varc_173 == 1 || varbit_cutscene_status == 1 || intArg0 != 1) {
        return;
    }

    if (camGetAngleXa() < 150) {
        camForceAngle(150, 0);
    } else {
        camForceAngle(149, 0);
    }
}
