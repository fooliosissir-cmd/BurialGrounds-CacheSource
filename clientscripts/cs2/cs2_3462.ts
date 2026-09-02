/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3462

function cs2_3462(intArg0: component, intArg1: component, intArg2: component, intArg3: component): void {
    switch (varc_tutorial3_cutscene_tracker) {
        case 21:
            ifSetHide(true, intArg1);
            ccDeleteAll(intArg0);
            proc_tutorial3_fadeout(colour(0x000000), 75, intArg0);
            break;
        case 22:
            ifSetHide(false, intArg1);
            ccDeleteAll(intArg1);
            cs2_1088(intArg1, 0);
            ccDeleteAll(intArg2);
            ccCreate(intArg2, 6, 0);
            ccSetSize(0, 85, 1, 0);
            ccSetPosition(0, 0, 1, 0);
            ccSetPlayerModelSelf();
            ccSetModelAngle(0, 30, 0, 0, 0, 850);
            ccSetModelAnim(14230);
            ccSetOnTimer(hook(cs2_3464, "Ii", [event_com, event_comsubid]));
            cs2_2647(intArg2);
            ifSetSize(ifGetWidth(intArg2), paraheight(ifGetText(intArg3), ifGetWidth(intArg3), Graphic.p11_full) * 10 + 75, 0, 0, intArg2);
            camMoveto(moveCoord(coord(), 0, 0, -3), 1500, 1000, 100);
            camLookat(coord(), 0, 1000, 100);
            proc_tutorial3_fadein(75, intArg0);
            ifSetOnTimer(hook(cs2_3463, "Ic", [event_com, coord()]), intArg0);
            break;
        case 23:
            ifSetOnTimer(noHook(""), intArg0);
            proc_tutorial3_fadeout(colour(0x000000), 25, intArg0);
            break;
        case 24:
            camSmoothreset();
            ccDeleteAll(intArg1);
            ccDeleteAll(intArg2);
            ifSetHide(true, intArg1);
            proc_tutorial3_fadein(25, intArg0);
            break;
        default:
            ifSetHide(true, intArg1);
            camSmoothreset();
            break;
    }
}
