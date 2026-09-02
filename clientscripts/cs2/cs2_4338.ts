/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4338

function cs2_4338(intArg0: number): string {
    let str0: string = "";

    if (intArg0 < 10) {
        str0 = appendNum("00:0", intArg0);
    } else if (intArg0 < 60) {
        str0 = appendNum("00:", intArg0);
    } else if (intArg0 < 959) {
        str0 = "0" + tostring(intArg0 / 100) + ":" + tostring(intArg0 % 100);
    } else {
        str0 = tostring(intArg0 / 100) + ":" + tostring(intArg0 % 100);
    }
    return str0;
}
