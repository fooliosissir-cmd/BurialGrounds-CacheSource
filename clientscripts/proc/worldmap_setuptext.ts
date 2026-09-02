/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,worldmap_setuptext]

function worldmap_setuptext(strArg0: string, intArg0: number, intArg1: number, intArg2: number, intArg3: number, intArg4: number, strArg1: string, strArg2: string, intArg5: coord): void {
    ccSetHide(false);
    ccSetSize(intArg0, intArg1, 0, 0);
    ccSetPosition(intArg2, intArg3, 1, 1);
    ccSetColour(intArg4);
    ccSetTextFont(Graphic.menu_font_small);
    ccSetTextAlign(1, 1, 13);
    ccSetText(strArg0);

    if (intArg5 != -1) {
        ccSetOpBase("<col=ff9040>" + strArg1 + "</col>");
        ccSetOp(1, strArg2);
        ccSetOnOpt(hook(worldmap_op, "iIc", [event_opindex, event_com, intArg5]));
    } else {
        ccSetOp(1, "");
        ccSetOnOpt(noHook(""));
    }
}
