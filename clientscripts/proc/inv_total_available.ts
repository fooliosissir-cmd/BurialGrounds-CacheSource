/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,inv_total_available]

function inv_total_available(intArg0: inv, intArg1: obj): number {
    if (ocMembers(intArg1) == 1 && mapMembers() == 0) {
        return 0;
    }
    return invTotal(intArg0, intArg1);
}
