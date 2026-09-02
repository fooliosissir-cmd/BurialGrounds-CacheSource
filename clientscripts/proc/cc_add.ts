/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,cc_add]

function cc_add(intArg0: number, intArg1: component, intArg2: number, intArg3: number, intArg4: number, intArg5: number, intArg6: number): void {
    ccCreate(intArg1, intArg0, intArg2);
    ccSetSize(intArg3, intArg4, 0, 0);
    ccSetPosition(intArg5, intArg6, 0, 0);
}
