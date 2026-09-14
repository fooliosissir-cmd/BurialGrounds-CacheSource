/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4864

function cs2_4864(): void {
    let int0: number = 0;
    let int1: number = 0;
    let int2: number = 0;
    let int3: number = 1;
    let int4: number = 0;
    let int5: number = 0;
    let int6: number = 0;
    let int7: number = 0;
    let int8: number = 0;
    let int9: number = 0;
    let int10: number = 0;
    let int11: number = 0;
    let int12: number = 0;
    let int13: number = 0;
    let int14: number = 0;
    let int15: number = 0;
    let int16: number = 0;
    let int17: number = 0;
    let int18: number = 0;
    let int19: number = 0;
    let int20: number = 0;
    let int21: number = 0;
    let int22: number = 0;
    let int23: number = 0;
    let int24: number = 0;
    let int25: number = 0;
    let int26: number = 0;
    let int27: number = 0;
    let int28: number = 0;
    let int29: number = 0;
    let int30: number = 0;
    let int31: number = 0;
    let int32: graphic = -1;
    let str0: string = "";
    let int33: number = 0;
    let int34: number = 0;
    let int35: number = 0;
    let int36: number = 0;
    let int37: number = 0;
    let int38: number = 0;
    let int39: number = 0;
    let int40: number = 0;
    let str1: string = "";
    let str2: string = "You do not have permission from your clan to set the primary resource target.";
    let str3: string = "Toggle whether this resource is the primary resource target.";
    let str4: string = "You do not have permission from your clan to set resource target amounts.";
    let str5: string = "Set a target amount of this resource to be collected.";
    let int41: number = -1;

    defineArray(0, type_int, 10);
    let int42: number = 0;
    let int43: number = 0;
    let int44: number = 0;

    if (clanProfileFind() == 1) {
        [int12, int13, int14, int16, int17, int15] = cs2_4797();
        while (int3 <= 31) {
            int4 = cs2_4790(int3);
            if (int4 > 0) {
                [int32, str0, int33, int34, int35, int36, int37, int38] = clan_build_job_info(int4);
                [int6, int7, int8, int10, int11, int9] = clan_build_job_cost(int4, int33);
                int5 = cs2_4975(int4);
                if (int5 == 3) {
                    int18 = int18 + int6;
                    int19 = int19 + int7;
                    int20 = int20 + int8;
                    int22 = int22 + int10;
                    int23 = int23 + int11;
                    int21 = int21 + int9;
                    [int6, int7, int8, int10, int11, int9] = cs2_4793(int36, int37);
                    int26 = int26 + int6;
                    int27 = int27 + int7;
                    int28 = int28 + int8;
                    int30 = int30 + int10;
                    int31 = int31 + int11;
                    int29 = int29 + int9;
                }
            }
            int3 = int3 + 1;
        }
        int18 = int18 - int26;
        int19 = int19 - int27;
        int20 = int20 - int28;
        int23 = int23 - int31;
        int22 = int22 - int30;
        int21 = int21 - int29;
        int39 = pushVarClan<2744>();
        if (int39 > 0) {
            switch (pushVarClan<2744>()) {
                case 1:
                    int24 = pushVarClan<2734>();
                    break;
                case 2:
                    int24 = pushVarClan<2735>();
                    break;
                case 3:
                    int24 = pushVarClan<2736>();
                    break;
                case 4:
                    int24 = pushVarClan<2737>();
                    break;
                case 5:
                    int24 = pushVarClan<2738>();
                    break;
                case 6:
                    int24 = pushVarClan<2739>();
                    break;
                case 7:
                    int24 = pushVarClan<2740>();
                    break;
                case 9:
                    int24 = pushVarClan<2742>();
                    break;
                case 8:
                    int24 = pushVarClan<2741>();
                    break;
                case 10:
                    int24 = pushVarClan<2743>();
                    break;
            }
            str1 = tostring(int24) + " " + enumOp(type_int, type_string, Enum.clan_resources_int2string, int39);
        } else {
            str1 = "No target set";
        }
        array0[0] = max(pushVarClan<2724>() / 100, int12 + int18);
        array0[1] = max(pushVarClan<2725>() / 100, int13 + int19);
        array0[2] = max(pushVarClan<2728>() / 100, int14 + int20);
        array0[3] = max(pushVarClan<2730>() / 100, int15 + int21);
        array0[4] = max(pushVarClan<2732>() / 100, int16 + int22);
        array0[5] = max(pushVarClan<2731>() / 100, int17 + int23);
        array0[6] = max(pushVarClan<2726>() / 100, pushVarClan<2736>());
        array0[7] = max(pushVarClan<2727>() / 100, pushVarClan<2737>());
        array0[8] = max(pushVarClan<2729>() / 100, pushVarClan<2739>());
        array0[9] = max(pushVarClan<2733>() / 100, pushVarClan<2743>());
        while (int42 < 10) {
            if (array0[int42] > int43) {
                int43 = array0[int42];
            }
            int42 = int42 + 1;
        }
        cs2_4866(1, pushVarClan<2724>(), int12, int18, int26, int43);
        cs2_4866(2, pushVarClan<2725>(), int13, int19, int27, int43);
        cs2_4866(3, pushVarClan<2726>(), 0, 0, 0, int43);
        cs2_4866(4, pushVarClan<2727>(), 0, 0, 0, int43);
        cs2_4866(5, pushVarClan<2728>(), int14, int20, int28, int43);
        cs2_4866(6, pushVarClan<2729>(), 0, 0, 0, int43);
        cs2_4866(7, pushVarClan<2730>(), int15, int21, int29, int43);
        cs2_4866(8, pushVarClan<2731>(), int17, int23, int31, int43);
        cs2_4866(9, pushVarClan<2732>(), int16, int22, int30, int43);
        cs2_4866(10, pushVarClan<2733>(), 0, 0, 0, int43);
        ifSetText(str1, Component.interface_1260.component_1260_280);
        switch (varbit_clan_stronghold_main_selected_resource) {
            case 1:
                ifSetGraphic(Graphic.aif_clan_resource_icons_5, Component.interface_1260.component_1260_298);
                break;
            case 2:
                ifSetGraphic(Graphic.aif_clan_resource_icons_4, Component.interface_1260.component_1260_298);
                break;
            case 3:
                ifSetGraphic(Graphic.aif_clan_resource_icons_8, Component.interface_1260.component_1260_298);
                break;
            case 4:
                ifSetGraphic(Graphic.aif_clan_resource_icons_2, Component.interface_1260.component_1260_298);
                break;
            case 5:
                ifSetGraphic(Graphic.aif_clan_resource_icons_1, Component.interface_1260.component_1260_298);
                break;
            case 6:
                ifSetGraphic(Graphic.aif_clan_resource_icons_3, Component.interface_1260.component_1260_298);
                break;
            case 7:
                ifSetGraphic(Graphic.aif_clan_resource_icons_0, Component.interface_1260.component_1260_298);
                break;
            case 8:
                ifSetGraphic(Graphic.aif_clan_resource_icons_7, Component.interface_1260.component_1260_298);
                break;
            case 9:
                ifSetGraphic(Graphic.aif_clan_resource_icons_6, Component.interface_1260.component_1260_298);
                break;
            case 10:
                ifSetGraphic(Graphic.aif_clan_resource_icons_9, Component.interface_1260.component_1260_298);
                break;
            default:
                ifSetGraphic(-1, Component.interface_1260.component_1260_298);
                break;
        }
        switch (varbit_clan_stronghold_main_selected_resource) {
            case 1:
                int40 = pushVarClan<2734>();
                break;
            case 2:
                int40 = pushVarClan<2735>();
                break;
            case 3:
                int40 = pushVarClan<2736>();
                break;
            case 4:
                int40 = pushVarClan<2737>();
                break;
            case 5:
                int40 = pushVarClan<2738>();
                break;
            case 6:
                int40 = pushVarClan<2739>();
                break;
            case 7:
                int40 = pushVarClan<2740>();
                break;
            case 8:
                int40 = pushVarClan<2741>();
                break;
            case 9:
                int40 = pushVarClan<2742>();
                break;
            case 10:
                int40 = pushVarClan<2743>();
                break;
        }
        if (int40 > 0) {
            str1 = tostring(int40);
        } else {
            str1 = "No target set";
        }
        if (varbit_clan_stronghold_main_selected_resource > 0) {
            ifSetText(enumOp(type_int, type_string, Enum.clan_resources_int2string, varbit_clan_stronghold_main_selected_resource), Component.interface_1260.component_1260_85);
            ifSetText(str1, Component.interface_1260.component_1260_294);
            if (cs2_5956(varbit_clan_stronghold_main_selected_resource) == 1 || cs2_5956(varbit_clan_stronghold_main_selected_resource) == 2) {
                ifSetGraphic(Graphic.aif_checkbox_small_1, Component.interface_1260.component_1260_87);
                ifSetGraphic(Graphic.aif_checkbox_small_3, Component.interface_1260.component_1260_89);
            }
            if (cs2_5956(varbit_clan_stronghold_main_selected_resource) == 3) {
                ifSetGraphic(Graphic.aif_checkbox_small_1, Component.interface_1260.component_1260_89);
                ifSetGraphic(Graphic.aif_checkbox_small_3, Component.interface_1260.component_1260_87);
            }
            if (cs2_5956(varbit_clan_stronghold_main_selected_resource) == 0) {
                ifSetGraphic(Graphic.aif_checkbox_small_3, Component.interface_1260.component_1260_89);
                ifSetGraphic(Graphic.aif_checkbox_small_3, Component.interface_1260.component_1260_87);
            }
            str3 = "Toggle whether this skill plot will lock when the resource target is reached. It will automatically unlock once all resource targets are hit.";
            ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1260.component_1260_324, event_com, -1, str3, 180, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 3, event_mousex, event_mousey]), Component.interface_1260.component_1260_87);
            ifSetOnMouseLeave(hook(clientscript_deltooltip, "I", [Component.interface_1260.component_1260_324]), Component.interface_1260.component_1260_87);
            str3 = "Toggle whether this skill plot is locked. If this is checked, the plot will stay locked until manually unlocked.";
            ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1260.component_1260_324, event_com, -1, str3, 180, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 3, event_mousex, event_mousey]), Component.interface_1260.component_1260_89);
            ifSetOnMouseLeave(hook(clientscript_deltooltip, "I", [Component.interface_1260.component_1260_324]), Component.interface_1260.component_1260_89);
            ifSetHide(false, Component.interface_1260.component_1260_288);
            ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1260.component_1260_324, event_com, -1, str5, 180, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 0, event_mousex, event_mousey]), Component.interface_1260.component_1260_287);
            ifSetOnMouseLeave(hook(clientscript_deltooltip, "I", [Component.interface_1260.component_1260_324]), Component.interface_1260.component_1260_287);
            if (cs2_5224(-1) == 1) {
                if (cs2_5214(varbit_clan_stronghold_main_selected_resource) <= pushVarClanBit<2580>()) {
                    ifSetHide(true, Component.interface_1260.component_1260_288);
                } else {
                    ifSetHide(false, Component.interface_1260.component_1260_288);
                    str4 = "This resource will become available at citadel tier " + tostring(cs2_5214(varbit_clan_stronghold_main_selected_resource)) + ".";
                }
            } else {
                ifSetHide(false, Component.interface_1260.component_1260_288);
                str4 = "You do not have permission from your clan to set resource targets.";
            }
            ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1260.component_1260_324, event_com, -1, str4, 180, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 0, event_mousex, event_mousey]), Component.interface_1260.component_1260_288);
            ifSetOnMouseLeave(hook(clientscript_deltooltip, "I", [Component.interface_1260.component_1260_324]), Component.interface_1260.component_1260_288);
        } else {
            ifSetText("Select a resource for more information.", Component.interface_1260.component_1260_85);
            ifSetGraphic(Graphic.aif_checkbox_small_5, Component.interface_1260.component_1260_91);
            ifSetHide(false, Component.interface_1260.component_1260_288);
            str4 = "Please select a resource from the left to view options.";
            ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1260.component_1260_324, event_com, -1, str4, 180, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 0, event_mousex, event_mousey]), Component.interface_1260.component_1260_288);
            ifSetOnMouseLeave(hook(clientscript_deltooltip, "I", [Component.interface_1260.component_1260_324]), Component.interface_1260.component_1260_288);
            ifSetGraphic(Graphic.aif_checkbox_small_7, Component.interface_1260.component_1260_91);
            str3 = "Please select a resource from the left to view options.";
            ifSetOp(1, "", Component.interface_1260.component_1260_91);
            ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1260.component_1260_324, event_com, -1, str3, 180, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 0, event_mousex, event_mousey]), Component.interface_1260.component_1260_91);
            ifSetOnMouseLeave(hook(clientscript_deltooltip, "I", [Component.interface_1260.component_1260_324]), Component.interface_1260.component_1260_91);
        }
    }
}
