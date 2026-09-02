/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_931

function cs2_931(intArg0: obj): number {
    let int1: stat = ocParam(intArg0, Param.use_requires_stat1);

    if (int1 == -1) {
        return 1;
    }

    if (statBase(int1) < ocParam(intArg0, Param.use_requires_stat_level1)) {
        return 0;
    }
    int1 = ocParam(intArg0, Param.use_requires_stat2);

    if (int1 == -1) {
        return 1;
    }

    if (statBase(int1) < ocParam(intArg0, Param.use_requires_stat_level2)) {
        return 0;
    }
    int1 = ocParam(intArg0, Param.use_requires_stat3);

    if (int1 == -1) {
        return 1;
    }

    if (statBase(int1) < ocParam(intArg0, Param.use_requires_stat_level3)) {
        return 0;
    }
    int1 = ocParam(intArg0, Param.use_requires_stat4);

    if (int1 == -1) {
        return 1;
    }

    if (statBase(int1) < ocParam(intArg0, Param.use_requires_stat_level4)) {
        return 0;
    }
    int1 = ocParam(intArg0, Param.use_requires_stat5);

    if (int1 == -1) {
        return 1;
    }

    if (statBase(int1) < ocParam(intArg0, Param.use_requires_stat_level5)) {
        return 0;
    }
    int1 = ocParam(intArg0, Param.use_requires_stat6);

    if (int1 == -1) {
        return 1;
    }

    if (statBase(int1) < ocParam(intArg0, Param.use_requires_stat_level6)) {
        return 0;
    }
    return 1;
}
