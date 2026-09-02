/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6172

function cs2_6172(intArg0: number, intArg1: number): number {
    let int2: struct = enumOp(type_int, type_struct, Enum.rcsiphonxp_item_iterator, intArg0);

    if (int2 == -1) {
        return intArg1;
    }
    let int3: number = structParam(int2, Param.rcsiphonxp_icon_xof);
    let int4: number = structParam(int2, Param.rcsiphonxp_icon_yof);
    let str0: string = structParam(int2, Param.rcsiphonxp_tooltip);
    let int5: graphic = Graphic.aif_runecrafting_bkgrd_button2_1;

    if (ccFind(Component.interface_1273.component_1273_14, intArg0) == 1) {
        ccSetGraphic(Graphic.aif_runecrafting_bkgrd_button2_0);
        ccSetSize(84, 78, 0, 0);
        ccSetPosition(int3, int4, 0, 0);
        ccSetnoclickthrough(true);
        ccHookMouseEnter(hook(graphic_swapper_child, "Iid", [event_com, event_comsubid, int5]));
        ccHookMouseExit(hook(rcsiphonxp_item_mouseleave, "Ii", [event_com, event_comsubid]));
        ccSetOnMouseOver(hook(cs2_568, "IiIsii", [Component.interface_1273.component_1273_14, intArg0, Component.interface_1273.component_1273_18, str0, 5, 300]));
        ccSetOp(1, "Buy 1");
        ccSetOp(2, "Buy 2");
        ccSetOp(3, "Buy 5");
        ccSetOp(4, "Buy 10");
        ccSetOnOpt(hook(rcsiphonxp_select_item, "iI", [intArg0, event_com]));
        if (structParam(int2, Param.rcsiphonxp_has_name2) == 0) {
            ccSetOpBase(structParam(int2, Param.rcsiphonxp_name));
            ccCreate(Component.interface_1273.component_1273_14, 4, intArg1);
            ccSetSize(84, 14, 0, 0);
            ccSetPosition(int3, int4 - 30, 0, 0);
            ccSetText(structParam(int2, Param.rcsiphonxp_name));
            ccSetTextAlign(1, 1, 0);
            ccSetTextFont(Graphic.p12_full);
            ccSetTextShadow(false);
            ccSetColour(colour(0xFFFFFF));
            intArg1 = intArg1 + 1;
            ccSetOpBase(structParam(int2, Param.rcsiphonxp_name));
        } else {
            ccSetOpBase(structParam(int2, Param.rcsiphonxp_name) + " " + structParam(int2, Param.rcsiphonxp_name2));
            ccCreate(Component.interface_1273.component_1273_14, 4, intArg1);
            ccSetSize(84, 14, 0, 0);
            ccSetPosition(int3, int4 - 37, 0, 0);
            if (mapLang() == 3 || mapLang() == 2) {
                ccSetText(structParam(int2, Param.rcsiphonxp_name2));
            } else {
                ccSetText(structParam(int2, Param.rcsiphonxp_name));
            }
            ccSetTextAlign(1, 1, 0);
            ccSetTextFont(Graphic.p12_full);
            ccSetTextShadow(false);
            ccSetColour(colour(0xFFFFFF));
            intArg1 = intArg1 + 1;
            ccCreate(Component.interface_1273.component_1273_14, 4, intArg1);
            ccSetSize(84, 14, 0, 0);
            ccSetPosition(int3, int4 - 23, 0, 0);
            if (mapLang() == 3 || mapLang() == 2) {
                ccSetText(structParam(int2, Param.rcsiphonxp_name));
            } else {
                ccSetText(structParam(int2, Param.rcsiphonxp_name2));
            }
            ccSetTextAlign(1, 1, 0);
            ccSetTextFont(Graphic.p12_full);
            ccSetTextShadow(false);
            ccSetColour(colour(0xFFFFFF));
            intArg1 = intArg1 + 1;
            ccSetOpBase(append(append(structParam(int2, Param.rcsiphonxp_name), " "), structParam(int2, Param.rcsiphonxp_name2)));
        }
        ccCreate(Component.interface_1273.component_1273_14, 4, intArg1);
        ccSetSize(84, 14, 0, 0);
        ccSetPosition(int3, int4 + 82, 0, 0);
        ccSetText(structParam(int2, Param.rcsiphonxp_price_string) + " Points");
        ccSetTextAlign(1, 1, 0);
        ccSetTextFont(Graphic.b12_full);
        ccSetTextShadow(false);
        ccSetColour(colour(0xFA8119));
        intArg1 = intArg1 + 1;
        ccCreate(Component.interface_1273.component_1273_14, 6, intArg1);
        ccSetSize(20, 20, 0, 0);
        ccSetModel(structParam(int2, Param.rcsiphonxp_model));
        ccSetModelAngle(structParam(int2, Param.rcsiphonxp_xof), structParam(int2, Param.rcsiphonxp_yof), structParam(int2, Param.rcsiphonxp_xrot), structParam(int2, Param.rcsiphonxp_yrot), structParam(int2, Param.rcsiphonxp_zrot), structParam(int2, Param.rcsiphonxp_zoom));
        if (intArg0 < 4) {
            ccSetRetex(1, 2040, 2055);
        }
        int3 = int3 + structParam(int2, Param.rcsiphonxp_xof) + (84 - ccGetWidth()) / 2;
        int4 = int4 + structParam(int2, Param.rcsiphonxp_yof) + (70 - ccGetHeight()) / 2;
        ccSetPosition(int3, int4, 0, 0);
        ccSetnoclickthrough(false);
        intArg1 = intArg1 + 1;
    }
    return intArg1;
}
