/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_305

function cs2_305(intArg0: number): void {
    if (intArg0 == 1) {
        ifSetColour(colour(0xFF981F), Component.interface_755.component_755_14);
    } else {
        ifSetColour(colour(0xFF0000), Component.interface_755.component_755_14);
    }
    ifSetOnTimer(hook(cs2_306, "iI", [clientClock(), event_com]), Component.interface_755.component_755_14);
}
