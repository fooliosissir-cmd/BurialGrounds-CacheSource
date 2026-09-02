/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6177

function cs2_6177(intArg0: component): void {
    let int1: graphic = -1;

    ccCreate(intArg0, 5, 0);

    if (varc_rcsiphonxp_esteem_client < 1) {
        ccSetGraphic(Graphic.aif_runecrafting_prestige_icons_disable_0);
        int1 = Graphic.aif_runecrafting_prestige_icons_tga_0;
        ccHookMouseEnter(hook(graphic_swapper_child, "Iid", [event_com, event_comsubid, int1]));
        int1 = Graphic.aif_runecrafting_prestige_icons_disable_0;
        ccHookMouseExit(hook(cs2_6176, "Iid", [event_com, event_comsubid, int1]));
        ccSetOp(1, "Buy Rank");
        ccSetOnOpt(hook(rcsiphonxp_select_esteem, "iI", [0, intArg0]));
    } else {
        ccSetGraphic(Graphic.aif_runecrafting_prestige_icons_tga_0);
    }
    ccSetPosition(28, 258, 0, 0);
    ccSetSize(75, 75, 0, 0);
    ccCreate(intArg0, 5, 1);

    if (varc_rcsiphonxp_esteem_client < 2) {
        ccSetGraphic(Graphic.aif_runecrafting_prestige_icons_disable_1);
        int1 = Graphic.aif_runecrafting_prestige_icons_tga_1;
        ccHookMouseEnter(hook(graphic_swapper_child, "Iid", [event_com, event_comsubid, int1]));
        int1 = Graphic.aif_runecrafting_prestige_icons_disable_1;
        ccHookMouseExit(hook(cs2_6176, "Iid", [event_com, event_comsubid, int1]));
        ccSetOp(1, "Buy Rank");
        ccSetOnOpt(hook(rcsiphonxp_select_esteem, "iI", [1, intArg0]));
    } else {
        ccSetGraphic(Graphic.aif_runecrafting_prestige_icons_tga_1);
    }
    ccSetPosition(174, 258, 0, 0);
    ccSetSize(75, 75, 0, 0);
    ccCreate(intArg0, 5, 2);

    if (varc_rcsiphonxp_esteem_client < 3) {
        ccSetGraphic(Graphic.aif_runecrafting_prestige_icons_disable_2);
        int1 = Graphic.aif_runecrafting_prestige_icons_tga_2;
        ccHookMouseEnter(hook(graphic_swapper_child, "Iid", [event_com, event_comsubid, int1]));
        int1 = Graphic.aif_runecrafting_prestige_icons_disable_2;
        ccHookMouseExit(hook(cs2_6176, "Iid", [event_com, event_comsubid, int1]));
        ccSetOp(1, "Buy Rank");
        ccSetOnOpt(hook(rcsiphonxp_select_esteem, "iI", [2, intArg0]));
    } else {
        ccSetGraphic(Graphic.aif_runecrafting_prestige_icons_tga_2);
    }
    ccSetPosition(314, 258, 0, 0);
    ccSetSize(75, 75, 0, 0);
    ccCreate(intArg0, 5, 3);

    if (varc_rcsiphonxp_esteem_client < 4) {
        ccSetGraphic(Graphic.aif_runecrafting_prestige_icons_disable_3);
        int1 = Graphic.aif_runecrafting_prestige_icons_tga_3;
        ccHookMouseEnter(hook(graphic_swapper_child, "Iid", [event_com, event_comsubid, int1]));
        int1 = Graphic.aif_runecrafting_prestige_icons_disable_3;
        ccHookMouseExit(hook(cs2_6176, "Iid", [event_com, event_comsubid, int1]));
        ccSetOp(1, "Buy Rank");
        ccSetOnOpt(hook(rcsiphonxp_select_esteem, "iI", [3, intArg0]));
    } else {
        ccSetGraphic(Graphic.aif_runecrafting_prestige_icons_tga_3);
    }
    ccSetPosition(453, 258, 0, 0);
    ccSetSize(75, 75, 0, 0);
    ccCreate(intArg0, 5, 4);

    if (varc_rcsiphonxp_esteem_client < 5) {
        ccSetGraphic(Graphic.aif_runecrafting_prestige_icons_disable_4);
        int1 = Graphic.aif_runecrafting_prestige_icons_tga_4;
        ccHookMouseEnter(hook(graphic_swapper_child, "Iid", [event_com, event_comsubid, int1]));
        int1 = Graphic.aif_runecrafting_prestige_icons_disable_4;
        ccHookMouseExit(hook(cs2_6176, "Iid", [event_com, event_comsubid, int1]));
        ccSetOp(1, "Buy Rank");
        ccSetOnOpt(hook(rcsiphonxp_select_esteem, "iI", [4, intArg0]));
    } else {
        ccSetGraphic(Graphic.aif_runecrafting_prestige_icons_tga_4);
    }
    ccSetPosition(99, 177, 0, 0);
    ccSetSize(75, 75, 0, 0);
    ccCreate(intArg0, 5, 5);

    if (varc_rcsiphonxp_esteem_client < 6) {
        ccSetGraphic(Graphic.aif_runecrafting_prestige_icons_disable_5);
        int1 = Graphic.aif_runecrafting_prestige_icons_tga_5;
        ccHookMouseEnter(hook(graphic_swapper_child, "Iid", [event_com, event_comsubid, int1]));
        int1 = Graphic.aif_runecrafting_prestige_icons_disable_5;
        ccHookMouseExit(hook(cs2_6176, "Iid", [event_com, event_comsubid, int1]));
        ccSetOp(1, "Buy Rank");
        ccSetOnOpt(hook(rcsiphonxp_select_esteem, "iI", [5, intArg0]));
    } else {
        ccSetGraphic(Graphic.aif_runecrafting_prestige_icons_tga_5);
    }
    ccSetPosition(243, 177, 0, 0);
    ccSetSize(75, 75, 0, 0);
    ccCreate(intArg0, 5, 6);

    if (varc_rcsiphonxp_esteem_client < 7) {
        ccSetGraphic(Graphic.aif_runecrafting_prestige_icons_disable_6);
        int1 = Graphic.aif_runecrafting_prestige_icons_tga_6;
        ccHookMouseEnter(hook(graphic_swapper_child, "Iid", [event_com, event_comsubid, int1]));
        int1 = Graphic.aif_runecrafting_prestige_icons_disable_6;
        ccHookMouseExit(hook(cs2_6176, "Iid", [event_com, event_comsubid, int1]));
        ccSetOp(1, "Buy Rank");
        ccSetOnOpt(hook(rcsiphonxp_select_esteem, "iI", [6, intArg0]));
    } else {
        ccSetGraphic(Graphic.aif_runecrafting_prestige_icons_tga_6);
    }
    ccSetPosition(382, 177, 0, 0);
    ccSetSize(75, 75, 0, 0);
    ccCreate(intArg0, 5, 7);

    if (varc_rcsiphonxp_esteem_client < 8) {
        ccSetGraphic(Graphic.aif_runecrafting_prestige_icons_disable_7);
        int1 = Graphic.aif_runecrafting_prestige_icons_tga_7;
        ccHookMouseEnter(hook(graphic_swapper_child, "Iid", [event_com, event_comsubid, int1]));
        int1 = Graphic.aif_runecrafting_prestige_icons_disable_7;
        ccHookMouseExit(hook(cs2_6176, "Iid", [event_com, event_comsubid, int1]));
        ccSetOp(1, "Buy Rank");
        ccSetOnOpt(hook(rcsiphonxp_select_esteem, "iI", [7, intArg0]));
    } else {
        ccSetGraphic(Graphic.aif_runecrafting_prestige_icons_tga_7);
    }
    ccSetPosition(159, 88, 0, 0);
    ccSetSize(75, 75, 0, 0);
    ccCreate(intArg0, 5, 8);

    if (varc_rcsiphonxp_esteem_client < 9) {
        ccSetGraphic(Graphic.aif_runecrafting_prestige_icons_disable_8);
        int1 = Graphic.aif_runecrafting_prestige_icons_tga_8;
        ccHookMouseEnter(hook(graphic_swapper_child, "Iid", [event_com, event_comsubid, int1]));
        int1 = Graphic.aif_runecrafting_prestige_icons_disable_8;
        ccHookMouseExit(hook(cs2_6176, "Iid", [event_com, event_comsubid, int1]));
        ccSetOp(1, "Buy Rank");
        ccSetOnOpt(hook(rcsiphonxp_select_esteem, "iI", [8, intArg0]));
    } else {
        ccSetGraphic(Graphic.aif_runecrafting_prestige_icons_tga_8);
    }
    ccSetPosition(323, 88, 0, 0);
    ccSetSize(75, 75, 0, 0);
    ccCreate(intArg0, 5, 9);

    if (varc_rcsiphonxp_esteem_client < 10) {
        ccSetGraphic(Graphic.aif_runecrafting_prestige_icons_disable_9);
        int1 = Graphic.aif_runecrafting_prestige_icons_tga_9;
        ccHookMouseEnter(hook(graphic_swapper_child, "Iid", [event_com, event_comsubid, int1]));
        int1 = Graphic.aif_runecrafting_prestige_icons_disable_9;
        ccHookMouseExit(hook(cs2_6176, "Iid", [event_com, event_comsubid, int1]));
        ccSetOp(1, "Buy Rank");
        ccSetOnOpt(hook(rcsiphonxp_select_esteem, "iI", [9, intArg0]));
    } else {
        ccSetGraphic(Graphic.aif_runecrafting_prestige_icons_tga_9);
    }
    ccSetPosition(243, 13, 0, 0);
    ccSetSize(75, 75, 0, 0);
}
