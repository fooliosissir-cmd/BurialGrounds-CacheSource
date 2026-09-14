/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1377

function cs2_1377(intArg0: component, intArg1: number): void {
    let int2: npc = -1;

    if (varbit_conq_unit_1_pos == intArg1) {
        int2 = cs2_486(varbit_conq_unit_1_type);
    } else if (varbit_conq_unit_2_pos == intArg1) {
        int2 = cs2_486(varbit_conq_unit_2_type);
    } else if (varbit_conq_unit_3_pos == intArg1) {
        int2 = cs2_486(varbit_conq_unit_3_type);
    } else if (varbit_conq_unit_4_pos == intArg1) {
        int2 = cs2_486(varbit_conq_unit_4_type);
    } else if (varbit_conq_unit_5_pos == intArg1) {
        int2 = cs2_486(varbit_conq_unit_5_type);
    } else if (varbit_conq_unit_6_pos == intArg1) {
        int2 = cs2_486(varbit_conq_unit_6_type);
    } else if (varbit_conq_unit_7_pos == intArg1) {
        int2 = cs2_486(varbit_conq_unit_7_type);
    } else if (varbit_conq_unit_8_pos == intArg1) {
        int2 = cs2_486(varbit_conq_unit_8_type);
    } else if (varbit_conq_unit_9_pos == intArg1) {
        int2 = cs2_486(varbit_conq_unit_9_type);
    } else if (varbit_conq_unit_10_pos == intArg1) {
        int2 = cs2_486(varbit_conq_unit_10_type);
    }

    if (int2 != -1) {
        ifSetText(ncParam(int2, Param.conq_unit_initial), intArg0);
    } else {
        ifSetText("", intArg0);
    }
}
