/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,poh_furniture_create_update]

function proc_poh_furniture_create_update(intArg0: number, intArg1: component, intArg2: component, intArg3: component, intArg4: component, intArg5: component, intArg6: component): void {
    ccDeleteAll(intArg1);
    ccDeleteAll(intArg5);
    let int7: obj = invGetobj(398, intArg0 - 1);

    if (int7 == -1 || int7 == Obj.poh_null_furniture_object) {
        ifSetHide(true, intArg2);
        ifSetHide(true, intArg3);
        ifSetHide(true, intArg4);
        ifSetHide(true, intArg5);
        ifSetHide(true, intArg6);
        return;
    }
    ifSetHide(false, intArg2);
    ifSetHide(false, intArg5);
    ccCreate(intArg5, 5, 0);
    ccSetSize(36, 32, 0, 0);
    ccSetPosition(12, 4, 0, 0);
    ccSetObjectNonum(int7, 1);
    ccSetOutline(1);
    ccSetGraphicShadow(3153952);
    ccCreate(intArg5, 4, 1);
    ccSetSize(60, 32 + 4, 0, 1);
    ccSetPosition(0, 0, 0, 2);
    ccSetTextFont(Graphic.p11_full);
    ccSetTextAlign(1, 1, 0);
    ccSetColour(colour(0xFF981F));
    ccSetTextShadow(true);
    ccSetText("Level " + tostring(ocParam(int7, Param.levelrequire)));
    ccCreate(intArg5, 4, 2);
    ccSetSize(60, 12, 1, 0);
    ccSetPosition(0, 0, 2, 0);
    ccSetTextFont(Graphic.p11_full);
    ccSetTextAlign(0, 1, 0);
    ccSetColour(colour(0xFF981F));
    ccSetTextShadow(true);
    ccSetText(ocName(int7));
    ccCreate(intArg5, 4, 3);
    ccSetSize(60, 12, 1, 1);
    ccSetPosition(0, 0, 2, 2);
    ccSetTextFont(Graphic.p11_full);
    ccSetTextAlign(0, 1, 0);
    ccSetColour(colour(0xCCCCCC));
    ccSetTextShadow(true);
    let str0: string = ocParam(int7, Param.poh_cost_overridetext);

    if (stringLength(str0) <= 0) {
        str0 = cs2_6313("", ocParam(int7, Param.poh_cost1_obj), ocParam(int7, Param.poh_cost1_count));
        str0 = cs2_6313(str0, ocParam(int7, Param.poh_cost2_obj), ocParam(int7, Param.poh_cost2_count));
        str0 = cs2_6313(str0, ocParam(int7, Param.poh_cost3_obj), ocParam(int7, Param.poh_cost3_count));
        str0 = cs2_6313(str0, ocParam(int7, Param.poh_cost4_obj), ocParam(int7, Param.poh_cost4_count));
        str0 = cs2_6313(str0, ocParam(int7, Param.poh_cost5_obj), ocParam(int7, Param.poh_cost5_count));
        str0 = cs2_6313(str0, ocParam(int7, Param.poh_cost6_obj), ocParam(int7, Param.poh_cost6_count));
    }
    ccSetText(str0);

    if (testBit(varc_841, intArg0) == 0) {
        ifSetHide(true, intArg3);
        ifSetHide(true, intArg4);
        ifSetHide(false, intArg6);
        ifSetnoclickthrough(true, intArg1);
        return;
    }
    ifSetHide(false, intArg3);
    ifSetHide(false, intArg4);
    ifSetHide(true, intArg6);
    ifSetnoclickthrough(false, intArg1);
    let int8: number = 0;

    if (testBit(varc_841, 0) == 1) {
        int8 = 1;
    }
    ccCreate(intArg1, 4, 0);
    ccSetSize(0, 0, 1, 1);
    ccSetPosition(0, 0, 1, 1);
    ccSetPauseText("Make All");

    if (int8 == 0) {
        ccSetHide(true);
    }
    ccCreate(intArg1, 4, 1);
    ccSetSize(0, 0, 1, 1);
    ccSetPosition(0, 0, 1, 1);
    ccSetPauseText("Make X");

    if (int8 == 0) {
        ccSetHide(true);
    }
    ccCreate(intArg1, 4, 2);
    ccSetSize(0, 0, 1, 1);
    ccSetPosition(0, 0, 1, 1);
    ccSetPauseText("Make 10");

    if (int8 == 0) {
        ccSetHide(true);
    }
    ccCreate(intArg1, 4, 3);
    ccSetSize(0, 0, 1, 1);
    ccSetPosition(0, 0, 1, 1);
    ccSetPauseText("Make 5");

    if (int8 == 0) {
        ccSetHide(true);
    }
    ccCreate(intArg1, 4, 4);
    ccSetSize(0, 0, 1, 1);
    ccSetPosition(0, 0, 1, 1);

    if (int8 == 0) {
        ccSetPauseText("Build");
    } else {
        ccSetPauseText("Make 1");
    }
}
