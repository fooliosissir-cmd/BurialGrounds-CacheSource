/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,lobbyscreen_load]

function proc_lobbyscreen_load(intArg0: boolean, intArg1: number): void {
    cs2_6382();
    // Burial Grounds owns the lobby experience; disable legacy RuneScape
    // email-validation, subscription, and free-membership promotion surfaces.
    ifSetOnVarTransmit(noHook(""), Component.interface_906.component_906_0);
    ifSetOnVarTransmit(noHook(""), Component.interface_906.component_906_235);
    ifSetOnVarTransmit(noHook(""), Component.interface_906.component_906_236);
    ifSetHide(true, Component.interface_906.component_906_32);
    ifSetHide(true, Component.interface_906.component_906_40);
    ifSetHide(true, Component.interface_906.component_906_56);
    ifSetTrans(0, Component.interface_906.component_906_336);

    if (intArg1 == 0) {
        cs2_2710(Component.interface_906.component_906_29, Component.interface_906.component_906_30, Component.interface_906.component_906_31, Component.interface_911.component_911_19, Component.interface_911.component_911_25, Component.interface_911.component_911_24);
    }
    ifSetGraphic(Graphic.battle_title_widescreen_2, Component.interface_906.component_906_263);
    ifSetGraphic(Graphic.battle_title_widescreen_1, Component.interface_906.component_906_264);
    ifSetGraphic(Graphic.battle_title_widescreen_3, Component.interface_906.component_906_265);
    ifSetGraphic(Graphic.battle_title_widescreen_4, Component.interface_906.component_906_266);
    ifSetGraphic(Graphic.battle_title_widescreen_6, Component.interface_906.component_906_267);
    ifSetGraphic(Graphic.battle_title_widescreen_5, Component.interface_906.component_906_268);
    ifSetGraphic(Graphic.battle_title_widescreen_7, Component.interface_906.component_906_269);
    ifSetGraphic(Graphic.battle_title_widescreen_8, Component.interface_906.component_906_270);

    // Burial Grounds owns the lobby shell; never show the stock 727 title collage.
    ifSetHide(true, Component.interface_906.component_906_263);
    ifSetHide(true, Component.interface_906.component_906_264);
    ifSetHide(true, Component.interface_906.component_906_265);
    ifSetHide(true, Component.interface_906.component_906_266);
    ifSetHide(true, Component.interface_906.component_906_267);
    ifSetHide(true, Component.interface_906.component_906_268);
    ifSetHide(true, Component.interface_906.component_906_269);
    ifSetHide(true, Component.interface_906.component_906_270);
    ifSetGraphic(Graphic.corner_flourish_0, Component.interface_906.component_906_272);
    ifSetGraphic(Graphic.corner_flourish_0, Component.interface_906.component_906_274);
    ifSetGraphic(Graphic.corner_flourish_0, Component.interface_906.component_906_277);
    ifSetGraphic(gameframe_skin_graphic(Graphic.corner_frame_1_2), Component.interface_906.component_906_243);
    ifSetvflip(true, Component.interface_906.component_906_243);
    ifSethflip(true, Component.interface_906.component_906_243);
    ifSetGraphic(gameframe_skin_graphic(Graphic.corner_frame_1_2), Component.interface_906.component_906_247);
    ifSetvflip(true, Component.interface_906.component_906_247);
    ifSethflip(false, Component.interface_906.component_906_247);
    ifSetGraphic(gameframe_skin_graphic(Graphic.corner_frame_1_2), Component.interface_906.component_906_244);
    ifSetvflip(false, Component.interface_906.component_906_244);
    ifSethflip(true, Component.interface_906.component_906_244);
    ifSetGraphic(gameframe_skin_graphic(Graphic.corner_frame_1_2), Component.interface_906.component_906_248);
    ifSetvflip(false, Component.interface_906.component_906_248);
    ifSethflip(false, Component.interface_906.component_906_248);
    ifSetOnResize(hook(clientscript_lobby_resize, "", []), Component.interface_906.component_906_0);
    let int2: number = stringIndexofString(varcstr_32, "@", 0);

    if (int2 == -1) {
        varc_1414 = 1;
    } else {
        varc_1414 = 2;
    }
    proc_lobby_popup_close();
    cs2_3058();
    proc_lobbyscreen_tabswitch(0);
    cs2_3064(1);
    varcstr_lobbyscreen_input = "";
    varc_loginscreen_pvp_warned = 0;
    mes("Welcome to Burial Grounds.");
    mesTyped(43, 0, "Welcome to Burial Grounds.");

    if (userDetailQuickChat() == 1) {
        mes("Users restricted to quick-chat cannot send messages from the Lobby.");
        mesTyped(43, 0, "Users restricted to quick-chat cannot send messages from the Lobby.");
    }
    toplevel_minimenu_setup();
    ifSetOnKey(hook(cs2_1328, "i", [event_keycode]), Component.interface_906.component_906_0);
    ifSetOnTimer(hook(cs2_1868, "I", [Component.interface_906.component_906_33]), Component.interface_906.component_906_33);
    proc_lobby_resize();
    ifSetOnTimer(hook(lobbyscreen_blackout_timer, "I", [Component.interface_906.component_906_336]), Component.interface_906.component_906_335);
}
