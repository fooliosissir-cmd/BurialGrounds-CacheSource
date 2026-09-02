/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1417

function cs2_1417(intArg0: component): void {
    if (varc_conq_loading == 1) {
        return;
    }
    let int1: number = cs2_1502(intArg0);
    let int2: npc = -1;
    let int3: number = ifGetX(intArg0);
    let int4: number = ifGetY(intArg0);

    if (varbit_conq_unit_1_pos == int1) {
        int2 = cs2_486(varbit_conq_unit_1_type);
    } else if (varbit_conq_unit_2_pos == int1) {
        int2 = cs2_486(varbit_conq_unit_2_type);
    } else if (varbit_conq_unit_3_pos == int1) {
        int2 = cs2_486(varbit_conq_unit_3_type);
    } else if (varbit_conq_unit_4_pos == int1) {
        int2 = cs2_486(varbit_conq_unit_4_type);
    } else if (varbit_conq_unit_5_pos == int1) {
        int2 = cs2_486(varbit_conq_unit_5_type);
    } else if (varbit_conq_unit_6_pos == int1) {
        int2 = cs2_486(varbit_conq_unit_6_type);
    } else if (varbit_conq_unit_7_pos == int1) {
        int2 = cs2_486(varbit_conq_unit_7_type);
    } else if (varbit_conq_unit_8_pos == int1) {
        int2 = cs2_486(varbit_conq_unit_8_type);
    } else if (varbit_conq_unit_9_pos == int1) {
        int2 = cs2_486(varbit_conq_unit_9_type);
    } else if (varbit_conq_unit_10_pos == int1) {
        int2 = cs2_486(varbit_conq_unit_10_type);
    }

    if (int2 != -1) {
        ifSetText(npcParam(int2, Param.conq_unit_name), Component.interface_1017.component_1017_241);
        ifSetSize(stringWidth(npcParam(int2, Param.conq_unit_name), Graphic.welcome_font_tiny) + 10, ifGetHeight(Component.interface_1017.component_1017_226), 0, 0, Component.interface_1017.component_1017_226);
        int3 = int3 + ifGetWidth(intArg0) - 3;
        int4 = int4 - ifGetHeight(intArg0);
        if (int3 + ifGetWidth(Component.interface_1017.component_1017_226) >= ifGetX(Component.interface_1017.component_1017_31) + ifGetWidth(Component.interface_1017.component_1017_31)) {
            int3 = ifGetX(intArg0) - ifGetWidth(Component.interface_1017.component_1017_226) + 3;
        }
        ifSetPosition(int3, int4, 0, 0, Component.interface_1017.component_1017_226);
        ifSetHide(false, Component.interface_1017.component_1017_226);
    } else {
        ifSetHide(true, Component.interface_1017.component_1017_226);
    }
}
