/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_927

function cs2_927(intArg0: obj): number {
    if (ocParam(intArg0, Param.wear_requires_stat1) != -1) {
        return 1;
    }

    if (ocParam(intArg0, Param.wear_requires_quest1) > -1) {
        return 1;
    }

    if (ocParam(intArg0, Param.wear_requires_special) == 1) {
        return 1;
    }
    return 0;
}
