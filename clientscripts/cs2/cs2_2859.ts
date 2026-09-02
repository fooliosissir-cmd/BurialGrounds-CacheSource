/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2859

function cs2_2859(): void {
    if (varc_machinima_livecamera_height >= 100) {
        varc_machinima_livecamera_height = varc_machinima_livecamera_height - 50;
    }

    if (varc_machinima_livecamera_lookatheight > varc_machinima_livecamera_height) {
        varc_machinima_livecamera_lookatheight = varc_machinima_livecamera_height;
    }
}
