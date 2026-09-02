/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5736

function cs2_5736(intArg0: number, intArg1: number, intArg2: number, intArg3: component): number {
    let int4: struct = enumOp(type_int, type_struct, Enum.enum_3483, intArg1);
    let int5: struct = -1;
    let int6: number = 0;
    let int7: number = 0;
    let int8: number = -1;
    let int9: number = 0;
    let str0: string = "";
    let int10: struct = -1;

    switch (intArg2) {
        case 0:
            int6 = structParam(int4, Param.task_requirement_1_type);
            int7 = structParam(int4, Param.task_requirement_1_value);
            break;
        case 1:
            int6 = structParam(int4, Param.task_requirement_2_type);
            int7 = structParam(int4, Param.task_requirement_2_value);
            break;
        case 2:
            int6 = structParam(int4, Param.param_1298);
            int7 = structParam(int4, Param.param_1299);
            break;
        case 3:
            int6 = structParam(int4, Param.param_1300);
            int7 = structParam(int4, Param.param_1301);
            break;
        case 4:
            int6 = structParam(int4, Param.param_1302);
            int7 = structParam(int4, Param.param_1303);
            break;
        case 5:
            int6 = structParam(int4, Param.param_1304);
            int7 = structParam(int4, Param.param_1305);
            break;
        case 6:
            int6 = structParam(int4, Param.param_1306);
            int7 = structParam(int4, Param.param_1307);
            break;
        case 7:
            int6 = structParam(int4, Param.param_1308);
            int7 = structParam(int4, Param.param_1309);
            break;
        case 8:
            int6 = structParam(int4, Param.param_1310);
            int7 = structParam(int4, Param.param_1311);
            break;
        case 9:
            int6 = structParam(int4, Param.param_1312);
            int7 = structParam(int4, Param.param_1313);
            break;
        case 10:
            int6 = structParam(int4, Param.param_2227);
            int7 = structParam(int4, Param.param_2228);
            break;
        case 11:
            int6 = structParam(int4, Param.param_2229);
            int7 = structParam(int4, Param.param_2230);
            break;
    }

    if (int6 == 0) {
        return intArg0;
    } else if (int6 < 60) {
        int8 = enumOp(type_int, type_stat, Enum.int_to_stat, int6);
        if (int8 != -1) {
            str0 = "Level " + tostring(int7) + " " + enumOp(type_int, type_string, Enum.statstring, int6) + " required.";
        }
    } else if (int6 == 61) {
        int10 = enumOp(type_int, type_struct, Enum.enum_2252, int7);
        str0 = "You must complete the quest '" + structParam(int10, Param.param_845) + "'.";
    } else if (int6 == 60) {
        int5 = task_get_data(int7);
        if (int5 == -1) {
            return intArg0;
        }
        str0 = "You must complete the Task '" + structParam(int5, Param.task_name) + "'.";
    } else {
        str0 = removetags(task_special_requirements(intArg1, intArg2 + 1));
    }
    let int11: number = 0;

    if (compare(str0, "") != 0) {
        ifSetHide(false, intArg3);
        ifSetText(str0, intArg3);
        ifSetTextFont(Graphic.verdana_11pt_regular, intArg3);
        ifSetTextAlign(0, 1, 13, intArg3);
        int11 = ifGetWidth(ifGetLayer(intArg3)) - 18;
        int9 = 15 * paraheight(str0, int11, Graphic.verdana_11pt_regular);
        ifSetSize(int11, int9, 0, 0, intArg3);
        ifSetPosition(9, intArg0, 0, 0, intArg3);
    } else {
        int9 = 0;
    }
    return intArg0 + int9;
}
