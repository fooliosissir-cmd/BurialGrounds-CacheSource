/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5886

function cs2_5886(intArg0: number): [number, number] {
    let int1: struct = cs2_5936(intArg0);

    if (int1 == -1) {
        return [-1, -1];
    }
    let int2: number = structParam(int1, Param.param_2266) + 3;
    let int3: number = structParam(int1, Param.param_2267) - 3;
    return [int2 + 127, int3 + 127];
}
