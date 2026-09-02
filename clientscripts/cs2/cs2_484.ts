/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_484

function cs2_484(intArg0: component): void {
    let int1: npc = -1;
    let int2: npc = -1;
    let int3: number = 0;
    let int4: number = 0;
    let int5: number = 0;
    let str0: string = "";

    ifSetColour(colour(0xFFFFFF), intArg0);

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

    switch (intArg0) {
        case Component.interface_1015.component_1015_133:
            int2 = cs2_486(0);
            break;
        case Component.interface_1015.component_1015_119:
            int2 = cs2_486(1);
            break;
        case Component.interface_1015.component_1015_121:
            int2 = cs2_486(2);
            break;
        case Component.interface_1015.component_1015_123:
            int2 = cs2_486(3);
            break;
        case Component.interface_1015.component_1015_125:
            int2 = cs2_486(4);
            break;
        case Component.interface_1015.component_1015_127:
            int2 = cs2_486(5);
            break;
        case Component.interface_1015.component_1015_129:
            int2 = cs2_486(6);
            break;
        case Component.interface_1015.component_1015_131:
            int2 = cs2_486(7);
            break;
        default:
            return;
    }

    if (int1 == -1) {
        ifSetHide(true, Component.interface_1015.component_1015_135);
        ifSetHide(false, Component.interface_1015.component_1015_115);
        ifSetGraphic(npcParam(int2, Param.conq_unit_icon), Component.interface_1015.component_1015_2);
        ifSetText(npcParam(int2, Param.conq_unit_name), Component.interface_1015.component_1015_0);
        ifSetText("Movement: " + tostring(npcParam(int2, Param.conq_unit_movement)), Component.interface_1015.component_1015_138);
        ifSetText("Damage: " + tostring(npcParam(int2, Param.conq_unit_damage) * 100), Component.interface_1015.component_1015_139);
        ifSetText("Health: " + tostring(npcParam(int2, Param.conq_unit_health) * 100), Component.interface_1015.component_1015_140);
        ifSetText("Range: " + tostring(npcParam(int2, Param.conq_unit_range)), Component.interface_1015.component_1015_141);
        ifSetText("Cost: " + tostring(npcParam(int2, Param.conq_unit_cost)), Component.interface_1015.component_1015_142);
    } else if (int1 != int2) {
        ifSetGraphic(npcParam(int2, Param.conq_unit_icon), Component.interface_1015.component_1015_2);
        ifSetText(append(ifGetText(Component.interface_1015.component_1015_0), " ~ " + npcParam(int2, Param.conq_unit_name)), Component.interface_1015.component_1015_0);
        int3 = npcParam(int1, Param.conq_unit_movement);
        int4 = npcParam(int2, Param.conq_unit_movement);
        if (int3 < int4) {
            int5 = int4 - int3;
            str0 = " ~ " + tostring(npcParam(int2, Param.conq_unit_movement)) + " (" + "<col=00c800>" + "+" + tostring(int5) + "</col>" + ")";
        } else if (int3 > int4) {
            int5 = int3 - int4;
            str0 = " ~ " + tostring(npcParam(int2, Param.conq_unit_movement)) + " (" + "<col=c80000>" + "-" + tostring(int5) + "</col>" + ")";
        } else {
            str0 = " ~ " + tostring(npcParam(int2, Param.conq_unit_movement));
        }
        ifSetText(append(ifGetText(Component.interface_1015.component_1015_138), str0), Component.interface_1015.component_1015_138);
        int3 = npcParam(int1, Param.conq_unit_damage);
        int4 = npcParam(int2, Param.conq_unit_damage);
        if (int3 < int4) {
            int5 = int4 - int3;
            str0 = " ~ " + tostring(npcParam(int2, Param.conq_unit_damage) * 100) + " (" + "<col=00c800>" + "+" + tostring(int5 * 100) + "</col>" + ")";
        } else if (int3 > int4) {
            int5 = int3 - int4;
            str0 = " ~ " + tostring(npcParam(int2, Param.conq_unit_damage) * 100) + " (" + "<col=c80000>" + "-" + tostring(int5 * 100) + "</col>" + ")";
        } else {
            str0 = " ~ " + tostring(npcParam(int2, Param.conq_unit_damage) * 100);
        }
        ifSetText(append(ifGetText(Component.interface_1015.component_1015_139), str0), Component.interface_1015.component_1015_139);
        int3 = npcParam(int1, Param.conq_unit_health);
        int4 = npcParam(int2, Param.conq_unit_health);
        if (int3 < int4) {
            int5 = int4 - int3;
            str0 = " ~ " + tostring(npcParam(int2, Param.conq_unit_health) * 100) + " (" + "<col=00c800>" + "+" + tostring(int5 * 100) + "</col>" + ")";
        } else if (int3 > int4) {
            int5 = int3 - int4;
            str0 = " ~ " + tostring(npcParam(int2, Param.conq_unit_health) * 100) + " (" + "<col=c80000>" + "-" + tostring(int5 * 100) + "</col>" + ")";
        } else {
            str0 = " ~ " + tostring(npcParam(int2, Param.conq_unit_health) * 100);
        }
        ifSetText(append(ifGetText(Component.interface_1015.component_1015_140), str0), Component.interface_1015.component_1015_140);
        int3 = npcParam(int1, Param.conq_unit_range);
        int4 = npcParam(int2, Param.conq_unit_range);
        if (int3 < int4) {
            int5 = int4 - int3;
            str0 = " ~ " + tostring(npcParam(int2, Param.conq_unit_range)) + " (" + "<col=00c800>" + "+" + tostring(int5) + "</col>" + ")";
        } else if (int3 > int4) {
            int5 = int3 - int4;
            str0 = " ~ " + tostring(npcParam(int2, Param.conq_unit_range)) + " (" + "<col=c80000>" + "-" + tostring(int5) + "</col>" + ")";
        } else {
            str0 = " ~ " + tostring(npcParam(int2, Param.conq_unit_range));
        }
        ifSetText(append(ifGetText(Component.interface_1015.component_1015_141), str0), Component.interface_1015.component_1015_141);
        int3 = npcParam(int1, Param.conq_unit_cost);
        int4 = npcParam(int2, Param.conq_unit_cost);
        if (int3 < int4) {
            int5 = int4 - int3;
            str0 = " ~ " + tostring(npcParam(int2, Param.conq_unit_cost)) + " (" + "<col=c80000>" + "+" + tostring(int5) + "</col>" + ")";
        } else if (int3 > int4) {
            int5 = int3 - int4;
            str0 = " ~ " + tostring(npcParam(int2, Param.conq_unit_cost)) + " (" + "<col=00c800>" + "-" + tostring(int5) + "</col>" + ")";
        } else {
            str0 = " ~ " + tostring(npcParam(int2, Param.conq_unit_cost));
        }
        ifSetText(append(ifGetText(Component.interface_1015.component_1015_142), str0), Component.interface_1015.component_1015_142);
    }
}
