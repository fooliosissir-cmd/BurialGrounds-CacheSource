/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2327

function cs2_2327(intArg0: number): void {
    if (clientClock() >= 100 + intArg0) {
        ifSetOnTimer(noHook(""), Component.interface_306.component_306_25);
        ifSetHide(true, Component.interface_306.component_306_25);
    }
}
