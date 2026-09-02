/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5372

function cs2_5372(intArg0: component, intArg1: number): void {
    let int2: number = 3;
    let int3: number = ifGetX(intArg0) + ifGetWidth(intArg0) / 2 - ifGetWidth(Component.agidad_overlay.numbers) / 2;

    if (int3 >= intArg1) {
        ifSetPosition(intArg1, ifGetY(intArg0), 1, 0, intArg0);
        ifSetOnTimer(noHook(""), intArg0);
    } else {
        ifSetPosition(int3 + int2, ifGetY(intArg0), 1, 0, intArg0);
    }
}
