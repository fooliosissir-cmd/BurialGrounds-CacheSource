/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,trade_pricechecker_setup]

function proc_trade_pricechecker_setup(intArg0: component, intArg1: component, intArg2: component): void {
    ccDeleteAll(intArg0);
    let int3: number = (ifGetWidth(intArg0) - 5 * 36) / 6;
    let int4: number = 0;
    let int5: obj = -1;
    let int6: number = 0;
    let int7: number = 0;
    let int8: number = 0;

    if (invFreespace(90) < invSize(90)) {
        while (int4 < invSize(90)) {
            int6 = invGetNum(90, int4);
            ccCreate(intArg0, 5, int4 * 2);
            ccCreate<1>(intArg0, 4, int4 * 2 + 1);
            if (int6 > 0) {
                int5 = invGetobj(90, int4);
                ccSetSize(36, 32, 0, 0);
                int8 = int4 / 5 * (32 + 40) + 2;
                ccSetPosition(int4 % 5 * (36 + int3) + int3, int8, 0, 0);
                ccSetHide(false);
                ccSetObject(int5, int6);
                ccSetGraphicShadow(3355443);
                ccSetOutline(1);
                ccSetOp(1, "Remove-1");
                ccSetOp(2, "Remove-5");
                ccSetOp(3, "Remove-10");
                ccSetOp(4, "Remove-All");
                ccSetOp(5, "Remove-X");
                ccSetOp(10, "Examine");
                ccSetOpBase("<col=ff9040>" + ocName(int5));
                ccSetSize<1>(36 + int3 - 6, 40, 0, 0);
                ccSetPosition<1>(int4 % 5 * (36 + int3) + int3 / 2 + 3, int8 + 32, 0, 0);
                ccSetHide<1>(false);
                ccSetTextAlign<1>(1, 0, 0);
                ccSetTextFont<1>(Graphic.p11_full);
                ccSetColour<1>(colour(0xFFFFFF));
                ccSetTextShadow<1>(true);
                int7 = cs2_2185(int4);
                if (int6 > 1) {
                    ccSetText<1>(tostringLocalised(int6, 1) + " x " + tostringLocalised(int7, 1) + "<br>" + "= " + tostringLocalised(int6 * int7, 1));
                } else {
                    ccSetText<1>(tostringLocalised(int7, 1));
                }
            } else {
                ccSetSize(0, 0, 0, 0);
                ccSetPosition(0, 0, 0, 0);
                ccSetHide(true);
                ccSetSize<1>(0, 0, 0, 0);
                ccSetPosition<1>(0, 0, 0, 0);
                ccSetHide<1>(true);
            }
            int4 = int4 + 1;
        }
    } else {
        ccCreate(intArg0, 4, 0);
        ccSetSize(0, ifGetHeight(intArg0), 1, 0);
        ccSetPosition(0, 0, 1, 0);
        ccSetColour(colour(0xFFFFFF));
        ccSetTextShadow(true);
        ccSetTextAlign(1, 1, 0);
        ccSetTextFont(Graphic.p12_full);
        ccSetText("Click on items in your inventory to check their values.");
    }
    int8 = int8 + 32 + 40;

    if (int8 > ifGetHeight(intArg0)) {
        ifSetScrollSize(0, int8, intArg0);
        ifSetPosition(-8, ifGetY(intArg0), 1, 0, intArg0);
        proc_scrollbar_vertical(intArg1, intArg0, Graphic.scrollbar_dragger_v2_3, Graphic.scrollbar_dragger_v2_0, Graphic.scrollbar_dragger_v2_1, Graphic.scrollbar_dragger_v2_2, Graphic.scrollbar_v2_0, Graphic.scrollbar_v2_1);
        if (ccFind(intArg1, 1) == 1) {
            scrollbar_vertical_doscroll(intArg1, intArg0, ifGetScrollY(intArg0), true);
        }
    } else {
        ifSetScrollSize(0, 0, intArg0);
        ifSetScrollPos(0, 0, intArg0);
        ccDeleteAll(intArg1);
        ifSetPosition(0, ifGetY(intArg0), 1, 0, intArg0);
    }

    if (varc_728 < 0) {
        ifSetText("Total value:" + "<br>" + "---", intArg2);
    } else {
        ifSetText("Total value:" + "<br>" + tostringLocalised(varc_728, 1), intArg2);
    }
}
