/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2863

function cs2_2863(): void {
    if (varc_machinima_livecamera_targetmode == 0) {
        if (varc_machinima_livecamera_lookatposition == 0) {
            varc_machinima_livecamera_lookatposition = 19;
        } else {
            varc_machinima_livecamera_lookatposition = varc_machinima_livecamera_lookatposition - 1;
        }
    } else if (varc_machinima_livecamera_targetmode == 1) {
        varc_machinima_livecamera_lookatpositioncoord = moveCoord(varc_machinima_livecamera_lookatpositioncoord, -1, 0, 0);
    } else {
        camDecY();
    }
}
