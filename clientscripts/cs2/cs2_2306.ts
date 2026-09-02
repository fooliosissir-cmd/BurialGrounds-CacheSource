/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2306

function cs2_2306(): void {
    let int0: number = 31;
    let int1: number = 0;
    let int2: number = 31;
    let int3: number = 3;
    let int4: number = 26;

    if (runenergyVisible() >= 100) {
        int1 = 0;
    } else {
        int1 = int3 + (int4 - scale(runenergyVisible(), 100, int4));
    }
    ifSetSize(int2, int1, 0, 0, Component.interface_750.component_750_1);
}
