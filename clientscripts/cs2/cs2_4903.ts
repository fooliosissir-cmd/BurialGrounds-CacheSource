/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4903

function cs2_4903(): void {
    let int0: number = varc_1800;
    let int1: number = max(0, varc_1970);
    let int2: number = max(0, int0 + varbit_10862 + varbit_wof_earned_spins);

    ifSetText(tostring(int2), Component.interface_1139.component_1139_6);
    ifSetText(tostring(int1), Component.interface_1139.component_1139_13);
}
