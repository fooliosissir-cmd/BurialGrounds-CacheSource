/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4789

function cs2_4789(intArg0: number): number {
    let int1: number = 4;
    let int2: number = 0;
    let int3: number = 0;

    while (int1 <= 15) {
        int2 = cs2_4949(int1);
        if (int2 == intArg0) {
            return cs2_4959(int1);
        }
        int1 = int1 + 1;
    }
    return 0;
}
