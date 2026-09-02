/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_430

function cs2_430(intArg0: number, intArg1: number): void {
    let int2: number = 0;
    let int3: colour = colour(0x000000);
    let int4: number = 0;
    let int5: component = -1;
    let int6: number = 0;

    switch (intArg0) {
        case 67108872:
            if (varc_conq_in_tutorial == 1) {
                int2 = 1;
            } else {
                int2 = varbit_conq_command_ability_1;
            }
            int5 = Component.interface_1024.component_1024_75;
            break;
        case 67108873:
            if (varc_conq_in_tutorial == 1) {
                int2 = 3;
            } else {
                int2 = varbit_conq_command_ability_2;
            }
            int5 = Component.interface_1024.component_1024_58;
            break;
        case 67108874:
            if (varc_conq_in_tutorial == 1) {
                int2 = 5;
            } else {
                int2 = varbit_conq_command_ability_3;
            }
            int5 = Component.interface_1024.component_1024_41;
            break;
        case 67108875:
            if (varc_conq_in_tutorial == 1) {
                int2 = 6;
            } else {
                int2 = varbit_conq_command_ability_4;
            }
            int5 = Component.interface_1024.component_1024_24;
            break;
        default:
            return;
    }

    switch (int2) {
        case 1:
            int4 = varc_conq_cooldown_battle_cry;
            int6 = structParam(Struct.conq_command_battle_cry, Param.conq_command_cost);
            break;
        case 2:
            int4 = varc_conq_cooldown_stoicism;
            int6 = structParam(Struct.conq_command_stoicism, Param.conq_command_cost);
            break;
        case 3:
            int4 = varc_conq_cooldown_regenerate;
            int6 = structParam(Struct.conq_command_regenerate, Param.conq_command_cost);
            break;
        case 4:
            int4 = varc_conq_cooldown_barrage;
            int6 = structParam(Struct.conq_command_barrage, Param.conq_command_cost);
            break;
        case 5:
            int4 = varc_conq_cooldown_bloodlust;
            int6 = structParam(Struct.conq_command_bloodlust, Param.conq_command_cost);
            break;
        case 6:
            int4 = varc_conq_cooldown_chastise;
            int6 = structParam(Struct.conq_command_chastise, Param.conq_command_cost);
            break;
        case 7:
            int4 = varc_conq_cooldown_vigilance;
            int6 = structParam(Struct.conq_command_vigilance, Param.conq_command_cost);
            break;
        case 8:
            int4 = varc_conq_cooldown_shield_wall;
            int6 = structParam(Struct.conq_command_shield_wall, Param.conq_command_cost);
            break;
        case 9:
            int4 = varc_conq_cooldown_winds_of_change;
            int6 = structParam(Struct.conq_command_winds_of_change, Param.conq_command_cost);
            break;
        default:
            return;
    }

    if (int4 == 0 && varbit_conq_command_points >= int6) {
        if (intArg1 == 1) {
            int3 = colour(0xFFFFFF);
        } else {
            int3 = colour(0xFF981F);
        }
        ifSetColour(int3, int5);
    }
}
