/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5765

function cs2_5765(intArg0: stat): number {
    if (intArg0 == -1) {
        return cs2_5766(10);
    } else if (statBase(intArg0) >= 10) {
        return 1;
    } else if (intArg0 == 0) {
        if (statBase(0) > 10 || statBase(2) > 10 || statBase(1) > 10 || statBase(6) > 10 || statBase(4) > 10 || comlevel() > Obj.twpart3) {
            return 1;
        }
    } else {
        return 0;
    }
    return 0;
}
