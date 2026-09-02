/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3997

function cs2_3997(): void {
    ifSetText(tostring(varc_1424), Component.interface_917.component_917_73);
    ifSetText(tostring(varc_1423), Component.interface_917.component_917_75);
    ifSetText(tostring(varbit_task_completed_total), Component.interface_917.component_917_82);
    ifSetText(tostring(534), Component.interface_917.component_917_84);
    ifSetText("Progress:", Component.interface_917.component_917_76);
    let int0: number = varc_1424 * (ifGetWidth(Component.interface_917.component_917_122) - 4) / max(varc_1423, 1);
    ifSetSize(int0, 16, 0, 0, Component.interface_917.component_917_72);
}
