/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,ql4_skill_requirements_cache]

function ql4_skill_requirements_cache(intArg0: struct): number {
    let int1: stat = structParam(intArg0, Param.param_871);

    if (structParam(intArg0, Param.param_897) == 1 && statBase(0) + statBase(2) < 130) {
        return 0;
    }

    if (int1 == -1) {
        return 1;
    }

    if (statBase(int1) < structParam(intArg0, Param.param_872)) {
        return 0;
    }
    int1 = structParam(intArg0, Param.param_873);

    if (int1 == -1) {
        return 1;
    }

    if (statBase(int1) < structParam(intArg0, Param.param_874)) {
        return 0;
    }
    int1 = structParam(intArg0, Param.param_875);

    if (int1 == -1) {
        return 1;
    }

    if (statBase(int1) < structParam(intArg0, Param.param_876)) {
        return 0;
    }
    int1 = structParam(intArg0, Param.param_877);

    if (int1 == -1) {
        return 1;
    }

    if (statBase(int1) < structParam(intArg0, Param.param_878)) {
        return 0;
    }
    int1 = structParam(intArg0, Param.param_879);

    if (int1 == -1) {
        return 1;
    }

    if (statBase(int1) < structParam(intArg0, Param.param_880)) {
        return 0;
    }
    int1 = structParam(intArg0, Param.param_881);

    if (int1 == -1) {
        return 1;
    }

    if (statBase(int1) < structParam(intArg0, Param.param_882)) {
        return 0;
    }
    int1 = structParam(intArg0, Param.param_883);

    if (int1 == -1) {
        return 1;
    }

    if (statBase(int1) < structParam(intArg0, Param.param_884)) {
        return 0;
    }
    int1 = structParam(intArg0, Param.param_885);

    if (int1 == -1) {
        return 1;
    }

    if (statBase(int1) < structParam(intArg0, Param.param_886)) {
        return 0;
    }
    int1 = structParam(intArg0, Param.param_887);

    if (int1 == -1) {
        return 1;
    }

    if (statBase(int1) < structParam(intArg0, Param.param_888)) {
        return 0;
    }
    int1 = structParam(intArg0, Param.param_889);

    if (int1 == -1) {
        return 1;
    }

    if (statBase(int1) < structParam(intArg0, Param.param_890)) {
        return 0;
    }
    int1 = structParam(intArg0, Param.param_891);

    if (int1 == -1) {
        return 1;
    }

    if (statBase(int1) < structParam(intArg0, Param.param_892)) {
        return 0;
    }
    int1 = structParam(intArg0, Param.param_893);

    if (int1 == -1) {
        return 1;
    }

    if (statBase(int1) < structParam(intArg0, Param.param_894)) {
        return 0;
    }
    return 1;
}
