/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5425

function cs2_5425(): void {
    varc_dom_easter_xpos = varc_dom_easter_xpos + 2;

    if (varc_dom_easter_xpos <= 40) {
        ifSetPosition(varc_dom_easter_xpos, 0, 0, 1, Component.dom_battle_overlay.easter_egg_notification_layer);
    } else {
        ifSetOnTimer(hook(cs2_5426, "", []), Component.dom_battle_overlay.global_layer);
    }
}
