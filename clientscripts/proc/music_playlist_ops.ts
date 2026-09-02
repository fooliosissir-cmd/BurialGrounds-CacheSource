/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,music_playlist_ops]

function music_playlist_ops(intArg0: number): void {
    let str0: string = "Add to playlist";
    let str1: string = "Remove from playlist";

    ccSetOp(1, "Play");
    ccSetColour(colour(0x00FF00));
    ccHookMouseExit(hook(cc_text_colour_swapper, "Iii", [event_com, event_comsubid, colour(0x00FF00)]));
    ccSetHide<1>(false);
    ccSetOnOpt<1>(hook(cs2_2885, "Iiiiii", [event_com, event_comsubid, 150, 0, 20, event_opindex]));

    if (intArg0 == varbit_playlist_0 || intArg0 == varbit_playlist_1 || intArg0 == varbit_playlist_2 || intArg0 == varbit_playlist_3 || intArg0 == varbit_7085 || intArg0 == varbit_7086 || intArg0 == varbit_7087 || intArg0 == varbit_7088 || intArg0 == varbit_7089 || intArg0 == varbit_7090 || intArg0 == varbit_7091 || intArg0 == varbit_7092) {
        ccSetGraphic<1>(Graphic.music_icons_new_1);
        ccSetOp<1>(4, str1);
        ccSetOp(4, str1);
        ccSetOnMouseOver<1>(hook(cs2_1160, "IiIsii", [Component.interface_187.component_187_1, event_comsubid, Component.interface_187.component_187_17, str1, 25, 189]));
        ccHookMouseExit<1>(hook(clientscript_deltooltip, "I", [Component.interface_187.component_187_17]));
    } else {
        ccSetOp(3, str0);
        ccSetOp<1>(3, str0);
        ccSetGraphic<1>(Graphic.music_icons_new_0);
        ccSetOnMouseOver<1>(hook(cs2_1160, "IiIsii", [Component.interface_187.component_187_1, event_comsubid, Component.interface_187.component_187_17, str0, 25, 189]));
        ccHookMouseExit<1>(hook(clientscript_deltooltip, "I", [Component.interface_187.component_187_17]));
    }
}
