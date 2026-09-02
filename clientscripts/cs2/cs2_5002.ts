/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5002

function cs2_5002(intArg0: component): void {
    cs2_4408(intArg0);
    ccDeleteAll(intArg0);
    ccCreate(intArg0, 5, 0);
    ccSetSize(18, 18, 0, 0);
    ccSetPosition(0, 0, 1, 1);
    let int1: number = cs2_4964(intArg0);
    let int2: number = 0;

    if (clanProfileFind() == 1) {
        int2 = cs2_4949(int1);
        switch (int2) {
            case 17:
                ccSetGraphic(Graphic.aif_clan_building_icons_1);
                break;
            case 18:
                ccSetGraphic(Graphic.aif_clan_building_icons_0);
                break;
            case 19:
                ccSetGraphic(Graphic.aif_clan_building_icons_3);
                break;
            case 1:
                ccSetGraphic(Graphic.aif_clan_skill_plot_icons_small_0);
                break;
            case 2:
                ccSetGraphic(Graphic.aif_clan_skill_plot_icons_small_1);
                break;
            case 3:
                ccSetGraphic(Graphic.aif_clan_skill_plot_icons_small_2);
                break;
            case 4:
                ccSetGraphic(Graphic.aif_clan_skill_plot_icons_small_3);
                break;
            case 5:
                ccSetGraphic(Graphic.aif_clan_skill_plot_icons_small_4);
                break;
            case 6:
                ccSetGraphic(Graphic.aif_clan_skill_plot_icons_small_5);
                break;
            case 7:
                ccSetGraphic(Graphic.aif_clan_skill_plot_icons_small_6);
                break;
        }
    }
}
