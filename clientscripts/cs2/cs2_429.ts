/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_429

function cs2_429(intArg0: number): void {
    let int1: number = 0;
    let int2: number = 0;
    let int3: component = -1;
    let int4: component = -1;
    let int5: component = -1;
    let int6: component = -1;
    let int7: number = 0;
    let int8: component = -1;

    switch (intArg0) {
        case 67108942:
        case 67108940:
            if (varc_conq_in_tutorial == 1) {
                int1 = 1;
            } else {
                int1 = varbit_conq_command_ability_1;
            }
            int3 = Component.interface_1024.component_1024_77;
            int4 = Component.interface_1024.component_1024_79;
            int5 = Component.interface_1024.component_1024_75;
            int6 = Component.interface_1024.component_1024_76;
            int8 = Component.interface_1024.component_1024_78;
            break;
        case 67108925:
        case 67108923:
            if (varc_conq_in_tutorial == 1) {
                int1 = 3;
            } else {
                int1 = varbit_conq_command_ability_2;
            }
            int3 = Component.interface_1024.component_1024_60;
            int4 = Component.interface_1024.component_1024_62;
            int5 = Component.interface_1024.component_1024_58;
            int6 = Component.interface_1024.component_1024_59;
            int8 = Component.interface_1024.component_1024_61;
            break;
        case 67108908:
        case 67108906:
            if (varc_conq_in_tutorial == 1) {
                int1 = 5;
            } else {
                int1 = varbit_conq_command_ability_3;
            }
            int3 = Component.interface_1024.component_1024_43;
            int4 = Component.interface_1024.component_1024_45;
            int5 = Component.interface_1024.component_1024_41;
            int6 = Component.interface_1024.component_1024_42;
            int8 = Component.interface_1024.component_1024_44;
            break;
        case 67108891:
        case 67108889:
            if (varc_conq_in_tutorial == 1) {
                int1 = 6;
            } else {
                int1 = varbit_conq_command_ability_4;
            }
            int3 = Component.interface_1024.component_1024_26;
            int4 = Component.interface_1024.component_1024_28;
            int5 = Component.interface_1024.component_1024_24;
            int6 = Component.interface_1024.component_1024_25;
            int8 = Component.interface_1024.component_1024_27;
            break;
        default:
            return;
    }

    switch (int1) {
        case 1:
            int2 = varc_conq_cooldown_battle_cry;
            int7 = structParam(Struct.conq_command_battle_cry, Param.conq_command_cost);
            break;
        case 2:
            int2 = varc_conq_cooldown_stoicism;
            int7 = structParam(Struct.conq_command_stoicism, Param.conq_command_cost);
            break;
        case 3:
            int2 = varc_conq_cooldown_regenerate;
            int7 = structParam(Struct.conq_command_regenerate, Param.conq_command_cost);
            break;
        case 4:
            int2 = varc_conq_cooldown_barrage;
            int7 = structParam(Struct.conq_command_barrage, Param.conq_command_cost);
            break;
        case 5:
            int2 = varc_conq_cooldown_bloodlust;
            int7 = structParam(Struct.conq_command_bloodlust, Param.conq_command_cost);
            break;
        case 6:
            int2 = varc_conq_cooldown_chastise;
            int7 = structParam(Struct.conq_command_chastise, Param.conq_command_cost);
            break;
        case 7:
            int2 = varc_conq_cooldown_vigilance;
            int7 = structParam(Struct.conq_command_vigilance, Param.conq_command_cost);
            break;
        case 8:
            int2 = varc_conq_cooldown_shield_wall;
            int7 = structParam(Struct.conq_command_shield_wall, Param.conq_command_cost);
            break;
        case 9:
            int2 = varc_conq_cooldown_winds_of_change;
            int7 = structParam(Struct.conq_command_winds_of_change, Param.conq_command_cost);
            break;
        default:
            return;
    }

    if (int2 > 0 || varbit_conq_command_points < int7) {
        if (int2 > 0) {
            ifSetText(tostring(int2), int8);
        }
        ifSetColour(colour(0x282828), int3);
        ifSetHide(false, int4);
        ifSetColour(colour(0x7D7D7D), int5);
        ifSetColour(colour(0x7D7D7D), int6);
    } else {
        ifSetText("", int8);
        ifSetColour(colour(0x000000), int3);
        ifSetHide(true, int4);
        ifSetColour(colour(0xFF981F), int5);
        ifSetColour(colour(0xFF981F), int6);
    }
}
