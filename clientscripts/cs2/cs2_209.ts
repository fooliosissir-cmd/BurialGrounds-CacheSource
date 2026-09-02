/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_209

function cs2_209(): void {
    if (varbit_pvpwild_bh_potential < 8) {
        ifSetGraphic(Graphic.bounty_hunter_timer_icon_0, Component.interface_591.component_591_10);
    } else if (varbit_pvpwild_bh_potential < 15) {
        ifSetGraphic(Graphic.bounty_hunter_timer_icon_1, Component.interface_591.component_591_10);
    } else if (varbit_pvpwild_bh_potential < 23) {
        ifSetGraphic(Graphic.bounty_hunter_timer_icon_2, Component.interface_591.component_591_10);
    } else if (varbit_pvpwild_bh_potential < 30) {
        ifSetGraphic(Graphic.bounty_hunter_timer_icon_3, Component.interface_591.component_591_10);
    } else if (varbit_pvpwild_bh_potential < 38) {
        ifSetGraphic(Graphic.bounty_hunter_timer_icon_4, Component.interface_591.component_591_10);
    } else if (varbit_pvpwild_bh_potential < 45) {
        ifSetGraphic(Graphic.bounty_hunter_timer_icon_5, Component.interface_591.component_591_10);
    } else if (varbit_pvpwild_bh_potential < 53) {
        ifSetGraphic(Graphic.bounty_hunter_timer_icon_6, Component.interface_591.component_591_10);
    } else if (varbit_pvpwild_bh_potential < 60) {
        ifSetGraphic(Graphic.bounty_hunter_timer_icon_7, Component.interface_591.component_591_10);
    } else {
        ifSetGraphic(Graphic.bounty_hunter_timer_icon_8, Component.interface_591.component_591_10);
    }
}
