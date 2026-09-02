/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3457

function cs2_3457(intArg0: component, intArg1: number): void {
    let int2: number = clientClock() - intArg1;

    if (int2 < 100 && varc_machinima_livecamera_plannedmove_savedstates > 0) {
        camLookat(varc_machinima_livecamera_lookatpositioncoord1, varc_machinima_livecamera_lookatheight1, 3000, varc_machinima_livecamera_plannedmove_cameraspeed);
        camMoveto(varc_machinima_livecamera_position1, varc_machinima_livecamera_height1, 3000, varc_machinima_livecamera_plannedmove_cameraspeed);
        return;
    } else if (int2 < 200 && varc_machinima_livecamera_plannedmove_savedstates > 1) {
        camLookat(varc_machinima_livecamera_lookatpositioncoord2, varc_machinima_livecamera_lookatheight2, 0, varc_machinima_livecamera_plannedmove_cameraspeed);
        camMoveto(varc_machinima_livecamera_position2, varc_machinima_livecamera_height2, 0, varc_machinima_livecamera_plannedmove_cameraspeed);
        return;
    } else if (int2 < 300 && varc_machinima_livecamera_plannedmove_savedstates > 2) {
        camLookat(varc_machinima_livecamera_lookatpositioncoord3, varc_machinima_livecamera_lookatheight3, 0, varc_machinima_livecamera_plannedmove_cameraspeed);
        camMoveto(varc_machinima_livecamera_position3, varc_machinima_livecamera_height3, 0, varc_machinima_livecamera_plannedmove_cameraspeed);
        return;
    } else if (int2 < 400 && varc_machinima_livecamera_plannedmove_savedstates > 3) {
        camLookat(varc_machinima_livecamera_lookatpositioncoord4, varc_machinima_livecamera_lookatheight4, 0, varc_machinima_livecamera_plannedmove_cameraspeed);
        camMoveto(varc_machinima_livecamera_position4, varc_machinima_livecamera_height4, 0, varc_machinima_livecamera_plannedmove_cameraspeed);
        return;
    } else if (int2 < 500 && varc_machinima_livecamera_plannedmove_savedstates > 4) {
        camLookat(varc_machinima_livecamera_lookatpositioncoord5, varc_machinima_livecamera_lookatheight5, 0, varc_machinima_livecamera_plannedmove_cameraspeed);
        camMoveto(varc_machinima_livecamera_position5, varc_machinima_livecamera_height5, 0, varc_machinima_livecamera_plannedmove_cameraspeed);
        return;
    } else if (int2 < 600 && varc_machinima_livecamera_plannedmove_savedstates > 5) {
        camLookat(varc_machinima_livecamera_lookatpositioncoord6, varc_machinima_livecamera_lookatheight6, 0, varc_machinima_livecamera_plannedmove_cameraspeed);
        camMoveto(varc_machinima_livecamera_position6, varc_machinima_livecamera_height6, 0, varc_machinima_livecamera_plannedmove_cameraspeed);
        return;
    } else if (int2 < 700 && varc_machinima_livecamera_plannedmove_savedstates > 6) {
        camLookat(varc_machinima_livecamera_lookatpositioncoord7, varc_machinima_livecamera_lookatheight7, 0, varc_machinima_livecamera_plannedmove_cameraspeed);
        camMoveto(varc_machinima_livecamera_position7, varc_machinima_livecamera_height7, 0, varc_machinima_livecamera_plannedmove_cameraspeed);
        return;
    } else if (int2 < 800 && varc_machinima_livecamera_plannedmove_savedstates > 7) {
        camLookat(varc_machinima_livecamera_lookatpositioncoord8, varc_machinima_livecamera_lookatheight8, 0, varc_machinima_livecamera_plannedmove_cameraspeed);
        camMoveto(varc_machinima_livecamera_position8, varc_machinima_livecamera_height8, 0, varc_machinima_livecamera_plannedmove_cameraspeed);
        return;
    }
    ifSetOnTimer(noHook(""), intArg0);
}
