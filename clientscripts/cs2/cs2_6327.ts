/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6327

function cs2_6327(intArg0: component): void {
    ifSetTrans(max(ifGetTrans(intArg0) - 20, 0), intArg0);
    ifSetOnTimer(hook(cs2_6328, "Ii", [event_com, clientClock() + 2]), intArg0);
}
