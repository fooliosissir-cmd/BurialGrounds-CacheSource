/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_431

function cs2_431(intArg0: component, intArg1: number): void {
    let int2: component = -1;
    let int3: component = -1;
    let int4: number = 0;
    let int5: struct = -1;
    let int6: number = -1;

    switch (intArg0) {
        case Component.interface_1024.component_1024_8:
            int2 = Component.interface_1024.component_1024_80;
            int3 = Component.interface_1024.component_1024_81;
            if (varc_conq_in_tutorial == 1) {
                int4 = 1;
            } else {
                int4 = varbit_conq_command_ability_1;
            }
            break;
        case Component.interface_1024.component_1024_9:
            int2 = Component.interface_1024.component_1024_63;
            int3 = Component.interface_1024.component_1024_64;
            if (varc_conq_in_tutorial == 1) {
                int4 = 3;
            } else {
                int4 = varbit_conq_command_ability_2;
            }
            break;
        case Component.interface_1024.component_1024_10:
            int2 = Component.interface_1024.component_1024_46;
            int3 = Component.interface_1024.component_1024_47;
            if (varc_conq_in_tutorial == 1) {
                int4 = 5;
            } else {
                int4 = varbit_conq_command_ability_3;
            }
            break;
        case Component.interface_1024.component_1024_11:
            int2 = Component.interface_1024.component_1024_29;
            int3 = Component.interface_1024.component_1024_30;
            if (varc_conq_in_tutorial == 1) {
                int4 = 6;
            } else {
                int4 = varbit_conq_command_ability_4;
            }
            break;
        default:
            return;
    }

    switch (int4) {
        case 1:
            int5 = Struct.conq_command_battle_cry;
            break;
        case 2:
            int5 = Struct.conq_command_stoicism;
            break;
        case 3:
            int5 = Struct.conq_command_regenerate;
            break;
        case 4:
            int5 = Struct.conq_command_barrage;
            break;
        case 5:
            int5 = Struct.conq_command_bloodlust;
            break;
        case 6:
            int5 = Struct.conq_command_chastise;
            break;
        case 7:
            int5 = Struct.conq_command_vigilance;
            break;
        case 8:
            int5 = Struct.conq_command_shield_wall;
            break;
        case 9:
            int5 = Struct.conq_command_winds_of_change;
            break;
        default:
            return;
    }

    if (intArg1 == 1) {
        ifSetHide(false, int2);
        ifSetHide(false, int3);
        ifSettargetcursors(structParam(int5, Param.conq_command_cursor), structParam(int5, Param.conq_command_cursor), intArg0);
    } else {
        ifSetHide(true, int2);
        ifSetHide(true, int3);
    }
}
