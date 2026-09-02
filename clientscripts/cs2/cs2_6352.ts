/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6352

function cs2_6352(intArg0: component): number {
    if (intArg0 == -1) {
        return 0;
    }
    let int1: component = Component.interface_746.component_746_48;

    if (getWindowMode() < 2) {
        int1 = Component.interface_548.component_548_204;
    }

    while (intArg0 != -1) {
        if (ifGetHide(intArg0) == 1) {
            return 0;
        }
        if (intArg0 == int1) {
            return 1;
        }
        intArg0 = ifGetParentLayer(intArg0);
    }
    return 0;
}
