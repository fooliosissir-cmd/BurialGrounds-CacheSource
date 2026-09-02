/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6361

function cs2_6361(intArg0: number): void {
    let int1: number = 0;
    let int2: number = 8 - 1;

    while (intArg0 < int2) {
        int1 = max(intArg0 + 1, int1);
        while (cs2_6352(cs2_6362(intArg0)) == 0) {
            cs2_6367(intArg0, int1);
            int1 = int1 + 1;
            if (int1 == 8) {
                return;
            }
        }
        intArg0 = intArg0 + 1;
    }
}
