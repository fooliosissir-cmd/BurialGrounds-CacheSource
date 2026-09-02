/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5464

function cs2_5464(): void {
    if (varc_dom_battle_current_z >= 48) {
        ifSetSize(ifGetWidth(Component.dom_battle_overlay.stats_layer), 105, 0, 0, Component.dom_battle_overlay.stats_layer);
        ifSetSize(ifGetWidth(Component.dom_battle_overlay.handicap_icons_layer), 72, 0, 0, Component.dom_battle_overlay.handicap_icons_layer);
    } else if (varc_dom_battle_current_z >= 24) {
        ifSetSize(ifGetWidth(Component.dom_battle_overlay.stats_layer), 79, 0, 0, Component.dom_battle_overlay.stats_layer);
        ifSetSize(ifGetWidth(Component.dom_battle_overlay.handicap_icons_layer), 48, 0, 0, Component.dom_battle_overlay.handicap_icons_layer);
    } else if (varc_dom_battle_current_x > 0) {
        ifSetSize(ifGetWidth(Component.dom_battle_overlay.stats_layer), 55, 0, 0, Component.dom_battle_overlay.stats_layer);
        ifSetSize(ifGetWidth(Component.dom_battle_overlay.handicap_icons_layer), 24, 0, 0, Component.dom_battle_overlay.handicap_icons_layer);
    } else {
        ifSetSize(ifGetWidth(Component.dom_battle_overlay.stats_layer), 37, 0, 0, Component.dom_battle_overlay.stats_layer);
        ifSetSize(ifGetWidth(Component.dom_battle_overlay.handicap_icons_layer), 1, 0, 0, Component.dom_battle_overlay.handicap_icons_layer);
    }
}
