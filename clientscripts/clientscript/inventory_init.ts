/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,inventory_init]

function inventory_init(intArg0: component, intArg1: boolean): void {
    if (intArg1 == true) {
        varc_inventory_target = 0;
        ifSetOnVarTransmit(hook(inventory_init, "I1Y", [event_com, false], [2083]), intArg0);
    }
    let int2: number = invSize(93);
    let int3: number = int2 * 2 - 1;
    let int4: number = 0;

    while (int4 <= int3) {
        if (ccFind(intArg0, int4) == 0) {
            ccCreate(intArg0, 5, int4);
            ccSetSize(36, 32, 0, 0);
            if (int4 < int2) {
                ccSetGraphicShadow(3153952);
                ccSetOnTargetEnter(hook(inventory_targetmode, "1Ii", [true, event_com, event_comsubid]));
                ccSetOnOp(hook(inventory_targetmode, "1Ii", [false, event_com, event_comsubid]));
                ccSetdragrenderbehaviour(2);
                ccSetdragdeadzone(5);
                ccSetdragdeadtime(5);
                ccSetOnDragComplete(hook(inventory_drag, "IiIi", [event_com, event_comsubid, event_com2, event_comsubid2]));
                ccSetOnOpt(hook(cs2_1620, "Iiiii", [event_com, event_comsubid, 100, 0, 8]));
            } else {
                ccSetColour(colour(0x000000));
                ccSetTrans(255);
                ccSetHide(false);
            }
        }
        int4 = int4 + 1;
    }
    let int5: number = int2 / 4;
    let int6: number = (ifGetWidth(intArg0) - 4 * 36) / 3;
    let int7: number = (ifGetHeight(intArg0) - int5 * 32) / 6;
    let int8: obj = -1;
    int3 = varc_inventory_target - 1;
    int4 = 0;

    while (int4 < int2) {
        if (ccFind(intArg0, int4) == 1) {
            ccClearops();
            ccSetPosition(int4 % 4 * (36 + int6), int4 / 4 * (32 + int7), 0, 0);
            int8 = invGetobj(93, int4);
            if (int8 != -1) {
                ccSetHide(false);
                ccSetObject(int8, invGetNum(93, int4));
                if (int4 == int3) {
                    ccSetOutline(2);
                } else {
                    ccSetOutline(1);
                }
                inventory_setophelds(int8);
                ccSetdraggable(intArg0, -1);
                ccSetOnMouseOver(hook(cs2_5495, "o", [int8]));
                ccHookMouseExit(hook(cs2_5495, "o", [-1]));
            } else {
                ccSetHide(true);
                ccSetOnVarTransmit(noHook(""));
                ccSetObject(-1, 0);
                ccSetOutline(1);
                if (int4 == int3) {
                    varc_inventory_target = 0;
                }
            }
        }
        int4 = int4 + 1;
    }
    int4 = 0;

    while (int4 < int2) {
        if (ccFind(intArg0, int2 + int4) == 1) {
            ccSetPosition(int4 % 4 * (36 + int6), int4 / 4 * (32 + int7), 0, 0);
        }
        int4 = int4 + 1;
    }
}
