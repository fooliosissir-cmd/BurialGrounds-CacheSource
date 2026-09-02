/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6350

function cs2_6350(intArg0: number): component {
    if (cs2_1314(intArg0) == 0) {
        if (getWindowMode() >= 2) {
            return Component.interface_746.component_746_32;
        } else {
            return Component.interface_548.component_548_14;
        }
    } else {
        return cs2_121(intArg0);
    }
}
