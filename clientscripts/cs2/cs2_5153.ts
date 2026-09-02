/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5153

function cs2_5153(intArg0: number): void {
    if (intArg0 == 1) {
        ifSetGraphic(Graphic.aif_button_group_1_1, Component.clan_kickout_overlay.clan_kickout_hover);
    } else {
        ifSetGraphic(Graphic.aif_button_group_1_0, Component.clan_kickout_overlay.clan_kickout_hover);
        deltooltip_action(Component.clan_kickout_overlay.tooltip_layer);
    }
}
