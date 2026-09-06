/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4770

function cs2_4770(intArg0: component, intArg1: number, intArg2: number, intArg3: number, intArg4: number, intArg5: number): number {
    let int6: number = intArg1 / 8;
    let int7: number = 38;
    let int8: graphic = Graphic.aif_icon_frame_1;
    let int9: graphic = gameframe_skin_graphic(Graphic.aif_window_stone_header_fill);
    let int10: number = loadClanVarbit<2580>() - loadClanVarbit<2633>();
    let str0: string = "";

    if (intArg2 < 1 || intArg2 > 900) {
        return 0;
    }
    let [int11, str1, int12, int13, int14, int15, int16, int17] = clan_build_job_info(intArg2);
    ccCreate(intArg0, 3, intArg1);
    ccSetPosition(2, int7 * int6, 0, 0);
    ccSetSize(4, int7, 1, 0);

    if (int6 % 2 == 0) {
        ccSetColour(colour(0x181715));
    } else {
        ccSetColour(colour(0x211F1C));
    }
    ccSetfill(true);
    ccSetOp(1, "Details for");
    ccSetOnOpt(hook(cs2_4776, "iii", [intArg2, int6, intArg5]));
    ccSetOnVarcTransmit(hook(cs2_4773, "iiiY", [intArg2, int6, intArg5], [1560]));
    let int18: number = intArg1 + 1;
    ccHookMouseEnter(hook(cs2_4779, "Iii", [intArg0, int18, 1]));
    ccHookMouseExit(hook(cs2_4779, "Iii", [intArg0, int18, 0]));
    ccSetdraggable(intArg0, -1);
    ccSetdragrenderbehaviour(3);
    ccSetdragdeadzone(8);
    ccSetdragdeadtime(30);
    ccSetOpBase(str1);
    intArg1 = intArg1 + 1;
    ccCreate(intArg0, 5, intArg1);
    ccSetGraphic(int9);
    ccSetSize(4, int7, 1, 0);
    ccSetPosition(2, int7 * int6, 0, 0);
    ccSetHide(true);
    intArg1 = intArg1 + 1;
    ccCreate(intArg0, 5, intArg1);
    ccSetPosition(8, 3 + int7 * int6, 0, 0);
    ccSetSize(32, 32, 0, 0);
    ccSetGraphic(int8);
    intArg1 = intArg1 + 1;
    ccCreate(intArg0, 5, intArg1);
    ccSetPosition(9, 4 + int7 * int6, 0, 0);
    ccSetGraphic(int11);

    if (intArg2 == 16 || intArg2 == 17 || intArg2 == 18) {
        ccSet2dangle(49149);
    }
    ccSetSize(30, 30, 0, 0);
    intArg1 = intArg1 + 1;
    ccCreate(intArg0, 4, intArg1);
    ccSetPosition(48, int7 * int6, 0, 0);
    ccSetSize(92, int7, 1, 0);
    ccSetTextFont(Graphic.verdana_11pt_regular);
    ccSetTextAlign(0, 1, 16);
    ccSetColour(colour(0xD0C0A8));
    let int19: number = int12;

    if (intArg2 > 300 && intArg2 < 600) {
        int19 = int19 - int13;
    }
    let str2: string = "";

    if (int15 == 5) {
        if (int19 == 1) {
            str2 = "(Basic)";
        } else if (int19 == 2) {
            str2 = "(Medium)";
        } else if (int19 == 3) {
            str2 = "(Grand)";
        }
    } else {
        str2 = "(Tier " + tostring(int19) + ")";
    }
    ccSetText(str1 + "<br>" + str2);
    intArg1 = intArg1 + 1;
    ccCreate(intArg0, 4, intArg1);
    ccSetText(tostring(intArg3) + "%");
    ccSetTextFont(Graphic.verdana_11pt_regular);
    ccSetTextAlign(0, 1, 16);
    ccSetSize(34, int7, 0, 0);
    ccSetPosition(21, int7 * int6, 2, 0);

    if (intArg2 < 300) {
        ccSetHide(true);
    } else {
        ccSetHide(false);
    }

    if (intArg3 < 100) {
        ccSetColour(colour(0x863E2C));
    } else if (intArg4 == 1) {
        ccSetColour(colour(0x43636F));
    } else if (intArg4 == 2) {
        ccSetColour(colour(0x2B4A2C));
    } else if (intArg4 == 3) {
        ccSetColour(colour(0x977847));
    } else if (intArg4 == 0) {
        ccSetColour(colour(0xD0C0A8));
        ccSetText("N/A");
    }
    intArg1 = intArg1 + 1;
    ccCreate(intArg0, 5, intArg1);

    if (intArg2 > 300 && intArg2 < 600) {
        if (intArg3 < 100) {
            ccSetHide(false);
            ccSetPosition(5, 12 + int7 * int6, 2, 0);
            ccSetSize(15, 15, 0, 0);
            ccSetGraphic(Graphic.aif_button_group_1_0);
            if (int15 == 1) {
                if (int14 == 0) {
                    str0 = "Your citadel will become dilapidated this tick!";
                } else if (int14 == 1 && int12 > 1) {
                    str0 = "Your citadel will lose a tier this tick. You may lose tiers on other buildings!";
                } else if (int14 == 1) {
                    str0 = "Your citadel will accrue double upkeep this tick.";
                } else if (int14 > 1) {
                    str0 = "Your citadel owes double upkeep this tick.";
                }
            } else if (int14 == 0) {
                str0 = "This building will become dilapidated this tick.";
            } else if (int14 == 1 && int12 > 1) {
                str0 = "This building will lose a tier this tick!";
            } else if (int14 == 1) {
                str0 = "This building will accrue double upkeep this tick.";
            } else if (int14 > 1) {
                str0 = "This building owes double upkeep this tick.";
            }
            ccHookMouseEnter(hook(cs2_4781, "Iii", [intArg0, event_comsubid, 1]));
            ccSetOnMouseOver(hook(clientscript_clan_build_tooltip, "sIi", [str0, intArg0, event_comsubid]));
            ccHookMouseExit(hook(cs2_4781, "Iii", [intArg0, event_comsubid, 0]));
        } else if (cs2_4787(loadClanVarbit<2580>()) == 0) {
            ccSetHide(false);
            ccSetPosition(5, 12 + int7 * int6, 2, 0);
            ccSetSize(15, 15, 0, 0);
            ccSetGraphic(Graphic.aif_button_group_1_0);
            str0 = "You need more members to visit your citadel this week to avoid this building degrading.";
            ccHookMouseEnter(hook(cs2_4781, "Iii", [intArg0, event_comsubid, 1]));
            ccSetOnMouseOver(hook(clientscript_clan_build_tooltip, "sIi", [str0, intArg0, event_comsubid]));
            ccHookMouseExit(hook(cs2_4781, "Iii", [intArg0, event_comsubid, 0]));
        } else if (int14 > 1) {
            str0 = "This building owes double upkeep this tick.";
            ccHookMouseEnter(hook(cs2_4781, "Iii", [intArg0, event_comsubid, 1]));
            ccSetOnMouseOver(hook(clientscript_clan_build_tooltip, "sIi", [str0, intArg0, event_comsubid]));
            ccHookMouseExit(hook(cs2_4781, "Iii", [intArg0, event_comsubid, 0]));
        }
    } else if (intArg2 == 601) {
        if (cs2_4785() == 0) {
            ccSetHide(false);
            ccSetPosition(60, 12 + int7 * int6, 2, 0);
            ccSetSize(15, 15, 0, 0);
            ccSetGraphic(Graphic.aif_button_group_1_0);
            str0 = "You lack some skill plot prerequisites to build this upgrade.";
            ccHookMouseEnter(hook(cs2_4781, "Iii", [intArg0, event_comsubid, 1]));
            ccSetOnMouseOver(hook(clientscript_clan_build_tooltip, "sIi", [str0, intArg0, event_comsubid]));
            ccHookMouseExit(hook(cs2_4781, "Iii", [intArg0, event_comsubid, 0]));
        } else if (cs2_4786(loadClanVarbit<2580>()) == 0) {
            ccSetHide(false);
            ccSetPosition(60, 12 + int7 * int6, 2, 0);
            ccSetSize(15, 15, 0, 0);
            ccSetGraphic(Graphic.aif_button_group_1_0);
            str0 = "You need more members to visit your citadel this week to build this upgrade.";
            ccHookMouseEnter(hook(cs2_4781, "Iii", [intArg0, event_comsubid, 1]));
            ccSetOnMouseOver(hook(clientscript_clan_build_tooltip, "sIi", [str0, intArg0, event_comsubid]));
            ccHookMouseExit(hook(cs2_4781, "Iii", [intArg0, event_comsubid, 0]));
        } else {
            ccSetHide(true);
        }
    } else if (intArg2 > 600) {
        if (cs2_4787(loadClanVarbit<2580>()) == 0) {
            ccSetHide(false);
            ccSetPosition(60, 12 + int7 * int6, 2, 0);
            ccSetSize(15, 15, 0, 0);
            ccSetGraphic(Graphic.aif_button_group_1_0);
            str0 = "Cannot upgrade: not enough full members have visited to perform upkeep.";
            ccHookMouseEnter(hook(cs2_4781, "Iii", [intArg0, event_comsubid, 1]));
            ccSetOnMouseOver(hook(clientscript_clan_build_tooltip, "sIi", [str0, intArg0, event_comsubid]));
            ccHookMouseExit(hook(cs2_4781, "Iii", [intArg0, event_comsubid, 0]));
        } else if (int10 < int12) {
            ccSetHide(false);
            ccSetPosition(60, 12 + int7 * int6, 2, 0);
            ccSetSize(15, 15, 0, 0);
            ccSetGraphic(Graphic.aif_button_group_1_0);
            str0 = "Cannot upgrade: citadel walls will be too low tier. You will still be charged!";
            ccHookMouseEnter(hook(cs2_4781, "Iii", [intArg0, event_comsubid, 1]));
            ccSetOnMouseOver(hook(clientscript_clan_build_tooltip, "sIi", [str0, intArg0, event_comsubid]));
            ccHookMouseExit(hook(cs2_4781, "Iii", [intArg0, event_comsubid, 0]));
        } else if (intArg2 == 603 || intArg2 == 602) {
            if (varc_clan_build_core_jobs == 0) {
                varc_clan_build_core_jobs = 1;
            } else {
                ccSetHide(false);
                ccSetPosition(60, 12 + int7 * int6, 2, 0);
                ccSetSize(15, 15, 0, 0);
                ccSetGraphic(Graphic.aif_button_group_1_0);
                str0 = "Cannot upgrade: You may upgrade only one of storehouse or battlefield per week.";
                ccHookMouseEnter(hook(cs2_4781, "Iii", [intArg0, event_comsubid, 1]));
                ccSetOnMouseOver(hook(clientscript_clan_build_tooltip, "sIi", [str0, intArg0, event_comsubid]));
                ccHookMouseExit(hook(cs2_4781, "Iii", [intArg0, event_comsubid, 0]));
            }
        } else if (intArg2 >= 604 && intArg2 <= 615) {
            if (varc_clan_build_plot_jobs < 2) {
                varc_clan_build_plot_jobs = varc_clan_build_plot_jobs + 1;
            } else {
                ccSetHide(false);
                ccSetPosition(60, 12 + int7 * int6, 2, 0);
                ccSetSize(15, 15, 0, 0);
                ccSetGraphic(Graphic.aif_button_group_1_0);
                str0 = "Cannot upgrade: You may upgrade only two skilling plots per week.";
                ccHookMouseEnter(hook(cs2_4781, "Iii", [intArg0, event_comsubid, 1]));
                ccSetOnMouseOver(hook(clientscript_clan_build_tooltip, "sIi", [str0, intArg0, event_comsubid]));
                ccHookMouseExit(hook(cs2_4781, "Iii", [intArg0, event_comsubid, 0]));
            }
        } else {
            ccSetHide(true);
        }
    } else {
        ccSetHide(true);
    }
    intArg1 = intArg1 + 1;
    ccCreate(intArg0, 5, intArg1);
    let str3: string = "Cancel this job.";

    if (intArg2 > 600 || intArg2 < 300) {
        ccSetHide(false);
        ccSetPosition(5, 12 + int7 * int6, 2, 0);
        ccSetSize(15, 15, 0, 0);
        ccSetGraphic(Graphic.aif_button_group_1_3);
        ccHookMouseEnter(hook(cs2_4780, "Iii", [intArg0, event_comsubid, 1]));
        ccSetOnMouseOver(hook(clientscript_clan_build_tooltip, "sIi", [str3, intArg0, event_comsubid]));
        ccHookMouseExit(hook(cs2_4780, "Iii", [intArg0, event_comsubid, 0]));
        ccSetOp(1, "Cancel");
        ccSetOnOpt(hook(clientscript_deltooltip, "I", [Component.interface_1115.component_1115_186]));
    } else {
        ccSetHide(true);
    }
    intArg1 = intArg1 + 1;
    return intArg1;
}
