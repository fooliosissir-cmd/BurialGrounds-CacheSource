/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3632

function cs2_3632(intArg0: component): void {
    if (ifFind(intArg0) == 1) {
        ccSetParamInt(Param.trail_knot_posx, ccGetX());
        ccSetParamInt(Param.trail_knot_posy, ccGetY());
    }
}
