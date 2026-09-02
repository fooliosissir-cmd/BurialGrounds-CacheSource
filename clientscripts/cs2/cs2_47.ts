/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_47

function cs2_47(intArg0: number): string {
    if (intArg0 > 99) {
        return tostring(intArg0);
    }

    if (intArg0 > 9) {
        return "0" + tostring(intArg0);
    }

    if (intArg0 >= 0) {
        return "00" + tostring(intArg0);
    }
    return tostring(intArg0);
}
