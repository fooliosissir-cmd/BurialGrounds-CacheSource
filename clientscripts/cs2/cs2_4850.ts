/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4850

function cs2_4850(intArg0: component, intArg1: component, intArg2: component, intArg3: component, intArg4: component, intArg5: component): void {
    ccDeleteAll(intArg2);
    ccDeleteAll(intArg3);
    ccDeleteAll(intArg4);
    ifSetHide(true, intArg5);
    ifSetScrollPos(0, 0, intArg0);
    ifSetScrollSize(0, 0, intArg0);
    proc_scrollbar_vertical(intArg1, intArg0, Graphic.aif_scrollbar_dragger_2_3, Graphic.aif_scrollbar_dragger_2_0, Graphic.aif_scrollbar_dragger_2_1, Graphic.aif_scrollbar_dragger_2_2, Graphic.aif_scrollbar_arrow_2_1, Graphic.aif_scrollbar_arrow_2_0);
    ccCreate(intArg2, 4, 0);
    ccSetSize(10, 10, 1, 1);
    ccSetPosition(0, 0, 1, 1);
    ccSetText("Please select a hotspot to customise from the map on the right.");
    ccSetColour(colour(0xE5E1BB));
    ccSetTextFont(Graphic.p12_full);
    ccSetTextAlign(1, 1, 0);
}
