/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,trawler_reward_setup]

function trawler_reward_setup(intArg0: component, intArg1: component, intArg2: component): void {
    ifSetSize(ifGetWidth(intArg2), paraheight(ifGetText(intArg2), ifGetWidth(intArg2), Graphic.p11_full) * 12 + 3, 0, 0, intArg2);
    ccDeleteAll(intArg0);
    let int3: number = (ifGetWidth(intArg0) - 36 * 8) / 7;
    let int4: number = (ifGetHeight(intArg0) - 32 * 5) / 4;
    let int5: number = 0;

    while (int5 < invSize(0)) {
        ccCreate(intArg0, 5, int5);
        ccSetSize(36, 32, 0, 0);
        ccSetPosition((36 + int3) * (int5 % 8), int5 / 8 * (32 + int4), 0, 0);
        ccSetHide(false);
        if (invGetobj(0, int5) != -1) {
            ccSetObject(invGetobj(0, int5), invGetNum(0, int5));
            ccSetOpBase("<col=ff981f>" + ocName(invGetobj(0, int5)));
            ccSetOp(1, "Withdraw" + "<col=ff9040>");
            ccSetOp(2, "Withdraw-All" + "<col=ff9040>");
            ccSetOp(10, "Examine" + "<col=ff9040>");
            ccSetdragdeadzone(5);
            ccSetdragdeadtime(10);
            ccSetGraphicShadow(3355443);
            ccSetOutline(1);
            ccSetOnDragComplete(hook(cs2_1233, "IiIiII", [intArg0, event_comsubid, event_com2, event_comsubid2, intArg1, intArg2]));
        } else {
            ccSetObjectNonum(-1, 0);
        }
        int5 = int5 + 1;
    }
}
