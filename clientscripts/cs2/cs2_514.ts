/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_514

function cs2_514(): void {
    let int0: number = 0;
    let int1: number = 0;

    if (getWindowMode() >= 2) {
        int0 = ifGetWidth(Component.interface_746.component_746_11);
        int1 = ifGetHeight(Component.interface_746.component_746_11);
        if (varc_pog_hatch_zoom_var < int0) {
            varc_pog_hatch_zoom_var = varc_pog_hatch_zoom_var + 15;
            ifSetSize(varc_pog_hatch_zoom_var, int1, 0, 0, Component.pog_door_hatch_close.shutter);
        }
    } else if (varc_pog_hatch_zoom_var < 512) {
        varc_pog_hatch_zoom_var = varc_pog_hatch_zoom_var + 15;
        ifSetSize(varc_pog_hatch_zoom_var, 334, 0, 0, Component.pog_door_hatch_close.shutter);
    }
}
