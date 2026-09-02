/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4981

function cs2_4981(intArg0: number, intArg1: number, intArg2: struct, intArg3: struct, intArg4: number): void {
    if (intArg2 == -1 || intArg3 == -1) {
        return;
    }

    if (intArg1 < 0 || intArg1 > 7) {
        return;
    }
    let int5: number = 0;

    switch (intArg0) {
        case 17:
        case 18:
        case 19:
        case 1:
            int5 = 1;
            break;
    }
    let int6: number = cs2_5169(intArg0);
    let int7: number = -1;
    let int8: number = -1;
    let int9: number = -1;
    let int10: number = -1;
    let int11: number = -1;
    let int12: number = -1;
    let int13: number = -1;
    let int14: number = -1;
    let int15: number = -1;
    let int16: number = -1;
    let int17: number = 0;
    let int18: number = -1;
    let int19: number = -1;
    let int20: number = 0;
    let str0: string = "";
    let int21: number = 1;
    let str1: string = "";
    let int22: number = 0;
    let int23: number = 0;
    let int24: number = 0;
    let int25: number = 0;
    let str2: string = "This building cannot be upgraded.";
    let str3: string = "This building cannot be downgraded.";
    let str4: string = "There is no upgrade to cancel.";
    let str5: string = "There is no downgrade to cancel.";
    let str6: string = "This building is already marked to be moved.";
    let str7: string = "There is no move order to cancel.";
    ifSetHide(true, Component.interface_1261.component_1261_272);
    ifSetHide(true, Component.interface_1261.component_1261_280);
    ifSetHide(true, Component.interface_1261.component_1261_288);
    ifSetHide(true, Component.interface_1261.component_1261_296);
    ifSetHide(true, Component.interface_1261.component_1261_355);
    ifSetHide(true, Component.interface_1261.component_1261_362);

    if (clanProfileFind() == 1 && activeClanSettingsFindAffined() == 1) {
        int18 = activeClanSettingsGetAffinedSlot(chatPlayerNameUnfiltered());
        if (int18 < 0) {
            return;
        }
        int19 = activeClanSettingsGetAffinedRank(int18);
        int22 = loadClanVar<2132>() - dateMinutes();
        if (int22 < 360 && int19 < 126) {
            int23 = 1;
        }
        ifSetText("", Component.interface_1261.component_1261_94);
        if (intArg0 == 17) {
            ifSetText("Citadel", Component.interface_1261.component_1261_121);
        } else if (intArg0 == 18) {
            ifSetText("Storehouse", Component.interface_1261.component_1261_121);
        } else if (intArg0 == 19) {
            ifSetText("Battlefield", Component.interface_1261.component_1261_121);
        } else {
            ifSetText(enumOp(type_int, type_string, Enum.enum_4287, intArg0), Component.interface_1261.component_1261_121);
        }
        if (intArg4 == 4) {
            ifSetText("Dilapidated", Component.interface_1261.component_1261_171);
        } else if (intArg4 == 3) {
            ifSetText("Working", Component.interface_1261.component_1261_171);
        } else {
            ifSetText("Not built", Component.interface_1261.component_1261_171);
        }
        ifSetGraphic(cs2_4974(intArg0), Component.interface_1261.component_1261_120);
        int7 = cs2_4948(intArg0);
        int17 = cs2_4952(int7);
        cs2_4982(intArg2, intArg3, intArg1, int6, int17);
        ifSetHide(false, Component.interface_1261.component_1261_280);
        if (int7 > 0) {
            cs2_4152(Component.interface_1261.component_1261_274, "Upgrade");
            int14 = cs2_4961(int7, 1);
            int9 = cs2_4961(int7, 2);
            int11 = cs2_4961(int7, 3);
            if (cs2_4798(int11) == 1) {
                int24 = 0;
            } else {
                int24 = 1;
            }
            int15 = cs2_4953(int14);
            int12 = cs2_4953(int11);
            int16 = enumOp(type_int, type_struct, Enum.clan_build_skillplot_costs, int14);
            int10 = enumOp(type_int, type_struct, Enum.clan_build_skillplot_costs, int9);
            int13 = enumOp(type_int, type_struct, Enum.clan_build_skillplot_costs, int11);
            ifSetHide(false, Component.interface_1261.component_1261_272);
            cs2_4152(Component.interface_1261.component_1261_274, "Upgrade");
            if (int12 <= 0 && int15 <= 0) {
                if (intArg1 < 7) {
                    if (int24 == 1) {
                        ifSetHide(true, Component.interface_1261.component_1261_272);
                    } else {
                        ifSetHide(false, Component.interface_1261.component_1261_272);
                        if (int11 == 602) {
                            str2 = "You must cancel the storehouse upgrade to be able to upgrade this.";
                        } else if (int11 == 603) {
                            str2 = "You must cancel the battlefield upgrade to be able to upgrade this.";
                        } else {
                            str2 = "You must cancel another skill plot upgrade to be able to upgrade this.";
                        }
                    }
                }
                if (intArg1 == 0) {
                    cs2_4152(Component.interface_1261.component_1261_274, "Buy");
                }
            }
            ifSetHide(false, Component.interface_1261.component_1261_280);
            if (int12 > 0) {
                ifSetHide(true, Component.interface_1261.component_1261_280);
            }
            ifSetHide(false, Component.interface_1261.component_1261_288);
            if (int12 <= 0 && intArg1 - int5 > int17) {
                [int20, str0] = cs2_4723(intArg0, intArg1 - (int17 + 1));
                if (int20 == 1) {
                    ifSetHide(true, Component.interface_1261.component_1261_288);
                } else {
                    str3 = str0;
                }
            }
            ifSetHide(false, Component.interface_1261.component_1261_296);
            if (int17 > 0) {
                ifSetHide(true, Component.interface_1261.component_1261_296);
                cs2_4211(Component.interface_1261.component_1261_274, Graphic.graphic_4040, colour(0xEFB063), colour(0x092F46));
            }
            ifSetHide(true, Component.interface_1261.component_1261_355);
            ifSetHide(true, Component.interface_1261.component_1261_362);
            if (int7 == 1 || int7 == 2 || int7 == 3) {
                ifSetHide(false, Component.interface_1261.component_1261_355);
                ifSetHide(false, Component.interface_1261.component_1261_362);
                str6 = "This building cannot be moved to another position.";
            }
            int8 = cs2_4978(int7);
            if (int8 < 4) {
                int8 = int7;
            }
            if (int8 != int7) {
                ifSetHide(false, Component.interface_1261.component_1261_355);
                str6 = "This building is already marked to be moved. You can view next week's map to see its new position.";
            }
            if (int7 == 1 || int7 == 2 || int7 == 3) {
                ifSetHide(false, Component.interface_1261.component_1261_362);
                str6 = "This building cannot be moved to another position.";
            }
            if (int8 == int7) {
                ifSetHide(false, Component.interface_1261.component_1261_362);
            } else {
                mes("Building marked to move to hotspot id: " + tostring(int8));
            }
            if (int12 > 0) {
                if (intArg1 == 0) {
                    ifSetText("This building is marked to" + "<br>" + "be built.", Component.interface_1261.component_1261_94);
                } else {
                    ifSetText("This building is marked to" + "<br>" + "be upgraded.", Component.interface_1261.component_1261_94);
                }
                str2 = "This building is already marked for upgrade.";
            } else if (int17 == 1) {
                ifSetText("This building is marked to be downgraded by 1 tier.", Component.interface_1261.component_1261_94);
            } else if (int17 > 1) {
                ifSetText("This building is marked to be downgraded by " + tostring(int17) + " tiers.", Component.interface_1261.component_1261_94);
            } else if (intArg1 == 7) {
                ifSetText("This building has reached its top tier.", Component.interface_1261.component_1261_94);
            } else if (intArg1 == 0) {
                ifSetText("This building has not yet been bought.", Component.interface_1261.component_1261_94);
            }
        } else {
            ifSetHide(false, Component.interface_1261.component_1261_355);
            ifSetHide(false, Component.interface_1261.component_1261_362);
            str6 = "You have not yet bought this building.";
            int25 = cs2_4799();
            if (int25 >= 2) {
                int24 = 0;
                str2 = "You must cancel another skill plot upgrade to be able to upgrade this.";
                ifSetHide(false, Component.interface_1261.component_1261_272);
            } else {
                int24 = 1;
                cs2_4152(Component.interface_1261.component_1261_274, "Buy");
                ifSetHide(true, Component.interface_1261.component_1261_272);
                ifSetText("Clan builders can buy this" + "<br>" + "in the 'Upgrade' side tab.", Component.interface_1261.component_1261_94);
            }
            ifSetHide(false, Component.interface_1261.component_1261_280);
            ifSetHide(false, Component.interface_1261.component_1261_288);
            ifSetHide(false, Component.interface_1261.component_1261_296);
        }
        if (int23 == 1) {
            str2 = "The build orders will be executed in less than six hours, so only the owner can make this change.";
            str3 = str2;
            str4 = str2;
            str5 = str2;
            str6 = str2;
            str7 = str2;
            ifSetHide(false, Component.interface_1261.component_1261_272);
            ifSetHide(false, Component.interface_1261.component_1261_280);
            ifSetHide(false, Component.interface_1261.component_1261_288);
            ifSetHide(false, Component.interface_1261.component_1261_296);
            ifSetHide(false, Component.interface_1261.component_1261_355);
            ifSetHide(false, Component.interface_1261.component_1261_362);
        }
        [int21, str1] = cs2_4722(intArg0, intArg1 + 1);
        if (int21 == 0) {
            str2 = "This cannot be upgraded because: " + str1;
            ifSetHide(false, Component.interface_1261.component_1261_272);
        }
        if (cs2_5145(-1) == 0) {
            str2 = "You do not have permission from your clan to do that.";
            str4 = "You do not have permission from your clan to do that.";
            ifSetHide(false, Component.interface_1261.component_1261_272);
            ifSetHide(false, Component.interface_1261.component_1261_280);
            if (cs2_5147(-1) == 0) {
                ifSetHide(false, Component.interface_1261.component_1261_355);
                ifSetHide(false, Component.interface_1261.component_1261_362);
                ifSetHide(false, Component.interface_1261.component_1261_362);
                ifSetHide(false, Component.interface_1261.component_1261_355);
                str6 = "You do not have permission from your clan to do that.";
                str7 = "You do not have permission from your clan to do that.";
                str6 = "You do not have permission from your clan to do that.";
                str7 = "You do not have permission from your clan to do that.";
            }
        }
        if (cs2_5147(-1) == 0) {
            str3 = "You do not have permission from your clan to do that.";
            str5 = "You do not have permission from your clan to do that.";
            ifSetHide(false, Component.interface_1261.component_1261_288);
            ifSetHide(false, Component.interface_1261.component_1261_296);
        }
        ifSetOnMouseOver(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1261.component_1261_102, event_com, -1, str2, 180, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 0, event_mousex, event_mousey]), Component.interface_1261.component_1261_272);
        ifSetOnMouseOver(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1261.component_1261_102, event_com, -1, str4, 180, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 0, event_mousex, event_mousey]), Component.interface_1261.component_1261_280);
        ifSetOnMouseOver(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1261.component_1261_102, event_com, -1, str3, 180, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 0, event_mousex, event_mousey]), Component.interface_1261.component_1261_288);
        ifSetOnMouseOver(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1261.component_1261_102, event_com, -1, str5, 180, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 0, event_mousex, event_mousey]), Component.interface_1261.component_1261_296);
        ifSetOnMouseOver(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1261.component_1261_102, event_com, -1, str6, 180, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 0, event_mousex, event_mousey]), Component.interface_1261.component_1261_355);
        ifSetOnMouseOver(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1261.component_1261_102, event_com, -1, str7, 180, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 0, event_mousex, event_mousey]), Component.interface_1261.component_1261_362);
        hookMouseExit(hook(clientscript_deltooltip, "I", [Component.interface_1261.component_1261_102]), Component.interface_1261.component_1261_272);
        hookMouseExit(hook(clientscript_deltooltip, "I", [Component.interface_1261.component_1261_102]), Component.interface_1261.component_1261_280);
        hookMouseExit(hook(clientscript_deltooltip, "I", [Component.interface_1261.component_1261_102]), Component.interface_1261.component_1261_288);
        hookMouseExit(hook(clientscript_deltooltip, "I", [Component.interface_1261.component_1261_102]), Component.interface_1261.component_1261_296);
        hookMouseExit(hook(clientscript_deltooltip, "I", [Component.interface_1261.component_1261_102]), Component.interface_1261.component_1261_355);
        hookMouseExit(hook(clientscript_deltooltip, "I", [Component.interface_1261.component_1261_102]), Component.interface_1261.component_1261_362);
    }
}
