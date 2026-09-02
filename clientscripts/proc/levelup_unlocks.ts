/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,levelup_unlocks]

function levelup_unlocks(intArg0: number, intArg1: number): void {
    let int2: obj = Obj.mcannonremains;

    switch (intArg0) {
        case 1:
            int2 = varc_1469;
            break;
        case 2:
            int2 = varc_1470;
            break;
        case 5:
            int2 = varc_1471;
            break;
        case 3:
            int2 = varc_1472;
            break;
        case 7:
            int2 = varc_1473;
            break;
        case 4:
            int2 = varc_1474;
            break;
        case 6:
            int2 = varc_1475;
            break;
        case 8:
            int2 = varc_1476;
            break;
        case 9:
            int2 = varc_1477;
            break;
        case 10:
            int2 = varc_1478;
            break;
        case 11:
            int2 = varc_1479;
            break;
        case 19:
            int2 = varc_1480;
            break;
        case 13:
            int2 = varc_1481;
            break;
        case 14:
            int2 = varc_1482;
            break;
        case 15:
            int2 = varc_1483;
            break;
        case 16:
            int2 = varc_1484;
            break;
        case 17:
            int2 = varc_1485;
            break;
        case 18:
            int2 = varc_1486;
            break;
        case 12:
            int2 = varc_1487;
            break;
        case 20:
            int2 = varc_1488;
            break;
        case 21:
            int2 = varc_1489;
            break;
        case 22:
            int2 = varc_1490;
            break;
        case 23:
            int2 = varc_1491;
            break;
        case 24:
            int2 = varc_1492;
            break;
        case 25:
            int2 = varc_1493;
            break;
    }
    let int3: obj = statBase(enumOp(type_int, type_stat, Enum.int_to_stat, intArg0));
    let int4: Enum = enumOp(type_int, type_enum, Enum.skillguide_skills, intArg0);
    let int5: number = enumGetoutputcount(int4);
    let int6: stat = enumOp(type_int, type_stat, Enum.int_to_stat, intArg0);
    int6 = enumOp(type_stat, type_stat, Enum.stat_f2p_list, int6);
    let int7: obj = Obj.mcannonremains;
    let int8: number = 0;
    let int9: number = 0;
    let int10: graphic = -1;
    let int11: number = 0;
    let int12: number = 0;
    let str0: string = "";
    intArg1 = intArg1 / 5;

    if (int3 > int2) {
        if (varbit_lvl_combat_level_change == 1) {
            varbit_lvl_combat_level_change = 0;
            cs2_3367("Increased Combat level!", int9, intArg1);
            int9 = int9 + 1;
        }
        if (intArg0 == 7 || intArg0 == 6) {
            if (intArg0 == 7) {
                cs2_3367("More prayer points!", int9, intArg1);
            } else {
                cs2_3367("More lifepoints!", int9, intArg1);
            }
            int9 = int9 + 1;
        }
        while (int8 < int5 && int9 < 5) {
            int7 = structParam(enumOp(type_int, type_struct, int4, int8), Param.skillguide_level);
            if (int7 == int3 && structParam(enumOp(type_int, type_struct, int4, int8), Param.show_on_levelup) == 1) {
                ccCreate(Component.interface_1216.component_1216_3, 4, ifGetNextSubId(Component.interface_1216.component_1216_3));
                ccSetPosition(0, 25, 1, 2);
                int12 = stringWidth(structParam(enumOp(type_int, type_struct, int4, int8), Param.skillguide_name), Graphic.graphic_3795) + stringWidth("New", Graphic.graphic_3795);
                if (structParam(enumOp(type_int, type_struct, int4, int8), Param.skillguide_members) == 0) {
                    int6 = 0;
                } else {
                    int6 = -1;
                }
                ccSetSize(0, 33, 1, 0);
                ccSetOnTimer(hook(cs2_3368, "isi", [event_comsubid, structParam(enumOp(type_int, type_struct, int4, int8), Param.skillguide_name), clientClock() + int9 * intArg1]));
                int11 = ccGetX();
                ccCreate(Component.interface_1216.component_1216_3, 5, ifGetNextSubId(Component.interface_1216.component_1216_3));
                ccSetPosition(0, 24, 1, 2);
                ccSetSize(int12, 33, 0, 0);
                ccSettiling(true);
                if (int6 == -1) {
                    int10 = Graphic.graphic_9257;
                } else {
                    int10 = Graphic.graphic_9240;
                }
                ccSetOnTimer(hook(cs2_4226, "idi", [event_comsubid, int10, clientClock() + int9 * intArg1]));
                ccSendtoback();
                int11 = ccGetX();
                int12 = ccGetWidth();
                ccCreate(Component.interface_1216.component_1216_3, 5, ifGetNextSubId(Component.interface_1216.component_1216_3));
                ccSetPosition(int11 - 50, 24, 0, 2);
                ccSetSize(50, 33, 0, 0);
                if (int6 == -1) {
                    int10 = Graphic.graphic_9256;
                } else {
                    int10 = Graphic.graphic_9239;
                }
                ccSetOnTimer(hook(cs2_4226, "idi", [event_comsubid, int10, clientClock() + int9 * intArg1]));
                ccSendtoback();
                ccCreate(Component.interface_1216.component_1216_3, 5, ifGetNextSubId(Component.interface_1216.component_1216_3));
                ccSetPosition(int11 + int12, 24, 0, 2);
                ccSetSize(50, 33, 0, 0);
                if (int6 == -1) {
                    int10 = Graphic.graphic_9258;
                } else {
                    int10 = Graphic.graphic_9241;
                }
                ccSetOnTimer(hook(cs2_4226, "idi", [event_comsubid, int10, clientClock() + int9 * intArg1]));
                ccSendtoback();
                ccCreate(Component.interface_1216.component_1216_0, 6, ifGetNextSubId(Component.interface_1216.component_1216_0));
                ccSetModel(Model.model_32144);
                ccSetSize(32, 32, 0, 0);
                ccSetModelAnim(15754);
                ccSetModelAngle(0, 0, 512, 0, 0, 1500 + random(1000));
                int12 = stringWidth(structParam(enumOp(type_int, type_struct, int4, int8), Param.skillguide_name), Graphic.graphic_3795) / 2 + 20;
                if (random(2) == 0) {
                    ccSetPosition(int12, 120, 1, 0);
                } else {
                    ccSetPosition(int12 * -1, 120, 1, 0);
                }
                ccSetOnTimer(hook(cs2_3369, "iii", [event_comsubid, clientClock() + int9 * intArg1, 0]));
                int9 = int9 + 1;
            }
            int8 = int8 + 1;
        }
    }
}
