/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5919

function cs2_5919(): void {
    let int0: component = Component.interface_1253.component_1253_28;

    ifSetPosition(-35, -16, 1, 1, int0);
    ifSetHide(false, Component.interface_1253.component_1253_28);
    ifSetHide(true, Component.interface_1253.component_1253_48);
    ifSetOnTimer(hook(cs2_5920, "Ii", [event_com, -35]), int0);
    soundVorbisVolume(14234, 1, 0, 100);
}
