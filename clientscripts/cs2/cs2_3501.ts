/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3501

function cs2_3501(intArg0: component): void {
    let int1: number = 0;
    let int2: number = 0;
    let int3: number = 0;

    while (int1 < invSize(207)) {
        ccCreate(intArg0, 6, int1);
        ccSetSize(49, 49, 0, 0);
        ccSetPosition(56 * int2, 56 * int3, 0, 0);
        if (invGetobj(207, int1) != -1) {
            ccSetObject(invGetobj(207, int1), invGetNum(207, int1));
            ccSetModelAngle(0, 0, 512, 0, 0, 1340);
            ccSetmodelorthog(true);
        } else {
            ccSetHide(true);
        }
        int1 = int1 + 1;
        int2 = int1 % 5;
        int3 = int1 / 5;
    }
}
