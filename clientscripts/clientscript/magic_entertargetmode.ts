/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,magic_entertargetmode]

function magic_entertargetmode(intArg0: component): void {
    ifSetOutline(2, intArg0);

    if ((ifGetTargetMask(intArg0) & 0x20) != 0) {
        cs2_71(4);
    }
}
