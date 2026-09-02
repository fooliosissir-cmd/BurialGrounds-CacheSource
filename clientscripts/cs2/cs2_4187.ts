/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4187

function cs2_4187(intArg0: number): void {
    if (clientClock() < intArg0) {
        return;
    }
    ifSetOnTimer(noHook(""), Component.interface_1072.component_1072_83);
    ifSetHide(true, Component.interface_1072.component_1072_83);
}
