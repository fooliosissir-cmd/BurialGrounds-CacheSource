/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2860

function cs2_2860(): void {
    if (varc_machinima_livecamera_targetmode == 0) {
        varc_machinima_livecamera_lookatheight = varc_machinima_livecamera_lookatheight + 25;
        if (varc_machinima_livecamera_lookatheight > varc_machinima_livecamera_height) {
            varc_machinima_livecamera_lookatheight = varc_machinima_livecamera_height;
        }
    } else if (varc_machinima_livecamera_targetmode == 1) {
        varc_machinima_livecamera_lookatpositioncoord = moveCoord(varc_machinima_livecamera_lookatpositioncoord, 0, 0, 1);
    } else {
        camIncX();
    }
}
