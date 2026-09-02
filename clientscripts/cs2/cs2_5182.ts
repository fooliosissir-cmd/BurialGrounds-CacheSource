/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5182

function cs2_5182(): void {
    if (ifGetScrollWidth(Component.interface_1122.component_1122_82) == 0) {
        ifSetHide(false, Component.interface_1122.component_1122_81);
        ifSetHide(false, Component.interface_1122.component_1122_355);
    } else if (ifGetScrollX(Component.interface_1122.component_1122_82) == 0) {
        ifSetHide(false, Component.interface_1122.component_1122_81);
        ifSetHide(true, Component.interface_1122.component_1122_355);
    } else if (ifGetScrollX(Component.interface_1122.component_1122_82) == ifGetScrollWidth(Component.interface_1122.component_1122_82) - ifGetWidth(Component.interface_1122.component_1122_82)) {
        ifSetHide(true, Component.interface_1122.component_1122_81);
        ifSetHide(false, Component.interface_1122.component_1122_355);
    } else {
        ifSetHide(true, Component.interface_1122.component_1122_81);
        ifSetHide(true, Component.interface_1122.component_1122_355);
    }
}
