/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2739

function cs2_2739(intArg0: component, intArg1: number): void {
    ccDeleteAll(intArg0);
    let int2: number = invSize(93);
    let int3: obj = -1;
    let int4: number = int2 / 4;
    let int5: number = (ifGetWidth(intArg0) - 4 * 36) / 3;
    let int6: number = (ifGetHeight(intArg0) - int4 * 32) / 6;
    let int7: number = 0;

    while (int7 < int2) {
        ccCreate(intArg0, 5, int7);
        int3 = invGetobj(93, int7);
        if (int3 != -1) {
            ccSetSize(36, 32, 0, 0);
            ccSetPosition(int7 % 4 * (36 + int5), int7 / 4 * (32 + int6), 0, 0);
            ccSetObject(int3, invGetNum(93, int7));
            ccSetOpBase(append("<col=ff9040>", ocName(int3)));
            ccSetOp(1, "Equip");
            ccSetOp(9, "Stats");
            ccSettargetverb("Compare");
            ccSetOp(10, "Examine");
            ccSetGraphicShadow(3153952);
            if (intArg1 == int7) {
                ccSetOutline(2);
            } else {
                ccSetOutline(1);
            }
            ccSetOnOpt(hook(cs2_1620, "Iiiii", [event_com, event_comsubid, 100, 0, 8]));
            ccSetOnTargetEnter(hook(cs2_2738, "Ii", [intArg0, int7]));
            ccSetOnOp(hook(cs2_2738, "Ii", [intArg0, -1]));
            ccSetOnMouseOver(hook(cs2_5495, "o", [int3]));
            ccHookMouseExit(hook(cs2_5495, "o", [-1]));
        } else {
            ccSetHide(true);
        }
        int7 = int7 + 1;
    }

    if (intArg1 != -1 && invGetobj(93, intArg1) == -1) {
        intArg1 = -1;
    }
    ifSetOnInvTransmit(hook(cs2_2738, "IiY", [event_com, intArg1], [93]), intArg0);
}
