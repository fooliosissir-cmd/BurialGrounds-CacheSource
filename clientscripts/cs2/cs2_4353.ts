/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4353

function cs2_4353(intArg0: component): void {
    if (varbit_clan_event_vexillum_varp == varp_clan_event_current_varp) {
        ifSetGraphic(Graphic.aif_checkbox_small_0, intArg0);
    } else {
        ifSetGraphic(Graphic.aif_checkbox_small_4, intArg0);
    }
}
