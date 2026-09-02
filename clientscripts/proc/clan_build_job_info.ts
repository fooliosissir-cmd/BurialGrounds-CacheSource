/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,clan_build_job_info]

function clan_build_job_info(intArg0: number): [graphic, string, number, number, number, number, number, number] {
    let int1: graphic = -1;
    let str0: string = "";
    let int2: number = 0;
    let int3: struct = enumOp(type_int, type_struct, Enum.clan_build_jobinfo, intArg0);

    if (int3 == -1) {
        mes("Clan Build Tick : Job ID " + tostring(intArg0) + " has no associated struct. Please report this as a bug, quoting this line.");
        return [-1, "", 0, 0, 0, 0, 0, 0];
    }
    let int4: number = structParam(int3, Param.clan_build_plot_type);
    let int5: number = structParam(int3, Param.clan_build_plot_index);
    let int6: number = 0;
    let int7: number = 0;
    let int8: number = 0;
    let int9: Enum = -1;
    let int10: number = 0;
    let int11: Enum = -1;
    let int12: Enum = -1;
    let int13: number = 0;

    if (clanProfileFind() == 1) {
        switch (int4) {
            case 1:
                str0 = "Stronghold";
                int1 = Graphic.aif_clan_skill_plot_icons_8;
                int6 = loadClanVarbit<2580>();
                int7 = min(loadClanVarbit<2633>(), int6 - 1);
                int2 = loadClanVarbit<2600>() + loadClanVarbit<2616>();
                break;
            case 2:
                str0 = "Storehouse";
                int1 = Graphic.aif_clan_skill_plot_icons_9;
                int6 = loadClanVarbit<2581>();
                int7 = min(loadClanVarbit<2631>(), int6 - 1);
                int2 = loadClanVarbit<2596>() + loadClanVarbit<2614>();
                break;
            case 3:
                str0 = "Battlefield";
                int1 = Graphic.aif_clan_skill_plot_icons_7;
                int6 = loadClanVarbit<2582>();
                int7 = min(loadClanVarbit<2632>(), int6 - 1);
                int2 = loadClanVarbit<2597>() + loadClanVarbit<2615>();
                break;
            case 4:
                switch (int5) {
                    case 1:
                        int8 = loadClanVarbit<2553>();
                        int6 = loadClanVarbit<2567>();
                        if (int8 == 1) {
                            int13 = 1;
                        }
                        int7 = min(loadClanVarbit<2617>(), int6 - int13);
                        int2 = loadClanVarbit<2584>() + loadClanVarbit<2602>();
                        break;
                    case 2:
                        int8 = loadClanVarbit<2554>();
                        int6 = loadClanVarbit<2568>();
                        if (int8 == 1) {
                            int13 = 1;
                        }
                        int7 = min(loadClanVarbit<2618>(), int6 - int13);
                        int2 = loadClanVarbit<2585>() + loadClanVarbit<2603>();
                        break;
                    case 3:
                        int8 = loadClanVarbit<2555>();
                        int6 = loadClanVarbit<2569>();
                        if (int8 == 1) {
                            int13 = 1;
                        }
                        int7 = min(loadClanVarbit<2620>(), int6 - int13);
                        int2 = loadClanVarbit<2586>() + loadClanVarbit<2604>();
                        break;
                    case 4:
                        int8 = loadClanVarbit<2556>();
                        int6 = loadClanVarbit<2570>();
                        if (int8 == 1) {
                            int13 = 1;
                        }
                        int7 = min(loadClanVarbit<2621>(), int6 - int13);
                        int2 = loadClanVarbit<2587>() + loadClanVarbit<2605>();
                        break;
                    case 5:
                        int8 = loadClanVarbit<2557>();
                        int6 = loadClanVarbit<2571>();
                        if (int8 == 1) {
                            int13 = 1;
                        }
                        int7 = min(loadClanVarbit<2622>(), int6 - int13);
                        int2 = loadClanVarbit<2588>() + loadClanVarbit<2606>();
                        break;
                    case 6:
                        int8 = loadClanVarbit<2558>();
                        int6 = loadClanVarbit<2572>();
                        if (int8 == 1) {
                            int13 = 1;
                        }
                        int7 = min(loadClanVarbit<2623>(), int6 - int13);
                        int2 = loadClanVarbit<2589>() + loadClanVarbit<2607>();
                        break;
                    case 7:
                        int8 = loadClanVarbit<2560>();
                        int6 = loadClanVarbit<2573>();
                        if (int8 == 1) {
                            int13 = 1;
                        }
                        int7 = min(loadClanVarbit<2624>(), int6 - int13);
                        int2 = loadClanVarbit<2590>() + loadClanVarbit<2608>();
                        break;
                    case 8:
                        int8 = loadClanVarbit<2561>();
                        int6 = loadClanVarbit<2574>();
                        if (int8 == 1) {
                            int13 = 1;
                        }
                        int7 = min(loadClanVarbit<2625>(), int6 - int13);
                        int2 = loadClanVarbit<2591>() + loadClanVarbit<2609>();
                        break;
                    case 9:
                        int8 = loadClanVarbit<2562>();
                        int6 = loadClanVarbit<2576>();
                        if (int8 == 1) {
                            int13 = 1;
                        }
                        int7 = min(loadClanVarbit<2626>(), int6 - int13);
                        int2 = loadClanVarbit<2592>() + loadClanVarbit<2610>();
                        break;
                    case 10:
                        int8 = loadClanVarbit<2563>();
                        int6 = loadClanVarbit<2577>();
                        if (int8 == 1) {
                            int13 = 1;
                        }
                        int7 = min(loadClanVarbit<2627>(), int6 - int13);
                        int2 = loadClanVarbit<2593>() + loadClanVarbit<2611>();
                        break;
                    case 11:
                        int8 = loadClanVarbit<2564>();
                        int6 = loadClanVarbit<2578>();
                        if (int8 == 1) {
                            int13 = 1;
                        }
                        int7 = min(loadClanVarbit<2629>(), int6 - int13);
                        int2 = loadClanVarbit<2594>() + loadClanVarbit<2612>();
                        break;
                    case 12:
                        int8 = loadClanVarbit<2565>();
                        int6 = loadClanVarbit<2579>();
                        if (int8 == 1) {
                            int13 = 1;
                        }
                        int7 = min(loadClanVarbit<2630>(), int6 - int13);
                        int2 = loadClanVarbit<2595>() + loadClanVarbit<2613>();
                        break;
                    default:
                        mes("Clan Build Tick : No skill plot found with index " + tostring(int5) + ". Please report this as a bug, quoting this line.");
                        break;
                }
                str0 = enumOp(type_int, type_string, Enum.enum_4287, int8);
                int1 = enumOp(type_int, type_graphic, Enum.clan_plot_type_int2graphic, int8);
                break;
            case 5:
                switch (int5) {
                    case 1:
                        int8 = loadClanVarbit<2139>();
                        int6 = loadClanVarbit<2140>();
                        break;
                    case 2:
                        int8 = loadClanVarbit<2156>();
                        int6 = loadClanVarbit<2157>();
                        break;
                    case 3:
                        int8 = loadClanVarbit<2173>();
                        int6 = loadClanVarbit<2174>();
                        break;
                    default:
                        mes("Clan Build Tick : No cosmetic job slot found with index " + tostring(int5) + ". Please report this as a bug, quoting this line.");
                        break;
                }
                int9 = cs2_4820(int5);
                int11 = cs2_4823(int5);
                int12 = cs2_4826(int5);
                if (intArg0 == 16 || intArg0 == 17 || intArg0 == 18) {
                    str0 = "Reset hotspot (slot " + tostring(int5) + ").";
                    int1 = Graphic.aif_loyalty_icon_2_0;
                } else {
                    str0 = enumOp(type_int, type_string, int11, int8);
                    int1 = enumOp(type_int, type_graphic, int12, int8);
                }
                break;
            default:
                mes("Clan Build Tick : Unexpected job building class " + tostring(int4) + ". Please report this as a bug, quoting this line.");
                return [-1, "", 0, 0, 0, 0, 0, 0];
        }
    } else {
        mes("Clan Build Tick : Could not access clan profile.");
        return [-1, "", 0, 0, 0, 0, 0, 0];
    }

    if (intArg0 > 600 && int4 != 5) {
        int6 = int6 + 1;
    }
    return [int1, str0, int6, int7, int2, int4, int5, int8];
}
