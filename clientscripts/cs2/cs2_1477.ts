/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1477

function cs2_1477(): void {
    if (varbit_wc_update09_difficulty == 0) {
        ifSetText("Quick task:", Component.interface_766.component_766_36);
    } else {
        ifSetText("Large task:", Component.interface_766.component_766_36);
    }
    ifSetText(tostring(varbit_wc_update09_actual_short), Component.interface_766.component_766_100);
    ifSetText(tostring((varbit_wc_update09_target_short + 1) * 5), Component.interface_766.component_766_102);
    ifSetText(tostring(varbit_wc_update09_actual_long), Component.interface_766.component_766_91);
    ifSetText(tostring((varbit_wc_update09_target_long + 1) * 5), Component.interface_766.component_766_93);
    ifSetText(tostring(varbit_wc_update09_actual_diag), Component.interface_766.component_766_81);
    ifSetText(tostring((varbit_wc_update09_target_diag + 1) * 5), Component.interface_766.component_766_83);
    ifSetText(tostring(varbit_wc_update09_actual_tooth), Component.interface_766.component_766_71);
    ifSetText(tostring((varbit_wc_update09_target_tooth + 1) * 5), Component.interface_766.component_766_73);
    ifSetText(tostring(varbit_wc_update09_actual_groove), Component.interface_766.component_766_61);
    ifSetText(tostring((varbit_wc_update09_target_groove + 1) * 5), Component.interface_766.component_766_63);
    ifSetText(tostring(varbit_wc_update09_actual_curve), Component.interface_766.component_766_51);
    ifSetText(tostring((varbit_wc_update09_target_curve + 1) * 5), Component.interface_766.component_766_53);
}
