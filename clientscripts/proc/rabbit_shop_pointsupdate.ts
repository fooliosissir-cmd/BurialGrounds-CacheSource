/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,rabbit_shop_pointsupdate]

function proc_rabbit_shop_pointsupdate(): void {
    let int0: obj = Obj.mcannonremains;

    if (statBase(19) >= 40) {
        int0 = varbit_rabbit_score;
    } else {
        int0 = varbit_rabbit_score * enumOp(type_int, type_int, Enum.rabbit_xp_scaler, statBase(19)) / 100;
    }

    if (varbit_rabbit_score == Obj.mcannontoolkit) {
        ifSetText("Trade one point" + "<br>" + "for " + tostringLocalised(int0, 1) + " XP?", Component.interface_686.component_686_13);
    } else {
        ifSetText("Trade " + tostringLocalised(varbit_rabbit_score, 1) + " points" + "<br>" + "for " + tostringLocalised(int0, 1) + " XP?", Component.interface_686.component_686_13);
    }
    ccDeleteAll(Component.interface_686.component_686_6);
    let int1: number = enumGetoutputcount(Enum.enum_1589);
    let int2: number = 0;
    let int3: number = 0;
    let int4: number = 0;
    let int5: number = 0;
    let int6: obj = -1;
    let int7: obj = Obj.mcannonremains;
    let int8: number = 0;

    while (int8 < int1) {
        int6 = enumOp(type_int, type_obj, Enum.enum_1589, int8);
        int7 = enumOp(type_obj, type_int, Enum.rabbit_seed_prices, int6);
        int2 = int8 % 9 * 50;
        int3 = int8 / 9 * 54;
        [int4, int5] = [max(int4, int2), max(int5, int3)];
        ccCreate(Component.interface_686.component_686_6, 5, ifGetNextSubId(Component.interface_686.component_686_6));
        ccSetSize(48, 52, 0, 0);
        ccSetPosition(int2, int3, 0, 0);
        ccSetGraphic(Graphic.km_shoptile_0);
        if (int6 == Obj.obj_11209) {
            ccSetOp(1, "Trade points for XP");
            ccSetOnOpt(hook(comp_sethide, "1I", [false, Component.interface_686.component_686_9]));
        } else {
            ccSetOpBase("<col=ff981f>" + ocName(int6) + "</col>");
            ccSetOp(1, "Value");
            ccSetOp(2, "Buy 1");
            ccSetOp(3, "Buy 5");
            ccSetOp(4, "Buy 10");
            if (int6 != Obj.rabbit_flag) {
                ccSetOp(5, "Buy X");
            }
            ccSetOp(10, "Examine");
        }
        ccHookMouseEnter(hook(cc_settrans, "Iii", [event_com, ccGetId() + 1, 0]));
        ccHookMouseExit(hook(cc_settrans, "Iii", [event_com, ccGetId() + 1, 255]));
        ccCreate(Component.interface_686.component_686_6, 5, ifGetNextSubId(Component.interface_686.component_686_6));
        ccSetSize(48, 52, 0, 0);
        ccSetPosition(int2, int3, 0, 0);
        ccSetGraphic(Graphic.km_shoptile_1);
        ccSetTrans(255);
        ccCreate(Component.interface_686.component_686_6, 5, ifGetNextSubId(Component.interface_686.component_686_6));
        if (int6 == Obj.obj_11209) {
            ccSetSize(34, 34, 0, 0);
            ccSetPosition(int2 + 7, int3 + 2, 0, 0);
            if (mapLang() == 1) {
                ccSetGraphic(Graphic.xp_token_2);
            } else {
                ccSetGraphic(Graphic.xp_token_0);
            }
        } else {
            ccSetSize(36, 32, 0, 0);
            ccSetPosition(int2 + 6, int3 + 4, 0, 0);
            ccSetObjectNonum(int6, 5);
            ccSetOutline(1);
        }
        ccSetGraphicShadow(3153952);
        ccCreate(Component.interface_686.component_686_6, 5, ifGetNextSubId(Component.interface_686.component_686_6));
        ccSetSize(12, 12, 0, 0);
        ccSetPosition(int2 + 2, int3 + 38, 0, 0);
        ccSetObjectNonum(Obj.rabbit_flag, 1);
        ccCreate(Component.interface_686.component_686_6, 4, ifGetNextSubId(Component.interface_686.component_686_6));
        ccSetSize(31, 12, 0, 0);
        ccSetPosition(int2 + 13, int3 + 39, 0, 0);
        ccSetTextFont(Graphic.p11_full);
        ccSetTextAlign(2, 1, 0);
        if (int7 == -1) {
            ccSetText("N/A");
        } else {
            ccSetText(cs2_940(int7));
        }
        if (int7 <= varbit_rabbit_score) {
            ccSetColour(colour(0xFFFF00));
        } else {
            ccSetColour(colour(0xFF0000));
        }
        ccSetTextShadow(true);
        int8 = int8 + 1;
    }
    [int4, int5] = [int4 + 48, int5 + 52];
    let int9: number = ifGetHeight(Component.interface_686.component_686_6);
    ifSetSize(int4, int9, 0, 0, Component.interface_686.component_686_6);

    if (int5 > int9) {
        ifSetPosition((ifGetWidth(Component.interface_686.component_686_5) - ifGetWidth(Component.interface_686.component_686_7) - int4) / 2, 0, 0, 1, Component.interface_686.component_686_6);
        ifSetHide(false, Component.interface_686.component_686_7);
        ifSetScrollSize(0, int5, Component.interface_686.component_686_6);
        proc_scrollbar_vertical(Component.interface_686.component_686_7, Component.interface_686.component_686_6, Graphic.scrollbar_dragger_v2_3, Graphic.scrollbar_dragger_v2_0, Graphic.scrollbar_dragger_v2_1, Graphic.scrollbar_dragger_v2_2, Graphic.scrollbar_v2_0, Graphic.scrollbar_v2_1);
    } else {
        ifSetPosition(0, 0, 1, 1, Component.interface_686.component_686_6);
        ifSetHide(true, Component.interface_686.component_686_7);
    }
}
