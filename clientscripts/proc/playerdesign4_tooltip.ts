/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,playerdesign4_tooltip]

function playerdesign4_tooltip(strArg0: string, intArg0: number, intArg1: number, intArg2: number, intArg3: number): void {
    let int4: number = clientClock() + 25;

    if (varc_tooltip_time < int4) {
        varc_tooltip_time = max(clientClock(), varc_tooltip_time + 2);
        return;
    }
    varc_tooltip_time = int4;
    intArg3 = max(min(intArg3, intArg1), 0);
    [varc_tooltip_built, varc_player_kit_scroll_length] = [intArg0, intArg1];
    let int5: number = 0;

    if (ifGetHide(Component.interface_1028.component_1028_140) == 0) {
        ifSetPosition(ifGetX(Component.interface_1028.component_1028_140), max(intArg2 - ifGetHeight(Component.interface_1028.component_1028_140), 0), 0, 0, Component.interface_1028.component_1028_140);
        if (ccFind(Component.interface_1028.component_1028_140, 9) == 1) {
            int5 = intArg0 + intArg3 - (if_getx_absolute(Component.interface_1028.component_1028_140) + ccGetWidth() / 2);
            ccSetPosition(min(max(int5, 5), ifGetWidth(Component.interface_1028.component_1028_140) - (ccGetWidth() + 5)), 0, 0, 2);
        }
        return;
    }
    ifSetHide(false, Component.interface_1028.component_1028_140);
    ccDeleteAll(Component.interface_1028.component_1028_140);
    let int6: number = parawidth(strArg0, ifGetWidth(Component.interface_1028.component_1028_30), Graphic.p12_full);
    let int7: number = paraheight(strArg0, int6, Graphic.p12_full) * 12 + 3;
    let int8: number = max(int6 + 14, 45);
    let int9: number = int7 + 18;
    let int10: number = max(int8 - 14, 0);
    let int11: number = max(int9 - 25, 0);
    ifSetSize(int8, int9, 0, 0, Component.interface_1028.component_1028_140);
    ccCreate(Component.interface_1028.component_1028_140, 3, ifGetNextSubId(Component.interface_1028.component_1028_140));
    ccSetSize(int10, int11, 0, 0);
    ccSetPosition(0, 7, 1, 0);
    ccSetfill(true);
    ccSetColour(colour(0xE3E2E1));
    ccCreate(Component.interface_1028.component_1028_140, 5, ifGetNextSubId(Component.interface_1028.component_1028_140));
    ccSetSize(int10, 7, 0, 0);
    ccSetPosition(0, 0, 1, 0);
    ccSettiling(true);
    ccSetGraphic(Graphic.graphic_3476);
    ccCreate(Component.interface_1028.component_1028_140, 5, ifGetNextSubId(Component.interface_1028.component_1028_140));
    ccSetSize(int10, 7, 0, 0);
    ccSetPosition(0, 11, 1, 2);
    ccSettiling(true);
    ccSetvflip(true);
    ccSetGraphic(Graphic.graphic_3476);
    ccCreate(Component.interface_1028.component_1028_140, 5, ifGetNextSubId(Component.interface_1028.component_1028_140));
    ccSetSize(7, int11, 0, 0);
    ccSetPosition(0, 7, 0, 0);
    ccSettiling(true);
    ccSetGraphic(Graphic.graphic_3475);
    ccCreate(Component.interface_1028.component_1028_140, 5, ifGetNextSubId(Component.interface_1028.component_1028_140));
    ccSetSize(7, int11, 0, 0);
    ccSetPosition(0, 7, 2, 0);
    ccSettiling(true);
    ccSethflip(true);
    ccSetGraphic(Graphic.graphic_3475);
    ccCreate(Component.interface_1028.component_1028_140, 5, ifGetNextSubId(Component.interface_1028.component_1028_140));
    ccSetSize(7, 7, 0, 0);
    ccSetPosition(0, 0, 0, 0);
    ccSetGraphic(Graphic.graphic_3474);
    ccCreate(Component.interface_1028.component_1028_140, 5, ifGetNextSubId(Component.interface_1028.component_1028_140));
    ccSetSize(7, 7, 0, 0);
    ccSetPosition(0, 0, 2, 0);
    ccSethflip(true);
    ccSetGraphic(Graphic.graphic_3474);
    ccCreate(Component.interface_1028.component_1028_140, 5, ifGetNextSubId(Component.interface_1028.component_1028_140));
    ccSetSize(7, 7, 0, 0);
    ccSetPosition(0, 11, 0, 2);
    ccSetvflip(true);
    ccSetGraphic(Graphic.graphic_3474);
    ccCreate(Component.interface_1028.component_1028_140, 5, ifGetNextSubId(Component.interface_1028.component_1028_140));
    ccSetSize(7, 7, 0, 0);
    ccSetPosition(0, 11, 2, 2);
    ccSethflip(true);
    ccSetvflip(true);
    ccSetGraphic(Graphic.graphic_3474);
    ccCreate(Component.interface_1028.component_1028_140, 5, ifGetNextSubId(Component.interface_1028.component_1028_140));
    ccSetSize(11, 12, 0, 0);
    ccSetGraphic(Graphic.graphic_3473);
    ccCreate<1>(Component.interface_1028.component_1028_140, 4, ifGetNextSubId(Component.interface_1028.component_1028_140));
    ccSetSize<1>(int6, int7, 0, 0);
    ccSetPosition<1>(0, 3, 1, 0);
    ccSetColour<1>(colour(0x000000));
    ccSetTextFont<1>(Graphic.verdana_11pt_regular);
    ccSetTextAlign<1>(1, 0, 0);
    ccSetText<1>(strArg0);
    int10 = int8 / 2;
    int5 = intArg0 + intArg3 - int10;
    let int12: number = 0;

    if (int5 < 0) {
        int12 = 0 - int5;
    } else if (int5 + int8 > ifGetWidth(Component.interface_1028.component_1028_29)) {
        int12 = ifGetWidth(Component.interface_1028.component_1028_29) - (int5 + int8);
    }
    ifSetPosition(int5 + int12, max(intArg2 - int9, 0), 0, 0, Component.interface_1028.component_1028_140);
    ccSetPosition(0 - int12, 0, 1, 2);
}
