/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,loot_toggle_client_onvartransmit]

function loot_toggle_client_onvartransmit(intArg0: component): void {
    if (varbit_loot_waiting_on == 1 || varbit_loot_waiting_off == 1) {
        ifSetGraphic(Graphic.graphic_1071, intArg0);
    } else if (varbit_loot_share_on == 1) {
        if (varbit_loot_coinshare == 1) {
            ifSetGraphic(Graphic.graphic_306, intArg0);
        } else {
            ifSetGraphic(Graphic.graphic_1069, intArg0);
        }
    } else {
        ifSetGraphic(Graphic.graphic_1070, intArg0);
    }
}
