/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5746

function cs2_5746(): void {
    let int0: Enum = cs2_5763(varp_2504);
    let int1: stat = varp_2504;
    let int2: number = 0;
    let int3: number = 0;
    let int4: number = enumGetoutputcount(int0) - 1;
    let int5: struct = -1;
    let int6: struct = -1;
    let int7: number = 1;
    let int8: number = 1;
    let int9: number = 0;

    ccDeleteAll(Component.interface_1239.component_1239_8);

    while (int4 >= 0) {
        int9 = 0;
        int7 = 1;
        int5 = enumOp(type_int, type_struct, int0, int4);
        int6 = enumOp(type_struct, type_struct, Enum.enum_5483, int5);
        if (int6 != -1) {
            int5 = int6;
        }
        if (cs2_5729(int5, int1) == 0) {
            int7 = 0;
        } else if (int1 == 0) {
            if (comlevel() < structParam(int5, Param.param_2233)) {
                int7 = 0;
            }
            if (int7 == 1) {
                switch (structParam(int5, Param.task_requirement_1_type)) {
                    case 1:
                    case 2:
                    case 5:
                    case 3:
                    case 4:
                    case 6:
                        if (statBase(enumOp(type_int, type_stat, Enum.int_to_stat, structParam(int5, Param.task_requirement_1_type))) >= structParam(int5, Param.task_requirement_1_value)) {
                            break;
                        }
                        int7 = 0;
                        break;
                }
            }
            if (int7 == 1) {
                switch (structParam(int5, Param.task_requirement_2_type)) {
                    case 1:
                    case 2:
                    case 5:
                    case 3:
                    case 4:
                    case 6:
                        if (statBase(enumOp(type_int, type_stat, Enum.int_to_stat, structParam(int5, Param.task_requirement_2_type))) >= structParam(int5, Param.task_requirement_2_value)) {
                            break;
                        }
                        int7 = 0;
                        break;
                }
            }
            if (int7 == 1) {
                switch (structParam(int5, Param.param_1298)) {
                    case 1:
                    case 2:
                    case 5:
                    case 3:
                    case 4:
                    case 6:
                        if (statBase(enumOp(type_int, type_stat, Enum.int_to_stat, structParam(int5, Param.param_1298))) >= structParam(int5, Param.param_1299)) {
                            break;
                        }
                        int7 = 0;
                        break;
                }
            }
            if (int7 == 1) {
                switch (structParam(int5, Param.param_1300)) {
                    case 1:
                    case 2:
                    case 5:
                    case 3:
                    case 4:
                    case 6:
                        if (statBase(enumOp(type_int, type_stat, Enum.int_to_stat, structParam(int5, Param.param_1300))) >= structParam(int5, Param.param_1301)) {
                            break;
                        }
                        int7 = 0;
                        break;
                }
            }
            if (int7 == 1) {
                switch (structParam(int5, Param.param_1302)) {
                    case 1:
                    case 2:
                    case 5:
                    case 3:
                    case 4:
                    case 6:
                        if (statBase(enumOp(type_int, type_stat, Enum.int_to_stat, structParam(int5, Param.param_1302))) >= structParam(int5, Param.param_1303)) {
                            break;
                        }
                        int7 = 0;
                        break;
                }
            }
            if (int7 == 1) {
                switch (structParam(int5, Param.param_1304)) {
                    case 1:
                    case 2:
                    case 5:
                    case 3:
                    case 4:
                    case 6:
                        if (statBase(enumOp(type_int, type_stat, Enum.int_to_stat, structParam(int5, Param.param_1304))) >= structParam(int5, Param.param_1305)) {
                            break;
                        }
                        int7 = 0;
                        break;
                }
            }
            if (int7 == 1) {
                switch (structParam(int5, Param.param_1306)) {
                    case 1:
                    case 2:
                    case 5:
                    case 3:
                    case 4:
                    case 6:
                        if (statBase(enumOp(type_int, type_stat, Enum.int_to_stat, structParam(int5, Param.param_1306))) >= structParam(int5, Param.param_1307)) {
                            break;
                        }
                        int7 = 0;
                        break;
                }
            }
            if (int7 == 1) {
                switch (structParam(int5, Param.param_1308)) {
                    case 1:
                    case 2:
                    case 5:
                    case 3:
                    case 4:
                    case 6:
                        if (statBase(enumOp(type_int, type_stat, Enum.int_to_stat, structParam(int5, Param.param_1308))) >= structParam(int5, Param.param_1309)) {
                            break;
                        }
                        int7 = 0;
                        break;
                }
            }
            if (int7 == 1) {
                switch (structParam(int5, Param.param_1310)) {
                    case 1:
                    case 2:
                    case 5:
                    case 3:
                    case 4:
                    case 6:
                        if (statBase(enumOp(type_int, type_stat, Enum.int_to_stat, structParam(int5, Param.param_1310))) >= structParam(int5, Param.param_1311)) {
                            break;
                        }
                        int7 = 0;
                        break;
                }
            }
            if (int7 == 1) {
                switch (structParam(int5, Param.param_1312)) {
                    case 1:
                    case 2:
                    case 5:
                    case 3:
                    case 4:
                    case 6:
                        if (statBase(enumOp(type_int, type_stat, Enum.int_to_stat, structParam(int5, Param.param_1312))) >= structParam(int5, Param.param_1313)) {
                            break;
                        }
                        int7 = 0;
                        break;
                }
            }
            if (int7 == 1) {
                switch (structParam(int5, Param.param_2227)) {
                    case 1:
                    case 2:
                    case 5:
                    case 3:
                    case 4:
                    case 6:
                        if (statBase(enumOp(type_int, type_stat, Enum.int_to_stat, structParam(int5, Param.param_2227))) >= structParam(int5, Param.param_2228)) {
                            break;
                        }
                        int7 = 0;
                        break;
                }
            }
            if (int7 == 1) {
                switch (structParam(int5, Param.param_2229)) {
                    case 1:
                    case 2:
                    case 5:
                    case 3:
                    case 4:
                    case 6:
                        if (statBase(enumOp(type_int, type_stat, Enum.int_to_stat, structParam(int5, Param.param_2229))) >= structParam(int5, Param.param_2230)) {
                            break;
                        }
                        int7 = 0;
                        break;
                }
            }
        } else {
            if (structParam(int5, Param.task_requirement_1_type) == enumOp(type_stat, type_int, Enum.stat_to_int, int1) && statBase(int1) < structParam(int5, Param.task_requirement_1_value)) {
                int7 = 0;
            }
            if (structParam(int5, Param.task_requirement_2_type) == enumOp(type_stat, type_int, Enum.stat_to_int, int1) && statBase(int1) < structParam(int5, Param.task_requirement_2_value)) {
                int7 = 0;
            }
            if (structParam(int5, Param.param_1298) == enumOp(type_stat, type_int, Enum.stat_to_int, int1) && statBase(int1) < structParam(int5, Param.param_1299)) {
                int7 = 0;
            }
            if (structParam(int5, Param.param_1300) == enumOp(type_stat, type_int, Enum.stat_to_int, int1) && statBase(int1) < structParam(int5, Param.param_1301)) {
                int7 = 0;
            }
            if (structParam(int5, Param.param_1302) == enumOp(type_stat, type_int, Enum.stat_to_int, int1) && statBase(int1) < structParam(int5, Param.param_1303)) {
                int7 = 0;
            }
            if (structParam(int5, Param.param_1304) == enumOp(type_stat, type_int, Enum.stat_to_int, int1) && statBase(int1) < structParam(int5, Param.param_1305)) {
                int7 = 0;
            }
            if (structParam(int5, Param.param_1306) == enumOp(type_stat, type_int, Enum.stat_to_int, int1) && statBase(int1) < structParam(int5, Param.param_1307)) {
                int7 = 0;
            }
            if (structParam(int5, Param.param_1308) == enumOp(type_stat, type_int, Enum.stat_to_int, int1) && statBase(int1) < structParam(int5, Param.param_1309)) {
                int7 = 0;
            }
            if (structParam(int5, Param.param_1310) == enumOp(type_stat, type_int, Enum.stat_to_int, int1) && statBase(int1) < structParam(int5, Param.param_1311)) {
                int7 = 0;
            }
            if (structParam(int5, Param.param_1312) == enumOp(type_stat, type_int, Enum.stat_to_int, int1) && statBase(int1) < structParam(int5, Param.param_1313)) {
                int7 = 0;
            }
            if (structParam(int5, Param.param_2227) == enumOp(type_stat, type_int, Enum.stat_to_int, int1) && statBase(int1) < structParam(int5, Param.param_2228)) {
                int7 = 0;
            }
            if (structParam(int5, Param.param_2229) == enumOp(type_stat, type_int, Enum.stat_to_int, int1) && statBase(int1) < structParam(int5, Param.param_2230)) {
                int7 = 0;
            }
        }
        if (int7 == 1) {
            int8 = task_requirements_fulfilled(structParam(int5, Param.param_1268));
            if (task_get_progress(structParam(int5, Param.param_1268)) == 2 && cs2_5732(int5) == 0) {
                int9 = 1;
            } else {
                int9 = 0;
            }
            [int2, int3] = cs2_5747(int5, int8, int9, int2, int3);
        }
        int4 = max(-1, int4 - 1);
    }

    if ((1 + int3) * 54 > ifGetHeight(Component.interface_1239.component_1239_8)) {
        ifSetHide(false, Component.interface_1239.component_1239_9);
        ifSetScrollSize(ifGetWidth(Component.interface_1239.component_1239_8), (1 + int3) * 54, Component.interface_1239.component_1239_8);
        if (varc_1771 != -1) {
            ifSetScrollPos(0, varc_1771, Component.interface_1239.component_1239_8);
        }
        proc_scrollbar_vertical(Component.interface_1239.component_1239_9, Component.interface_1239.component_1239_8, Graphic.task_scrollbar_dragger_3, Graphic.task_scrollbar_dragger_0, Graphic.task_scrollbar_dragger_1, Graphic.task_scrollbar_dragger_2, Graphic.task_scrollbar_1, Graphic.task_scrollbar_0);
        ifSetOnClick(hook(cs2_5751, "", []), Component.interface_1239.component_1239_8);
    } else {
        ifSetHide(true, Component.interface_1239.component_1239_9);
        ifSetScrollSize(0, 0, Component.interface_1239.component_1239_8);
        ifSetScrollPos(0, 0, Component.interface_1239.component_1239_8);
    }
}
