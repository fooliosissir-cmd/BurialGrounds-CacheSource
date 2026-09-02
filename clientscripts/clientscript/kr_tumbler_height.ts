/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,kr_tumbler_height]

function kr_tumbler_height(): void {
    if (varbit_kr_tumb_current == 1) {
        ifSetText(tostring(varbit_kr_tumb1_curr_pos) + "/5", Component.interface_588.component_588_7);
    } else if (varbit_kr_tumb_current == 2) {
        ifSetText(tostring(varbit_kr_tumb2_curr_pos) + "/5", Component.interface_588.component_588_7);
    } else if (varbit_kr_tumb_current == 3) {
        ifSetText(tostring(varbit_kr_tumb3_curr_pos) + "/5", Component.interface_588.component_588_7);
    } else if (varbit_kr_tumb_current == 4) {
        ifSetText(tostring(varbit_kr_tumb4_curr_pos) + "/5", Component.interface_588.component_588_7);
    }
}
