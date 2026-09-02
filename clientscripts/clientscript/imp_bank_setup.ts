/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,imp_bank_setup]

function imp_bank_setup(): void {
    let int0: number = 0;
    let int1: number = 0;
    let int2: number = 0;

    while (int0 < invSize(93)) {
        ccCreate(Component.interface_478.component_478_14, 5, int0);
        ccSetSize(36, 32, 0, 0);
        ccSetPosition(40 * int1, 40 * int2, 0, 0);
        if (invGetobj(93, int0) != -1) {
            ccSetObject(invGetobj(93, int0), invGetNum(93, int0));
            ccSetOpBase(ocName(invGetobj(93, int0)));
            ccSetOp(1, "Deposit");
            ccSetOp(2, "Examine");
            ccSetOnDragComplete(hook(cs2_703, "IiIi", [event_com, event_comsubid, event_com2, event_comsubid2]));
            ccSetdragdeadzone(5);
            ccSetdragdeadtime(10);
        }
        int0 = int0 + 1;
        int1 = int1 + 1;
        if (int1 == 8) {
            int1 = 0;
            int2 = int2 + 1;
        }
    }
}
