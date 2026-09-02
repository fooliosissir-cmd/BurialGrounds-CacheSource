/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_812

function cs2_812(intArg0: obj): void {
    ccSetHide(true);

    if (intArg0 == -1) {
        return;
    }

    if (ocParam(intArg0, Param.objreq_requirement_priority) > 1) {
        if (cs2_925(intArg0) == 1 && cs2_926(intArg0) == 1) {
            return;
        }
        ccSetHide(false);
        return;
    }

    if (ocParam(intArg0, Param.objreq_requirement_priority) == 1) {
        if (cs2_925(intArg0) == 1) {
            return;
        }
        ccSetHide(false);
        return;
    }

    if (cs2_928(intArg0) == 1) {
        if (cs2_926(intArg0) == 1) {
            return;
        }
        ccSetHide(false);
        return;
    }

    if (cs2_925(intArg0) == 1) {
        return;
    }
    ccSetHide(false);
}
