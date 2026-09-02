/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6382

function cs2_6382(): void {
    if (playerMember() == 0) {
        ifSetHide(true, Component.interface_746.component_746_268);
        ifSetHide(false, Component.interface_746.component_746_275);
        ifSetHide(true, Component.interface_548.component_548_233);
        ifSetHide(false, Component.interface_548.component_548_240);
        ifSetHide(true, Component.interface_906.component_906_533);
        ifSetHide(false, Component.interface_906.component_906_540);
    } else {
        ifSetHide(false, Component.interface_746.component_746_268);
        ifSetHide(true, Component.interface_746.component_746_275);
        ifSetHide(false, Component.interface_548.component_548_233);
        ifSetHide(true, Component.interface_548.component_548_240);
        ifSetHide(false, Component.interface_906.component_906_533);
        ifSetHide(true, Component.interface_906.component_906_540);
    }
    ifSetOnOpt(hook(cs2_6342, "", []), Component.interface_906.component_906_509);
    ifSetOnOpt(hook(cs2_6344, "", []), Component.interface_906.component_906_517);
    ifSetOnOpt(hook(cs2_6343, "", []), Component.interface_906.component_906_525);
    ifSetOnOpt(hook(cs2_6345, "", []), Component.interface_906.component_906_533);
    ifSetOnOpt(hook(cs2_6346, "", []), Component.interface_906.component_906_540);
}
