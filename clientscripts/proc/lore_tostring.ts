/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,lore_tostring]

function lore_tostring(intArg0: number): string {
    if (intArg0 >= 999999) {
        return "*";
    }

    if (intArg0 >= 10000) {
        return append(tostring(intArg0 / 1000), "K");
    }
    return tostring(intArg0);
}
