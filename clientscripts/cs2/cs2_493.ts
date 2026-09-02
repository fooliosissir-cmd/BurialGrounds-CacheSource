/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_493

function cs2_493(intArg0: component, intArg1: number): void {
    let int2: number = 0;
    let int3: colour = colour(0x000000);
    let int4: struct = -1;

    switch (intArg0) {
        case Component.interface_1015.component_1015_58:
            int2 = 1;
            break;
        case Component.interface_1015.component_1015_60:
            int2 = 2;
            break;
        case Component.interface_1015.component_1015_62:
            int2 = 3;
            break;
        case Component.interface_1015.component_1015_64:
            int2 = 4;
            break;
        case Component.interface_1015.component_1015_68:
            int2 = 5;
            break;
        case Component.interface_1015.component_1015_70:
            int2 = 6;
            break;
        case Component.interface_1015.component_1015_72:
            int2 = 7;
            break;
        case Component.interface_1015.component_1015_74:
            int2 = 8;
            break;
        case Component.interface_1015.component_1015_66:
            int2 = 9;
            break;
        default:
            return;
    }

    if (intArg1 == 1) {
        int3 = colour(0xFFFFFF);
    } else {
        int3 = colour(0xFF981F);
    }

    if (varbit_conq_command_ability_1 != int2 && varbit_conq_command_ability_2 != int2 && varbit_conq_command_ability_3 != int2 && varbit_conq_command_ability_4 != int2) {
        ifSetColour(int3, intArg0);
        if (intArg1 == 1) {
            int4 = cs2_488(int2);
            if (int4 != -1) {
                ifSetHide(true, Component.interface_1015.component_1015_49);
                ifSetHide(false, Component.interface_1015.component_1015_50);
                ifSetHide(false, Component.interface_1015.component_1015_51);
                ifSetHide(false, Component.interface_1015.component_1015_52);
                ifSetHide(false, Component.interface_1015.component_1015_53);
                ifSetHide(false, Component.interface_1015.component_1015_54);
                ifSetText(structParam(int4, Param.conq_command_name), Component.interface_1015.component_1015_51);
                ifSetGraphic(structParam(int4, Param.conq_command_icon), Component.interface_1015.component_1015_50);
                ifSetText(structParam(int4, Param.conq_command_desc), Component.interface_1015.component_1015_52);
                ifSetText(append("Cooldown: ", tostring(structParam(int4, Param.conq_command_cooldown))), Component.interface_1015.component_1015_53);
                ifSetText(append("Cost: ", tostring(structParam(int4, Param.conq_command_cost))), Component.interface_1015.component_1015_54);
            }
        } else {
            switch (varbit_conq_current_command_purchase_slot) {
                case 1:
                    int4 = cs2_488(varbit_conq_command_ability_1);
                    break;
                case 2:
                    int4 = cs2_488(varbit_conq_command_ability_2);
                    break;
                case 3:
                    int4 = cs2_488(varbit_conq_command_ability_3);
                    break;
                case 4:
                    int4 = cs2_488(varbit_conq_command_ability_4);
                    break;
                default:
                    int4 = -1;
                    break;
            }
            if (int4 == -1) {
                ifSetHide(false, Component.interface_1015.component_1015_49);
                ifSetHide(true, Component.interface_1015.component_1015_50);
                ifSetHide(true, Component.interface_1015.component_1015_51);
                ifSetHide(true, Component.interface_1015.component_1015_52);
                ifSetHide(true, Component.interface_1015.component_1015_53);
                ifSetHide(true, Component.interface_1015.component_1015_54);
            } else {
                ifSetHide(true, Component.interface_1015.component_1015_49);
                ifSetHide(false, Component.interface_1015.component_1015_50);
                ifSetHide(false, Component.interface_1015.component_1015_51);
                ifSetHide(false, Component.interface_1015.component_1015_52);
                ifSetHide(false, Component.interface_1015.component_1015_53);
                ifSetHide(false, Component.interface_1015.component_1015_54);
                ifSetText(structParam(int4, Param.conq_command_name), Component.interface_1015.component_1015_51);
                ifSetGraphic(structParam(int4, Param.conq_command_icon), Component.interface_1015.component_1015_50);
                ifSetText(structParam(int4, Param.conq_command_desc), Component.interface_1015.component_1015_52);
                ifSetText(append("Cooldown: ", tostring(structParam(int4, Param.conq_command_cooldown))), Component.interface_1015.component_1015_53);
                ifSetText(append("Cost: ", tostring(structParam(int4, Param.conq_command_cost))), Component.interface_1015.component_1015_54);
            }
        }
    }
}
