/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3228

function cs2_3228(intArg0: number, intArg1: number, intArg2: number): number {
    let int3: number = cs2_5639(intArg0, intArg1, intArg2);

    if (int3 == 1) {
        switch (intArg0) {
            case 7:
                createStepReached(8);
                break;
            case 8:
                createStepReached(10);
                break;
        }
    } else {
        switch (intArg0) {
            case 7:
                createStepReached(9);
                break;
            case 8:
                createStepReached(11);
                break;
        }
    }
    return int3;
}
