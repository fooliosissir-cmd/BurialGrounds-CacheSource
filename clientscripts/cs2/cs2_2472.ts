/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2472

function cs2_2472(intArg0: component, intArg1: component, intArg2: component, intArg3: component, intArg4: component, intArg5: component, intArg6: obj, intArg7: obj, intArg8: Enum): void {
    if (intArg7 == -1) {
        if (intArg6 == -1) {
            ifSetHide(true, intArg0);
            ifSetHide(true, intArg2);
            ifSetHide(true, intArg5);
            ifSetPosition(ifGetX(enumOp(type_int, type_component, intArg8, 0)) - 10, ifGetY(enumOp(type_int, type_component, intArg8, 0)) - 10, 0, 0, intArg4);
            return;
        } else {
            intArg7 = Obj.glo3_clear_circle;
        }
    } else if (intArg6 == -1) {
        intArg6 = Obj.glo3_clear_circle;
    }
    ifSetHide(false, intArg0);
    ifSetHide(false, intArg2);
    ifSetHide(false, intArg5);
    let int9: number = ifGetX(enumOp(type_int, type_component, intArg8, ocParam(intArg6, Param.glo3_colcount)));
    let int10: number = ifGetX(enumOp(type_int, type_component, intArg8, ocParam(intArg7, Param.glo3_colcount)));
    let int11: number = 0;
    let int12: obj = -1;

    if (int9 > int10) {
        int12 = intArg7;
        intArg7 = intArg6;
        intArg6 = int12;
        int11 = int10;
        int10 = int9;
        int9 = int11;
    }
    let int13: number = ifGetY(enumOp(type_int, type_component, intArg8, ocParam(intArg6, Param.glo3_colcount)));
    let int14: number = ifGetY(enumOp(type_int, type_component, intArg8, ocParam(intArg7, Param.glo3_colcount)));
    let int15: number = int10 - int9;
    let int16: number = 0;
    ifSetPosition(int9 - 10, int13 - 10, 0, 0, intArg0);
    ifSetPosition(int10 - 10, int14 - 10, 0, 0, intArg2);

    if (ifFind(intArg1) == 1) {
        ccSetParamString(Param.param_718, guesscolour(cs2_718(ocParam(intArg6, Param.glo3_colcount))));
        ccSetColour(cs2_718(ocParam(intArg6, Param.glo3_colcount)));
    }

    if (ifFind(intArg3) == 1) {
        ccSetParamString(Param.param_718, guesscolour(cs2_718(ocParam(intArg7, Param.glo3_colcount))));
        ccSetColour(cs2_718(ocParam(intArg7, Param.glo3_colcount)));
    }
    let int17: number = 0;
    let int18: number = 0;
    let int19: number = ocParam(intArg6, Param.glo3_sidecount) + ocParam(intArg7, Param.glo3_sidecount);

    if (int13 < int14) {
        int16 = int14 - int13;
        ifSetPosition(int9, int13, 0, 0, intArg5);
        ifSetlinedirection(0, intArg5);
        int11 = 1;
    } else {
        int16 = int13 - int14;
        ifSetPosition(int9, int14, 0, 0, intArg5);
        ifSetlinedirection(1, intArg5);
        int11 = -1;
    }
    ifSetSize(int15, int16, 0, 0, intArg5);

    if (intArg6 == Obj.glo3_clear_circle) {
        int17 = int9 + int15 * ocParam(intArg7, Param.glo3_sidecount) / (2 * int19) - 10;
        int18 = int13 + int11 * (int16 * ocParam(intArg7, Param.glo3_sidecount) / (2 * int19)) - 10;
    } else if (intArg7 == Obj.glo3_clear_circle) {
        int17 = int9 + int15 * (2 * ocParam(intArg7, Param.glo3_sidecount) + ocParam(intArg6, Param.glo3_sidecount)) / (2 * int19) - 10;
        int18 = int13 + int11 * (int16 * (2 * ocParam(intArg7, Param.glo3_sidecount) + ocParam(intArg6, Param.glo3_sidecount)) / (2 * int19)) - 10;
    } else {
        int17 = int9 + int15 * ocParam(intArg7, Param.glo3_sidecount) / int19 - 10;
        int18 = int13 + int11 * (int16 * ocParam(intArg7, Param.glo3_sidecount) / int19) - 10;
    }
    ifSetPosition(int17, int18, 0, 0, intArg4);
}
