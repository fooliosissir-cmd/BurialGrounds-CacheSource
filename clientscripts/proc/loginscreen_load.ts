/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,loginscreen_load]

function proc_loginscreen_load(intArg0: component, intArg1: component, intArg2: component, intArg3: component, intArg4: component, intArg5: component): void {
    setupMessageBox(0, 0, 4, 3, 135, 30, 3791, 3792, 6127, 16753152, 3793);
    ifSetSize(180, 100, 0, 0, Component.interface_744.component_744_23);
    ifSetGraphic(Graphic.logo_alpha, Component.interface_744.component_744_23);
    ifSetGraphic(Graphic.battle_title_widescreen_2, Component.interface_744.component_744_8);
    ifSetGraphic(Graphic.battle_title_widescreen_1, Component.interface_744.component_744_9);
    ifSetGraphic(Graphic.battle_title_widescreen_3, Component.interface_744.component_744_10);
    ifSetGraphic(Graphic.battle_title_widescreen_4, Component.interface_744.component_744_11);
    ifSetGraphic(Graphic.battle_title_widescreen_6, Component.interface_744.component_744_12);
    ifSetGraphic(Graphic.battle_title_widescreen_5, Component.interface_744.component_744_13);
    ifSetGraphic(Graphic.battle_title_widescreen_7, Component.interface_744.component_744_14);
    ifSetGraphic(Graphic.battle_title_widescreen_8, Component.interface_744.component_744_15);
    ifSetGraphic(Graphic.corner_flourish_0, Component.interface_744.component_744_22);
    ifSetGraphic(Graphic.corner_flourish_0, Component.interface_744.component_744_97);
    ifSetGraphic(Graphic.corner_flourish_0, Component.interface_744.component_744_100);
    ifSetGraphic(gameframe_skin_graphic(Graphic.corner_frame_1_4), Component.interface_744.component_744_70);
    ifSethflip(true, Component.interface_744.component_744_70);
    ifSetvflip(true, Component.interface_744.component_744_70);
    ifSetGraphic(gameframe_skin_graphic(Graphic.corner_frame_1_4), Component.interface_744.component_744_74);
    ifSethflip(false, Component.interface_744.component_744_74);
    ifSetvflip(true, Component.interface_744.component_744_74);
    ifSetGraphic(gameframe_skin_graphic(Graphic.corner_frame_1_4), Component.interface_744.component_744_4);
    ifSetGraphic(gameframe_skin_graphic(Graphic.corner_frame_1_4), Component.interface_744.component_744_6);

    // Burial Grounds owns the login presentation. Remove the stock revision-727
    // title collage/logo and build a restrained Greyhaven entry scene using
    // native interface primitives and fonts only.
    ifSetHide(true, Component.interface_744.component_744_8);
    ifSetHide(true, Component.interface_744.component_744_9);
    ifSetHide(true, Component.interface_744.component_744_10);
    ifSetHide(true, Component.interface_744.component_744_11);
    ifSetHide(true, Component.interface_744.component_744_12);
    ifSetHide(true, Component.interface_744.component_744_13);
    ifSetHide(true, Component.interface_744.component_744_14);
    ifSetHide(true, Component.interface_744.component_744_15);
    ifSetHide(true, Component.interface_744.component_744_23);

    ccDeleteAll(Component.interface_744.component_744_21);

    // Full login backdrop.
    ccCreate(Component.interface_744.component_744_21, 3, 0);
    ccSetSize(0, 0, 1, 1);
    ccSetPosition(0, 0, 0, 0);
    ccSetfill(true);
    ccSetColour(colour(0x171512));
    ccSetTrans(0);

    // Greyhaven lore panel.
    ccCreate(Component.interface_744.component_744_21, 3, 1);
    ccSetSize(300, 316, 0, 0);
    ccSetPosition(30, 94, 0, 0);
    ccSetfill(true);
    ccSetColour(colour(0x211E1A));
    ccSetTrans(0);

    ccCreate(Component.interface_744.component_744_21, 3, 2);
    ccSetSize(4, 316, 0, 0);
    ccSetPosition(30, 94, 0, 0);
    ccSetfill(true);
    ccSetColour(colour(0x756B57));
    ccSetTrans(0);

    ccCreate(Component.interface_744.component_744_21, 4, 3);
    ccSetSize(250, 42, 0, 0);
    ccSetPosition(52, 120, 0, 0);
    ccSetTextFont(Graphic.welcome_font_large);
    ccSetTextAlign(0, 1, 0);
    ccSetColour(colour(0xEBE0BC));
    ccSetText("GREYHAVEN");

    ccCreate(Component.interface_744.component_744_21, 4, 4);
    ccSetSize(250, 22, 0, 0);
    ccSetPosition(54, 166, 0, 0);
    ccSetTextFont(Graphic.b12_full);
    ccSetTextAlign(0, 1, 0);
    ccSetColour(colour(0xA6C68A));
    ccSetText("BURIAL GROUNDS");

    ccCreate(Component.interface_744.component_744_21, 4, 5);
    ccSetSize(248, 92, 0, 0);
    ccSetPosition(54, 210, 0, 0);
    ccSetTextFont(Graphic.welcome_font_small);
    ccSetTextAlign(0, 0, 0);
    ccSetColour(colour(0xC9BE9D));
    ccSetText("The road begins again at Greyhaven.<br><br>Sign in to continue your journey.");

    ccCreate(Component.interface_744.component_744_21, 3, 6);
    ccSetSize(248, 1, 0, 0);
    ccSetPosition(54, 326, 0, 0);
    ccSetfill(true);
    ccSetColour(colour(0x655D4E));
    ccSetTrans(0);

    ccCreate(Component.interface_744.component_744_21, 4, 7);
    ccSetSize(248, 44, 0, 0);
    ccSetPosition(54, 340, 0, 0);
    ccSetTextFont(Graphic.p11_full);
    ccSetTextAlign(0, 0, 0);
    ccSetColour(colour(0x8E8672));
    ccSetText("Your username is remembered on this device.");

    detailLoadingscreentype(random(36));

    if (varc_176 <= 0) {
        varc_176 = (random(5) + 1) * 10;
    }
    ifSetOnResize(hook(clientscript_login_resize, "", []), Component.interface_744.component_744_17);
    cs2_3964();
    // Preserve the username restored by the Burial Grounds client across launches.
    // Passwords are never persisted and are always cleared when the login screen loads.
    varcstr_33 = "";
    videoAdvertForceRemove();
    varc_loginscreen_pvp_warned = 0;
    varc_1093 = 0;
    ifOpenSubClient(Component.interface_744.component_744_50, Interface.interface_882);
    proc_graphics_options_init(0);
    ifSetOnClick(hook(clientscript_loginscreen_setactivemenu, "i", [11]), Component.interface_882.component_882_20);
    ifSetOnKey(hook(loginscreen_keypress, "iz", [event_keycode, event_keychar]), Component.interface_744.component_744_17);
    cs2_2710(intArg0, intArg1, intArg2, intArg3, intArg4, intArg5);
    cursors_login();
    cs2_1427();

    if (frombilling() == 1) {
        varc_1090 = 11;
        varc_1091 = 11;
        proc_loginscreen_setactivemenu_full(11, true, false);
    } else {
        if (varc_1240 == 2 && detailGetToolkit() != 0) {
            varc_1240 = 3;
        }
        if (detailGetChosesafemode() == 0 && (varc_1240 < 3 || detailGetSafemode() == 1 || detailGetToolkitDefault() == 0)) {
            varc_1090 = 0;
            varc_1091 = 0;
            proc_loginscreen_setactivemenu_full(0, true, false);
        } else if (hasSignonKey() == 1) {
            varc_1090 = 5;
            varc_1091 = 5;
            proc_loginscreen_setactivemenu_full(5, true, false);
            if (varc_1273 == 1) {
                return;
            } else {
                ifSetOnTimer(hook(cs2_3381, "Ii", [Component.interface_975.component_975_44, 0]), Component.interface_975.component_975_44);
            }
        } else if (userflowflags(3) == true) {
            if (varc_1407 < 1) {
                varc_1090 = 7;
                varc_1091 = 7;
                proc_loginscreen_setactivemenu_full(7, true, false);
            } else {
                varc_1090 = 11;
                varc_1091 = 11;
                proc_loginscreen_setactivemenu_full(11, true, false);
            }
        } else {
            varc_1090 = 11;
            varc_1091 = 11;
            proc_loginscreen_setactivemenu_full(11, true, false);
        }
    }
    proc_login_resize();

    if (varc_1701 == -1) {
        varc_1701 = 1;
    }

    if (javaVersionSupported() == 0) {
        ifOpenSubClient(Component.interface_744.component_744_116, Interface.interface_405);
        ifSetnoclickthrough(true, Component.interface_744.component_744_116);
    }
}
