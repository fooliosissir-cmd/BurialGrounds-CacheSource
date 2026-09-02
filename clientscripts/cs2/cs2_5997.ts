/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5997

function cs2_5997(intArg0: component, intArg1: number): void {
    ccDeleteAll(intArg0);
    let int2: number = ifGetWidth(intArg0);
    let int3: number = 0;
    let int4: number = 0;
    let int5: number = 0;

    while (int3 < int2) {
        ccCreate(intArg0, 3, int3);
        ccSetSize(1, 0, 0, 1);
        ccSetColour(colour(0x000000));
        ccSetfill(true);
        if (intArg1 == 1) {
            int5 = 0;
        } else {
            int5 = 2;
        }
        ccSetPosition(int3, 0, int5, 1);
        int4 = scale(int3, int2, 255);
        ccSetTrans(int4);
        int3 = int3 + 1;
    }
}
