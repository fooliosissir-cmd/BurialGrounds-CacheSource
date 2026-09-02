/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6231

function cs2_6231(): void {
    if (varp_2611 == 1) {
        ifSetHide(false, Component.interface_906.component_906_31);
        ifSetHide(true, Component.interface_906.component_906_34);
        varp_2522 = 1;
        cs2_196();
    } else {
        ifSetHide(true, Component.interface_906.component_906_34);
        proc_lobbyscreen_entergame(Component.interface_906.component_906_0);
    }
}
