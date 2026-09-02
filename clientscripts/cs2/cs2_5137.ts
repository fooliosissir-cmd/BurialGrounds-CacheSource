/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5137

function cs2_5137(intArg0: number): void {
    ifSetHide(true, Component.interface_1096.component_1096_488);
    ifSetHide(true, Component.interface_1096.component_1096_497);
    ifSetHide(true, Component.interface_1096.component_1096_505);
    ifSetHide(true, Component.interface_1096.component_1096_513);
    ifSetHide(true, Component.interface_1096.component_1096_521);

    if (intArg0 == 1) {
        ifSetHide(false, Component.interface_1096.component_1096_488);
    } else if (intArg0 == 2) {
        ifSetHide(false, Component.interface_1096.component_1096_497);
    } else if (intArg0 == 3) {
        ifSetHide(false, Component.interface_1096.component_1096_505);
    } else if (intArg0 == 4) {
        ifSetHide(false, Component.interface_1096.component_1096_513);
    } else if (intArg0 == 5) {
        ifSetHide(false, Component.interface_1096.component_1096_521);
    }
}
