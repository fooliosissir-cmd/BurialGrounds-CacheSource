/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_713

function cs2_713(intArg0: component, intArg1: component, intArg2: component, intArg3: component, intArg4: component, intArg5: component, intArg6: component): void {
    let int7: obj = invGetobj(541, 0);

    if (int7 != -1) {
        ifSetObjectNonum(int7, 1, intArg1);
        ifSetOutline(1, intArg1);
        ifSetGraphicShadow(3355443, intArg1);
        ifSetOp(1, "Remove", intArg1);
        ifSetOp(10, "Examine", intArg1);
        ifSetOpBase("<col=ff9040>" + ocName(int7) + "</col>", intArg1);
        if (varbit_5026 == 0) {
            ifSetText("<col=ff0000>" + "Until" + "</col>" + "<br>" + "<col=ff0000>" + "logout" + "</col>", intArg2);
            ifClearops(intArg2);
            ifSetOp(2, "Specify", intArg2);
        } else {
            if (varbit_5026 == 1) {
                ifSetText("1 hour", intArg2);
            } else {
                ifSetText(tostring(varbit_5026) + " hours", intArg2);
            }
            ifSetOp(1, "'Until logout'", intArg2);
            ifSetOp(2, "Edit", intArg2);
        }
        ifSetOpBase("<col=ff9040>" + "Duration" + "</col>", intArg2);
        cs2_679(intArg3);
        ifSetOnMouseRepeat(hook(cs2_94, "I", [intArg3]), intArg3);
        ifSetOnMouseLeave(hook(cs2_92, "I", [intArg3]), intArg3);
    } else {
        ifSetObjectNonum(-1, 0, intArg1);
        ifSetText("", intArg2);
        ifClearops(intArg1);
        ifClearops(intArg2);
        ifSetOpBase("", intArg1);
        ifSetOpBase("", intArg2);
        ccDeleteAll(intArg3);
        ifSetOnMouseRepeat(noHook(""), intArg3);
        ifSetOnMouseLeave(noHook(""), intArg3);
    }
    int7 = invotherGetobj(541, 0);

    if (int7 != -1) {
        ifSetObjectNonum(int7, 1, intArg5);
        ifSetOutline(1, intArg5);
        ifSetGraphicShadow(3355443, intArg5);
        ifSetOp(10, "Examine", intArg5);
        ifSetOpBase("<col=ff9040>" + ocName(int7) + "</col>", intArg5);
        if (varbit_5070 == 0) {
            ifSetText("<col=ff0000>" + "Until" + "</col>" + "<br>" + "<col=ff0000>" + "logout" + "</col>", intArg6);
        } else if (varbit_5070 == 1) {
            ifSetText("1 hour", intArg6);
        } else {
            ifSetText(tostring(varbit_5070) + " hours", intArg6);
        }
    } else {
        ifSetObjectNonum(-1, 0, intArg5);
        ifSetText("", intArg6);
        ifClearops(intArg5);
        ifSetOpBase("", intArg5);
    }
}
