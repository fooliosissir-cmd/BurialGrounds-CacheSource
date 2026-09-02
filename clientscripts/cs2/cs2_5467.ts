/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5467

function cs2_5467(): void {
    varc_dom_battle_topinfo_pos = varc_dom_battle_topinfo_pos + 1;
    varc_dom_battle_bottominfo_pos = varc_dom_battle_bottominfo_pos + 1;

    if (varc_dom_battle_topinfo_pos < 17) {
        ifSetPosition(0, varc_dom_battle_topinfo_pos, 1, 0, Component.dom_battle_overlay.health_bars_layer);
    } else {
        ifSetPosition(0, 17, 1, 0, Component.dom_battle_overlay.health_bars_layer);
    }

    if (varc_dom_battle_bottominfo_pos < 3) {
        ifSetPosition(3, varc_dom_battle_bottominfo_pos, 2, 2, Component.dom_battle_overlay.stats_layer);
    } else {
        ifSetPosition(3, 3, 2, 2, Component.dom_battle_overlay.stats_layer);
        ifSetOnTimer(noHook(""), Component.dom_battle_overlay.global_layer);
    }
}
