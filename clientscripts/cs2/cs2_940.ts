/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_940

function cs2_940(intArg0: obj): string {
    if (intArg0 < Obj.mcannonremains) {
        return "";
    }

    if (intArg0 < Obj._3dosehunting) {
        return tostring(intArg0);
    }

    if (intArg0 < 10000000) {
        return append(tostring(intArg0 / 1000), "K");
    }
    return append(tostring(intArg0 / 1000000), "M");
}
