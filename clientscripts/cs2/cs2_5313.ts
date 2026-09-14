/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5313

function cs2_5313(intArg0: component, intArg1: component, intArg2: component, intArg3: component, intArg4: component): void {
    let int5: number = 0;
    let int6: number = 15;
    let int7: number = enumGetoutputcount(Enum.clan_theatre_sounds_int2string);
    let int8: number = enumGetoutputcount(Enum.clan_theatre_sounds_int2vorbis);
    let int9: graphic = -1;

    ccDeleteAll(intArg1);
    ccDeleteAll(intArg3);
    ccDeleteAll(intArg4);
    ccDeleteAll(intArg2);

    while (int5 < min(int7, int8)) {
        ccCreate(intArg1, 3, int5);
        ccSetSize(ifGetWidth(intArg0), int6, 0, 0);
        ccSetPosition(0, int5 * int6, 0, 0);
        if (int5 % 2 == 0) {
            ccSetColour(colour(0x222222));
        } else {
            ccSetColour(colour(0x111111));
        }
        ccSetfill(true);
        ccSetOp(1, "Sort");
        ccCreate(intArg3, 5, int5);
        ccSetGraphic(Graphic.aif_audio_buttons_1_0);
        ccSetOp(1, "Play");
        ccSetSize(12, 13, 0, 0);
        ccSetPosition(138, 1 + int5 * int6, 0, 0);
        int9 = Graphic.aif_audio_buttons_1_1;
        ccSetOnMouseOver(hook(graphic_swapper_dynamic, "Iid", [event_com, event_comsubid, int9]));
        int9 = Graphic.aif_audio_buttons_1_0;
        ccSetOnMouseLeave(hook(graphic_swapper_dynamic, "Iid", [event_com, event_comsubid, int9]));
        ccCreate(intArg4, 5, int5);
        ccSetGraphic(Graphic.aif_audio_buttons_1_3);
        ccSetOp(1, "Bookmark");
        ccSetSize(12, 13, 0, 0);
        ccSetPosition(151, int5 * int6, 0, 0);
        int9 = Graphic.aif_audio_buttons_1_4;
        ccSetOnMouseOver(hook(graphic_swapper_dynamic, "Iid", [event_com, event_comsubid, int9]));
        int9 = Graphic.aif_audio_buttons_1_3;
        ccSetOnMouseLeave(hook(graphic_swapper_dynamic, "Iid", [event_com, event_comsubid, int9]));
        ccCreate(intArg2, 4, int5);
        ccSetText(enumOp(type_int, type_string, Enum.clan_theatre_sounds_int2string, int5));
        ccSetTextFont(Graphic.p11_full);
        ccSetPosition(2, int5 * int6, 0, 0);
        ccSetSize(ifGetWidth(intArg0) - 24, 15, 0, 0);
        ccSetColour(colour(0xDDDDDD));
        ccSetTextAlign(0, 1, 0);
        ccSetTextShadow(false);
        int5 = int5 + 1;
    }
    ifSetScrollPos(0, 0, intArg0);
    ifSetScrollSize(0, 2 + int5 * int6, intArg0);
    proc_scrollbar_vertical(Component.interface_319.component_319_8, intArg0, Graphic.aif_scrollbar_dragger_1_3, Graphic.aif_scrollbar_dragger_1_0, Graphic.aif_scrollbar_dragger_1_1, Graphic.aif_scrollbar_dragger_1_2, Graphic.aif_scrollbar_arrow_1_1, Graphic.aif_scrollbar_arrow_1_0);
}
