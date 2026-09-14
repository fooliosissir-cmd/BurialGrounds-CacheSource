/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3954

function cs2_3954(intArg0: number): number {
    let int1: number = cs2_5640(intArg0);

    if (int1 == 1) {
        createStepReached(12);
    } else {
        createStepReached(13);
    }
    return int1;
}
