/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,magic_tostring]

function magic_tostring(intArg0: number): string {
    if (intArg0 >= 99999999) {
        return "*";
    }

    if (intArg0 >= 10000000) {
        return append(tostring(intArg0 / 1000000), "M");
    }

    if (intArg0 >= 10000) {
        return append(tostring(intArg0 / 1000), "K");
    }
    return tostring(intArg0);
}
