/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2161

function cs2_2161(intArg0: number): void {
    ifSetHide(true, Component.interface_906.component_906_35);
    ifSetHide(true, Component.interface_906.component_906_38);

    if (intArg0 == 1) {
        ifSetHide(false, Component.interface_906.component_906_36);
        ifSendtofront(Component.interface_906.component_906_36);
        varc_1773 = 0;
        ifSetOnTimer(hook(cs2_2829, "", []), Component.interface_906.component_906_466);
    }
}
