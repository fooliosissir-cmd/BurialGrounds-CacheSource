/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1692

function cs2_1692(intArg0: component, intArg1: number, intArg2: number): [number, number] {
    let int3: struct = enumOp(type_int, type_struct, Enum.enum_845, intArg2);
    let str0: string = structParam(int3, Param.poh_bookcase_info);
    let int4: number = paraheight(str0, ifGetWidth(intArg0) - 22, Graphic.p12_full) * 12 + 5;
    let int5: number = 32 + int4 + 10;

    ccSetSize(0, int5, 1, 0);
    ccSetPosition(0, intArg1, 1, 0);
    ccSetfill(true);
    ccSetColour(colour(0x000000));
    ccSetTrans(255);
    ccSetOnMouseOver(hook(cc_settrans, "Iii", [event_com, event_comsubid, 200]));
    ccSetOnMouseLeave(hook(cc_settrans, "Iii", [event_com, event_comsubid, 255]));
    ccSetOp(1, "Take");
    ccSetOp(10, "Examine");
    ccSetOpBase("<col=ff9040>" + ocName(structParam(int3, Param.poh_bookcase_obj)));
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetSize(36, 32, 0, 0);
    ccSetPosition(2, intArg1 + 4, 0, 0);
    ccSetObjectNonum(structParam(int3, Param.poh_bookcase_obj), 1);
    ccSetOutline(1);
    ccSetGraphicShadow(3153952);
    ccCreate(intArg0, 4, ifGetNextSubId(intArg0));
    ccSetPosition(2, intArg1 + 4, 2, 0);
    ccSetColour(colour(0xFFF08C));
    ccSetTextAlign(0, 1, 0);
    ccSetTextShadow(true);
    ccCreate<1>(intArg0, 4, ifGetNextSubId(intArg0));
    ccSetSize<1>(36 + 4, 12, 1, 0);
    ccSetPosition<1>(2, intArg1 + 4 + (32 - ccGetHeight<1>()), 2, 0);
    ccSetTextFont<1>(Graphic.p11_full);
    ccSetColour<1>(colour(0xFF981F));
    ccSetTextAlign<1>(0, 1, 0);
    ccSetTextShadow<1>(true);
    let int6: struct = structParam(int3, Param.param_923);

    if (int6 != -1) {
        ccSetSize(36 + 4, 32 - ccGetHeight<1>(), 1, 0);
        ccSetText<1>(structParam(int6, Param.param_845));
    } else {
        ccSetSize(36 + 4, 32, 1, 0);
        ccSetHide<1>(true);
    }
    let str1: string = structParam(int3, Param.poh_bookcase_displayname);

    if (paraheight(str1, ccGetWidth(), Graphic.b12_full) <= 1) {
        ccSetTextFont(Graphic.b12_full);
    } else if (paraheight(str1, ccGetWidth(), Graphic.p12_full) <= 1) {
        ccSetTextFont(Graphic.p12_full);
    } else {
        ccSetTextFont(Graphic.p11_full);
    }
    ccSetText(str1);
    ccCreate(intArg0, 4, ifGetNextSubId(intArg0));
    ccSetSize(22, int4, 1, 0);
    ccSetPosition(2, intArg1 + 32 + 6, 0, 0);
    ccSetTextFont(Graphic.p12_full);
    ccSetColour(colour(0xFFF08C));
    ccSetTextAlign(0, 1, 0);
    ccSetTextShadow(true);
    ccSetText(str0);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetSize(0, 32, 1, 0);
    ccSetPosition(0, intArg1 + int5 - 16, 0, 0);
    ccSetGraphic(Graphic.graphic_995);
    ccSettiling(true);
    return [intArg1 + int5, ccGetId()];
}
