/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5273

function cs2_5273(intArg0: number, strArg0: string): void {
    ifSetHide(false, Component.interface_1137.component_1137_7);
    ifSetText(strArg0, Component.interface_1137.component_1137_10);

    if (ifFind(Component.interface_1137.component_1137_7) == 1) {
        ccSetParamInt(Param.trail_knot_current, intArg0);
    }
}
