/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_811

function cs2_811(intArg0: number): void {
    let int1: number = 0;

    if (intArg0 > 1) {
        return;
    }

    if (getWindowMode() >= 2) {
        int1 = ifGetHide(Component.interface_746.component_746_202);
    } else {
        int1 = ifGetHide(Component.interface_548.component_548_50);
    }

    if (int1 == 1) {
        ifSetHide(false, Component.interface_746.component_746_202);
        ifSetHide(false, Component.interface_548.component_548_50);
        ifSetPosition(8, 80, 2, 0, Component.interface_381.component_381_0);
    } else {
        ifSetHide(true, Component.interface_746.component_746_203);
        ifSetHide(true, Component.interface_548.component_548_51);
        ifSetHide(true, Component.interface_746.component_746_202);
        ifSetHide(true, Component.interface_548.component_548_50);
        ifSetPosition(8, 7, 2, 0, Component.interface_381.component_381_0);
    }
    cs2_776();
}
