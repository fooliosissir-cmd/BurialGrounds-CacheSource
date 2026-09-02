/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,lore_tostring_pouch]

function lore_tostring_pouch(intArg0: number): string {
    if (intArg0 >= 1000) {
        return "*";
    }
    return tostring(intArg0);
}
