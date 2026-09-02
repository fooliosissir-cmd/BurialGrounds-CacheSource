/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5043

function cs2_5043(intArg0: component, intArg1: component, intArg2: number): void {
    varc_hw10_cutscene = max(min(3 + scale(intArg2 + ifGetWidth(intArg1) / 2, ifGetWidth(ifGetLayer(intArg1)), 21 - 3 + 1), 21), 3);
    proc_clan_field_editor_zoom(intArg0, 0, 0);
}
