/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,trade_balance_indicator]

function trade_balance_indicator(intArg0: component, intArg1: component, intArg2: component, intArg3: component, intArg4: component): void {
    if (varc_729 > 1) {
        ifSetText(tostringLocalised(varc_729, 1) + " coins", intArg0);
    } else if (varc_729 == 1) {
        ifSetText("1 coin", intArg0);
    } else if (varc_729 == 0) {
        ifSetText("Nothing", intArg0);
    } else {
        ifSetText("Lots!", intArg0);
    }

    if (varc_697 > 1) {
        ifSetText(tostringLocalised(varc_697, 1) + " coins", intArg1);
    } else if (varc_697 == 1) {
        ifSetText("1 coin", intArg1);
    } else if (varc_697 == 0) {
        ifSetText("<col=ff0000>" + "Nothing" + "</col>", intArg1);
    } else {
        ifSetText("Lots!", intArg1);
    }
    let str0: string = "<col=ff0000>" + "Unknown" + "</col>";
    let int5: number = 0;

    if (varc_729 < 0) {
        if (varc_697 < 0) {
            ifSetText(str0, intArg2);
            ifSetHide(true, intArg3);
        } else {
            ifSetText(str0, intArg2);
            ifSetHide(false, intArg3);
            ifSetGraphic(Graphic.catcon_catapult_arrows_2, intArg3);
            ifSetPosition(cs2_4106(str0, intArg4), 0, 0, 2, intArg3);
        }
    } else if (varc_697 < 0) {
        str0 = "Unknown";
        ifSetText(str0, intArg2);
        ifSetHide(false, intArg3);
        ifSetGraphic(Graphic.catcon_catapult_arrows_0, intArg3);
        ifSetPosition(cs2_4106(str0, intArg4), 0, 2, 2, intArg3);
    } else {
        int5 = varc_729 - varc_697;
        if (int5 > 0) {
            if (int5 == 1) {
                str0 = "<col=ff0000>" + "1 coin" + "</col>";
            } else {
                str0 = "<col=ff0000>" + tostringLocalised(int5, 1) + " coins" + "</col>";
            }
            ifSetText(str0, intArg2);
            ifSetHide(false, intArg3);
            ifSetGraphic(Graphic.catcon_catapult_arrows_2, intArg3);
            ifSetPosition(cs2_4106(str0, intArg4), 0, 0, 2, intArg3);
        } else if (int5 < 0) {
            int5 = 0 - int5;
            if (int5 == 1) {
                str0 = "1 coin";
            } else {
                str0 = tostringLocalised(int5, 1) + " coins";
            }
            ifSetText(str0, intArg2);
            ifSetHide(false, intArg3);
            ifSetGraphic(Graphic.catcon_catapult_arrows_0, intArg3);
            ifSetPosition(cs2_4106(str0, intArg4), 0, 2, 2, intArg3);
        } else {
            str0 = "No net transfer";
            ifSetText(str0, intArg2);
            ifSetHide(true, intArg3);
        }
    }
}
