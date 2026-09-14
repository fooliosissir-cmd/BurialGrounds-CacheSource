/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3083

function cs2_3083(intArg0: component, intArg1: number, strArg0: string): void {
    if (intArg1 < 0) {
        ifSetOnMouseRepeat(hook(cs2_3084, "Iiisii", [intArg0, intArg1, clientClock() + 25, strArg0, event_mousex, event_mousey]), intArg0);
    } else if (ccFind(intArg0, intArg1) == 1) {
        ccSetOnMouseRepeat(hook(cs2_3084, "Iiisii", [intArg0, intArg1, clientClock() + 25, strArg0, event_mousex, event_mousey]));
    }
}
