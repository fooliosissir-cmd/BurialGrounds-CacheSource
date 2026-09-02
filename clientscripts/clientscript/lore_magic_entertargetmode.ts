/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,lore_magic_entertargetmode]

function lore_magic_entertargetmode(intArg0: component): void {
    if (ccFind(intArg0, 0) == 1) {
        ccSetOutline(2);
        if ((ccGetTargetMask() & 0x20) != 0) {
            cs2_71(4);
        }
    }
}
