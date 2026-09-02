/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5265

function cs2_5265(): void {
    if (varbit_cmtool_scenario == 0) {
        ifSetHide(false, Component.interface_1137.component_1137_5);
        ifSetHide(true, Component.interface_1137.component_1137_62);
    } else {
        ifSetHide(true, Component.interface_1137.component_1137_5);
    }
}
