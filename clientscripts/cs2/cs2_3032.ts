/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3032

function cs2_3032(intArg0: component, intArg1: number, intArg2: number): void {
    let int3: component = -1;

    if (intArg2 == 1) {
        int3 = Component.interface_909.component_909_43;
    } else if (intArg2 == 0) {
        int3 = Component.interface_909.component_909_85;
    }

    if (ccFind(intArg0, intArg1) == 1) {
        ifSetHide(false, int3);
        ifSetPosition(ifGetX(int3), ccGetY(), 0, 0, int3);
    }

    if (intArg2 == 1) {
        cs2_2470(Component.interface_909.component_909_32, Component.interface_909.component_909_35);
    } else {
        cs2_2470(Component.interface_909.component_909_80, Component.interface_909.component_909_83);
    }
}
