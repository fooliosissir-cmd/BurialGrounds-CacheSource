/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,loginscreen_setactivemenu_full]

function proc_loginscreen_setactivemenu_full(intArg0: number, intArg1: boolean, intArg2: boolean): void {
    let int3: number = login_getreply();

    if (intArg1 == false && (int3 == -3 || int3 == 21 || int3 == 1)) {
        return;
    }
    varc_175 = clientClock();
    deltooltip_action(Component.interface_744.component_744_80);
    varc_tooltip_time = 0;
    varc_loginscreen_focus = 1;

    if (varc_1090 != 6) {
        varc_1091 = varc_1090;
        ifSetOnClick(hook(clientscript_loginscreen_setactivemenu, "i", [varc_1091]), Component.interface_882.component_882_20);
    }

    if (intArg0 == 0) {
        varc_loginscreen_focus = 0;
        firstrun();
        ifSetHide(false, Component.interface_744.component_744_24);
    } else {
        ifSetHide(true, Component.interface_744.component_744_24);
        ifCloseSubClient(48758808);
    }

    if (intArg0 == 5) {
        ifOpenSubClient(Component.interface_744.component_744_27, Interface.interface_975);
        ifSetHide(true, Component.interface_744.component_744_23);
        ifSetHide(false, Component.interface_744.component_744_27);
    } else {
        ifCloseSubClient(48758811);
        ifSetHide(false, Component.interface_744.component_744_23);
        ifSetHide(true, Component.interface_744.component_744_27);
    }

    if (intArg0 == 11 || intArg0 == 12) {
        varc_loginscreen_pvp_warned = 0;
        ifOpenSubClient(Component.interface_744.component_744_26, Interface.interface_596);
        cs2_2937();
        login_open(intArg0);
        ifSetHide(false, Component.interface_596.component_596_5);
        proc_login_resize();
    } else {
        login_close();
        ifCloseSubClient(48758810);
        ifSetHide(true, Component.interface_744.component_744_26);
    }

    if (intArg0 == 7) {
        ifOpenSubClient(Component.interface_744.component_744_48, Interface.interface_673);
        create_setup();
        ifSetHide(false, Component.interface_744.component_744_48);
    } else {
        ifCloseSubClient(48758832);
        ifSetHide(true, Component.interface_744.component_744_48);
    }

    if (intArg0 == 8) {
        varc_loginscreen_focus = 10;
        ifSetHide(false, Component.interface_744.component_744_49);
    } else {
        ifCloseSubClient(48758833);
        ifSetHide(true, Component.interface_744.component_744_49);
    }

    if (intArg0 == 7 || intArg0 == 8) {
        ifSetHide(true, Component.interface_744.component_744_23);
    } else {
        ifSetHide(false, Component.interface_744.component_744_23);
    }
    let int4: graphic = Graphic.graphic_4120;
    let int5: graphic = Graphic.graphic_4125;

    if (intArg0 == 0 || intArg0 == 7 || intArg0 == 8) {
        ifSetColour(colour(0x646464), Component.interface_744.component_744_107);
        ifSetOnClick(noHook(""), Component.interface_744.component_744_107);
        hookMouseEnter(noHook(""), Component.interface_744.component_744_107);
        hookMouseExit(noHook(""), Component.interface_744.component_744_107);
    } else {
        ifSetColour(colour(0x000000), Component.interface_744.component_744_107);
        ifSetOnClick(hook(clientscript_loginscreen_setactivemenu, "i", [6]), Component.interface_744.component_744_107);
        hookMouseEnter(hook(graphic_swapper, "Id", [event_com, int5]), Component.interface_744.component_744_107);
        hookMouseExit(hook(graphic_swapper, "Id", [event_com, int4]), Component.interface_744.component_744_107);
    }

    if (intArg0 == 6) {
        proc_graphics_options_init(0);
        if (intArg2 == true) {
            cs2_3387(detailGetActiveToolkit(), getWindowMode(), ...graphics_options_reviewoptions(detailGetActiveToolkit()), 0);
        }
        ifSetHide(false, Component.interface_744.component_744_50);
        varc_loginscreen_focus = 13;
    } else {
        if (varc_1090 == 6 && intArg0 != 5) {
            ifSetHide(false, Component.interface_744.component_744_23);
        }
        ifSetHide(true, Component.interface_744.component_744_50);
        ifSetOnResize(noHook(""), Component.interface_744.component_744_50);
        ifSetOnResize(noHook(""), Component.interface_882.component_882_4);
    }
    let int6: number = 0;
    let int7: number = 0;
    let str0: string = "";
    let int8: graphic = Graphic.verdana_11pt_regular;

    if (intArg0 == 9) {
        int6 = ifGetWidth(Component.interface_744.component_744_76);
        int7 = paraheight(ifGetText(Component.interface_744.component_744_76), int6, Graphic.verdana_11pt_regular) * 14 + 5;
        ifSetSize(int6, int7, 0, 0, Component.interface_744.component_744_76);
        str0 = ifGetText(Component.interface_744.component_744_78);
        int7 = ifGetY(Component.interface_744.component_744_76) + int7 + 6;
        if (stringLength(str0) > 0) {
            ifSetPosition(0, int7, 1, 0, Component.interface_744.component_744_77);
            ifSetSize(stringWidth(str0, int8), ifGetHeight(Component.interface_744.component_744_77), 0, 0, Component.interface_744.component_744_77);
            ifSetText("<u=c8c8c8>" + str0 + "</u>", Component.interface_744.component_744_78);
            hookMouseEnter(hook(clientscript_loginscreen_link_highlight, "IIsf1", [Component.interface_744.component_744_77, Component.interface_744.component_744_78, str0, int8, true]), Component.interface_744.component_744_77);
            hookMouseExit(hook(clientscript_loginscreen_link_highlight, "IIsf1", [Component.interface_744.component_744_77, Component.interface_744.component_744_78, str0, int8, false]), Component.interface_744.component_744_77);
            ifSetHide(false, Component.interface_744.component_744_77);
            int7 = int7 + ifGetHeight(Component.interface_744.component_744_77) + 6;
        } else {
            ifSetPosition(0, 0, 1, 0, Component.interface_744.component_744_77);
            hookMouseEnter(noHook(""), Component.interface_744.component_744_77);
            hookMouseExit(noHook(""), Component.interface_744.component_744_77);
            ifSetOnClick(noHook(""), Component.interface_744.component_744_77);
            ifSetHide(true, Component.interface_744.component_744_77);
            ifSetText("", Component.interface_744.component_744_78);
        }
        ifSetSize(stringWidth(ifGetText(Component.interface_744.component_744_79), Graphic.graphic_3795), ifGetHeight(Component.interface_744.component_744_79), 0, 0, Component.interface_744.component_744_79);
        ifSetSize(ifGetWidth(Component.interface_744.component_744_51), int7 + ifGetHeight(Component.interface_744.component_744_79) + 11, 0, 0, Component.interface_744.component_744_51);
        ifSetHide(false, Component.interface_744.component_744_51);
    } else {
        ifSetHide(true, Component.interface_744.component_744_51);
        ifSetPosition(0, 0, 1, 0, Component.interface_744.component_744_77);
        hookMouseEnter(noHook(""), Component.interface_744.component_744_77);
        hookMouseExit(noHook(""), Component.interface_744.component_744_77);
        ifSetOnClick(noHook(""), Component.interface_744.component_744_77);
        ifSetHide(true, Component.interface_744.component_744_77);
        ifSetText("", Component.interface_744.component_744_78);
        ifSetText("", Component.interface_744.component_744_76);
        ifSetOnClick(noHook(""), Component.interface_744.component_744_79);
    }

    if (intArg0 == 10) {
        varc_loginscreen_focus = 11;
        ifSetHide(false, Component.interface_744.component_744_52);
    } else {
        ifSetHide(true, Component.interface_744.component_744_52);
        ifSetOnClick(noHook(""), Component.interface_744.component_744_56);
        ifSetOnClick(noHook(""), Component.interface_744.component_744_57);
    }

    if (intArg0 != 9 && intArg0 != 10) {
        varc_1090 = intArg0;
    }

    if (intArg0 == 12) {
        varcstr_32 = varcstr_122;
        varcstr_33 = varcstr_124;
        varcstr_122 = "";
        varcstr_124 = "";
        varcstr_125 = "";
        ifSetText(varcstr_32, Component.interface_596.component_596_70);
        ifSetText(cs2_2949(varcstr_33), Component.interface_596.component_596_76);
        varc_loginscreen_focus = 4;
        varc_175 = clientClock();
        varc_1099 = stringLength(cs2_2949(varcstr_33));
        cs2_3237(Component.interface_596.component_596_69, Component.interface_596.component_596_70, Component.interface_596.component_596_71, varcstr_32, 3);
        cs2_3237(Component.interface_596.component_596_75, Component.interface_596.component_596_76, Component.interface_596.component_596_77, cs2_2949(varcstr_33), 4);
        proc_login_dologin();
    }
}
