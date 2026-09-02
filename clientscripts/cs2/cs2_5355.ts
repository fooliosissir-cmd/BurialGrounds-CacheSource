/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5355

function cs2_5355(intArg0: struct, intArg1: number): void {
    let int2: number = 0;
    let int3: number = 0;
    let int4: number = 0;
    let int5: number = 0;
    let int6: number = 0;
    let int7: struct = -1;
    let str0: string = structParam(intArg0, Param.param_1930);

    if (structParam(intArg0, Param.param_1937) == 4) {
        while (int5 < enumGetoutputcount(Enum.enum_5184) && int6 == 0) {
            if (enumOp(type_int, type_struct, Enum.enum_5184, int5) == intArg0) {
                if (gender() == 1) {
                    str0 = enumOp(type_int, type_string, Enum.enum_5187, int5);
                } else {
                    str0 = enumOp(type_int, type_string, Enum.enum_5186, int5);
                }
                int6 = 1;
            }
            int5 = int5 + 1;
        }
    }
    ifSetText(str0, Component.interface_1143.component_1143_45);

    if (intArg1 == 1) {
        ifSetHide(true, Component.interface_1143.component_1143_46);
        ifSetHide(true, Component.interface_1143.component_1143_47);
        ifSetHide(true, Component.interface_1143.component_1143_39);
        ifSetPosition(0, 186, 1, 0, Component.interface_1143.component_1143_48);
        ifSetPosition(0, 228, 1, 0, Component.interface_1143.component_1143_52);
        ifSetText("Reclaim", Component.interface_1143.component_1143_139);
        ifSetOp(1, "Reclaim", Component.interface_1143.component_1143_139);
    } else {
        ifSetHide(false, Component.interface_1143.component_1143_46);
        ifSetHide(false, Component.interface_1143.component_1143_47);
        ifSetHide(false, Component.interface_1143.component_1143_39);
        ifSetPosition(0, 239, 1, 0, Component.interface_1143.component_1143_48);
        ifSetPosition(0, 266, 1, 0, Component.interface_1143.component_1143_52);
        ifSetText("Buy", Component.interface_1143.component_1143_139);
        ifSetOp(1, "Buy", Component.interface_1143.component_1143_139);
        ifSetText(append("My Points: ", tostringLocalised(varc_1648, 1)), Component.interface_1143.component_1143_46);
        if (structParam(intArg0, Param.param_1933) > 0) {
            ifSetText(append("Item Cost: ", tostringLocalised(structParam(intArg0, Param.param_1933), 1)), Component.interface_1143.component_1143_47);
        } else {
            ifSetText(append("Item Cost: ", tostringLocalised(structParam(intArg0, Param.param_1932), 1)), Component.interface_1143.component_1143_47);
        }
    }
    ifSetHide(false, Component.interface_1143.component_1143_48);
    ifSetHide(false, Component.interface_1143.component_1143_49);

    if (structParam(intArg0, Param.param_1950) != -1) {
        int2 = 5;
    } else if (structParam(intArg0, Param.param_1949) != -1) {
        int2 = 4;
    } else if (structParam(intArg0, Param.param_1948) != -1) {
        int2 = 3;
    } else if (structParam(intArg0, Param.param_1947) != -1) {
        int2 = 2;
    } else {
        int2 = 1;
        ifSetHide(true, Component.interface_1143.component_1143_48);
        ifSetHide(true, Component.interface_1143.component_1143_49);
        ifSetPosition(0, 260, 1, 0, Component.interface_1143.component_1143_52);
    }
    let int8: number = 63;
    let int9: number = 57;
    let int10: number = (ifGetWidth(Component.interface_1143.component_1143_52) - int2 * int8) / (int2 + 1);
    let int11: number = int10;
    ccDeleteAll(Component.interface_1143.component_1143_52);
    ccDeleteAll(Component.interface_1143.component_1143_40);
    int5 = 0;

    while (int5 < int2) {
        switch (int5) {
            case 0:
                int7 = intArg0;
                break;
            case 1:
                int7 = structParam(intArg0, Param.param_1947);
                break;
            case 2:
                int7 = structParam(intArg0, Param.param_1948);
                break;
            case 3:
                int7 = structParam(intArg0, Param.param_1949);
                break;
            case 4:
                int7 = structParam(intArg0, Param.param_1950);
                break;
        }
        ccCreate(Component.interface_1143.component_1143_52, 3, int3);
        int3 = int3 + 1;
        ccSetColour(colour(0x000000));
        ccSetSize(int8, int9, 0, 0);
        ccSetPosition(int11, 0, 0, 0);
        ccSetTrans(100);
        ccSetfill(true);
        if (int2 > 1) {
            ccCreate(Component.interface_1143.component_1143_40, 4, int4);
            ccSetSize(int8, int9, 0, 0);
            ccSetPosition(int11, 0, 0, 0);
            ccSetOp(1, "Select");
            ccSetOnOpt(hook(cs2_5358, "iI", [int4, Component.interface_1143.component_1143_52]));
            int4 = int4 + 1;
        }
        ccCreate(Component.interface_1143.component_1143_52, 5, int3);
        ccSetGraphic(Graphic.aif_loyalty_alpha_button_1_0);
        ccSetSize(int8, int9, 0, 0);
        ccSetPosition(int11, 0, 0, 0);
        if (int2 > 1) {
            ccHookMouseEnter(hook(cs2_5356, "iIJ", [int3, Component.interface_1143.component_1143_52, int7]));
            ccHookMouseExit(hook(cs2_5357, "iI", [int3, Component.interface_1143.component_1143_52]));
        }
        int3 = int3 + 1;
        ccCreate(Component.interface_1143.component_1143_52, 5, int3);
        int3 = int3 + 1;
        if (structParam(int7, Param.param_1937) == 1) {
            ccSetSize(36, 32, 0, 0);
            ccSetPosition(int11 + (int8 - ccGetWidth()) / 2 + 2, (int9 - ccGetHeight()) / 2 + 1, 0, 0);
            ccSetObject(structParam(int7, Param.param_1935), -1);
        } else if (structParam(int7, Param.param_1937) == 9) {
            ccSetSize(36, 32, 0, 0);
            ccSetPosition(int11 + (int8 - ccGetWidth()) / 2 + 2, (int9 - ccGetHeight()) / 2 + 1, 0, 0);
            ccSetObject(structParam(int7, Param.param_1935), -1);
        } else if (structParam(int7, Param.param_1937) == 2) {
            ccSetGraphic(structParam(int7, Param.emotes2_icon));
            ccSetSize(48, 48, 0, 0);
            ccSetPosition(int11 + (int8 - ccGetWidth()) / 2, (int9 - ccGetHeight()) / 2, 0, 0);
        } else if (structParam(int7, Param.param_1937) == 3) {
            ccSetGraphic(structParam(int7, Param.param_1441));
            ccSetSize(40, 50, 0, 0);
            ccSetPosition(int11 + (int8 - ccGetWidth()) / 2, (int9 - ccGetHeight()) / 2, 0, 0);
        } else if (structParam(int7, Param.param_1937) == 4) {
            ccSetGraphic(Graphic.aid_loyalty_catgry_icons_3);
            ccSetSize(42, 42, 0, 0);
            ccSetPosition(int11 + (int8 - ccGetWidth()) / 2 + 1, (int9 - ccGetHeight()) / 2 + 1, 0, 0);
        } else if (structParam(int7, Param.param_1937) == 5) {
            ccSetSize(36, 32, 0, 0);
            ccSetPosition(int11 + (int8 - ccGetWidth()) / 2, (int9 - ccGetHeight()) / 2, 0, 0);
            ccSetObject(structParam(int7, Param.param_1935), -1);
        }
        int11 = int11 + int8 + int10;
        int5 = int5 + 1;
    }
}
