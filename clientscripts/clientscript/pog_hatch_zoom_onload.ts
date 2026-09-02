/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,pog_hatch_zoom_onload]

function pog_hatch_zoom_onload(): void {
    varc_pog_hatch_zoom_var = ifGetModelZoom(Component.pog_door_hatch.hatch);
}
