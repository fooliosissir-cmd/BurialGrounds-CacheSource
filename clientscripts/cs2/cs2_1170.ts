/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1170

function cs2_1170(): void {
    if (ifGetTrans(Component.interface_601.component_601_1) > varc_1435) {
        ifSetTrans(max(50, ifGetTrans(Component.interface_601.component_601_1) - 1), Component.interface_601.component_601_1);
    } else {
        ifSetTrans(min(255, ifGetTrans(Component.interface_601.component_601_1) + 1), Component.interface_601.component_601_1);
    }
}
