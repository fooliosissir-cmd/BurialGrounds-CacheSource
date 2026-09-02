/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4011

function cs2_4011(): void {
    if (varc_699 == -1) {
        return;
    }
    let int0: number = cs2_2193(structParam(varc_699, Param.param_847));

    if (int0 == 2) {
        ifSetText("Quest complete!", Component.interface_1243.component_1243_66);
    } else if (int0 == 1) {
        ifSetText("Started", Component.interface_1243.component_1243_66);
    } else {
        ifSetText("Not started", Component.interface_1243.component_1243_66);
    }
    let str0: string = structParam(varc_699, Param.param_845);
    let int1: number = stringWidth(str0, ifGetfontmetrics(Component.interface_1243.component_1243_6));
    ifSetSize(int1 + 30, ifGetHeight(Component.interface_1243.component_1243_2), 0, 0, Component.interface_1243.component_1243_2);
    ifSetText(str0, Component.interface_1243.component_1243_6);
    ifSetGraphic(structParam(varc_699, Param.param_952), Component.interface_1243.component_1243_67);
    int1 = cs2_4249("<col=ebe076>" + "Start point:" + "</col>", structParam(varc_699, Param.param_948), Component.interface_1243.component_1243_17, Component.interface_1243.component_1243_18, Component.interface_1243.component_1243_19, -1, -1, int0, 0);
    int1 = cs2_4249("<col=ebe076>" + "Requirements:" + "</col>", varcstr_359, Component.interface_1243.component_1243_20, Component.interface_1243.component_1243_21, Component.interface_1243.component_1243_22, -1, -1, int0, int1);
    int1 = cs2_4249("<col=ebe076>" + "Required items:" + "</col>", structParam(varc_699, Param.param_949), Component.interface_1243.component_1243_23, Component.interface_1243.component_1243_24, Component.interface_1243.component_1243_25, Component.interface_1243.component_1243_26, Component.interface_1243.component_1243_31, int0, int1);
    int1 = cs2_4249("<col=ebe076>" + "Combat:" + "</col>", structParam(varc_699, Param.param_950), Component.interface_1243.component_1243_32, Component.interface_1243.component_1243_33, Component.interface_1243.component_1243_34, -1, -1, int0, int1);

    switch (varc_699) {
        case Struct.struct_658:
            if (varp_179 >= 21 && varbit_7997 == 0) {
                str0 = structParam(varc_699, Param.param_1212);
            } else {
                str0 = structParam(varc_699, Param.param_951);
            }
            break;
        case Struct.struct_659:
            if (varp_67 >= 3 && varbit_7998 == 0) {
                str0 = structParam(varc_699, Param.param_1212);
            } else {
                str0 = structParam(varc_699, Param.param_951);
            }
            break;
        case Struct.struct_1137:
            if (varp_144 == 100) {
                str0 = structParam(varc_699, Param.param_1212);
            } else {
                str0 = structParam(varc_699, Param.param_951);
            }
            break;
        case Struct.struct_10527:
            ifSetText("Offer", Component.interface_1243.component_1243_50);
            ifClearops(Component.interface_1243.component_1243_46);
            ifSetPauseText("Offer", Component.interface_1243.component_1243_46);
            ifSetPosition(0, ifGetY(Component.interface_1243.component_1243_46), 1, 0, Component.interface_1243.component_1243_46);
            ifSetHide(true, Component.interface_1243.component_1243_51);
            ifSetHide(true, Component.interface_1243.component_1243_56);
            ifSetHide(true, Component.interface_1243.component_1243_57);
            str0 = varcstr_376;
            break;
        default:
            str0 = structParam(varc_699, Param.param_951);
            break;
    }
    int1 = cs2_4249("<col=ebe076>" + "Rewards:" + "</col>", str0, Component.interface_1243.component_1243_35, Component.interface_1243.component_1243_36, Component.interface_1243.component_1243_37, Component.interface_1243.component_1243_38, Component.interface_1243.component_1243_43, int0, int1);

    if (int1 > ifGetHeight(Component.interface_1243.component_1243_16)) {
        ifSetScrollSize(0, int1, Component.interface_1243.component_1243_16);
        proc_scrollbar_vertical(Component.interface_1243.component_1243_44, Component.interface_1243.component_1243_16, Graphic.aif_scrollbar_dragger_2_3, Graphic.aif_scrollbar_dragger_2_0, Graphic.aif_scrollbar_dragger_2_1, Graphic.aif_scrollbar_dragger_2_2, Graphic.aif_scrollbar_arrow_2_1, Graphic.aif_scrollbar_arrow_2_0);
    } else {
        ifSetScrollSize(0, 0, Component.interface_1243.component_1243_16);
        ccDeleteAll(Component.interface_1243.component_1243_44);
    }
}
