/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,clan_time_tostring]

function clan_time_tostring(intArg0: number, intArg1: number, intArg2: number): [string, string] {
    let str0: string = tostring(intArg1);
    let str1: string = tostring(intArg2);
    let str2: string = "";
    let int3: number = 60 * intArg1 + intArg0 + intArg2;

    if (int3 < 0) {
        int3 = 1440 + int3;
    }
    intArg2 = int3 % 60;
    intArg1 = int3 / 60;

    if (intArg1 > 23) {
        intArg1 = intArg1 - 24;
    } else if (intArg1 < 0) {
        intArg1 = 24 - intArg1;
    }

    if (intArg1 < 10) {
        str0 = "0" + tostring(intArg1);
    } else {
        str0 = tostring(intArg1);
    }

    if (intArg2 < 10) {
        str1 = "0" + tostring(intArg2);
    } else {
        str1 = tostring(intArg2);
    }
    return [str0, str1];
}
