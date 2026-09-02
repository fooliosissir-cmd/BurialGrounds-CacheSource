/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4658

function cs2_4658(intArg0: component): void {
    let int1: number = varp_2201 / 3;

    ifSetText(tostring(varp_2201), intArg0);
    proc_aif_progressbar_set(int1, Component.interface_22.component_22_40, Component.interface_22.component_22_45);

    if (varp_2201 <= 100) {
        ifSetModelAnim(9777, Component.interface_22.component_22_2);
    } else {
        ifSetModelAnim(9804, Component.interface_22.component_22_2);
    }
}
