/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1868

function cs2_1868(intArg0: component): void {
    if (clientClock() % 50 == 0 && reboottimer() > 0) {
        ifSetPosition(0, -8, 1, 1, Component.interface_906.component_906_32);
        cs2_1870(Component.interface_906.component_906_49);
        ifSetOnTimer(hook(cs2_1869, "I", [Component.interface_906.component_906_49]), intArg0);
    }
}
