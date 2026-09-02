/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4253

function cs2_4253(): void {
    if (varbit_task_priority_mode == 1) {
        ifSetText("Tutorial is ON", Component.interface_917.component_917_198);
    } else {
        ifSetText("Tutorial is OFF", Component.interface_917.component_917_198);
    }
}
