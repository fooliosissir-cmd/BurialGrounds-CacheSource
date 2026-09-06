/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1766

function cs2_1766(): void {
    let str0: string = "";

    if (varc_232 == 0) {
        ifSetGraphic(gameframe_skin_graphic(Graphic.stonemenusideicons_0), Component.interface_548.component_548_120);
        ifSetGraphic(gameframe_skin_graphic(Graphic.graphic_8687), Component.interface_746.component_746_59);
        str0 = "Combat Styles";
        ifSetOp(1, str0, Component.interface_548.component_548_112);
        ifSetOp(1, str0, Component.interface_746.component_746_75);
        ifSetOnMouseOver(hook(cs2_5515, "IIs", [Component.interface_746.component_746_42, Component.interface_746.component_746_91, str0]), Component.interface_746.component_746_91);
    } else if (varc_232 == 1) {
        ifSetGraphic(Graphic.aif_clan_theatre_sidemenu_icons_3, Component.interface_548.component_548_120);
        ifSetGraphic(Graphic.graphic_8713, Component.interface_746.component_746_59);
        str0 = "Props";
        ifSetOp(1, str0, Component.interface_548.component_548_112);
        ifSetOp(1, str0, Component.interface_746.component_746_75);
        ifSetOnMouseOver(hook(cs2_5515, "IIs", [Component.interface_746.component_746_42, Component.interface_746.component_746_91, str0]), Component.interface_746.component_746_91);
    }

    if (varc_822 == 0) {
        cs2_4089();
        ifSetGraphic(gameframe_skin_graphic(Graphic.stonemenusideicons_3), Component.interface_548.component_548_121);
        ifSetGraphic(gameframe_skin_graphic(Graphic.graphic_8698), Component.interface_746.component_746_60);
        str0 = "Task List";
        ifSetOp(1, str0, Component.interface_548.component_548_113);
        ifSetOp(1, str0, Component.interface_746.component_746_76);
        ifSetOnMouseOver(hook(cs2_5515, "IIs", [Component.interface_746.component_746_42, Component.interface_746.component_746_92, str0]), Component.interface_746.component_746_92);
    } else if (varc_822 == 1) {
        ifSetGraphic(Graphic.graphic_1812, Component.interface_548.component_548_121);
        ifSetGraphic(Graphic.graphic_8719, Component.interface_746.component_746_60);
        str0 = "Camera";
        ifSetOp(1, str0, Component.interface_548.component_548_113);
        ifSetOp(1, str0, Component.interface_746.component_746_76);
        ifSetOnMouseOver(hook(cs2_5515, "IIs", [Component.interface_746.component_746_42, Component.interface_746.component_746_92, str0]), Component.interface_746.component_746_92);
    } else if (varc_822 == 2) {
        ifSetGraphic(Graphic.aif_clan_theatre_sidemenu_icons_2, Component.interface_548.component_548_121);
        ifSetGraphic(Graphic.graphic_8712, Component.interface_746.component_746_60);
        str0 = "Spotlights";
        ifSetOp(1, str0, Component.interface_548.component_548_113);
        ifSetOp(1, str0, Component.interface_746.component_746_76);
        ifSetOnMouseOver(hook(cs2_5515, "IIs", [Component.interface_746.component_746_42, Component.interface_746.component_746_92, str0]), Component.interface_746.component_746_92);
    }

    switch (varc_233) {
        case 1:
            ifSetGraphic(Graphic.graphic_1815, Component.interface_548.component_548_122);
            ifSetGraphic(Graphic.graphic_8722, Component.interface_746.component_746_61);
            str0 = "Squad Commands";
            ifSetOp(1, str0, Component.interface_548.component_548_114);
            ifSetOp(1, str0, Component.interface_746.component_746_77);
            ifSetOnMouseOver(hook(cs2_5515, "IIs", [Component.interface_746.component_746_42, Component.interface_746.component_746_93, str0]), Component.interface_746.component_746_93);
            break;
        case 2:
            ifSetGraphic(Graphic.aif_clan_theatre_sidemenu_icons_1, Component.interface_548.component_548_122);
            ifSetGraphic(Graphic.graphic_6130, Component.interface_746.component_746_61);
            str0 = "Sound Effects";
            ifSetOp(1, str0, Component.interface_548.component_548_114);
            ifSetOp(1, str0, Component.interface_746.component_746_77);
            ifSetOnMouseOver(hook(cs2_5515, "IIs", [Component.interface_746.component_746_42, Component.interface_746.component_746_93, str0]), Component.interface_746.component_746_93);
            break;
        case 4:
            ifSetGraphic(Graphic.conq_side_icons_1, Component.interface_548.component_548_122);
            ifSetGraphic(Graphic.graphic_8716, Component.interface_746.component_746_61);
            str0 = "Turn Options";
            ifSetOp(1, str0, Component.interface_548.component_548_114);
            ifSetOp(1, str0, Component.interface_746.component_746_77);
            ifSetOnMouseOver(hook(cs2_5515, "IIs", [Component.interface_746.component_746_42, Component.interface_746.component_746_93, str0]), Component.interface_746.component_746_93);
            break;
        case 5:
            ifSetGraphic(Graphic.conq_side_icons_1, Component.interface_548.component_548_122);
            ifSetGraphic(Graphic.graphic_8716, Component.interface_746.component_746_61);
            str0 = "Command Options";
            ifSetOp(1, str0, Component.interface_548.component_548_114);
            ifSetOp(1, str0, Component.interface_746.component_746_77);
            ifSetOnMouseOver(hook(cs2_5515, "IIs", [Component.interface_746.component_746_42, Component.interface_746.component_746_93, str0]), Component.interface_746.component_746_93);
            break;
        default:
            ifSetGraphic(gameframe_skin_graphic(Graphic.stonemenusideicons_1), Component.interface_548.component_548_122);
            ifSetGraphic(gameframe_skin_graphic(Graphic.graphic_8697), Component.interface_746.component_746_61);
            str0 = "Stats";
            ifSetOp(1, str0, Component.interface_548.component_548_114);
            ifSetOp(1, str0, Component.interface_746.component_746_77);
            ifSetOnMouseOver(hook(cs2_5515, "IIs", [Component.interface_746.component_746_42, Component.interface_746.component_746_93, str0]), Component.interface_746.component_746_93);
            break;
    }

    switch (varc_234) {
        case 1:
            ifSetGraphic(Graphic.graphic_1813, Component.interface_548.component_548_123);
            ifSetGraphic(Graphic.graphic_8720, Component.interface_746.component_746_62);
            str0 = "Special Units";
            ifSetOp(1, str0, Component.interface_548.component_548_115);
            ifSetOp(1, str0, Component.interface_746.component_746_78);
            ifSetOnMouseOver(hook(cs2_5515, "IIs", [Component.interface_746.component_746_42, Component.interface_746.component_746_94, str0]), Component.interface_746.component_746_94);
            break;
        case 2:
            ifSetGraphic(Graphic.conq_side_icons_2, Component.interface_548.component_548_123);
            ifSetGraphic(Graphic.graphic_8717, Component.interface_746.component_746_62);
            str0 = "Troop Details";
            ifSetOp(1, str0, Component.interface_548.component_548_115);
            ifSetOp(1, str0, Component.interface_746.component_746_78);
            ifSetOnMouseOver(hook(cs2_5515, "IIs", [Component.interface_746.component_746_42, Component.interface_746.component_746_94, str0]), Component.interface_746.component_746_94);
            break;
        case 3:
            ifSetGraphic(gameframe_skin_graphic(Graphic.staticons2_13), Component.interface_548.component_548_123);
            ifSetGraphic(Graphic.graphic_8727, Component.interface_746.component_746_62);
            str0 = "Party organiser";
            ifSetOp(1, str0, Component.interface_548.component_548_115);
            ifSetOp(1, str0, Component.interface_746.component_746_78);
            ifSetOnMouseOver(hook(cs2_5515, "IIs", [Component.interface_746.component_746_42, Component.interface_746.component_746_94, str0]), Component.interface_746.component_746_94);
            break;
        case 4:
            ifSetGraphic(gameframe_skin_graphic(Graphic.stonemenusideicons_17), Component.interface_548.component_548_123);
            ifSetGraphic(Graphic.graphic_8724, Component.interface_746.component_746_62);
            str0 = "Book";
            ifSetOp(1, str0, Component.interface_548.component_548_115);
            ifSetOp(1, str0, Component.interface_746.component_746_78);
            ifSetOnMouseOver(hook(cs2_5515, "IIs", [Component.interface_746.component_746_42, Component.interface_746.component_746_94, str0]), Component.interface_746.component_746_94);
            break;
        case 5:
            ifSetGraphic(Graphic.aif_clan_theatre_sidemenu_icons_4, Component.interface_548.component_548_123);
            ifSetGraphic(Graphic.graphic_8714, Component.interface_746.component_746_62);
            str0 = "Actors";
            ifSetOp(1, str0, Component.interface_548.component_548_115);
            ifSetOp(1, str0, Component.interface_746.component_746_78);
            ifSetOnMouseOver(hook(cs2_5515, "IIs", [Component.interface_746.component_746_42, Component.interface_746.component_746_94, str0]), Component.interface_746.component_746_94);
            break;
        default:
            ifSetGraphic(gameframe_skin_graphic(Graphic.stonemenusideicons_2), Component.interface_548.component_548_123);
            ifSetGraphic(gameframe_skin_graphic(Graphic.graphic_8695), Component.interface_746.component_746_62);
            str0 = "Quest Journals";
            ifSetOp(1, str0, Component.interface_548.component_548_115);
            ifSetOp(1, str0, Component.interface_746.component_746_78);
            ifSetOnMouseOver(hook(cs2_5515, "IIs", [Component.interface_746.component_746_42, Component.interface_746.component_746_94, str0]), Component.interface_746.component_746_94);
            break;
    }

    if (varc_235 == 0) {
        ifSetGraphic(gameframe_skin_graphic(Graphic.stonemenusideicons_4), Component.interface_548.component_548_124);
        ifSetGraphic(gameframe_skin_graphic(Graphic.graphic_8690), Component.interface_746.component_746_63);
        str0 = "Inventory";
        ifSetOp(1, str0, Component.interface_548.component_548_116);
        ifSetOp(1, str0, Component.interface_746.component_746_79);
        ifSetOnMouseOver(hook(cs2_5515, "IIs", [Component.interface_746.component_746_42, Component.interface_746.component_746_95, str0]), Component.interface_746.component_746_95);
    } else if (varc_235 == 1) {
        ifSetGraphic(Graphic.graphic_1814, Component.interface_548.component_548_124);
        ifSetGraphic(Graphic.graphic_8721, Component.interface_746.component_746_63);
        str0 = "My Squads";
        ifSetOp(1, str0, Component.interface_548.component_548_116);
        ifSetOp(1, str0, Component.interface_746.component_746_79);
        ifSetOnMouseOver(hook(cs2_5515, "IIs", [Component.interface_746.component_746_42, Component.interface_746.component_746_95, str0]), Component.interface_746.component_746_95);
    } else if (varc_235 == 2) {
        ifSetGraphic(Graphic.conq_side_icons_0, Component.interface_548.component_548_124);
        ifSetGraphic(Graphic.graphic_8715, Component.interface_746.component_746_63);
        str0 = "Commands";
        ifSetOp(1, str0, Component.interface_548.component_548_116);
        ifSetOp(1, str0, Component.interface_746.component_746_79);
        ifSetOnMouseOver(hook(cs2_5515, "IIs", [Component.interface_746.component_746_42, Component.interface_746.component_746_95, str0]), Component.interface_746.component_746_95);
    }

    if (varc_236 == 0) {
        ifSetGraphic(gameframe_skin_graphic(Graphic.stonemenusideicons_5), Component.interface_548.component_548_125);
        ifSetGraphic(gameframe_skin_graphic(Graphic.graphic_6128), Component.interface_746.component_746_64);
        str0 = "Worn Equipment";
        ifSetOp(1, str0, Component.interface_548.component_548_117);
        ifSetOp(1, str0, Component.interface_746.component_746_80);
        ifSetOnMouseOver(hook(cs2_5515, "IIs", [Component.interface_746.component_746_42, Component.interface_746.component_746_96, str0]), Component.interface_746.component_746_96);
    } else if (varc_236 == 1) {
        ifSetGraphic(gameframe_skin_graphic(Graphic.stonemenusideicons_16), Component.interface_548.component_548_125);
        ifSetGraphic(Graphic.graphic_8725, Component.interface_746.component_746_64);
        str0 = "Acrobat Emotes";
        ifSetOp(1, str0, Component.interface_548.component_548_117);
        ifSetOp(1, str0, Component.interface_746.component_746_80);
        ifSetOnMouseOver(hook(cs2_5515, "IIs", [Component.interface_746.component_746_42, Component.interface_746.component_746_96, str0]), Component.interface_746.component_746_96);
    } else if (varc_236 == 2) {
        ifSetGraphic(Graphic.graphic_1816, Component.interface_548.component_548_125);
        ifSetGraphic(Graphic.graphic_8723, Component.interface_746.component_746_64);
        str0 = "Forfeit";
        ifSetOp(1, str0, Component.interface_548.component_548_117);
        ifSetOp(1, str0, Component.interface_746.component_746_80);
        ifSetOnMouseOver(hook(cs2_5515, "IIs", [Component.interface_746.component_746_42, Component.interface_746.component_746_96, str0]), Component.interface_746.component_746_96);
    } else if (varc_236 == 3) {
        ifSetGraphic(Graphic.conq_side_icons_3, Component.interface_548.component_548_125);
        ifSetGraphic(Graphic.graphic_8718, Component.interface_746.component_746_64);
        str0 = "Diplomacy";
        ifSetOp(1, str0, Component.interface_548.component_548_117);
        ifSetOp(1, str0, Component.interface_746.component_746_80);
        ifSetOnMouseOver(hook(cs2_5515, "IIs", [Component.interface_746.component_746_42, Component.interface_746.component_746_96, str0]), Component.interface_746.component_746_96);
    } else if (varc_236 == 4) {
        ifSetGraphic(Graphic.conq_side_icons_3, Component.interface_548.component_548_125);
        ifSetGraphic(Graphic.graphic_8718, Component.interface_746.component_746_64);
        str0 = "Retreat";
        ifSetOp(1, str0, Component.interface_548.component_548_117);
        ifSetOp(1, str0, Component.interface_746.component_746_80);
        ifSetOnMouseOver(hook(cs2_5515, "IIs", [Component.interface_746.component_746_42, Component.interface_746.component_746_96, str0]), Component.interface_746.component_746_96);
    }

    if (varc_237 == 0) {
        ifSetGraphic(gameframe_skin_graphic(Graphic.stonemenusideicons_6), Component.interface_548.component_548_126);
        ifSetGraphic(gameframe_skin_graphic(Graphic.graphic_8694), Component.interface_746.component_746_65);
        str0 = "Prayer List";
        ifSetOnMouseOver(hook(cs2_5515, "IIs", [Component.interface_746.component_746_42, Component.interface_746.component_746_97, str0]), Component.interface_746.component_746_97);
    }

    if (varc_238 == 0) {
        ifSetGraphic(gameframe_skin_graphic(Graphic.stonemenusideicons_7), Component.interface_548.component_548_127);
        ifSetGraphic(gameframe_skin_graphic(Graphic.graphic_8696), Component.interface_746.component_746_66);
        str0 = "Magic Spellbook";
        ifSetOp(1, str0, Component.interface_548.component_548_119);
        ifSetOp(1, str0, Component.interface_746.component_746_82);
        ifSetOnMouseOver(hook(cs2_5515, "IIs", [Component.interface_746.component_746_42, Component.interface_746.component_746_98, str0]), Component.interface_746.component_746_98);
    }

    if (varc_823 == 1) {
        ifSetGraphic(Graphic.stonemenusideicons_19, Component.interface_548.component_548_91);
        ifSetGraphic(Graphic.graphic_11833, Component.interface_746.component_746_67);
        str0 = "Extras";
        ifSetOp(1, str0, Component.interface_548.component_548_83);
        ifSetOp(1, str0, Component.interface_746.component_746_83);
        ifSetOnMouseOver(hook(cs2_5515, "IIs", [Component.interface_746.component_746_42, Component.interface_746.component_746_99, str0]), Component.interface_746.component_746_99);
    } else if (varc_823 == 2) {
        ifSetGraphic(gameframe_skin_graphic(Graphic.stonemenusideicons_18), Component.interface_548.component_548_91);
        ifSetGraphic(Graphic.graphic_8726, Component.interface_746.component_746_67);
        str0 = "Production";
        ifSetOp(1, str0, Component.interface_548.component_548_83);
        ifSetOp(1, str0, Component.interface_746.component_746_83);
        ifSetOnMouseOver(hook(cs2_5515, "IIs", [Component.interface_746.component_746_42, Component.interface_746.component_746_99, str0]), Component.interface_746.component_746_99);
    } else {
        ifSetGraphic(-1, Component.interface_548.component_548_91);
        ifSetGraphic(-1, Component.interface_746.component_746_67);
        ifClearops(Component.interface_746.component_746_83);
        ifClearops(Component.interface_548.component_548_83);
        ifSetOnMouseOver(noHook(""), Component.interface_746.component_746_99);
    }

    if (varc_240 == 0) {
        ifSetGraphic(Graphic.aif_clan_toplevel_icons_1, Component.interface_548.component_548_92);
        ifSetGraphic(gameframe_skin_graphic(Graphic.graphic_8689), Component.interface_746.component_746_68);
        str0 = "Friends List";
        ifSetOnMouseOver(hook(cs2_5515, "IIs", [Component.interface_746.component_746_42, Component.interface_746.component_746_100, str0]), Component.interface_746.component_746_100);
    }

    if (varc_241 == 0) {
        ifSetGraphic(Graphic.aif_clan_toplevel_icons_0, Component.interface_548.component_548_93);
        ifSetGraphic(gameframe_skin_graphic(Graphic.graphic_8685), Component.interface_746.component_746_69);
        str0 = "Friends Chat";
        ifSetOnMouseOver(hook(cs2_5515, "IIs", [Component.interface_746.component_746_42, Component.interface_746.component_746_101, str0]), Component.interface_746.component_746_101);
    }

    if (varc_242 == 0) {
        ifSetGraphic(gameframe_skin_graphic(Graphic.stonemenusideicons_11), Component.interface_548.component_548_94);
        ifSetGraphic(gameframe_skin_graphic(Graphic.graphic_8686), Component.interface_746.component_746_70);
        str0 = "Clan Chat";
        ifSetOnMouseOver(hook(cs2_5515, "IIs", [Component.interface_746.component_746_42, Component.interface_746.component_746_102, str0]), Component.interface_746.component_746_102);
    }

    if (varc_243 == 0) {
        ifSetGraphic(gameframe_skin_graphic(Graphic.stonemenusideicons_12), Component.interface_548.component_548_95);
        ifSetGraphic(gameframe_skin_graphic(Graphic.graphic_8693), Component.interface_746.component_746_71);
        str0 = "Options";
        ifSetOnMouseOver(hook(cs2_5515, "IIs", [Component.interface_746.component_746_42, Component.interface_746.component_746_103, str0]), Component.interface_746.component_746_103);
    }

    if (varc_244 == 0) {
        ifSetGraphic(gameframe_skin_graphic(Graphic.stonemenusideicons_13), Component.interface_548.component_548_96);
        ifSetGraphic(gameframe_skin_graphic(Graphic.graphic_8688), Component.interface_746.component_746_72);
        str0 = "Emotes";
        ifSetOp(1, str0, Component.interface_548.component_548_88);
        ifSetOp(1, str0, Component.interface_746.component_746_88);
        ifSetOnMouseOver(hook(cs2_5515, "IIs", [Component.interface_746.component_746_42, Component.interface_746.component_746_104, str0]), Component.interface_746.component_746_104);
    } else if (varc_244 == 1) {
        ifSetGraphic(Graphic.conq_side_icons_0, Component.interface_548.component_548_96);
        ifSetGraphic(Graphic.conq_side_icons_0, Component.interface_746.component_746_72);
        str0 = "Special Attacks";
        ifSetOp(1, str0, Component.interface_548.component_548_88);
        ifSetOp(1, str0, Component.interface_746.component_746_88);
        ifSetOnMouseOver(hook(cs2_5515, "IIs", [Component.interface_746.component_746_42, Component.interface_746.component_746_104, str0]), Component.interface_746.component_746_104);
    }

    if (varc_245 == 0) {
        ifSetGraphic(gameframe_skin_graphic(Graphic.stonemenusideicons_14), Component.interface_548.component_548_97);
        ifSetGraphic(gameframe_skin_graphic(Graphic.graphic_8691), Component.interface_746.component_746_73);
        str0 = "Music Player";
        ifSetOp(1, str0, Component.interface_548.component_548_89);
        ifSetOp(1, str0, Component.interface_746.component_746_89);
        ifSetOnMouseOver(hook(cs2_5515, "IIs", [Component.interface_746.component_746_42, Component.interface_746.component_746_105, str0]), Component.interface_746.component_746_105);
    } else if (varc_245 == 1) {
        ifSetGraphic(Graphic.aif_clan_theatre_sidemenu_icons_0, Component.interface_548.component_548_97);
        ifSetGraphic(Graphic.graphic_6129, Component.interface_746.component_746_73);
        str0 = "Face Direction";
        ifSetOp(1, str0, Component.interface_548.component_548_89);
        ifSetOp(1, str0, Component.interface_746.component_746_89);
        ifSetOnMouseOver(hook(cs2_5515, "IIs", [Component.interface_746.component_746_42, Component.interface_746.component_746_105, str0]), Component.interface_746.component_746_105);
    }

    if (varc_824 == 0) {
        ifSetGraphic(gameframe_skin_graphic(Graphic.stonemenusideicons_15), Component.interface_548.component_548_98);
        ifSetGraphic(gameframe_skin_graphic(Graphic.graphic_8692), Component.interface_746.component_746_74);
        str0 = "Notes";
        ifSetOnMouseOver(hook(cs2_5515, "IIs", [Component.interface_746.component_746_42, Component.interface_746.component_746_106, str0]), Component.interface_746.component_746_106);
    }
}
