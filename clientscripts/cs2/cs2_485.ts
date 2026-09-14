/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_485

function cs2_485(intArg0: component): void {
    let int1: npc = -1;
    let int2: number = 0;

    ifSetColour(colour(0xFF981F), intArg0);

    switch (varbit_conq_current_unit_purchase_slot) {
        case 1:
            int1 = cs2_486(varbit_conq_unit_1_type);
            break;
        case 2:
            int1 = cs2_486(varbit_conq_unit_2_type);
            break;
        case 3:
            int1 = cs2_486(varbit_conq_unit_3_type);
            break;
        case 4:
            int1 = cs2_486(varbit_conq_unit_4_type);
            break;
        case 5:
            int1 = cs2_486(varbit_conq_unit_5_type);
            break;
        case 6:
            int1 = cs2_486(varbit_conq_unit_6_type);
            break;
        case 7:
            int1 = cs2_486(varbit_conq_unit_7_type);
            break;
        case 8:
            int1 = cs2_486(varbit_conq_unit_8_type);
            break;
        case 9:
            int1 = cs2_486(varbit_conq_unit_9_type);
            break;
        case 10:
            int1 = cs2_486(varbit_conq_unit_10_type);
            break;
        default:
            return;
    }

    if (int1 == -1) {
        ifSetHide(false, Component.interface_1015.component_1015_135);
        ifSetHide(true, Component.interface_1015.component_1015_115);
    } else {
        ifSetGraphic(ncParam(int1, Param.conq_unit_icon), Component.interface_1015.component_1015_2);
        ifSetText(ncParam(int1, Param.conq_unit_name), Component.interface_1015.component_1015_0);
        ifSetText("Movement: " + tostring(ncParam(int1, Param.conq_unit_movement)), Component.interface_1015.component_1015_138);
        ifSetText("Damage: " + tostring(ncParam(int1, Param.conq_unit_damage) * 100), Component.interface_1015.component_1015_139);
        ifSetText("Health: " + tostring(ncParam(int1, Param.conq_unit_health) * 100), Component.interface_1015.component_1015_140);
        ifSetText("Range: " + tostring(ncParam(int1, Param.conq_unit_range)), Component.interface_1015.component_1015_141);
        ifSetText("Cost: " + tostring(ncParam(int1, Param.conq_unit_cost)), Component.interface_1015.component_1015_142);
    }
}
