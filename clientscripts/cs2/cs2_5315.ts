/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5315

function cs2_5315(intArg0: component, intArg1: component, intArg2: component, intArg3: component, intArg4: component): void {
    let int5: number = 0;
    let int6: number = 15;
    let int7: number = enumGetoutputcount(Enum.clan_theatre_sounds_int2string);
    let int8: number = enumGetoutputcount(Enum.clan_theatre_sounds_int2vorbis);
    let int9: number = 0;
    let int10: graphic = -1;

    ccDeleteAll(intArg1);
    ccDeleteAll(intArg2);
    ccDeleteAll(intArg3);
    ccDeleteAll(intArg4);

    while (int5 < 40) {
        int9 = cs2_5319(int5) - 1;
        ccCreate(intArg1, 3, int5);
        ccSetSize(ifGetWidth(intArg0), int6, 0, 0);
        ccSetPosition(0, int5 * int6, 0, 0);
        if (int5 % 2 == 0) {
            ccSetColour(colour(0x222222));
        } else {
            ccSetColour(colour(0x111111));
        }
        ccSetfill(true);
        ccCreate(intArg3, 5, int5);
        ccSetGraphic(Graphic.aif_audio_buttons_1_0);
        ccSetOp(1, "Play");
        ccSetSize(12, 13, 0, 0);
        ccSetPosition(138, 1 + int5 * int6, 0, 0);
        int10 = Graphic.aif_audio_buttons_1_1;
        ccSetOnMouseOver(hook(graphic_swapper_dynamic, "Iid", [event_com, event_comsubid, int10]));
        int10 = Graphic.aif_audio_buttons_1_0;
        ccSetOnMouseLeave(hook(graphic_swapper_dynamic, "Iid", [event_com, event_comsubid, int10]));
        if (int9 < 0) {
            ccSetHide(true);
        }
        ccCreate(intArg4, 5, int5);
        ccSetGraphic(Graphic.aif_audio_buttons_1_6);
        ccSetOp(1, "Remove");
        ccSetSize(12, 13, 0, 0);
        ccSetPosition(151, 1 + int5 * int6, 0, 0);
        int10 = Graphic.aif_audio_buttons_1_7;
        ccSetOnMouseOver(hook(graphic_swapper_dynamic, "Iid", [event_com, event_comsubid, int10]));
        int10 = Graphic.aif_audio_buttons_1_6;
        ccSetOnMouseLeave(hook(graphic_swapper_dynamic, "Iid", [event_com, event_comsubid, int10]));
        if (int9 < 0) {
            ccSetHide(true);
        }
        ccCreate(intArg2, 4, int5);
        ccSetTextFont(Graphic.p11_full);
        ccSetPosition(2, int5 * int6, 0, 0);
        ccSetSize(ifGetWidth(intArg0) - 24, 15, 0, 0);
        ccSetColour(colour(0xDDDDDD));
        ccSetTextAlign(0, 1, 0);
        ccSetTextShadow(false);
        if (int9 >= 0) {
            ccSetText(enumOp(type_int, type_string, Enum.clan_theatre_sounds_int2string, int9));
        } else {
            ccSetText("");
        }
        ccSetdraggable(intArg2, -1);
        ccSetdragrenderbehaviour(1);
        ccSetdragdeadzone(3);
        ccSetdragdeadtime(20);
        ccSetOnDragComplete(hook(clan_keep_theatre_swap, "Iii", [event_com, event_comsubid, event_comsubid2]));
        int5 = int5 + 1;
    }
    ifSetScrollPos(0, 0, intArg0);
    ifSetScrollSize(0, 2 + int5 * int6, intArg0);
    proc_scrollbar_vertical(Component.interface_319.component_319_9, intArg0, Graphic.scrollbar_dragger_v2_3, Graphic.scrollbar_dragger_v2_0, Graphic.scrollbar_dragger_v2_1, Graphic.scrollbar_dragger_v2_2, Graphic.scrollbar_v2_0, Graphic.scrollbar_v2_1);
}
