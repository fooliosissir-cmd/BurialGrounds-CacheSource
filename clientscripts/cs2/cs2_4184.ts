/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4184

function cs2_4184(intArg0: number, intArg1: number): void {
    if (intArg0 != 1) {
        return;
    }
    varbit_artisan_temp_bar_number = max(min(varbit_artisan_temp_bar_number + intArg1, 28), 1);
    ifSetText(tostring(varbit_artisan_temp_bar_number), Component.interface_1072.component_1072_33);
    ifSetOnTimer(hook(cs2_4187, "i", [clientClock() + 15]), Component.interface_1072.component_1072_83);
    ifSetHide(false, Component.interface_1072.component_1072_83);
}
