/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2118

function cs2_2118(intArg0: number, intArg1: component): void {
    let int2: number = 0;

    while (int2 < 7) {
        ccCreate(intArg1, 3, intArg0 * 7 + int2);
        ccSetSize(0, 0, 0, 0);
        ccSetPosition(-1, -1, 0, 0);
        ccSetHide(true);
        int2 = int2 + 1;
    }
}
