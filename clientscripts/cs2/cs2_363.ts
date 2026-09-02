/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_363

function cs2_363(intArg0: component, intArg1: number, intArg2: Enum, intArg3: graphic, intArg4: boolean, intArg5: number, intArg6: number, intArg7: number, strArg0: string, intArg8: number, strArg1: string): void {
    ccDeleteAll(intArg0);

    if (intArg3 == -1) {
        ifSetHide(true, intArg0);
        ifClearops(intArg0);
        return;
    }
    ifSetHide(false, intArg0);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetSize(0, ifGetHeight(intArg0), 1, 0);
    ccSetPosition(0, 0, 0, 0);
    let int9: number = ccGetHeight();
    let int10: number = int9 - 10;

    if (intArg6 > 90) {
        ccSetGraphic(Graphic.graphic_10551);
    } else {
        ccSetGraphic(Graphic.graphic_10549);
    }
    let int11: number = ccGetId();
    let int12: number = 0;

    if (intArg3 != -1) {
        ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
        ccSetSize(intArg5, intArg6, 0, 0);
        if (intArg7 == 2) {
            int12 = int9 - (intArg6 + 2);
        } else {
            int12 = (int9 - intArg6) / 2;
        }
        ccSetPosition(0, int12, 1, 0);
        ccSettiling(false);
        ccSetGraphic(intArg3);
    }

    if (intArg8 == 1) {
        cs2_365(intArg0, int11, 1);
        ifSetOnMouseOver(hook(cs2_366, "Iigii11Isi", [-1, intArg1, intArg2, int11, int9, true, intArg4, event_com, strArg1, event_mousex]), intArg0);
        hookMouseExit(hook(cs2_366, "Iigii11Isi", [-1, intArg1, intArg2, int11, int9, false, intArg4, event_com, strArg1, -1]), intArg0);
        ifSetOnTimer(noHook(""), intArg0);
    } else {
        cs2_365(intArg0, int11, 0);
        ifSetOnMouseOver(hook(cs2_366, "Iigii11Isi", [intArg0, intArg1, intArg2, int11, int9, true, intArg4, event_com, strArg1, event_mousex]), intArg0);
        hookMouseExit(hook(cs2_366, "Iigii11Isi", [intArg0, intArg1, intArg2, int11, int9, false, intArg4, event_com, strArg1, -1]), intArg0);
    }
}
