/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,worldmap_setupgraphic]

function worldmap_setupgraphic(intArg0: graphic, intArg1: graphic, intArg2: graphic, intArg3: number, intArg4: number, intArg5: number, intArg6: boolean, intArg7: boolean, intArg8: boolean, intArg9: number, strArg0: string, strArg1: string, intArg10: coord): void {
    ccSetHide(false);
    ccSetSize(intArg1, intArg2, 0, 0);
    ccSetPosition(intArg3, intArg4, 1, 1);
    ccSet2dangle(intArg5);
    ccSettiling(intArg6);
    ccSethflip(intArg7);
    ccSetvflip(intArg8);
    ccSetGraphic(intArg0);
    let int11: number = 0;
    let int12: number = 0;

    if (intArg9 == 1) {
        ccSetAlpha(true);
        int11 = clientClock() % 50;
        int12 = 50 / 2;
        if (int11 <= int12) {
            ccSetTrans(255 - scale(int11, int12, 255));
        } else {
            ccSetTrans(scale(int11 - int12, int12, 255));
        }
    }

    if (intArg10 != -1) {
        ccSetOpBase("<col=ff9040>" + strArg0 + "</col>");
        ccSetOp(1, strArg1);
        ccSetOnOp(hook(worldmap_op, "iIc", [event_opindex, event_com, intArg10]));
    } else {
        ccSetOp(1, "");
        ccSetOnOp(noHook(""));
    }
}
