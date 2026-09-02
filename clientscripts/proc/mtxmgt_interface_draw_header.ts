/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,mtxmgt_interface_draw_header]

function mtxmgt_interface_draw_header(intArg0: number, intArg1: number): void {
    let int2: component = enumOp(type_int, type_component, Enum.enum_5960, intArg1);
    let int3: component = enumOp(type_int, type_component, Enum.enum_5961, intArg1);

    if (int2 == -1) {
        return;
    }
    ifSetSize(0, 34, 1, 0, int2);
    ccCreate(int2, 5, 0);

    if (ifGetHide(int3) == 1) {
        ccSetGraphic(Graphic.aif_dcs_slt_btn_1_0);
    } else {
        ccSetGraphic(Graphic.aif_dcs_slt_btn_1_3);
    }
    ccSetSize(17, 0, 0, 1);
    ccSetPosition(1, 0, 0, 0);
    ccCreate(int2, 5, 1);

    if (ifGetHide(int3) == 1) {
        ccSetGraphic(Graphic.aif_dcs_slt_btn_1_1);
    } else {
        ccSetGraphic(Graphic.aif_dcs_slt_btn_1_4);
    }
    ccSetSize(17 * 2 + 2, 0, 1, 1);
    ccSetPosition(0, 0, 1, 0);
    ccCreate(int2, 5, 2);

    if (ifGetHide(int3) == 1) {
        ccSetGraphic(Graphic.aif_dcs_slt_btn_1_2);
    } else {
        ccSetGraphic(Graphic.aif_dcs_slt_btn_1_5);
    }
    ccSetSize(17, 0, 0, 1);
    ccSetPosition(1, 0, 2, 0);
    let int4: Enum = enumOp(type_int, type_enum, Enum.mtxmgt_category_subcat_names_list, intArg0);
    let str0: string = enumOp(type_int, type_string, int4, intArg1);
    ccCreate(int2, 4, 3);
    ccSetText(str0);
    ccSetTextFont(Graphic.graphic_4040);
    ccSetColour(colour(0xE5B051));
    ccSetSize(stringWidth(str0, Graphic.graphic_4040) + 20, 0, 0, 1);
    ccSetPosition(4, 0, 0, 0);
    ccSetTextAlign(1, 1, 13);
    ccCreate(int2, 5, 4);
    ccSetSize(12, 19, 0, 0);

    if (ifGetHide(int3) == 1) {
        ccSetGraphic(Graphic.aif_arrow_icon_1);
        ccSet2dangle(0);
        ccSetvflip(false);
    } else {
        ccSetGraphic(Graphic.aif_arrow_icon_1);
        ccSet2dangle(49152);
        ccSetvflip(true);
    }
    ccSetPosition(10, 0, 2, 1);
    ifSetOnClick(hook(cs2_6469, "i", [intArg1]), int2);
    ifSetHide(false, int2);
}
