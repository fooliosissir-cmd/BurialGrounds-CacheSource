/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6469

function cs2_6469(intArg0: number): void {
    let int1: component = enumOp(type_int, type_component, Enum.enum_5960, intArg0);
    let int2: component = enumOp(type_int, type_component, Enum.enum_5961, intArg0);

    if (int2 != -1) {
        if (ifGetHide(int2) == 1) {
            ifSetHide(false, int2);
            if (int2 == varc_1966) {
                ifSetHide(false, Component.interface_1311.component_1311_167);
            }
            if (ccFind(int1, 0) == 1) {
                ccSetGraphic(Graphic.aif_dcs_slt_btn_1_3);
            }
            if (ccFind(int1, 1) == 1) {
                ccSetGraphic(Graphic.aif_dcs_slt_btn_1_4);
            }
            if (ccFind(int1, 2) == 1) {
                ccSetGraphic(Graphic.aif_dcs_slt_btn_1_5);
            }
            if (ccFind(int1, 4) == 1) {
                ccSetGraphic(Graphic.aif_arrow_icon_1);
                ccSet2dangle(49152);
                ccSetvflip(true);
            }
            cs2_6467();
            mtxmgt_check_list_scroll(int1, int2);
        } else {
            ifSetHide(true, int2);
            if (int2 == varc_1966) {
                ifSetHide(true, Component.interface_1311.component_1311_167);
            }
            if (ccFind(int1, 0) == 1) {
                ccSetGraphic(Graphic.aif_dcs_slt_btn_1_0);
            }
            if (ccFind(int1, 1) == 1) {
                ccSetGraphic(Graphic.aif_dcs_slt_btn_1_1);
            }
            if (ccFind(int1, 2) == 1) {
                ccSetGraphic(Graphic.aif_dcs_slt_btn_1_2);
            }
            if (ccFind(int1, 4) == 1) {
                ccSetGraphic(Graphic.aif_arrow_icon_1);
                ccSet2dangle(0);
                ccSetvflip(false);
            }
            cs2_6467();
        }
    }
}
