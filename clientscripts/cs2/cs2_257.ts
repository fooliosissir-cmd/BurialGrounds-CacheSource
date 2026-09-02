/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_257

function cs2_257(): void {
    if (varc_fishcomp_result_fish == -1 || varc_fishcomp_result_habitat == -1 || varc_fishcomp_result_weight == -1 || varc_fishcomp_result_bait == -1 || varc_fishcomp_result_hook == -1 || varc_fishcomp_result_distance == -1 || varc_fishcomp_result_rating == -1 || varc_fishcomp_result_big_fish == -1) {
        return;
    }
    let int0: number = ifGetNextSubId(Component.interface_919.component_919_60) * (18 + 4);
    let int1: number = (ifGetNextSubId(Component.interface_919.component_919_60) + 1) * (18 + 4);
    ifSetScrollSize(ifGetScrollWidth(Component.interface_919.component_919_59), int1, Component.interface_919.component_919_59);
    ifSetSize(ifGetWidth(Component.interface_919.component_919_25), int1, 0, 0, Component.interface_919.component_919_25);
    ccCreate(Component.interface_919.component_919_25, 4, ifGetNextSubId(Component.interface_919.component_919_25));

    if (varc_fishcomp_result_big_fish >= 1) {
        ccSetColour(colour(0xF1D8B0));
    } else {
        ccSetColour(colour(0xA4A467));
    }
    ccSetSize(16384, 18, 2, 0);
    ccSetPosition(0, int0, 0, 2);
    ccSetTextFont(Graphic.p11_full);
    ccSetText(cs2_1668(varc_fishcomp_result_fish));
    ccSetTextAlign(1, 1, 0);
    let str0: string = ccGetText() + ": The type of fish";
    ccSetOnMouseOver(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_919.component_919_24, event_com, -1, str0, 200, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 1, event_mousex, event_mousey]));
    ccHookMouseExit(hook(clientscript_deltooltip, "I", [Component.interface_919.component_919_24]));
    ifSetSize(ifGetWidth(Component.interface_919.component_919_60), int1, 0, 0, Component.interface_919.component_919_60);
    ccCreate(Component.interface_919.component_919_60, 4, ifGetNextSubId(Component.interface_919.component_919_60));

    if (varc_fishcomp_result_big_fish >= 1) {
        ccSetColour(colour(0xF1D8B0));
    } else {
        ccSetColour(colour(0xA4A467));
    }
    ccSetSize(16384, 18, 2, 0);
    ccSetPosition(0, int0, 0, 2);
    ccSetTextFont(Graphic.p11_full);
    ccSetText(cs2_276(varc_fishcomp_result_habitat));
    ccSetTextAlign(1, 1, 0);
    str0 = ccGetText() + ": The habitat in which you caught the fish";
    ccSetOnMouseOver(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_919.component_919_24, event_com, -1, str0, 200, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 1, event_mousex, event_mousey]));
    ccHookMouseExit(hook(clientscript_deltooltip, "I", [Component.interface_919.component_919_24]));
    ifSetSize(ifGetWidth(Component.interface_919.component_919_61), int1, 0, 0, Component.interface_919.component_919_61);
    ccCreate(Component.interface_919.component_919_61, 4, ifGetNextSubId(Component.interface_919.component_919_61));

    if (varc_fishcomp_result_big_fish >= 1) {
        ccSetColour(colour(0xF1D8B0));
    } else {
        ccSetColour(colour(0xA4A467));
    }
    ccSetSize(16384, 18, 2, 0);
    ccSetPosition(0, int0, 0, 2);
    ccSetTextFont(Graphic.p11_full);
    ccSetText(tostring(varc_fishcomp_result_weight));
    ccSetTextAlign(1, 1, 0);
    str0 = ccGetText() + ": The weight of the fish";
    ccSetOnMouseOver(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_919.component_919_24, event_com, -1, str0, 200, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 1, event_mousex, event_mousey]));
    ccHookMouseExit(hook(clientscript_deltooltip, "I", [Component.interface_919.component_919_24]));
    ifSetSize(ifGetWidth(Component.interface_919.component_919_62), int1, 0, 0, Component.interface_919.component_919_62);
    ccCreate(Component.interface_919.component_919_62, 5, ifGetNextSubId(Component.interface_919.component_919_62));
    ccSetSize(20, 20, 0, 0);
    ccSetPosition(0, int0, 1, 2);
    let int2: obj = -1;

    switch (varc_fishcomp_result_bait) {
        case 1:
            int2 = Obj.fishcomp_bait_worms;
            str0 = "Worm";
            break;
        case 2:
            int2 = Obj.fishcomp_bait_maggots;
            str0 = "Maggot";
            break;
        case 3:
            int2 = Obj.fishcomp_bait_crickets;
            str0 = "Cricket";
            break;
        case 4:
            int2 = Obj.fishcomp_bait_locusts;
            str0 = "Locust";
            break;
        case 5:
            int2 = Obj.fishcomp_bait_cray;
            str0 = "Crayfish";
            break;
        case 6:
            int2 = Obj.fishcomp_bait_shrimp;
            str0 = "Shrimp";
            break;
        case 7:
            int2 = Obj.fishcomp_bait_emerald_butterfly;
            str0 = "Green moth";
            break;
        case 8:
            int2 = Obj.fishcomp_bait_storm_butterfly;
            str0 = "Grey moth";
            break;
    }

    if (varc_fishcomp_result_big_fish < 2) {
        ccSetObjectNonum(int2, 0);
        str0 = str0 + ": The bait you used to catch the fish";
    } else {
        str0 = "You do not know which bait was used to catch this big fish";
    }
    ccSetOnMouseOver(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_919.component_919_24, event_com, -1, str0, 200, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 3, event_mousex, event_mousey]));
    ccHookMouseExit(hook(clientscript_deltooltip, "I", [Component.interface_919.component_919_24]));
    ifSetSize(ifGetWidth(Component.interface_919.component_919_63), int1, 0, 0, Component.interface_919.component_919_63);
    ccCreate(Component.interface_919.component_919_63, 4, ifGetNextSubId(Component.interface_919.component_919_63));

    if (varc_fishcomp_result_big_fish >= 1) {
        ccSetColour(colour(0xF1D8B0));
    } else {
        ccSetColour(colour(0xA4A467));
    }
    ccSetSize(16384, 18, 2, 0);
    ccSetPosition(0, int0, 0, 2);
    ccSetTextFont(Graphic.p11_full);

    if (varc_fishcomp_result_big_fish < 2) {
        ccSetText(cs2_278(varc_fishcomp_result_hook));
        str0 = ccGetText() + ": The hook you used to catch the fish";
    } else {
        str0 = "You do not know which hook was used to catch this big fish";
    }
    ccSetTextAlign(1, 1, 0);
    ccSetOnMouseOver(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_919.component_919_24, event_com, -1, str0, 200, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 3, event_mousex, event_mousey]));
    ccHookMouseExit(hook(clientscript_deltooltip, "I", [Component.interface_919.component_919_24]));
    ifSetSize(ifGetWidth(Component.interface_919.component_919_64), int1, 0, 0, Component.interface_919.component_919_64);
    ccCreate(Component.interface_919.component_919_64, 4, ifGetNextSubId(Component.interface_919.component_919_64));

    if (varc_fishcomp_result_big_fish >= 1) {
        ccSetColour(colour(0xF1D8B0));
    } else {
        ccSetColour(colour(0xA4A467));
    }
    ccSetSize(16384, 18, 2, 0);
    ccSetPosition(0, int0, 0, 2);
    ccSetTextFont(Graphic.p11_full);

    if (varc_fishcomp_result_big_fish < 2) {
        ccSetText(tostring(varc_fishcomp_result_distance));
        str0 = ccGetText() + ": The distance from the shore where you caught the fish";
    } else {
        str0 = "You do not know which weights were used to catch this big fish";
    }
    ccSetTextAlign(1, 1, 0);
    ccSetOnMouseOver(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_919.component_919_24, event_com, -1, str0, 200, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 3, event_mousex, event_mousey]));
    ccHookMouseExit(hook(clientscript_deltooltip, "I", [Component.interface_919.component_919_24]));
    ifSetSize(ifGetWidth(Component.interface_919.component_919_65), int1, 0, 0, Component.interface_919.component_919_65);
    ccCreate(Component.interface_919.component_919_65, 4, ifGetNextSubId(Component.interface_919.component_919_65));

    if (varc_fishcomp_result_big_fish >= 1) {
        ccSetColour(colour(0xF1D8B0));
    } else {
        ccSetColour(colour(0xA4A467));
    }
    ccSetSize(16384, 18, 2, 0);
    ccSetPosition(0, int0, 0, 2);
    ccSetTextFont(Graphic.p11_full);

    if (varc_fishcomp_result_big_fish < 2) {
        ccSetText(tostring(varc_fishcomp_result_rating) + "%");
    }
    ccSetTextAlign(1, 1, 0);

    if (varc_fishcomp_result_rating == 100) {
        str0 = ccGetText() + ": You are catching the highest-quality fish of this type at this habitat.";
    } else {
        str0 = ccGetText() + ": The quality of the fish you caught. Selecting a more suitable habitat, bait, hook and/or weights increases the rating of catches.";
    }

    if (varc_fishcomp_result_big_fish == 2) {
        str0 = "You helped a contestant to catch this big fish";
    }
    ccSetOnMouseOver(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_919.component_919_24, event_com, -1, str0, 200, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 3, event_mousex, event_mousey]));
    ccHookMouseExit(hook(clientscript_deltooltip, "I", [Component.interface_919.component_919_24]));

    if (ifGetHeight(Component.interface_919.component_919_47) == 200) {
        proc_scrollbar_vertical(Component.interface_919.component_919_58, Component.interface_919.component_919_59, Graphic.aif_scrollbar_dragger_2_3, Graphic.aif_scrollbar_dragger_2_0, Graphic.aif_scrollbar_dragger_2_1, Graphic.aif_scrollbar_dragger_2_2, Graphic.aif_scrollbar_arrow_2_1, Graphic.aif_scrollbar_arrow_2_0);
    }
    varc_fishcomp_result_fish = -1;
    varc_fishcomp_result_habitat = -1;
    varc_fishcomp_result_weight = -1;
    varc_fishcomp_result_bait = -1;
    varc_fishcomp_result_hook = -1;
    varc_fishcomp_result_distance = -1;
    varc_fishcomp_result_rating = -1;
    varc_fishcomp_result_big_fish = -1;
}
