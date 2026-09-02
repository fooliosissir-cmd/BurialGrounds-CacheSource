/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5798

function cs2_5798(intArg0: number, intArg1: struct, intArg2: number, strArg0: string, intArg3: number, intArg4: component, intArg5: component, intArg6: number): number {
    let int7: number = intArg2 - 1;

    if (int7 == -1) {
        int7 = ifGetNextSubId(intArg4);
    }

    if (cs2_3999(intArg0) == 0) {
        intArg1 = task_get_data(intArg0);
    } else {
        intArg1 = task_get_data(structParam(intArg1, Param.param_1268));
    }

    if (intArg1 == -1) {
        return intArg3;
    }
    let str1: string = "";
    let str2: string = "Click to toggle a map hint for this step.";
    let int8: number = 0;

    switch (intArg2) {
        case 0:
            str1 = strArg0;
            break;
        case 1:
            str1 = structParam(intArg1, Param.task_step_1);
            if (structParam(intArg1, Param.task_step_1_arrow) != -1 && structParam(intArg1, Param.task_step_1_arrow) != 103815360) {
                int8 = 1;
            }
            break;
        case 2:
            str1 = structParam(intArg1, Param.task_step_2);
            if (structParam(intArg1, Param.task_step_2_arrow) != -1 && structParam(intArg1, Param.task_step_2_arrow) != 103815360) {
                int8 = 1;
            }
            break;
        case 3:
            str1 = structParam(intArg1, Param.task_step_3);
            if (structParam(intArg1, Param.task_step_3_arrow) != -1 && structParam(intArg1, Param.task_step_3_arrow) != 103815360) {
                int8 = 1;
            }
            break;
        case 4:
            str1 = structParam(intArg1, Param.task_step_4);
            if (structParam(intArg1, Param.task_step_4_arrow) != -1 && structParam(intArg1, Param.task_step_4_arrow) != 103815360) {
                int8 = 1;
            }
            break;
        case 5:
            str1 = structParam(intArg1, Param.task_step_5);
            if (structParam(intArg1, Param.param_1286) != -1 && structParam(intArg1, Param.param_1286) != 103815360) {
                int8 = 1;
            }
            break;
        case 6:
            str1 = structParam(intArg1, Param.param_1279);
            if (structParam(intArg1, Param.param_1287) != -1 && structParam(intArg1, Param.param_1287) != 103815360) {
                int8 = 1;
            }
            break;
        case 7:
            str1 = structParam(intArg1, Param.param_1280);
            if (structParam(intArg1, Param.param_1288) != -1 && structParam(intArg1, Param.param_1288) != 103815360) {
                int8 = 1;
            }
            break;
        case 8:
            str1 = structParam(intArg1, Param.param_1281);
            if (structParam(intArg1, Param.param_1289) != -1 && structParam(intArg1, Param.param_1289) != 103815360) {
                int8 = 1;
            }
            break;
    }

    if (compare(str1, "") == 0) {
        return intArg3;
    }
    let int9: number = ifGetWidth(intArg4) - 26;
    let int10: number = 20;

    if (int8 == 0) {
        int9 = int9 + 20;
        int10 = 0;
    }
    let int11: number = max(int10 + 5, 15 * paraheight(str1, int9, Graphic.verdana_11pt_regular));
    ccCreate(intArg4, 4, int7);
    ccSetText(str1);
    ccSetHide(false);
    ccSetTextFont(Graphic.verdana_11pt_regular);
    ccSetColour(colour(0xF7EDB7));

    if (int8 == 1) {
        ccSetOp(1, "Toggle-hint");
        ccSetOpCursor(1, Cursor.cursor_info);
    }
    ccSetTextAlign(0, 1, 13);
    ccSetSize(int9, int11, 0, 0);
    ccSetPosition(0, intArg3, 3, 0);

    if (intArg5 != -1) {
        ccCreate(intArg5, 5, int7);
        if (int8 == 1) {
            ccSetHide(false);
            ccSetOp(1, "Toggle-hint");
            ccSetOpCursor(1, Cursor.cursor_info);
            ccSetSize(17, 18, 0, 0);
            ccSetPosition(0, intArg3 + (int11 - ccGetHeight()) / 2, 3, 0);
            if (varbit_8578 == intArg2 && varbit_task_hint_task == intArg0) {
                ccSetGraphic(Graphic.aif_help_button_0);
                cs2_5779(1, int7, intArg5);
            } else {
                ccSetGraphic(Graphic.aif_help_button_3);
                cs2_5779(0, int7, intArg5);
            }
        }
    }
    intArg3 = intArg3 + int11;
    return intArg3;
}
