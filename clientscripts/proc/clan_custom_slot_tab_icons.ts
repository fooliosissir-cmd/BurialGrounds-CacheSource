/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,clan_custom_slot_tab_icons]

function clan_custom_slot_tab_icons(): void {
    let int0: Enum = -1;
    let str0: string = "This build slot is available, select your options and click the buy button.";

    if (clanProfileFind() == 1) {
        int0 = cs2_4825(1);
        ifSet2dangle(0, Component.interface_1258.component_1258_230);
        ifSet2dangle(0, Component.interface_1258.component_1258_221);
        ifSet2dangle(0, Component.interface_1258.component_1258_212);
        if (varbit_clan_custom_slot_1_type_varp > 0 && varbit_clan_custom_slot_1_type_varp == loadClanVarbit<2139>()) {
            ifSetGraphic(enumOp(type_int, type_graphic, int0, varbit_clan_custom_slot_1_type_varp), Component.interface_1258.component_1258_230);
            str0 = "This build slot is full, you may view the contents of it, but to modify you will need to cancel the job.";
        } else if (loadClanVarbit<2143>() == 1) {
            ifSetGraphic(Graphic.aif_loyalty_icon_2_0, Component.interface_1258.component_1258_230);
            ifSet2dangle(49149, Component.interface_1258.component_1258_230);
            str0 = "This build slot is full, you may view the contents of it, but to modify you will need to cancel the job.";
        } else {
            ifSetGraphic(-1, Component.interface_1258.component_1258_230);
        }
        ifSetOnMouseOver(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1258.component_1258_108, event_com, -1, str0, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 2, event_mousex, event_mousey]), Component.interface_1258.component_1258_228);
        hookMouseExit(hook(clientscript_deltooltip, "I", [Component.interface_1258.component_1258_108]), Component.interface_1258.component_1258_228);
        int0 = cs2_4825(2);
        str0 = "This build slot available, select your options and click the buy button.";
        if (varbit_clan_custom_slot_2_type_varp > 0 && varbit_clan_custom_slot_2_type_varp == loadClanVarbit<2156>()) {
            ifSetGraphic(enumOp(type_int, type_graphic, int0, varbit_clan_custom_slot_2_type_varp), Component.interface_1258.component_1258_221);
            str0 = "This build slot is full, you may view the contents of it, but to modify you will need to cancel the job.";
        } else if (loadClanVarbit<2160>() == 1) {
            ifSetGraphic(Graphic.aif_loyalty_icon_2_0, Component.interface_1258.component_1258_221);
            ifSet2dangle(49149, Component.interface_1258.component_1258_221);
            str0 = "This build slot is full, you may view the contents of it, but to modify you will need to cancel the job.";
        } else {
            ifSetGraphic(-1, Component.interface_1258.component_1258_221);
        }
        ifSetOnMouseOver(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1258.component_1258_108, event_com, -1, str0, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 2, event_mousex, event_mousey]), Component.interface_1258.component_1258_219);
        hookMouseExit(hook(clientscript_deltooltip, "I", [Component.interface_1258.component_1258_108]), Component.interface_1258.component_1258_219);
        int0 = cs2_4825(3);
        str0 = "This build slot available, select your options and click the buy button.";
        if (varbit_clan_custom_slot_3_type_varp > 0 && varbit_clan_custom_slot_3_type_varp == loadClanVarbit<2173>()) {
            ifSetGraphic(enumOp(type_int, type_graphic, int0, varbit_clan_custom_slot_3_type_varp), Component.interface_1258.component_1258_212);
            str0 = "This build slot is full, you may view the contents of it, but to modify you will need to cancel the job.";
        } else if (loadClanVarbit<2177>() == 1) {
            ifSetGraphic(Graphic.aif_loyalty_icon_2_0, Component.interface_1258.component_1258_212);
            ifSet2dangle(49149, Component.interface_1258.component_1258_212);
            str0 = "This build slot is full, you may view the contents of it, but to modify you will need to cancel the job.";
        } else {
            ifSetGraphic(-1, Component.interface_1258.component_1258_212);
        }
        ifSetOnMouseOver(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1258.component_1258_108, event_com, -1, str0, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 2, event_mousex, event_mousey]), Component.interface_1258.component_1258_210);
        hookMouseExit(hook(clientscript_deltooltip, "I", [Component.interface_1258.component_1258_108]), Component.interface_1258.component_1258_210);
    }
}
