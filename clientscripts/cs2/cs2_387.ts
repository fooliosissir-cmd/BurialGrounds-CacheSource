/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_387

function cs2_387(intArg0: boolean): void {
    let str0: string = "";
    let str1: string = "";
    let int1: number = 0;

    [str0, str1] = [ifGetOp(1, Component.interface_1028.component_1028_62), ifGetOp(1, Component.interface_1028.component_1028_63)];
    let int2: number = enumGetoutputcount(Enum.enum_3280);
    let int3: number = 73;
    let int4: Enum = Enum.enum_3278;
    let int5: number = int1 + 20;
    int1 = max(stringWidth(str0, Graphic.p12_full), stringWidth(str1, Graphic.p12_full)) + 30;
    let int6: boolean = true;
    let str2: string = "";

    if (varbit_8093 == 1) {
        int6 = false;
    }
    cs2_2719(Component.interface_1028.component_1028_62, str0, int1, str2, int6);
    ifSetOnOpt(hook(cs2_2718, "Isis1", [Component.interface_1028.component_1028_62, str0, int1, str2, true]), Component.interface_1028.component_1028_62);
    int5 = int5 + int1 + 10;
    let int7: boolean = false;

    if (int6 == false) {
        int7 = true;
    }
    cs2_2719(Component.interface_1028.component_1028_63, str1, int1, str2, int7);
    ifSetOnOpt(hook(cs2_2718, "Isis1", [Component.interface_1028.component_1028_63, str1, int1, str2, true]), Component.interface_1028.component_1028_63);
    let int8: number = min(int2, enumGetoutputcount(int4));
    int1 = max((int8 + 1) * int3 + (89 - int3), scale(4, 5, 765));
    int1 = int8 * int3 + (89 - int3);
    ifSetSize(int1, 26, 0, 1, Component.interface_1028.component_1028_59);
    ifSetSize(0, 180, 1, 0, Component.interface_1028.component_1028_67);
    ifSetPosition(0, 237, 1, 0, Component.interface_1028.component_1028_91);
    cs2_389();
    let int9: number = varc_197 - 1;

    if (int9 <= -1) {
        ifSetHide(true, Component.interface_1028.component_1028_139);
        ifSetHide(true, Component.interface_1028.component_1028_138);
        ifSetHide(true, Component.interface_1028.component_1028_133);
        ifSetHide(true, Component.interface_1028.component_1028_134);
    } else {
        ifSetHide(false, Component.interface_1028.component_1028_139);
        if (varbit_playerdesign4_force_player_to_modify_further == 1 && varbit_8247 == 0) {
            ifSetHide(true, Component.interface_1028.component_1028_138);
        } else {
            ifSetHide(false, Component.interface_1028.component_1028_138);
        }
        ifSetHide(false, Component.interface_1028.component_1028_133);
        ifSetHide(false, Component.interface_1028.component_1028_134);
    }
    let int10: component = -1;
    let str3: string = "";
    let int11: graphic = -1;
    let int12: number = 0;
    let int13: number = 1;
    let int14: struct = enumOp(type_int, type_struct, int4, int9);
    cs2_385(int14);
    int5 = ifGetHeight(Component.interface_1028.component_1028_67) - (89 + 17);

    while (int12 < int8) {
        int10 = enumOp(type_int, type_component, Enum.enum_3280, int12);
        if (int10 != -1) {
            if (int12 == int9) {
                ifSetPosition(int3 * int12, 0, 0, 0, int10);
            } else {
                ifSetPosition(int3 * int12, int5, 0, 2, int10);
            }
            if (int12 <= int9 || int9 <= -1) {
                ifSendtofront(int10);
            } else {
                ifSendtoback(int10);
            }
            ifSetSize(89, 89, 0, 0, int10);
            int14 = enumOp(type_int, type_struct, int4, int12);
            if (int14 != -1) {
                if (intArg0 == true) {
                    int11 = structParam(int14, Param.param_1162);
                } else {
                    int11 = structParam(int14, Param.param_1161);
                }
                if (int12 == int9) {
                    int13 = 1;
                } else {
                    int13 = 0;
                }
                cs2_363(int10, int9, Enum.enum_3280, int11, true, 89, 89, 2, "", int13, "");
                ifSetOnOpt(hook(cs2_351, "ii", [event_opindex, int12 + 1]), int10);
            } else {
                cs2_363(int10, -1, -1, -1, false, 0, 0, 0, "", 0, "");
            }
        }
        int12 = int12 + 1;
    }

    while (int12 < int2) {
        int10 = enumOp(type_int, type_component, Enum.enum_3280, int12);
        if (int10 != -1) {
            ifSetHide(true, int10);
        }
        int12 = int12 + 1;
    }
    int10 = enumOp(type_int, type_component, Enum.enum_3280, int9);

    if (int10 != -1) {
        ifSendtofront(int10);
    }
}
