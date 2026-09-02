/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5799

function cs2_5799(intArg0: number, intArg1: struct, intArg2: number, intArg3: component, strArg0: string): number {
    if (cs2_3999(intArg0) == 0) {
        intArg1 = task_get_data(intArg0);
    } else {
        intArg1 = task_get_data(structParam(intArg1, Param.param_1268));
    }

    if (intArg1 == -1) {
        return 0;
    }
    let str1: string = "";
    let int4: number = 0;

    switch (intArg2) {
        case 0:
            str1 = strArg0;
            break;
        case 1:
            str1 = structParam(intArg1, Param.task_step_1);
            if (structParam(intArg1, Param.task_step_1_arrow) != -1) {
                int4 = 1;
            }
            break;
        case 2:
            str1 = structParam(intArg1, Param.task_step_2);
            if (structParam(intArg1, Param.task_step_2_arrow) != -1) {
                int4 = 1;
            }
            break;
        case 3:
            str1 = structParam(intArg1, Param.task_step_3);
            if (structParam(intArg1, Param.task_step_3_arrow) != -1) {
                int4 = 1;
            }
            break;
        case 4:
            str1 = structParam(intArg1, Param.task_step_4);
            if (structParam(intArg1, Param.task_step_4_arrow) != -1) {
                int4 = 1;
            }
            break;
        case 5:
            str1 = structParam(intArg1, Param.task_step_5);
            if (structParam(intArg1, Param.param_1286) != -1) {
                int4 = 1;
            }
            break;
        case 6:
            str1 = structParam(intArg1, Param.param_1279);
            if (structParam(intArg1, Param.param_1287) != -1) {
                int4 = 1;
            }
            break;
        case 7:
            str1 = structParam(intArg1, Param.param_1280);
            if (structParam(intArg1, Param.param_1288) != -1) {
                int4 = 1;
            }
            break;
        case 8:
            str1 = structParam(intArg1, Param.param_1281);
            if (structParam(intArg1, Param.param_1289) != -1) {
                int4 = 1;
            }
            break;
    }

    if (compare(str1, "") == 0) {
        return 0;
    }
    let int5: number = ifGetWidth(intArg3) - 24;
    let int6: number = 20;

    if (int4 == 0) {
        int5 = int5 + 24;
        int6 = 0;
    }
    let int7: number = max(int6 + 5, 15 * paraheight(str1, int5, Graphic.verdana_11pt_regular));
    return 0;
}
