/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_807

function cs2_807(intArg0: stat): number {
    let int1: number = 0;

    if (statBase(intArg0) > 0) {
        if (intArg0 == 5) {
            int1 = 100 * varbit_prayer_points / cs2_5255();
        } else {
            int1 = 100 * stat(intArg0) / statBase(intArg0);
        }
    }
    return int1;
}
