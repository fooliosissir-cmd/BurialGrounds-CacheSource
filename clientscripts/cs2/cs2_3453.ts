/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3453

function cs2_3453(): void {
    if (varc_machinima_livecamera_plannedmove_savedstates == 8) {
        return;
    }

    if (varc_machinima_livecamera_targetmode == 0) {
        cs2_3454(varc_machinima_livecamera_plannedmove_savedstates + 1, varc_machinima_livecamera_position, varc_machinima_livecamera_height, cs2_2865(varc_machinima_livecamera_position, varc_machinima_livecamera_lookatposition), varc_machinima_livecamera_lookatheight);
    } else if (varc_machinima_livecamera_targetmode == 1) {
        cs2_3454(varc_machinima_livecamera_plannedmove_savedstates + 1, varc_machinima_livecamera_position, varc_machinima_livecamera_height, varc_machinima_livecamera_lookatpositioncoord, 50);
    } else {
        return;
    }
    varc_machinima_livecamera_plannedmove_savedstates = varc_machinima_livecamera_plannedmove_savedstates + 1;
    ifSetText(tostring(varc_machinima_livecamera_plannedmove_savedstates), Component.interface_475.component_475_78);
}
