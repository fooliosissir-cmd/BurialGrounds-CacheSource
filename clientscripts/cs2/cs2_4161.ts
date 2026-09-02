/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4161

function cs2_4161(intArg0: component, intArg1: number): void {
    let int2: number = 0;

    while (int2 < ifGetNextSubId(intArg0)) {
        if (ccFind(intArg0, int2) == 1) {
            ccSetTrans(intArg1);
        }
        int2 = int2 + 1;
    }
}
