/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,rand_inspect_examine]

function rand_inspect_examine(intArg0: number, intArg1: number): void {
    if (invotherGetobj(intArg0, intArg1) != -1) {
        mes(ocName(invotherGetobj(intArg0, intArg1)));
    }
}
