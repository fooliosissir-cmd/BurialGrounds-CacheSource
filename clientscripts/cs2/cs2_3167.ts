/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3167

function cs2_3167(intArg0: component, intArg1: number, strArg0: string): void {
    let int2: component = Component.interface_912.component_912_48;

    if (ccFind(intArg0, intArg1) == 1) {
        ifSetHide(false, int2);
        ifSetPosition(ifGetX(int2), ccGetY(), 0, 0, int2);
        ccSetOnMouseRepeat(hook(cs2_3168, "Iiisii", [intArg0, intArg1, clientClock() + 25, strArg0, event_mousex, event_mousey]));
    }
}
