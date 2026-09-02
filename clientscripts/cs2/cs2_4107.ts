/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4107

function cs2_4107(intArg0: obj, intArg1: number): string {
    if (intArg1 >= 10000000) {
        return "<col=ff981f>" + ocName(intArg0) + "</col>" + " x " + tostringLocalised(intArg1 / 1000000, 1) + "M (" + tostringLocalised(intArg1, 1) + ")";
    }

    if (intArg1 >= 10000) {
        return "<col=ff981f>" + ocName(intArg0) + "</col>" + " x " + tostringLocalised(intArg1 / 1000, 1) + "K (" + tostringLocalised(intArg1, 1) + ")";
    }

    if (intArg1 > 1) {
        return "<col=ff981f>" + ocName(intArg0) + "</col>" + " x " + tostringLocalised(intArg1, 1);
    }
    return "<col=ff981f>" + ocName(intArg0) + "</col>";
}
