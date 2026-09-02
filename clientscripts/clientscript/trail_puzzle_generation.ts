/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,trail_puzzle_generation]

function trail_puzzle_generation(intArg0: component): void {
    let int1: number = 0;
    let int2: number = 0;
    let int3: number = 0;

    while (int1 < invSize(140)) {
        ccCreate(intArg0, 6, int1);
        ccSetSize(49, 49, 0, 0);
        ccSetPosition(56 * int2, 56 * int3, 0, 0);
        if (invGetobj(140, int1) != -1) {
            ccSetObject(invGetobj(140, int1), invGetNum(140, int1));
            ccSetModelAngle(0, 0, 512, 0, 0, 1340);
            ccSetmodelorthog(true);
            ccSetOpBase(ocName(invGetobj(140, int1)));
            ccSetOp(1, "Move");
            ccSetOnOpt(hook(trail_puzzle_click, "Iii", [event_com, int1, event_opindex]));
        } else {
            ccSetHide(true);
        }
        int1 = int1 + 1;
        int2 = int2 + 1;
        if (int2 == 5) {
            int2 = 0;
            int3 = int3 + 1;
        }
    }
}
