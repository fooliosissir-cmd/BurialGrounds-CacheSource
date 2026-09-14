/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,clan_invite_button]

function clan_invite_button(intArg0: component, intArg1: component): void {
    ifSetHide(false, Component.interface_1110.component_1110_86);
    ifSetGraphic(Graphic.aif_clanchat_icons_4, intArg1);
    ifSetOnTargetLeave(hook(cs2_4430, "II", [intArg0, intArg1]), intArg0);
}
