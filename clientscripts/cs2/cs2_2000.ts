/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2000

function cs2_2000(intArg0: number, intArg1: number, intArg2: number): void {
    let int3: number = invTotalcat(intArg0, intArg1);

    if (int3 == intArg2) {
        mesTyped(0, 0, "Passed inventory test");
    } else {
        mesTyped(0, 0, "Failed inventory test");
    }
}
