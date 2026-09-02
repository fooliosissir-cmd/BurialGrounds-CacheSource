/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,love_puzzle_side_init]

function love_puzzle_side_init(intArg0: component, intArg1: component, intArg2: component): void {
    ccDeleteAll(intArg0);
    ccDeleteAll(intArg1);
    ccDeleteAll(intArg2);
    ccCreate(intArg0, 6, ifGetNextSubId(intArg0));
    ccSetSize(0, 0, 1, 1);
    ccSetPosition(0, 0, 1, 1);
    ccSetModelAngle(0, 0, 0, 0, 0, 2600);
    ccSetNpcHead(Npc.wom_cutscene_2);
    ccSetModelAnim(9804);
    cs2_2647(intArg0);
    cs2_1298(ifGetLayer(intArg1), 0, 0, 0);
    ccCreate(intArg1, 4, ifGetNextSubId(intArg1));
    ccSetTextFont(Graphic.p11_full);
    ccSetColour(colour(0xFFFFFF));
    ccSetTextShadow(true);
    ccSetTextAlign(0, 1, 0);
    let str0: string = "To modify the spell so that it goes to our chosen destination, you must connect the " + "<col=ff0000>" + "start node" + "</col>" + " at the bottom to the " + "<col=ff0000>" + "destination node" + "</col>" + " in the " + "<col=ff0000>" + "upper half" + "</col>" + " of the tablet." + "<br>" + "<br>" + "Drag the " + "<col=ff0000>" + "conduit tiles" + "</col>" + " into the grid to form a path leading upwards. You can click tiles to remove them from the grid." + "<br>" + "<br>" + "The tablet has been damaged slightly by the chipping process, creating " + "<col=ff0000>" + "dead zones" + "</col>" + ". Magic cannot flow through a " + "<col=ff0000>" + "dead zone" + "</col>" + ", so you must route the power around them.";
    ccSetText(str0);

    if (paraheight(str0, ifGetWidth(intArg1), Graphic.p11_full) * 10 + 5 <= ifGetHeight(intArg1)) {
        ccSetSize(0, 0, 1, 1);
        ccSetPosition(0, 0, 1, 1);
        ifSetScrollSize(0, 0, intArg1);
        ifSetHide(true, intArg2);
        return;
    }
    let int3: number = paraheight(str0, ifGetWidth(intArg1) - 17, Graphic.p11_full) * 10 + 5;
    ccSetSize(17, int3, 1, 0);
    ccSetPosition(0, 0, 0, 1);
    ifSetScrollSize(0, int3, intArg1);
    ifSetHide(false, intArg2);
    proc_scrollbar_vertical(intArg2, intArg1, Graphic.scrollbar_dragger_v2_3, Graphic.scrollbar_dragger_v2_0, Graphic.scrollbar_dragger_v2_1, Graphic.scrollbar_dragger_v2_2, Graphic.scrollbar_v2_0, Graphic.scrollbar_v2_1);
}
