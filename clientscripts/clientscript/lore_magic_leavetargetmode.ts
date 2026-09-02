/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,lore_magic_leavetargetmode]

function lore_magic_leavetargetmode(intArg0: component): void {
    if (ccFind(intArg0, 0) == 1) {
        ccSetOutline(0);
    }
}
