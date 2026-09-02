/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,makeover_headsetup]

function makeover_headsetup(intArg0: component, intArg1: npc): void {
    ifSetNpcHead(intArg1, intArg0);
    ifSetModelAnim(9806, intArg0);
}
