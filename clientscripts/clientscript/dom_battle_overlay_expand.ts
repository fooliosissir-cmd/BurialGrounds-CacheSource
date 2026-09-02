/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,dom_battle_overlay_expand]

function dom_battle_overlay_expand(): void {
    if (varc_dom_battle_infobox_state == 0) {
        varc_dom_battle_infobox_state = 1;
        ifSetHide(true, Component.dom_battle_overlay.handicap_icons_layer);
        ifSetSize(ifGetWidth(Component.dom_battle_overlay.stats_layer), 37, 0, 0, Component.dom_battle_overlay.stats_layer);
        ifSet2dangle(16384, Component.dom_battle_overlay.expand_graphic);
    } else {
        varc_dom_battle_infobox_state = 0;
        ifSetHide(false, Component.dom_battle_overlay.handicap_icons_layer);
        ifSet2dangle(49152, Component.dom_battle_overlay.expand_graphic);
        cs2_5464();
    }
}
