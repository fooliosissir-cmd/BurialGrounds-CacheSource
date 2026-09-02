/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,pog_hatch_zoom]

function pog_hatch_zoom(): void {
    if (varc_pog_hatch_zoom_var > 170) {
        varc_pog_hatch_zoom_var = varc_pog_hatch_zoom_var - 1;
        ifSetModelAngle(0, 0, 0, 0, 0, varc_pog_hatch_zoom_var, Component.pog_door_hatch.hatch);
    } else {
        ifSetModel(-1, Component.pog_door_hatch.hatch);
    }
}
