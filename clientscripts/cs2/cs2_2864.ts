/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2864

function cs2_2864(): void {
    let int0: number = 0;

    if (varc_machinima_livecamera_targetmode == 0) {
        camLookat(cs2_2865(varc_machinima_livecamera_position, varc_machinima_livecamera_lookatposition), varc_machinima_livecamera_lookatheight, 0, 25);
        camMoveto(varc_machinima_livecamera_position, varc_machinima_livecamera_height, 0, 25);
        int0 = cs2_2867(varc_machinima_livecamera_position, cs2_2865(varc_machinima_livecamera_position, varc_machinima_livecamera_lookatposition));
    } else if (varc_machinima_livecamera_targetmode == 1) {
        camMoveto(varc_machinima_livecamera_position, varc_machinima_livecamera_height, 20, 3);
        camLookat(varc_machinima_livecamera_lookatpositioncoord, 50, 20, 3);
        int0 = cs2_2867(varc_machinima_livecamera_position, varc_machinima_livecamera_lookatpositioncoord);
    } else {
        camFollowcoord(varc_machinima_livecamera_position);
    }

    if (int0 == 0) {
        varc_1075 = 0;
    } else {
        varc_1075 = (int0 - 1) * 8191;
    }
}
