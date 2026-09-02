/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2201

function cs2_2201(): void {
    if (varp_easter10_conveyoritemsent == 1) {
        cs2_2200();
    } else {
        cs2_2199();
    }
    cs2_2209();
    ifSetHide(false, varc_easter10_currentmodel);
    ifSetOnTimer(hook(cs2_2210, "", []), Component.easter10_nuts.content);
}
