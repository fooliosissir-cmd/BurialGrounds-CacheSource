/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4659

function cs2_4659(intArg0: component): void {
    let int1: number = varp_2202 / 3;

    proc_aif_progressbar_set(int1, Component.interface_22.component_22_64, Component.interface_22.component_22_69);
    ifSetText(tostring(varp_2202), intArg0);

    if (varp_2202 <= 100) {
        ifSetModelAnim(9777, Component.interface_22.component_22_70);
    } else {
        ifSetModelAnim(9804, Component.interface_22.component_22_70);
    }
}
