/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,clan_offset_tostring]

function clan_offset_tostring(intArg0: number): string {
    let str0: string = "+";

    if (intArg0 < 0) {
        str0 = "-";
        intArg0 = 0 - intArg0;
    }
    let int1: number = intArg0 / 60;
    let int2: number = intArg0 % 60;
    let str1: string = tostring(int1);

    if (int1 < 10) {
        str1 = "0" + tostring(int1);
    }
    let str2: string = tostring(int2);

    if (int2 < 10) {
        str2 = "0" + tostring(int2);
    }
    return str0 + str1 + ":" + str2;
}
