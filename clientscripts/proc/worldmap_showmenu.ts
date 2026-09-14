/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,worldmap_showmenu]

function proc_worldmap_showmenu(intArg0: boolean, intArg1: component, intArg2: component, intArg3: component, intArg4: component, intArg5: component): void {
    ifSetText(worldMapGetMapName(worldMapGetcurrentmap()), Component.interface_755.component_755_20);
    ccDeleteAll(intArg2);
    ccDeleteAll(intArg3);

    if (intArg0 == false) {
        ifSetHide(true, intArg1);
        ifSetGraphic(Graphic.scrollbar_v2_0, Component.interface_755.component_755_21);
        ifSetOnClick(hook(clientscript_worldmap_showmenu, "1IIIII", [true, intArg1, intArg2, intArg3, intArg4, intArg5]), Component.interface_755.component_755_21);
        ifSetOnClick(hook(clientscript_worldmap_showmenu, "1IIIII", [true, intArg1, intArg2, intArg3, intArg4, intArg5]), Component.interface_755.component_755_20);
        return;
    }
    ifSetHide(false, intArg1);
    ifSetGraphic(Graphic.scrollbar_v2_1, Component.interface_755.component_755_21);
    ifSetOnClick(hook(clientscript_worldmap_showmenu, "1IIIII", [false, intArg1, intArg2, intArg3, intArg4, intArg5]), Component.interface_755.component_755_21);
    ifSetOnClick(hook(clientscript_worldmap_showmenu, "1IIIII", [false, intArg1, intArg2, intArg3, intArg4, intArg5]), Component.interface_755.component_755_20);
    defineArray(0, type_int, 35 + 1);
    array0[0] = 0;
    let int6: number = 1;
    let int7: number = 1;
    let int8: worldmap = -1;

    while (int6 <= 35) {
        int8 = enumOp(type_int, 96, Enum.worldmap_maps, int6);
        if (int8 != -1) {
            array0[int7] = int6;
            int7 = int7 + 1;
        }
        int6 = int6 + 1;
    }
    worldmap_quicksort_menu(0, 1, int7 - 1);
    ccCreate(intArg2, 4, ifGetNextSubId(intArg2));
    ccSetPosition(0, 0, 1, 0);
    ccSetSize(0, 20, 1, 0);
    ccSetTextFont(Graphic.b12_full);
    ccSetTextAlign(0, 1, 0);
    ccSetColour(colour(0xFFFFFF));
    ccSetOnMouseOver(hook(cc_text_colour_swapper, "Iii", [event_com, event_comsubid, colour(0xAFAFAF)]));
    ccSetOnMouseLeave(hook(cc_text_colour_swapper, "Iii", [event_com, event_comsubid, colour(0xFFFFFF)]));
    int8 = enumOp(type_int, 96, Enum.worldmap_maps, array0[0]);
    ccSetText(worldMapGetMapName(int8));
    ccSetOnClick(hook(worldmap_choosemap, "`IIIII", [int8, intArg1, intArg2, intArg3, intArg4, intArg5]));
    cs2_309(int8, intArg2, 0);
    let int9: number = ccGetHeight();
    let int10: number = 0;
    int6 = 1;

    while (int6 < int7) {
        ccCreate(intArg2, 4, ifGetNextSubId(intArg2));
        ccSetPosition(0, int9, 1, 0);
        ccSetSize(0, 20, 1, 0);
        ccSetTextFont(Graphic.p12_full);
        ccSetTextAlign(0, 1, 0);
        ccSetColour(colour(0xFFFFFF));
        ccSetOnMouseOver(hook(cc_text_colour_swapper, "Iii", [event_com, event_comsubid, colour(0xAFAFAF)]));
        ccSetOnMouseLeave(hook(cc_text_colour_swapper, "Iii", [event_com, event_comsubid, colour(0xFFFFFF)]));
        int8 = enumOp(type_int, 96, Enum.worldmap_maps, array0[int6]);
        ccSetText(worldMapGetMapName(int8));
        ccSetOnClick(hook(worldmap_choosemap, "`IIIII", [int8, intArg1, intArg2, intArg3, intArg4, intArg5]));
        if (int8 == worldMapGetcurrentmap()) {
            int10 = int9;
        }
        cs2_309(int8, intArg2, int9);
        int9 = int9 + ccGetHeight();
        int6 = int6 + 1;
    }
    ifSetScrollSize(0, int9, intArg2);
    int9 = max(int9, 20);
    int9 = int9 + 3;
    int9 = min(int9, 150);
    ifSetSize(ifGetWidth(intArg1), int9, 0, 0, intArg1);
    proc_scrollbar_vertical(intArg3, intArg2, Graphic.scrollbar_dragger_v2_3, Graphic.scrollbar_dragger_v2_0, Graphic.scrollbar_dragger_v2_1, Graphic.scrollbar_dragger_v2_2, Graphic.scrollbar_v2_0, Graphic.scrollbar_v2_1);
    scrollbar_ondrag_doscroll(intArg3, intArg2, int10, 1);
}
