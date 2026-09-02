/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,trail_success]

function trail_success(intArg0: component): void {
    if (ifFind(intArg0) == 1) {
        ifSetColour(colour(0x88FF88), intArg0);
        ifSetSize(31, 31, 0, 0, intArg0);
        ifSetPosition(ccParam(Param.trail_knot_posx) - 2, ccParam(Param.trail_knot_posy) - 2, 0, 0, intArg0);
    }
}
