/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_930

function cs2_930(intArg0: obj): number {
    let int1: number = ocParam(intArg0, Param.wear_requires_quest1);

    if (int1 == -1) {
        return 1;
    }

    if (cs2_2156(int1) == 0) {
        return 0;
    }
    int1 = ocParam(intArg0, Param.param_744);

    if (int1 == -1) {
        return 1;
    }

    if (cs2_2156(int1) == 0) {
        return 0;
    }
    int1 = ocParam(intArg0, Param.param_745);

    if (int1 == -1) {
        return 1;
    }

    if (cs2_2156(int1) == 0) {
        return 0;
    }
    int1 = ocParam(intArg0, Param.param_746);

    if (int1 == -1) {
        return 1;
    }

    if (cs2_2156(int1) == 0) {
        return 0;
    }
    int1 = ocParam(intArg0, Param.param_747);

    if (int1 == -1) {
        return 1;
    }

    if (cs2_2156(int1) == 0) {
        return 0;
    }
    int1 = ocParam(intArg0, Param.param_748);

    if (int1 == -1) {
        return 1;
    }

    if (cs2_2156(int1) == 0) {
        return 0;
    }
    return 1;
}
