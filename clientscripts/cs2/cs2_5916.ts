/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5916

function cs2_5916(): void {
    let int0: component = Component.interface_1253.component_1253_78;

    ifSetSize(18, ifGetHeight(int0), 0, 0, int0);
    ifSetOnTimer(hook(cs2_5918, "Ii", [event_com, 0]), int0);
}
