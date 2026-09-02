/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_699

function cs2_699(intArg0: number, intArg1: component): void {
    let int2: number = 0;
    let int3: number = 0;

    if (ifFind(intArg1) == 1) {
        int2 = ccGetX();
        if (intArg0 < 5) {
            int2 = ccGetX();
            if (cs2_700(intArg0) == 0) {
                int3 = -57;
            } else if (cs2_700(intArg0) == 1) {
                int3 = -68;
            } else {
                int3 = -79;
            }
            ccSetPosition(int2, int3, 0, 1);
        } else {
            int3 = ccGetY();
            if (cs2_700(intArg0) == 0) {
                int2 = -42;
            } else if (cs2_700(intArg0) == 1) {
                int2 = -53;
            } else {
                int2 = -64;
            }
            ccSetPosition(int2, int3, 1, 0);
        }
    }
}
