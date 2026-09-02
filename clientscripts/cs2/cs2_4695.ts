/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4695

function cs2_4695(intArg0: number, intArg1: number): void {
    let int2: number = clientClock();

    if (int2 >= intArg0 + 15 || intArg0 == 0) {
        ifSetTrans(intArg1, Component.interface_500.component_500_11);
        intArg0 = int2;
        if (varc_1548 == 0) {
            intArg1 = 255;
        } else if (intArg1 == 255) {
            intArg1 = 0;
        } else {
            intArg1 = 255;
        }
    }
    ifSetOnTimer(hook(cs2_4695, "ii", [intArg0, intArg1]), Component.interface_500.component_500_11);
}
