/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_944

function cs2_944(intArg0: component): void {
    let int1: number = 0;

    if (varp_2521 > 0) {
        int1 = varp_2521 / 200 * 10;
    }
    ifSetText(tostring(varp_2521), intArg0);
    proc_aif_progressbar_set(int1, Component.tzhaar2_healthoverlay.gaal1_large_progress_value_layer, Component.tzhaar2_healthoverlay.gaal1_large_progress_text);
}
