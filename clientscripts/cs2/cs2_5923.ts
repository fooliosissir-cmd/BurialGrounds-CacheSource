/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5923

function cs2_5923(): void {
    let int0: component = Component.interface_1253.component_1253_47;
    let int1: number = ifGetWidth(int0);

    ifSetSize(int1, 1, 0, 0, int0);
    ifSetOnTimer(hook(cs2_5924, "I", [event_com]), int0);
}
