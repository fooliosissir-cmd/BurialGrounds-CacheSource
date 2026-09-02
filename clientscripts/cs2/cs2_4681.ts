/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4681

function cs2_4681(): void {
    let int0: number = varbit_deadly_wreck_1_searched + varbit_deadly_wreck_2_searched + varbit_deadly_wreck_3_searched + varbit_deadly_wreck_4_searched + varbit_deadly_wreck_5_searched + varbit_deadly_wreck_6_searched + varbit_deadly_wreck_7_searched + varbit_deadly_wreck_8_searched + varbit_deadly_wreck_9_searched + varbit_deadly_wreck_10_searched + varbit_deadly_wreck_11_searched + varbit_deadly_wreck_12_searched + varbit_deadly_wreck_13_searched + varbit_deadly_wreck_14_searched + varbit_deadly_wreck_15_searched + varbit_deadly_wreck_16_searched + varbit_deadly_wreck_17_searched + varbit_deadly_wreck_18_searched + varbit_deadly_wreck_19_searched + varbit_deadly_wreck_20_searched + varbit_deadly_wreck_21_searched + varbit_deadly_wreck_22_searched + varbit_deadly_wreck_23_searched + varbit_deadly_wreck_24_searched + varbit_deadly_wreck_25_searched + varbit_deadly_wreck_26_searched + varbit_deadly_wreck_27_searched;

    if (int0 == 26) {
        ifSetText("Final wreck to loot!", Component.interface_314.component_314_13);
    } else {
        ifSetText("Wrecks looted: " + tostring(int0) + "/27", Component.interface_314.component_314_13);
    }
}
