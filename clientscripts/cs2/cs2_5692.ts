/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5692

function cs2_5692(intArg0: number, intArg1: number, intArg2: struct): void {
    ccCreate<1>(Component.interface_1218.component_1218_72, 5, ifGetNextSubId(Component.interface_1218.component_1218_72));
    ccSetSize<1>(36, 32, 0, 0);
    ccSetPosition<1>(10, intArg1 + 5, 0, 0);

    if (enumOp(type_int, type_stat, Enum.int_to_stat, structParam(intArg2, Param.skillguide_skill)) == -1 || intArg2 == -1) {
        return;
    }

    if (statBase(enumOp(type_int, type_stat, Enum.int_to_stat, structParam(intArg2, Param.skillguide_skill))) < structParam(intArg2, Param.skillguide_level)) {
        ccSetSize<1>(25, 25, 0, 0);
        ccSetGraphic<1>(Graphic.aif_locked_button_icon);
        ccSetPosition<1>(13, intArg1 + 9, 0, 0);
        ccSetOnMouseOver<1>(hook(cs2_5693, "i1", [event_comsubid, true]));
        ccSetOnMouseLeave<1>(hook(cs2_5694, "", []));
    } else if (structParam(intArg2, Param.skillguide_item) == -1) {
        ccSetGraphic<1>(structParam(intArg2, Param.param_2214));
    } else {
        ccSetObject<1>(structParam(intArg2, Param.skillguide_item), -1);
    }
    ccCreate<1>(Component.interface_1218.component_1218_72, 4, ifGetNextSubId(Component.interface_1218.component_1218_72));
    ccSetPosition<1>(45, intArg1 + 5, 0, 0);
    ccSetTextFont<1>(Graphic.graphic_4040);
    ccSetTextShadow<1>(true);

    if (structParam(intArg2, Param.skillguide_level) == 0) {
        ccSetText<1>("");
    } else {
        ccSetText<1>(tostring(structParam(intArg2, Param.skillguide_level)));
    }
    ccSetColour<1>(colour(0xDB9000));
    ccSetTextAlign<1>(1, 1, 13);
    ccSetSize<1>(32, 32, 0, 0);

    if (structParam(intArg2, Param.skillguide_members) == 1) {
        ccCreate<1>(Component.interface_1218.component_1218_72, 4, ifGetNextSubId(Component.interface_1218.component_1218_72));
        ccSetPosition<1>(80, intArg1 + 5, 0, 0);
        ccSetSize<1>(32, 32, 0, 0);
        ccSetOnMouseOver<1>(hook(cs2_5693, "i1", [event_comsubid, false]));
        ccSetOnMouseLeave<1>(hook(cs2_5694, "", []));
    }
    ccCreate<1>(Component.interface_1218.component_1218_72, 4, ifGetNextSubId(Component.interface_1218.component_1218_72));
    ccSetPosition<1>(100, intArg1 + 8, 0, 0);
    ccSetText<1>(structParam(intArg2, Param.skillguide_name));
    ccSetTextFont<1>(Graphic.graphic_4040);
    ccSetTextShadow<1>(true);
    ccSetColour<1>(colour(0xE6BE78));
    ccSetTextAlign<1>(1, 1, 12);
    ccSetSize<1>(430, 16, 0, 0);

    if (compare("", structParam(intArg2, Param.skillguide_extrareq)) != 0) {
        ccCreate<1>(Component.interface_1218.component_1218_72, 4, ifGetNextSubId(Component.interface_1218.component_1218_72));
        ccSetPosition<1>(100, intArg1 + 23, 0, 0);
        ccSetTextFont<1>(Graphic.verdana_11pt_regular);
        ccSetTextShadow<1>(true);
        ccSetText<1>(structParam(intArg2, Param.skillguide_extrareq));
        ccSetColour<1>(colour(0xDB9000));
        ccSetTextAlign<1>(1, 1, 13);
        ccSetSize<1>(430, 16, 0, 0);
    }

    if (stringLength(structParam(intArg2, Param.skillguide_info)) > 0) {
        ccCreate<1>(Component.interface_1218.component_1218_72, 5, ifGetNextSubId(Component.interface_1218.component_1218_72));
        ccSetPosition<1>(15, intArg1 + 10, 2, 0);
        ccSetGraphic<1>(Graphic.graphic_8485);
        ccSetSize<1>(17, 19, 0, 0);
    }

    if (ccFind(Component.interface_1218.component_1218_30, intArg0) == 1) {
        ccSetPosition(5, intArg1, 0, 0);
        ccSetOnTimer(noHook(""));
    }
}
