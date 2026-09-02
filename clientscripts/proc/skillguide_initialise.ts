/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,skillguide_initialise]

function skillguide_initialise(): void {
    ccDeleteAll(Component.interface_1218.component_1218_30);
    ccDeleteAll(Component.interface_1218.component_1218_72);
    let int0: number = 0;
    let int1: number = 0;
    let str0: string = "";
    let int2: obj = -1;
    let int3: number = 0;
    let int4: Enum = enumOp(type_int, type_enum, Enum.skillguide_skills, varc_skillguide_skill_clicked);
    let int5: number = enumGetoutputcount(int4);
    defineArray(0, type_int, int5 + 1);
    let int6: number = 0;
    let int7: obj = Obj.mcannontoolkit;

    switch (varc_skillguide_skill_clicked) {
        case 1:
            int7 = varc_1469;
            break;
        case 2:
            int7 = varc_1470;
            break;
        case 5:
            int7 = varc_1471;
            break;
        case 3:
            int7 = varc_1472;
            break;
        case 7:
            int7 = varc_1473;
            break;
        case 4:
            int7 = varc_1474;
            break;
        case 6:
            int7 = varc_1475;
            break;
        case 8:
            int7 = varc_1476;
            break;
        case 9:
            int7 = varc_1477;
            break;
        case 10:
            int7 = varc_1478;
            break;
        case 11:
            int7 = varc_1479;
            break;
        case 19:
            int7 = varc_1480;
            break;
        case 13:
            int7 = varc_1481;
            break;
        case 14:
            int7 = varc_1482;
            break;
        case 15:
            int7 = varc_1483;
            break;
        case 16:
            int7 = varc_1484;
            break;
        case 17:
            int7 = varc_1485;
            break;
        case 18:
            int7 = varc_1486;
            break;
        case 12:
            int7 = varc_1487;
            break;
        case 20:
            int7 = varc_1488;
            break;
        case 21:
            int7 = varc_1489;
            break;
        case 22:
            int7 = varc_1490;
            break;
        case 23:
            int7 = varc_1491;
            break;
        case 24:
            int7 = varc_1492;
            break;
        case 25:
            int7 = varc_1493;
            break;
    }
    cs2_5712(varc_skillguide_skill_clicked);
    let int8: obj = statBase(enumOp(type_int, type_stat, Enum.int_to_stat, varc_skillguide_skill_clicked));
    let int9: struct = -1;
    let int10: obj = Obj.mcannonremains;

    if (int8 > int7) {
        while (int0 != -1) {
            int0 = 0;
            [str0, int2, int0] = cs2_1023(enumOp(type_int, type_stat, Enum.int_to_stat, varc_skillguide_skill_clicked), int1);
            if (int0 == 1) {
                int3 = cs2_5686(int3, str0);
            }
            int1 = int1 + 1;
        }
        while (int6 < int5) {
            int9 = enumOp(type_int, type_struct, int4, int6);
            int10 = structParam(int9, Param.skillguide_level);
            if (int10 > int7 && int10 <= int8) {
                ccCreate(Component.interface_1218.component_1218_30, 5, ifGetNextSubId(Component.interface_1218.component_1218_30));
                if (structParam(int9, Param.skillguide_members) == 1) {
                    ccSetGraphic(Graphic.aif_skill_select_btn_1_2);
                } else {
                    ccSetGraphic(Graphic.aif_skill_select_btn_1_0);
                }
                ccSetSize(540, 40, 0, 0);
                ccSetPosition(0, 0, 0, 0);
                ccSetOnTimer(hook(cs2_5692, "iiJ", [event_comsubid, int3, int9]));
                ccSetOnClick(hook(cs2_5697, "iJs", [event_comsubid, int9, structParam(int9, Param.skillguide_info)]));
                int3 = ccGetHeight() + int3;
            }
            int6 = int6 + 1;
        }
        if (int3 > 0) {
            ifSetHide(true, Component.interface_1218.component_1218_6);
            ifSetHide(true, Component.interface_1218.component_1218_7);
            ifSetSize(546, 260, 0, 0, Component.interface_1218.component_1218_4);
            ifSetSize(16, 260, 0, 0, Component.interface_1218.component_1218_5);
            ifSetHide(false, Component.interface_1218.component_1218_2);
            ifSetHide(true, Component.interface_1218.component_1218_3);
            ifSetScrollSize(0, int3, Component.interface_1218.component_1218_4);
            ifSetScrollPos(0, 0, Component.interface_1218.component_1218_4);
            ifSetSize(0, int3, 1, 0, Component.interface_1218.component_1218_30);
            ifSetSize(0, int3, 1, 0, Component.interface_1218.component_1218_72);
            proc_scrollbar_vertical(Component.interface_1218.component_1218_5, Component.interface_1218.component_1218_4, Graphic.aif_scrollbar_dragger_2_3, Graphic.aif_scrollbar_dragger_2_0, Graphic.aif_scrollbar_dragger_2_1, Graphic.aif_scrollbar_dragger_2_2, Graphic.aif_scrollbar_arrow_2_1, Graphic.aif_scrollbar_arrow_2_0);
            return;
        }
    }
    int6 = 0;
    ifSetSize(546, 355, 0, 0, Component.interface_1218.component_1218_4);
    ifSetSize(16, 355, 0, 0, Component.interface_1218.component_1218_5);
    ifSetHide(true, Component.interface_1218.component_1218_2);

    while (int6 < int5) {
        ccCreate(Component.interface_1218.component_1218_30, 5, int6);
        int9 = enumOp(type_int, type_struct, int4, int6);
        if (structParam(int9, Param.skillguide_members) == 1) {
            ccSetGraphic(Graphic.aif_skill_select_btn_1_2);
        } else {
            ccSetGraphic(Graphic.aif_skill_select_btn_1_0);
        }
        ccSetSize(540, 40, 0, 0);
        ccSetPosition(5, 5, 0, 0);
        ccHookMouseEnter(hook(cs2_5695, "i", [event_comsubid]));
        ccHookMouseExit(hook(cs2_5696, "i", [event_comsubid]));
        ccSetOnClick(hook(cs2_5697, "iJs", [event_comsubid, int9, structParam(int9, Param.skillguide_info)]));
        array0[int6] = int6;
        int6 = int6 + 1;
    }
    varc_1754 = 1;
    array0[int5] = -1;
    cs2_5698(0, 0, int5 - 1, int4);
    int6 = 0;
    ifSetParamInt(Param.param_2221, array0[int6], Component.interface_1218.component_1218_30);
    ifSetParamInt(Param.param_2222, array0[int5 - 1], Component.interface_1218.component_1218_30);

    while (int6 < int5) {
        if (ccFind(Component.interface_1218.component_1218_30, array0[int6]) == 1) {
            ccSetParamInt(Param.param_2221, array0[int6 + 1]);
            if (int6 > 0) {
                ccSetParamInt(Param.param_2222, array0[int6 - 1]);
            }
        }
        int6 = int6 + 1;
    }
    int6 = 0;
    cs2_5699(0, 0, int5 - 1, int4);
    ifSetParamInt(Param.param_2223, array0[int6], Component.interface_1218.component_1218_30);
    ifSetParamInt(Param.param_2224, array0[int5 - 1], Component.interface_1218.component_1218_30);

    while (int6 < int5) {
        if (ccFind(Component.interface_1218.component_1218_30, array0[int6]) == 1) {
            ccSetParamInt(Param.param_2223, array0[int6 + 1]);
            if (int6 > 0) {
                ccSetParamInt(Param.param_2224, array0[int6 - 1]);
            }
        }
        int6 = int6 + 1;
    }
    ifSetScrollPos(0, 0, Component.interface_1218.component_1218_4);
    skillguide_skill_refresh(varc_skillguide_skill_clicked);
}
