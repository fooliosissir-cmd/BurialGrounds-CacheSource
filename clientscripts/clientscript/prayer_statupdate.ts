/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,prayer_statupdate]

function prayer_statupdate(intArg0: number, intArg1: graphic, intArg2: graphic, intArg3: component, intArg4: number): void {
    if (ccFind(intArg3, intArg4) == 1) {
        if (statBase(5) < intArg0) {
            ccSetGraphic(intArg1);
        } else {
            ccSetGraphic(intArg2);
        }
    }
}
