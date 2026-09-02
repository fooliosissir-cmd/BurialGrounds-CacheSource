/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5988

function cs2_5988(intArg0: number, intArg1: number): void {
    let int2: component = cs2_5991(intArg0);

    if (int2 == -1) {
        mes("Nothing happens, as if somthing has gone wrong.");
        return;
    }
    ifSetHide(false, int2);
}
