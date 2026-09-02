/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_381

function cs2_381(intArg0: component, intArg1: number, intArg2: number, strArg0: string): void {
    let int3: number = clientClock() + 25;

    if (varc_tooltip_time < int3) {
        varc_tooltip_time = max(clientClock(), varc_tooltip_time + 2);
        return;
    }
    varc_tooltip_time = int3;

    if (ifGetHide(Component.interface_1028.component_1028_140) == 0) {
        return;
    }
    let int4: number = 0;

    if (ccFind(intArg0, intArg1) == 1 || (intArg1 == -1 && ifFind(intArg0) == 1)) {
        [varc_tooltip_built, varc_player_kit_scroll_length] = [cc_getx_absolute(), ccGetWidth()];
        intArg2 = max(min(intArg2, ccGetHeight()), 0);
        int4 = cc_gety_absolute() + intArg2;
    } else {
        return;
    }
    ifSetHide(false, Component.interface_1028.component_1028_140);
    ccDeleteAll(Component.interface_1028.component_1028_140);
    let int5: number = parawidth(strArg0, ifGetWidth(Component.interface_1028.component_1028_30), Graphic.p12_full);
    let int6: number = paraheight(strArg0, int5, Graphic.p12_full) * 12 + 5;
    let int7: number = int5 + 25;
    let int8: number = max(int6 + 8, 17);
    let int9: number = max(int7 - 25, 0);
    let int10: number = max(int8 - 14, 0);
    ifSetSize(int7, int8, 0, 0, Component.interface_1028.component_1028_140);
    ifSetPosition(varc_tooltip_built - int7, int4 - int8 / 2, 0, 0, Component.interface_1028.component_1028_140);
    ccCreate(Component.interface_1028.component_1028_140, 3, ifGetNextSubId(Component.interface_1028.component_1028_140));
    ccSetSize(int9, int10, 0, 0);
    ccSetPosition(7, 0, 0, 1);
    ccSetfill(true);
    ccSetColour(colour(0xE3E2E1));
    ccCreate(Component.interface_1028.component_1028_140, 5, ifGetNextSubId(Component.interface_1028.component_1028_140));
    ccSetSize(int9, 7, 0, 0);
    ccSetPosition(7, 0, 0, 0);
    ccSettiling(true);
    ccSetGraphic(Graphic.graphic_3476);
    ccCreate(Component.interface_1028.component_1028_140, 5, ifGetNextSubId(Component.interface_1028.component_1028_140));
    ccSetSize(int9, 7, 0, 0);
    ccSetPosition(7, 0, 0, 2);
    ccSettiling(true);
    ccSetvflip(true);
    ccSetGraphic(Graphic.graphic_3476);
    ccCreate(Component.interface_1028.component_1028_140, 5, ifGetNextSubId(Component.interface_1028.component_1028_140));
    ccSetSize(7, int10, 0, 0);
    ccSetPosition(0, 0, 0, 1);
    ccSettiling(true);
    ccSetGraphic(Graphic.graphic_3475);
    ccCreate(Component.interface_1028.component_1028_140, 5, ifGetNextSubId(Component.interface_1028.component_1028_140));
    ccSetSize(7, int10, 0, 0);
    ccSetPosition(12, 0, 2, 1);
    ccSettiling(true);
    ccSethflip(true);
    ccSetGraphic(Graphic.graphic_3475);
    ccCreate(Component.interface_1028.component_1028_140, 5, ifGetNextSubId(Component.interface_1028.component_1028_140));
    ccSetSize(7, 7, 0, 0);
    ccSetPosition(0, 0, 0, 0);
    ccSetGraphic(Graphic.graphic_3474);
    ccCreate(Component.interface_1028.component_1028_140, 5, ifGetNextSubId(Component.interface_1028.component_1028_140));
    ccSetSize(7, 7, 0, 0);
    ccSetPosition(12, 0, 2, 0);
    ccSethflip(true);
    ccSetGraphic(Graphic.graphic_3474);
    ccCreate(Component.interface_1028.component_1028_140, 5, ifGetNextSubId(Component.interface_1028.component_1028_140));
    ccSetSize(7, 7, 0, 0);
    ccSetPosition(0, 0, 0, 2);
    ccSetvflip(true);
    ccSetGraphic(Graphic.graphic_3474);
    ccCreate(Component.interface_1028.component_1028_140, 5, ifGetNextSubId(Component.interface_1028.component_1028_140));
    ccSetSize(7, 7, 0, 0);
    ccSetPosition(12, 0, 2, 2);
    ccSethflip(true);
    ccSetvflip(true);
    ccSetGraphic(Graphic.graphic_3474);
    ccCreate(Component.interface_1028.component_1028_140, 5, ifGetNextSubId(Component.interface_1028.component_1028_140));
    ccSetSize(12, 11, 0, 0);
    ccSetPosition(0, 0, 2, 1);
    ccSetGraphic(Graphic.graphic_3473);
    ccSet2dangle(16384);
    ccCreate(Component.interface_1028.component_1028_140, 4, ifGetNextSubId(Component.interface_1028.component_1028_140));
    ccSetSize(int5, int6, 0, 0);
    ccSetPosition(6, 0, 0, 1);
    ccSetColour(colour(0x000000));
    ccSetTextFont(Graphic.verdana_11pt_regular);
    ccSetTextAlign(1, 0, 0);
    ccSetText(strArg0);
}
