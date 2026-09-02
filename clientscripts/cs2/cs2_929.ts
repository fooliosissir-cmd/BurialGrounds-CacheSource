/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_929

function cs2_929(intArg0: obj): number {
    let int1: number = ocParam(intArg0, Param.param_823);
    let int2: stat = ocParam(intArg0, Param.wear_requires_stat1);

    if (int2 == -1) {
        return 1;
    }

    if ((testBit(int1, 0) == 0 && statBase(int2) < ocParam(intArg0, Param.wear_requires_stat_level1)) || (testBit(int1, 0) == 1 && stat(int2) < ocParam(intArg0, Param.wear_requires_stat_level1))) {
        return 0;
    }
    int2 = ocParam(intArg0, Param.wear_requires_stat2);

    if (int2 == -1) {
        return 1;
    }

    if ((testBit(int1, 1) == 0 && statBase(int2) < ocParam(intArg0, Param.wear_requires_stat_level2)) || (testBit(int1, 1) == 1 && stat(int2) < ocParam(intArg0, Param.wear_requires_stat_level2))) {
        return 0;
    }
    int2 = ocParam(intArg0, Param.wear_requires_stat3);

    if (int2 == -1) {
        return 1;
    }

    if ((testBit(int1, 2) == 0 && statBase(int2) < ocParam(intArg0, Param.wear_requires_stat_level3)) || (testBit(int1, 2) == 1 && stat(int2) < ocParam(intArg0, Param.wear_requires_stat_level3))) {
        return 0;
    }
    int2 = ocParam(intArg0, Param.wear_requires_stat4);

    if (int2 == -1) {
        return 1;
    }

    if ((testBit(int1, 3) == 0 && statBase(int2) < ocParam(intArg0, Param.wear_requires_stat_level4)) || (testBit(int1, 3) == 1 && stat(int2) < ocParam(intArg0, Param.wear_requires_stat_level4))) {
        return 0;
    }
    int2 = ocParam(intArg0, Param.wear_requires_stat5);

    if (int2 == -1) {
        return 1;
    }

    if ((testBit(int1, 4) == 0 && statBase(int2) < ocParam(intArg0, Param.wear_requires_stat_level5)) || (testBit(int1, 4) == 1 && stat(int2) < ocParam(intArg0, Param.wear_requires_stat_level5))) {
        return 0;
    }
    int2 = ocParam(intArg0, Param.wear_requires_stat6);

    if (int2 == -1) {
        return 1;
    }

    if ((testBit(int1, 5) == 0 && statBase(int2) < ocParam(intArg0, Param.wear_requires_stat_level6)) || (testBit(int1, 5) == 1 && stat(int2) < ocParam(intArg0, Param.wear_requires_stat_level6))) {
        return 0;
    }
    return 1;
}
