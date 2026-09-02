/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4430

function cs2_4430(intArg0: component, intArg1: component): void {
    ifSetGraphic(Graphic.aif_clanchat_icons_2, intArg1);
    ifSetOnOp(noHook(""), intArg0);
    ifSetHide(true, Component.interface_1110.component_1110_86);
}
