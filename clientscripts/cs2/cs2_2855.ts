/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2855

function cs2_2855(): void {
    if (cs2_2869(moveCoord(varc_machinima_livecamera_position, 0, 0, -1)) == 1) {
        return;
    }

    if (machinima_distance(coord(), moveCoord(varc_machinima_livecamera_position, 0, 0, -1)) < 31) {
        varc_machinima_livecamera_position = moveCoord(varc_machinima_livecamera_position, 0, 0, -1);
    }
}
