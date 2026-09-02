/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,carni_treasurechest_init]

function carni_treasurechest_init(intArg0: component): void {
    ccCreate(Component.interface_1304.component_1304_5, 5, 0);
    ccSetSize(36, 32, 0, 0);
    ccSetPosition(0, 0, 1, 1);
    ccSetOutline(1);
    ccSetGraphicShadow(3153952);
    ccSetOnInvTransmit(hook(cs2_6322, "IiY", [event_com, event_comsubid], [662]));
    cs2_6323();
    ifSetOnVarcTransmit(hook(cs2_6324, "Y", [], [1935, 1936]), intArg0);
    cs2_6325();
    cs2_6326(0, Component.interface_1304.component_1304_22, Component.interface_1304.component_1304_23);
    ifSetOnVarTransmit(hook(cs2_6330, "Y", [], [2646]), intArg0);
    cs2_6331();
}
