/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2020

function cs2_2020(intArg0: number, strArg0: string, intArg1: number, intArg2: component): void {
    ccDeleteAll(intArg2);
    ccCreate(intArg2, 5, 0);
    ccSetSize(10, 0, 1, 1);
    ccSetPosition(0, 0, 1, 1);
    ccSetGraphic(Graphic.graphic_3859);
    ccCreate(intArg2, 5, 1);
    ccSetSize(6, 0, 0, 1);
    ccSetPosition(0, 0, 0, 1);
    ccSetGraphic(Graphic.graphic_3857);
    ccCreate(intArg2, 5, 2);
    ccSetSize(6, 0, 0, 1);
    ccSetPosition(0, 0, 2, 1);
    ccSetGraphic(Graphic.graphic_3858);
    ccCreate(intArg2, 4, 3);
    ccSetSize(0, 0, 1, 1);
    ccSetPosition(0, 0, 1, 1);
    ccSetTextFont(Graphic.p11_full);
    ccSetTextAlign(1, 1, 0);
    ccSetColour(colour(0xFF981F));
    ccSetTextShadow(true);
    ccSetText(strArg0);
    ifSetSize(intArg1, 26, 0, 0, intArg2);
    ifSetHide(false, intArg2);
    hookMouseEnter(hook(cs2_2021, "I1", [event_com, true]), intArg2);
    hookMouseExit(hook(cs2_2021, "I1", [event_com, false]), intArg2);

    if (intArg0 == -1) {
        ifClearops(intArg2);
        ifSetPauseText(strArg0, intArg2);
        ifSetOnClick(hook(cs2_2022, "ii", [1, intArg0]), intArg2);
    } else {
        ifSetOp(1, strArg0, intArg2);
        ifSetPauseText("", intArg2);
        ifSetOnOpt(hook(cs2_2022, "ii", [event_opindex, intArg0]), intArg2);
    }
}
