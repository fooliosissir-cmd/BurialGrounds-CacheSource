/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6438

function cs2_6438(intArg0: struct): number {
    let int1: number = 0;
    let int2: obj = -1;
    let int3: obj = -1;

    if (intArg0 == -1) {
        return 0;
    }
    let int4: Enum = structParam(intArg0, Param.param_2542);

    if (int4 == -1) {
        return 0;
    }

    if (structParam(intArg0, Param.param_2532) == 15) {
        while (int1 < 11) {
            int2 = enumOp(type_int, type_obj, int4, int1);
            int3 = invGetobj(670, int1);
            if (int2 != -1 && int3 != int2) {
                if (int1 != 3) {
                    return 0;
                } else if (varp_2685 == int2) {
                    return 1;
                } else if (ocParam(int2, Param.param_644) == ocParam(int3, Param.param_644) || ocParam(int3, Param.param_644) == 1426) {
                    return 0;
                }
            }
            int1 = int1 + 1;
        }
    } else {
        int2 = enumOp(type_int, type_obj, int4, structParam(intArg0, Param.param_2532));
        int3 = invGetobj(670, structParam(intArg0, Param.param_2532));
        if (int2 != -1 && int3 != int2) {
            if (int1 != 3) {
                return 0;
            } else if (varp_2685 == int2) {
                return 1;
            } else if (ocParam(int2, Param.param_644) == ocParam(int3, Param.param_644) || ocParam(int3, Param.param_644) == 1426) {
                return 0;
            }
        }
    }
    return 1;
}
