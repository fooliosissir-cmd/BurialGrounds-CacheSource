/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,ql4_requirements_cache]

function ql4_requirements_cache(intArg0: struct): number {
    if (ql4_quest_requirements_cache(intArg0) == 0) {
        return 0;
    }

    if (varp_qp < structParam(intArg0, Param.param_895)) {
        return 0;
    }

    if (varc_ql4_comlevel < structParam(intArg0, Param.param_896)) {
        return 0;
    }

    if (ql4_skill_requirements_cache(intArg0) == 0) {
        return 0;
    }

    if (structParam(intArg0, Param.param_898) == 1 && ql4_special_requirements(structParam(intArg0, Param.param_847)) == 0) {
        return 0;
    }
    return 1;
}
