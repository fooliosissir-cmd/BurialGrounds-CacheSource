/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5466

function cs2_5466(): void {
    let int0: number = ifGetWidth(Component.dom_battle_overlay.boss_health_layer);
    let int1: number = int0 - 33;

    int1 = scale(int1, 100, varc_dom_battle_boss_health_width);
    ifSetSize(int1, ifGetHeight(Component.dom_battle_overlay.boss_healthbar), 0, 0, Component.dom_battle_overlay.boss_healthbar);
}
