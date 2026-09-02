/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6304

function cs2_6304(): number {
    let int0: number = 0;
    let int1: number = 0;

    while (int0 < 10) {
        if (stringLength(cs2_6302(int0)) > 0) {
            int1 = int1 + 1;
        }
        int0 = int0 + 1;
    }
    return int1;
}
