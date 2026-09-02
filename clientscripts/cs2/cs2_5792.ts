/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5792

function cs2_5792(intArg0: number): void {
    let int1: struct = task_get_data(intArg0);
    let str0: string = "";

    if (int1 == -1) {
        return;
    }
    cs2_5796(intArg0, 0, Component.interface_1219.component_1219_10, Component.interface_1219.component_1219_0, Component.interface_1219.component_1219_1, -1, -1, -1);
    let int2: number = 1;
    let int3: number = 0;

    while (int2 < 8 && int3 == 0) {
        switch (int2) {
            case 1:
                if (structParam(int1, Param.task_step_2_arrow) == -1) {
                    int3 = 1;
                }
                break;
            case 2:
                if (structParam(int1, Param.task_step_3_arrow) == -1) {
                    int3 = 1;
                }
                break;
            case 3:
                if (structParam(int1, Param.task_step_4_arrow) == -1) {
                    int3 = 1;
                }
                break;
            case 4:
                if (structParam(int1, Param.param_1286) == -1) {
                    int3 = 1;
                }
                break;
            case 5:
                if (structParam(int1, Param.param_1287) == -1) {
                    int3 = 1;
                }
                break;
            case 6:
                if (structParam(int1, Param.param_1288) == -1) {
                    int3 = 1;
                }
                break;
            case 7:
                if (structParam(int1, Param.param_1289) != -1) {
                    break;
                }
                int3 = 1;
                break;
        }
        if (int3 == 0) {
            int2 = int2 + 1;
        }
    }
    ccDeleteAll(Component.interface_1219.component_1219_6);
    ccDeleteAll(Component.interface_1219.component_1219_5);
    ccDeleteAll(Component.interface_1219.component_1219_14);
    ccDeleteAll(Component.interface_1219.component_1219_12);
    ccDeleteAll(Component.interface_1219.component_1219_13);
    let int4: number = cs2_5797(intArg0, -1, int2 - 1, 1, 2, 97, Component.interface_1219.component_1219_6, Component.interface_1219.component_1219_5, Component.interface_1219.component_1219_7, Component.interface_1219.component_1219_4, 79888399);

    switch (int2) {
        case 1:
            str0 = structParam(int1, Param.task_step_1);
            break;
        case 2:
            str0 = structParam(int1, Param.task_step_2);
            break;
        case 3:
            str0 = structParam(int1, Param.task_step_3);
            break;
        case 4:
            str0 = structParam(int1, Param.task_step_4);
            break;
        case 5:
            str0 = structParam(int1, Param.task_step_5);
            break;
        case 6:
            str0 = structParam(int1, Param.param_1279);
            break;
        case 7:
            str0 = structParam(int1, Param.param_1280);
            break;
        case 8:
            str0 = structParam(int1, Param.param_1281);
            break;
    }
    let int5: number = cs2_5798(intArg0, int1, 0, str0, 0, Component.interface_1219.component_1219_14, Component.interface_1219.component_1219_12, 79888399);
    let int6: number = 0;
    let int7: number = 0;
    let int8: number = 0;
    let int9: number = 0;
    let int10: number = 16777215;
    let int11: number = 0;
    let int12: number = 0;
    let int13: number = 0;
    let str1: string = "";

    if (ccFind(Component.interface_1219.component_1219_14, 0) == 1) {
        ccSetOp(1, "Toggle-hint");
        ccSetColour(colour(0xF7EDB7));
        ccSetOpCursor(1, Cursor.cursor_info);
        int6 = ccGetHeight();
        int9 = ccGetWidth();
        str1 = ccGetText();
        int7 = ccGetX();
        int8 = ccGetY();
        while (int11 < 4) {
            if (int11 < 2) {
                int12 = int7 - 1;
            } else {
                int12 = int7 + 1;
            }
            if (int11 % 2 == 0) {
                int13 = int8 - 1;
            } else {
                int13 = int8 + 1;
            }
            ccCreate(Component.interface_1219.component_1219_13, 4, int11);
            ccSetSize(int9, int6, 0, 0);
            ccSetText(str1);
            ccSetTextFont(Graphic.verdana_11pt_regular);
            ccSetColour(colour(0x000000));
            ccSetTextAlign(0, 1, 13);
            ccSetPosition(int12, int13, 0, 0);
            int11 = int11 + 1;
        }
    }
    ccCreate(Component.interface_1219.component_1219_12, 5, 0);
    ccSetHide(false);
    ccSetOp(1, "Toggle-hint");
    ccSetOpCursor(1, Cursor.cursor_info);
    ccSetSize(17, 18, 0, 0);
    ccSetPosition(0, (int6 - ccGetHeight()) / 2, 3, 0);

    if (varbit_8578 == int2 && varbit_task_hint_task == intArg0) {
        ccSetGraphic(Graphic.aif_help_button_0);
        cs2_5779(1, int2, Component.interface_1219.component_1219_12);
    } else {
        ccSetGraphic(Graphic.aif_help_button_3);
        cs2_5779(0, int2, Component.interface_1219.component_1219_12);
    }
    ifSetScrollPos(0, 0, Component.interface_1219.component_1219_4);
    ifSetSize(ifGetWidth(Component.interface_1219.component_1219_3), 306, 0, 0, Component.interface_1219.component_1219_3);
    ifSetSize(200, 310, 0, 0, Component.interface_746.component_746_9);
}
