/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,clan_build_motif_layer]

function clan_build_motif_layer(intArg0: component, intArg1: component, intArg2: component, intArg3: component, intArg4: Enum): void {
    ccDeleteAll(intArg0);
    ccDeleteAll(intArg1);
    let int5: number = 0;
    let int6: number = 0;
    let int7: number = 2;
    let int8: number = 5;
    let int9: number = 60;
    let int10: number = 60;
    let int11: number = 0;
    let int12: number = 0;
    let int13: number = (ifGetWidth(intArg0) - int7) / (int7 + int10);
    let int14: number = 0;
    let int15: number = enumGetoutputcount(intArg4);

    while (int5 < int15) {
        int11 = (int10 + int7) * (int5 - int6 * int13);
        int12 = int6 * (int9 + int8);
        ccCreate(intArg1, 5, int5);
        ccSetSize(int10, int9, 0, 0);
        ccSetPosition(int11, int12, 0, 0);
        ccSetGraphic(Graphic.aif_bronze_icon_button_1_0);
        ccSetOnVarTransmit(hook(cs2_4395, "iY", [int15], [2093]));
        ccHookMouseEnter(hook(cs2_4396, "iI", [event_comsubid, intArg1]));
        ccHookMouseExit(hook(cs2_4397, "iI", [event_comsubid, intArg1]));
        int14 = ccGetY() + ccGetHeight() + int8;
        ccCreate(intArg0, 5, int5);
        ccSetSize(int10 - 10, int9 - 10, 0, 0);
        ccSetPosition(int11 + 5, int12 + 5, 0, 0);
        ccSetGraphic(enumOp(type_int, type_graphic, intArg4, int5 + 1));
        ccSetOp(1, "Select");
        ccSetOnOpt(hook(cs2_4394, "iIi", [event_comsubid, intArg1, int15]));
        int5 = int5 + 1;
        if (int5 % int13 == 0) {
            int6 = int6 + 1;
        }
    }
    ifSetScrollPos(0, 0, intArg2);
    ifSetScrollSize(0, int14, intArg2);
    proc_scrollbar_vertical(intArg3, intArg2, Graphic.aif_scrollbar_dragger_2_3, Graphic.aif_scrollbar_dragger_2_0, Graphic.aif_scrollbar_dragger_2_1, Graphic.aif_scrollbar_dragger_2_2, Graphic.aif_scrollbar_arrow_2_1, Graphic.aif_scrollbar_arrow_2_0);
}
