/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5915

function cs2_5915(intArg0: component, intArg1: number): void {
    let int2: number = intArg1 + 1;
    let int3: number = 14;
    let int4: number = ifGetX(intArg0) - 14;
    let int5: number = ifGetY(intArg0);

    ifSetPosition(int4, int5, 0, 0, intArg0);

    if (intArg1 == 10) {
        ifSetGraphic(cs2_6267(Graphic.graphic_9891), intArg0);
        ifSetSize(200, 60, 0, 0, intArg0);
    }

    if (int4 <= 0 - ifGetWidth(intArg0)) {
        ifSetOnTimer(noHook(""), intArg0);
    } else {
        ifSetOnTimer(hook(cs2_5915, "Ii", [event_com, int2]), intArg0);
    }
}
