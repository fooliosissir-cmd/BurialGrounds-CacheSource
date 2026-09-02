/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5424

function cs2_5424(): void {
    ifSetHide(false, Component.dom_battle_overlay.easter_egg_notification_layer);
    ifSetOnTimer(hook(cs2_5425, "", []), Component.dom_battle_overlay.global_layer);
    varc_dom_easter_xpos = -60;
    ifSetPosition(varc_dom_easter_xpos, 0, 0, 1, Component.dom_battle_overlay.easter_egg_notification_layer);
}
