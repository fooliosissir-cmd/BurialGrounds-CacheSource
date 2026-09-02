/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1197

function cs2_1197(intArg0: number): void {
    if (intArg0 >= 6) {
        return;
    } else if (intArg0 == 0) {
        camMovealong(0, intArg0, 100, 400, 1, intArg0);
        ifSetOnCamFinished(hook(cs2_1196, "ii", [intArg0 + 1, clientClock()]), Component.interface_888.component_888_0);
    } else if (intArg0 == 5) {
        camMovealong(0, intArg0, 400, 10, 1, intArg0);
        ifSetOnCamFinished(hook(cs2_1196, "ii", [intArg0 + 1, clientClock()]), Component.interface_888.component_888_0);
    } else {
        camMovealong(0, intArg0, 400, 400, 1, intArg0);
        ifSetOnCamFinished(hook(cs2_1196, "ii", [intArg0 + 1, clientClock()]), Component.interface_888.component_888_0);
    }
}
