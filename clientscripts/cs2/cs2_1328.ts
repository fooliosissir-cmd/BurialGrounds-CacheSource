/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1328

function cs2_1328(intArg0: number): void {
    if (ifGetHide(Component.interface_906.component_906_56) == 0 ||
        ifGetHide(Component.interface_906.component_906_57) == 0 ||
        ifGetHide(Component.interface_906.component_906_58) == 0 ||
        ifGetHide(Component.interface_906.component_906_44) == 0 ||
        ifGetHide(Component.interface_906.component_906_60) == 0 ||
        ifGetHide(Component.interface_906.component_906_70) == 0 ||
        ifGetHide(Component.interface_906.component_906_71) == 0) {
        return;
    }

    // P simply toggles between the only two Burial Grounds lobby destinations.
    if (intArg0 == 80) {
        if (ifGetHide(Component.interface_906.component_906_208) == 0) {
            proc_lobbyscreen_tabswitch(1);
        } else {
            proc_lobbyscreen_tabswitch(0);
        }
    }
}
