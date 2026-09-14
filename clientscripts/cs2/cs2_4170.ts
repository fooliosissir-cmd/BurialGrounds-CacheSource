/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4170

function cs2_4170(intArg0: component, intArg1: component, intArg2: number, strArg0: string): void {
    ccDeleteAll(intArg0);
    cs2_4178(1, intArg2, 0);
    ccCreate(intArg0, 5, 0);
    ccSetSize(0, 0, 1, 1);
    ccSetPosition(0, 0, 1, 1);
    ccSetGraphic(gameframe_skin_graphic(Graphic.miscgraphics_0));
    ccSetOnMouseRepeat(hook(cs2_1160, "IiIsii", [event_com, event_comsubid, intArg1, strArg0, 25, 200]));
    ccSetOnMouseLeave(hook(clientscript_deltooltip, "I", [intArg1]));
    ccCreate(intArg0, 5, 1);
    cs2_4172(intArg2);
    ccSetOnInvTransmit(hook(cs2_4171, "IiiY", [event_com, event_comsubid, intArg2], [94]));
    ccCreate<1>(intArg0, 5, 2);
    ccSetSize<1>(0, 0, 1, 1);
    ccSetPosition<1>(0, 0, 1, 1);
    ccSetGraphic<1>(Graphic.duel_misc_graphic);
    cs2_4174(intArg2);
    ccSetOnVarTransmit(hook(cs2_4173, "IiiY", [event_com, ccGetId<1>(), intArg2], [286]));
    ccCreate<1>(intArg0, 5, 3);
    ccSetSize<1>(10, 32, 0, 0);
    ccSetPosition<1>(0, 0, 1, 1);
    ccSetGraphic<1>(Graphic.exclamation_mark);
    ccSetHide<1>(true);
    ccSetOnTimer(hook(cs2_4175, "Iii1", [event_com, ccGetId<1>(), intArg2, true]));
}
