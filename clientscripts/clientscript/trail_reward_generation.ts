/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,trail_reward_generation]

function trail_reward_generation(): void {
    let int0: number = 0;
    let int1: number = 0;
    let int2: number = 0;

    while (int0 < invSize(141)) {
        ccCreate(Component.interface_364.component_364_4, 5, int0);
        ccSetSize(36, 32, 0, 0);
        ccSetPosition(40 * int1, 40 * int2, 0, 0);
        if (invGetobj(141, int0) != -1) {
            ccSetObject(invGetobj(141, int0), invGetNum(141, int0));
            ccSetOpBase("<col=ff9040>" + ocName(invGetobj(141, int0)));
            ccSetOp(1, "Examine");
            ccSetOutline(1);
        }
        int0 = int0 + 1;
        int1 = int1 + 1;
        if (int1 == 3) {
            int1 = 0;
            int2 = int2 + 1;
        }
    }
}
