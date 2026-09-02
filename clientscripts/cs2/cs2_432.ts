/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_432

function cs2_432(intArg0: component, intArg1: number): void {
    let int2: struct = -1;
    let int3: component = Component.interface_1024.component_1024_85;

    switch (intArg0) {
        case Component.interface_1024.component_1024_65:
            if (varc_conq_in_tutorial == 1) {
                int2 = Struct.conq_command_battle_cry;
            } else {
                int2 = cs2_488(varbit_conq_command_ability_1);
            }
            break;
        case Component.interface_1024.component_1024_48:
            if (varc_conq_in_tutorial == 1) {
                int2 = Struct.conq_command_regenerate;
            } else {
                int2 = cs2_488(varbit_conq_command_ability_2);
            }
            break;
        case Component.interface_1024.component_1024_31:
            if (varc_conq_in_tutorial == 1) {
                int2 = Struct.conq_command_bloodlust;
            } else {
                int2 = cs2_488(varbit_conq_command_ability_3);
            }
            break;
        case Component.interface_1024.component_1024_14:
            if (varc_conq_in_tutorial == 1) {
                int2 = Struct.conq_command_chastise;
            } else {
                int2 = cs2_488(varbit_conq_command_ability_4);
            }
            break;
        default:
            return;
    }

    if (int2 != -1) {
        ifSetText(structParam(int2, Param.conq_command_name), Component.interface_1024.component_1024_92);
        ifSetText(structParam(int2, Param.conq_command_desc), Component.interface_1024.component_1024_93);
        ifSetText("Cost: " + tostring(structParam(int2, Param.conq_command_cost)), Component.interface_1024.component_1024_94);
        ifSetText("Cooldown: " + tostring(structParam(int2, Param.conq_command_cooldown)), Component.interface_1024.component_1024_95);
        ifSetPosition(ifGetX(int3), intArg1, 0, 0, int3);
        ifSetHide(false, int3);
    } else {
        ifSetHide(true, int3);
    }
}
