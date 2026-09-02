/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3634

function cs2_3634(intArg0: component): void {
    if (ifFind(intArg0) == 1) {
        ifSetColour(colour(0xCC0000), intArg0);
        ifSetSize(27, 27, 0, 0, intArg0);
        ifSetPosition(ccParam(Param.trail_knot_posx), ccParam(Param.trail_knot_posy), 0, 0, intArg0);
    }
}
