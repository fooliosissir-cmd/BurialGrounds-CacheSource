/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,worldmap_createline]

function worldmap_createline(intArg0: component, intArg1: number, intArg2: number): number {
    let int3: struct = enumOp(type_int, type_struct, Enum.worldmap_key_data, intArg1);

    if (int3 == -1) {
        return intArg2;
    }
    let str0: string = structParam(int3, Param.worldmap_key_title);
    let int4: number = structParam(int3, Param.param_477);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccCreate<1>(intArg0, 4, ifGetNextSubId(intArg0));
    ccSetPosition(3, intArg2, 0, 0);
    ccSetSize(15, 15, 0, 0);
    ccSetPosition<1>(ccGetX() + ccGetWidth(), intArg2, 0, 0);
    ccSetSize<1>(ccGetX<1>() + ccGetX(), ccGetHeight(), 1, 0);
    ccSetGraphic(structParam(int3, Param.param_595));
    ccSetColour<1>(colour(0xAFAFAF));
    ccSetTextFont<1>(Graphic.p12_full);
    ccSetTextShadow<1>(true);
    ccSetTextAlign<1>(0, 1, 0);
    ccSetText<1>(str0);

    if (int4 != -1) {
        ccSetOpBase("<col=ff9040>" + str0 + "</col>");
        ccSetOpBase<1>("<col=ff9040>" + str0 + "</col>");
        ccSetOp(1, "Highlight");
        ccSetOp<1>(1, "Highlight");
        ccSetOnOp(hook(worldmap_flashelementcategory, "y", [int4]));
        ccSetOnOp<1>(hook(worldmap_flashelementcategory, "y", [int4]));
        ccSetOnMouseOver(hook(cc_text_colour_swapper, "Iii", [intArg0, ccGetId<1>(), colour(0xFFFFFF)]));
        ccSetOnMouseOver<1>(hook(cc_text_colour_swapper, "Iii", [intArg0, ccGetId<1>(), colour(0xFFFFFF)]));
        ccSetOnMouseLeave(hook(cc_text_colour_swapper, "Iii", [intArg0, ccGetId<1>(), colour(0xAFAFAF)]));
        ccSetOnMouseLeave<1>(hook(cc_text_colour_swapper, "Iii", [intArg0, ccGetId<1>(), colour(0xAFAFAF)]));
    }
    return intArg2 + ccGetHeight();
}
