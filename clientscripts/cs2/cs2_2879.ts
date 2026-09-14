/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2879

function cs2_2879(intArg0: number, intArg1: number, intArg2: number): number {
    let str0: string = "Remove from Playlist";

    if (ccFind(Component.interface_187.component_187_9, intArg0) == 1 && ccFind<1>(Component.interface_187.component_187_9, intArg0 + 12) == 1) {
        if (intArg1 == 32767) {
            ccSetHide(true);
            ccSetHide<1>(true);
            return intArg2;
        }
        ccSetPosition(15, intArg2, 0, 0);
        ccSetTextAlign(0, 1, 0);
        if (varbit_4388 == intArg1 && varbit_playlist_mode == 1) {
            ccSetColour(colour(0xFFFF66));
            ccSetOnMouseLeave(hook(cc_text_colour_swapper, "Iii", [event_com, event_comsubid, colour(0xFFFF66)]));
        } else {
            ccSetColour(colour(0x00FFFF));
            ccSetOnMouseLeave(hook(cc_text_colour_swapper, "Iii", [event_com, event_comsubid, colour(0x00FFFF)]));
        }
        ccSetOnMouseOver(hook(cc_text_colour_swapper, "Iii", [event_com, event_comsubid, colour(0xFFFFFF)]));
        ccSetText(enumString(Enum.enum_1345, intArg1));
        ccSetSize(150, 15, 0, 0);
        ccSetOp(1, "Play");
        ccSetOp(2, "Remove");
        ccSetOpBase(enumString(Enum.enum_1345, intArg1));
        ccSetOpBase<1>(enumString(Enum.enum_1345, intArg1));
        ccSetTextShadow(false);
        ccSetTextFont(Graphic.p11_full);
        ccSetdraggable(Component.interface_187.component_187_9, -1);
        ccSetdraggable<1>(-1, -1);
        ccSetdragrenderbehaviour(2);
        ccSetSize<1>(12, 12, 0, 0);
        ccSetPosition<1>(2, intArg2 + 1, 0, 0);
        ccSetOp<1>(2, "Remove");
        ccSetGraphic<1>(Graphic.music_icons_new_1);
        ccSetOnOp<1>(hook(cs2_2885, "Iiiiii", [event_com, event_comsubid, 150, 0, 20, event_opindex]));
        ccSetOnMouseRepeat<1>(hook(cs2_1160, "IiIsii", [Component.interface_187.component_187_9, event_comsubid, Component.interface_187.component_187_17, str0, 25, 189]));
        ccSetOnMouseLeave<1>(hook(clientscript_deltooltip, "I", [Component.interface_187.component_187_17]));
        ccSetOnClick<1>(hook(clientscript_deltooltip, "I", [Component.interface_187.component_187_17]));
    }
    return intArg2 + 15;
}
