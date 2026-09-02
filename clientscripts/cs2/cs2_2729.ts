/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2729

function cs2_2729(intArg0: component, intArg1: component, intArg2: component, intArg3: number): void {
    let int4: number = getWindowMode();

    if (int4 != 1) {
        if (intArg3 != 1) {
            return;
        }
    } else if (intArg3 == 1) {
        return;
    }
    cs2_2730(intArg1, intArg2, int4);
    ifSetOnTimer(hook(cs2_2729, "IIIi", [event_com, intArg1, intArg2, int4]), intArg0);
}
