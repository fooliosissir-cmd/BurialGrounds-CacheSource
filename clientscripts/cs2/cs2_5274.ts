/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5274

function cs2_5274(): void {
    let int0: number = 0;

    if (ifFind(Component.interface_1137.component_1137_7) == 1) {
        int0 = ccParam(Param.trail_knot_current) - 1;
        ccSetParamInt(Param.trail_knot_current, int0);
    }

    if (int0 == 0) {
        ifSetHide(true, Component.interface_1137.component_1137_7);
    }
}
