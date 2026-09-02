/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,clan_keep_theatre_actors_refresh_client]

function clan_keep_theatre_actors_refresh_client(): void {
    let int0: number = 20316177;
    let int1: number = 20316179;
    let int2: component = Component.interface_310.component_310_11;
    let int3: number = 20316172;
    let int4: component = Component.interface_310.component_310_14;
    let int5: component = Component.interface_310.component_310_13;
    let int6: component = Component.interface_310.component_310_18;
    let str0: string = "";

    ccDeleteAll(int2);
    ccDeleteAll(int5);
    let int7: number = 15;
    let int8: number = 1;
    let int9: number = 0;
    let int10: graphic = -1;
    let int11: graphic = -1;

    while (int8 <= 15) {
        int9 = ifGetNextSubId(int2);
        ccCreate(int2, 4, int9);
        ccSetSize(5, int7, 1, 0);
        ccSetPosition(5, int9 * int7, 0, 0);
        ccSetText(cs2_5329(int8));
        ccSetTextFont(Graphic.verdana_11pt_regular);
        ccSetColour(colour(0xBEB28C));
        ccSetTextShadow(true);
        ccSetTextAlign(0, 1, 0);
        int10 = Graphic.aif_audio_buttons_1_3;
        int11 = Graphic.aif_audio_buttons_1_4;
        ccCreate(int5, 5, int9);
        ccSetGraphic(int10);
        ccSetOp(1, "Target");
        ccSetSize(12, 13, 0, 0);
        ccSetPosition(18, 1 + int9 * int7, 2, 0);
        ccHookMouseEnter(hook(graphic_swapper_dynamic, "Iid", [event_com, event_comsubid, int11]));
        ccHookMouseExit(hook(graphic_swapper_dynamic, "Iid", [event_com, event_comsubid, int10]));
        ccSettargetverb("Add Actor");
        ccSettargetcursors(Cursor.cursor_target, -1);
        ccCreate(int6, 3, ifGetNextSubId(int6));
        ccSetSize(12, 13, 0, 0);
        ccSetPosition(18, 1 + int9 * int7, 2, 0);
        str0 = "Add someone to the actor list. Click this, then click on the person you would like to add.";
        ccSetOnMouseOver(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_310.component_310_26, event_com, event_comsubid, str0, 90, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 3, event_mousex, event_mousey]));
        ccHookMouseExit(hook(clientscript_deltooltip, "I", [Component.interface_310.component_310_26]));
        int10 = Graphic.aif_audio_buttons_1_6;
        int11 = Graphic.aif_audio_buttons_1_7;
        ccCreate(int4, 5, int9);
        ccSetGraphic(int10);
        ccSetOp(1, "Remove");
        ccSetSize(12, 13, 0, 0);
        ccSetPosition(3, 1 + int9 * int7, 2, 0);
        ccHookMouseEnter(hook(graphic_swapper_dynamic, "Iid", [event_com, event_comsubid, int11]));
        ccHookMouseExit(hook(graphic_swapper_dynamic, "Iid", [event_com, event_comsubid, int10]));
        ccCreate(int6, 3, ifGetNextSubId(int6));
        ccSetSize(12, 13, 0, 0);
        ccSetPosition(3, 1 + int9 * int7, 2, 0);
        str0 = "Add someone to the actor list. Click this, then click on the person you would like to add.";
        str0 = "Remove this person from the actor list.";
        ccSetOnMouseOver(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_310.component_310_26, event_com, event_comsubid, str0, 90, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 3, event_mousex, event_mousey]));
        ccHookMouseExit(hook(clientscript_deltooltip, "I", [Component.interface_310.component_310_26]));
        int8 = int8 + 1;
    }

    if (varc_clan_stronghold_keep_theatre_stage_restricted == 0) {
        int10 = Graphic.aif_checkbox_large_5;
        int11 = Graphic.aif_checkbox_large_6;
    } else {
        int10 = Graphic.aif_checkbox_large_0;
        int11 = Graphic.aif_checkbox_large_1;
    }
    ifSetGraphic(int10, Component.interface_310.component_310_20);
    hookMouseEnter(hook(graphic_swapper, "Id", [event_com, int11]), Component.interface_310.component_310_20);
    hookMouseExit(hook(graphic_swapper, "Id", [event_com, int10]), Component.interface_310.component_310_20);
}
