/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4660

function cs2_4660(intArg0: component): void {
    let int1: number = varp_2203 / 3;

    ifSetText(tostring(varp_2203), intArg0);
    proc_aif_progressbar_set(int1, Component.interface_22.component_22_96, Component.interface_22.component_22_101);

    if (varp_2203 <= 100) {
        ifSetModelAnim(9777, Component.interface_22.component_22_0);
    } else {
        ifSetModelAnim(9804, Component.interface_22.component_22_0);
    }
}
