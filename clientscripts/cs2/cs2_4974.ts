/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4974

function cs2_4974(intArg0: number): graphic {
    switch (intArg0) {
        case 17:
            return Graphic.aif_clan_building_icons_1;
        case 18:
            return Graphic.aif_clan_building_icons_0;
        case 19:
            return Graphic.aif_clan_building_icons_3;
        case 1:
            return Graphic.aif_clan_skill_plot_icons_small_0;
        case 2:
            return Graphic.aif_clan_skill_plot_icons_small_2;
        case 3:
            return Graphic.aif_clan_skill_plot_icons_small_1;
        case 4:
            return Graphic.aif_clan_skill_plot_icons_small_4;
        case 5:
            return Graphic.aif_clan_skill_plot_icons_small_5;
        case 6:
            return Graphic.aif_clan_skill_plot_icons_small_3;
        case 7:
            return Graphic.aif_clan_skill_plot_icons_small_6;
        case 100:
        case 101:
        case 102:
        case 103:
        case 104:
        case 105:
        case 106:
        case 107:
        case 108:
        case 109:
        case 110:
        case 111:
        case 112:
        case 113:
            return enumOp(type_int, type_graphic, Enum.clan_custom_blanket_types_id2gfx, intArg0);
        case 21:
        case 22:
        case 23:
        case 24:
        case 25:
        case 26:
        case 27:
        case 28:
        case 31:
        case 32:
        case 33:
        case 34:
        case 35:
        case 41:
        case 42:
        case 43:
        case 44:
        case 45:
        case 51:
            return Graphic.aif_clan_building_icons_4;
    }
    return -1;
}
