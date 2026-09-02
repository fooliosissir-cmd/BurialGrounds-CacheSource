/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5938

function cs2_5938(intArg0: number): number {
    let [int1, int2] = cs2_6188(intArg0);

    if (ocParam(int1, Param.wof_lamp) == 1) {
        return 1;
    }
    return 0;
}
