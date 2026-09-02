/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4454

function cs2_4454(intArg0: component, intArg1: number): void {
    if (activeClanChannelFindListened() == 1) {
        ifSetOnTimer(noHook(""), Component.interface_1110.component_1110_53);
        cs2_4444(varc_1506);
    } else {
        ifSetGraphic(Graphic.aif_clanchat_icons_13, Component.interface_1110.component_1110_92);
        if (clientClock() - intArg1 > 200) {
            cs2_4445();
            ifSetOnTimer(hook(cs2_4454, "Ii", [intArg0, clientClock()]), Component.interface_1110.component_1110_53);
        }
    }
}
