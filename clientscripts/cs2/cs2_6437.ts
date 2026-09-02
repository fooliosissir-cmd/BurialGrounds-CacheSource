/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6437

function cs2_6437(intArg0: struct): number {
    if (intArg0 == -1) {
        return 0;
    }
    let int1: number = structParam(intArg0, Param.param_2543);

    if (intArg0 != -1 && int1 == -1) {
        return 0;
    }

    if (int1 == varp_1442) {
        return 1;
    } else {
        return 0;
    }
}
