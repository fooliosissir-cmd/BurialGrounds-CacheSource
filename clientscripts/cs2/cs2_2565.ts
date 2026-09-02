/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2565

function cs2_2565(): void {
    varc_846 = varbit_mob_current_total_offer;
    ifSetText(tostring(varbit_mob_current_total_offer), Component.interface_863.component_863_30);
    let int0: number = varc_839 - 100 * varc_846;
    ifSetText(tostring_spacer(int0, ","), Component.interface_863.component_863_14);
}
