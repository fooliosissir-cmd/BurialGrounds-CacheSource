/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5359

function cs2_5359(intArg0: component, intArg1: number, intArg2: struct, intArg3: boolean): void {
    let int4: number = 0;
    let int5: number = 0;
    let int6: number = 0;
    let int7: number = 0;
    let int8: number = 4;
    let int9: obj = structParam(intArg2, Param.param_1935);
    let int10: number = 0;
    let int11: number = 0;
    let int12: number = 0;
    let str0: string = "";
    let str1: string = "";
    let str2: string = "";
    let str3: string = "";
    let str4: string = "";
    let int13: number = 0;
    let int14: number = 0;
    let int15: number = 0;
    let int16: number = 0;

    if (intArg3 == true && structParam(intArg2, Param.param_1937) != 2 && ccFind(intArg0, intArg1) == 1) {
        int4 = ccGetX();
        int5 = ccGetY();
        int6 = ccGetWidth();
        int4 = int4 + int6;
        int5 = int5 + int8;
        int15 = ifGetScrollY(Component.interface_1143.component_1143_5);
        if (int5 - int15 <= 0) {
            int16 = 2;
            int5 = int15;
        }
        ifSetPosition(int4, int5, 0, 0, Component.interface_1143.component_1143_79);
        ifSetText(structParam(intArg2, Param.param_1931), Component.interface_1143.component_1143_114);
        if (structParam(intArg2, Param.param_1937) == 1) {
            int10 = ocParam(int9, Param.param_1430) / 100;
            str0 = "Duration: " + tostring(int10) + " mins.";
            int11 = ocParam(int9, Param.param_1429) / 100;
            str1 = "Recharge: " + tostring(int11) + " mins.";
            if (int10 > 60) {
                int12 = int10 % 60;
                int10 = int10 / 60;
                if (int12 > 0) {
                    if (int10 > 1) {
                        str0 = "Duration: " + tostring(int10) + " hours, " + tostring(int12) + " mins.";
                    } else {
                        str0 = "Duration: 1 hour, " + tostring(int12) + " mins.";
                    }
                } else if (int10 > 1) {
                    str0 = "Duration: " + tostring(int10) + " hours.";
                } else {
                    str0 = "Duration: 1 hour.";
                }
            }
            if (int11 > 60) {
                int12 = int11 % 60;
                int11 = int11 / 60;
                if (int12 > 0) {
                    if (int11 > 1) {
                        str1 = "Recharge: " + tostring(int11) + " hours, " + tostring(int12) + " mins.";
                    } else {
                        str1 = "Recharge: 1 hour, " + tostring(int12) + " mins.";
                    }
                } else if (int11 > 1) {
                    str1 = "Recharge: " + tostring(int11) + " hours.";
                } else {
                    str1 = "Recharge: 1 hour.";
                }
            }
            str2 = "<br>" + "<br>" + str0 + "<br>" + str1;
            ifSetText(append(ifGetText(Component.interface_1143.component_1143_114), str2), Component.interface_1143.component_1143_114);
        } else if (structParam(intArg2, Param.param_1937) == 4) {
            while (int13 < enumGetoutputcount(Enum.enum_5184) && int14 == 0) {
                if (enumOp(type_int, type_struct, Enum.enum_5184, int13) == intArg2) {
                    str4 = enumOp(type_int, type_string, Enum.enum_5187, int13);
                    str3 = enumOp(type_int, type_string, Enum.enum_5186, int13);
                    int14 = 1;
                }
                int13 = int13 + 1;
            }
            str3 = append("Male Title: ", str3);
            str4 = append("Female Title: ", str4);
            ifSetText(str3 + "<br>" + str4, Component.interface_1143.component_1143_114);
        }
        int7 = paraheight(ifGetText(Component.interface_1143.component_1143_114), ifGetWidth(Component.interface_1143.component_1143_114), ifGetfontmetrics(Component.interface_1143.component_1143_114));
        int7 = int7 * 13 + int8 * 2;
        ifSetSize(ifGetWidth(Component.interface_1143.component_1143_79), int7, 0, 0, Component.interface_1143.component_1143_79);
        ifSetHide(false, Component.interface_1143.component_1143_79);
        if (int5 - int15 + int7 > ifGetHeight(Component.interface_1143.component_1143_5)) {
            int5 = int15 + (ifGetHeight(Component.interface_1143.component_1143_5) - int7);
            ifSetPosition(int4, int5, 0, 0, Component.interface_1143.component_1143_79);
            int16 = 1;
        }
        if (ifGetWidth(Component.interface_1143.component_1143_79) + ifGetX(Component.interface_1143.component_1143_79) > ifGetWidth(Component.interface_1143.component_1143_5)) {
            int4 = ccGetX() - ifGetWidth(Component.interface_1143.component_1143_79) + 2;
            ifSetPosition(int4, int5, 0, 0, Component.interface_1143.component_1143_79);
            ifSetPosition(12, ifGetY(Component.interface_1143.component_1143_32), 2, 0, Component.interface_1143.component_1143_32);
            ifSetPosition(10, ifGetY(Component.interface_1143.component_1143_111), 2, 0, Component.interface_1143.component_1143_111);
            ifSetPosition(11, ifGetY(Component.interface_1143.component_1143_112), 2, 0, Component.interface_1143.component_1143_112);
            ifSetPosition(14, ifGetY(Component.interface_1143.component_1143_114), 2, 0, Component.interface_1143.component_1143_114);
            ifSetPosition(0, 10, 2, 0, Component.interface_1143.component_1143_113);
            ifSethflip(true, Component.interface_1143.component_1143_113);
        } else {
            ifSetPosition(12, ifGetY(Component.interface_1143.component_1143_32), 0, 0, Component.interface_1143.component_1143_32);
            ifSetPosition(10, ifGetY(Component.interface_1143.component_1143_111), 0, 0, Component.interface_1143.component_1143_111);
            ifSetPosition(11, ifGetY(Component.interface_1143.component_1143_112), 0, 0, Component.interface_1143.component_1143_112);
            ifSetPosition(14, ifGetY(Component.interface_1143.component_1143_114), 0, 0, Component.interface_1143.component_1143_114);
            ifSetPosition(0, 10, 0, 0, Component.interface_1143.component_1143_113);
            ifSethflip(false, Component.interface_1143.component_1143_113);
        }
        if (ifGetHeight(Component.interface_1143.component_1143_79) < ifGetHeight(Component.interface_1143.component_1143_113) + 40) {
            ifSetPosition(ifGetX(Component.interface_1143.component_1143_113), 0, 0, 1, Component.interface_1143.component_1143_113);
        } else {
            ifSetPosition(ifGetX(Component.interface_1143.component_1143_113), 10, 0, 0, Component.interface_1143.component_1143_113);
        }
        if (int16 > 0) {
            if (int16 == 1) {
                ifSetPosition(ifGetX(Component.interface_1143.component_1143_113), 0, 0, 2, Component.interface_1143.component_1143_113);
            } else {
                ifSetPosition(ifGetX(Component.interface_1143.component_1143_113), 0, 0, 0, Component.interface_1143.component_1143_113);
            }
        }
        return;
    }
    ifSetHide(true, Component.interface_1143.component_1143_79);
}
