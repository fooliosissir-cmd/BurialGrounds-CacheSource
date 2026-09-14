/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2645

function cs2_2645(intArg0: component): void {
    if (varc_842 == 1) {
        ifSetText("Next page", intArg0);
        ifSetOnOp(hook(cs2_2641, "", []), Component.interface_860.component_860_20);
    } else if (varc_842 == 2) {
        ifSetText("Previous page", intArg0);
        ifSetOnOp(hook(cs2_2640, "", []), Component.interface_860.component_860_20);
    }
}
