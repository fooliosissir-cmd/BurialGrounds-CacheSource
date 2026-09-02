/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5921

function cs2_5921(): void {
    let int0: component = Component.interface_1253.component_1253_28;
    let int1: component = Component.interface_1253.component_1253_48;

    ifSetPosition(118, -16, 1, 1, int1);
    ifSetHide(true, int0);
    ifSetHide(false, int1);
    ifSetOnTimer(hook(cs2_5922, "Ii", [event_com, 118]), int1);
    varc_1784 = 0;
    soundVorbisRate(9882, 1, 0, 100, 127);
}
