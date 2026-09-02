/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_925

function cs2_925(intArg0: obj): number {
    if (cs2_929(intArg0) == 0) {
        return 0;
    }

    if (cs2_930(intArg0) == 0) {
        return 0;
    }

    if (cs2_933(intArg0) == 0) {
        return 0;
    }

    if (comlevel() < ocParam(intArg0, Param.wear_requires_comlevel)) {
        return 0;
    }
    return 1;
}
