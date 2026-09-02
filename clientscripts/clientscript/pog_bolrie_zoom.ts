/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,pog_bolrie_zoom]

function pog_bolrie_zoom(): void {
    if (varc_pog_count < 300) {
        varc_pog_count = varc_pog_count + 1;
    }

    if (varc_pog_hatch_zoom_var > 0 && varc_pog_count % 3 == 0) {
        varc_pog_hatch_zoom_var = varc_pog_hatch_zoom_var - 3;
        varc_pog_hatch_fade_var = varc_pog_hatch_fade_var + 1;
        ifSetModelAngle(0, varc_pog_hatch_fade_var, 0, 0, 0, varc_pog_hatch_zoom_var, Component.interface_615.component_615_0);
    }
}
