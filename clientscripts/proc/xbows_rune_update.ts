/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,xbows_rune_update]

function proc_xbows_rune_update(intArg0: component, intArg1: obj, intArg2: number): void {
    if (magic_runecount(intArg1, -1) >= intArg2) {
        ifSetColour(colour(0x00CC00), intArg0);
        ifSetText(tostring(intArg2) + "/" + tostring(intArg2), intArg0);
    } else {
        ifSetColour(colour(0xC00000), intArg0);
        ifSetText(magic_tostring(magic_runecount(intArg1, -1)) + "/" + tostring(intArg2), intArg0);
    }
}
