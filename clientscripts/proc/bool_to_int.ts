/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,bool_to_int]

function bool_to_int(intArg0: boolean): number {
    if (intArg0 == true) {
        return 1;
    }
    return 0;
}
