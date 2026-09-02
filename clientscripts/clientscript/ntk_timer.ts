/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,ntk_timer]

function ntk_timer(intArg0: component, intArg1: component, intArg2: component): void {
    let int3: number = min(varbit_ntk_player_timer_count, 500);

    ifSetSize(0, scale(500 - int3, 500, 16384), 1, 2, intArg0);
    let int4: number = 164 + scale(int3, 500, 91);
    let int5: number = 164 - scale(int3, 500, 164);
    let int6: number = 41 - scale(int3, 500, 41);
    let int7: colour = rgb_to_hex(int4, int5, int6);
    ifSetColour(int7, intArg0);
    ifSetColour(int7, intArg1);

    switch (scale(int3 + 5, 500, 25)) {
        case 0:
            ifSetModel(Model.if_game_ntk_sand_01, intArg2);
            break;
        case 1:
            ifSetModel(Model.if_game_ntk_sand_02, intArg2);
            break;
        case 2:
            ifSetModel(Model.if_game_ntk_sand_03, intArg2);
            break;
        case 3:
            ifSetModel(Model.if_game_ntk_sand_04, intArg2);
            break;
        case 4:
            ifSetModel(Model.if_game_ntk_sand_05, intArg2);
            break;
        case 5:
            ifSetModel(Model.if_game_ntk_sand_06, intArg2);
            break;
        case 6:
            ifSetModel(Model.if_game_ntk_sand_07, intArg2);
            break;
        case 7:
            ifSetModel(Model.if_game_ntk_sand_08, intArg2);
            break;
        case 8:
            ifSetModel(Model.if_game_ntk_sand_09, intArg2);
            break;
        case 9:
            ifSetModel(Model.if_game_ntk_sand_10, intArg2);
            break;
        case 10:
            ifSetModel(Model.if_game_ntk_sand_11, intArg2);
            break;
        case 11:
            ifSetModel(Model.if_game_ntk_sand_12, intArg2);
            break;
        case 12:
            ifSetModel(Model.if_game_ntk_sand_13, intArg2);
            break;
        case 13:
            ifSetModel(Model.if_game_ntk_sand_14, intArg2);
            break;
        case 14:
            ifSetModel(Model.if_game_ntk_sand_15, intArg2);
            break;
        case 15:
            ifSetModel(Model.if_game_ntk_sand_16, intArg2);
            break;
        case 16:
            ifSetModel(Model.if_game_ntk_sand_17, intArg2);
            break;
        case 17:
            ifSetModel(Model.if_game_ntk_sand_18, intArg2);
            break;
        case 18:
            ifSetModel(Model.if_game_ntk_sand_19, intArg2);
            break;
        case 19:
            ifSetModel(Model.if_game_ntk_sand_20, intArg2);
            break;
        case 20:
            ifSetModel(Model.if_game_ntk_sand_21, intArg2);
            break;
        case 21:
            ifSetModel(Model.if_game_ntk_sand_22, intArg2);
            break;
        case 22:
            ifSetModel(Model.if_game_ntk_sand_23, intArg2);
            break;
        case 23:
            ifSetModel(Model.if_game_ntk_sand_24, intArg2);
            break;
        case 24:
            ifSetModel(Model.if_game_ntk_sand_25, intArg2);
            break;
        default:
            ifSetModel(Model.if_game_ntk_sand_26, intArg2);
            break;
    }
}
