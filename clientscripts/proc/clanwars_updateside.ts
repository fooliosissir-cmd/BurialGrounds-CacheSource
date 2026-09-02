/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,clanwars_updateside]

function clanwars_updateside(): void {
    let int0: number = 0;
    let int1: number = ifGetWidth(Component.clanwars_setup_side.contents) - 16;
    let int2: number = 0;

    [int0, int2] = clanwars_updateside_textbox("~ Winning ~", int0, int2, int1, 1);
    [int0, int2] = clanwars_updateside_textbox("Victory is awarded...", int0, int2, int1, 0);

    if (varc_clanwars_rulevarc_nostragglers == false) {
        [int0, int2] = clanwars_updateside_textbox("...to the team that defeats all its enemies.", int0, int2, int1, 0);
    } else {
        [int0, int2] = clanwars_updateside_textbox("...to the team that defeats all its enemies, excluding the last five.", int0, int2, int1, 0);
    }

    if (varc_clanwars_rulevarc_endtype > 0 && varc_clanwars_rulevarc_endtype < 15) {
        [int0, int2] = clanwars_updateside_textbox("OR" + "<br>" + "...to the team that first achieves " + tostring(enumOp(type_int, type_int, Enum.clanwars_killcount_options, varc_clanwars_rulevarc_endtype)) + " kills.", int0, int2, int1, 0);
    }

    if (varc_clanwars_rulevarc_timelimit > 0) {
        if (varc_clanwars_rulevarc_endtype > 0) {
            [int0, int2] = clanwars_updateside_textbox("OR" + "<br>" + "...to the team that scores the most kills " + durationmes(enumOp(type_int, type_int, Enum.clanwars_timelimit_options, varc_clanwars_rulevarc_timelimit)) + ".", int0, int2, int1, 0);
        } else {
            [int0, int2] = clanwars_updateside_textbox("OR" + "<br>" + "...to the team with the most survivors " + durationmes(enumOp(type_int, type_int, Enum.clanwars_timelimit_options, varc_clanwars_rulevarc_timelimit)) + ".", int0, int2, int1, 0);
        }
    }
    int0 = int0 + 7;

    if (varc_clanwars_rulevarc_endtype == 0) {
        [int0, int2] = clanwars_updateside_textbox("<col=ff981f>" + "Knock-out mode:" + "</col>" + "<br>" + "Once war has begun, players may no longer join/rejoin the fight.", int0, int2, int1, 0);
    } else {
        [int0, int2] = clanwars_updateside_textbox("<col=ff981f>" + "Run-in mode:" + "</col>" + "<br>" + "Players may join/rejoin the fight at any time during the war.", int0, int2, int1, 0);
        if (varc_clanwars_rulevarc_endtype == 15 && varc_clanwars_rulevarc_timelimit == 0) {
            int0 = int0 + 7;
            [int0, int2] = clanwars_updateside_textbox("This war has no time limit or kill target, so it might go on for ages!", int0, int2, int1, 0);
        }
    }
    int0 = int0 + 7;
    [int0, int2] = clanwars_updateside_textbox("~ Item loss ~", int0, int2, int1, 1);

    if (varc_clanwars_rulevarc_itemloss == false) {
        [int0, int2] = clanwars_updateside_textbox("On death, players keep their items.", int0, int2, int1, 0);
    } else {
        [int0, int2] = clanwars_updateside_textbox("<col=ff0000>" + "On death, players DROP their items." + "</col>" + "<br>" + "Players may not teleport.", int0, int2, int1, 0);
    }
    int0 = int0 + 7;
    [int0, int2] = clanwars_updateside_textbox("~ Combat rules ~", int0, int2, int1, 1);

    if (varc_clanwars_rulevarc_nomelee == false) {
        [int0, int2] = clanwars_updateside_textbox("Melee combat is allowed.", int0, int2, int1, 0);
    } else {
        [int0, int2] = clanwars_updateside_textbox("<col=ff0000>" + "Melee combat" + "</col>" + " is forbidden.", int0, int2, int1, 0);
    }

    switch (varc_clanwars_rulevarc_nomagic) {
        case 0:
            [int0, int2] = clanwars_updateside_textbox("Magical combat is allowed.", int0, int2, int1, 0);
            break;
        case 1:
            [int0, int2] = clanwars_updateside_textbox("Spells from the " + "<col=ff0000>" + "standard spellbook" + "</col>" + " are allowed.", int0, int2, int1, 0);
            break;
        case 2:
            if (mapMembers() == 1) {
                [int0, int2] = clanwars_updateside_textbox("The " + "<col=ff0000>" + "Bind" + "</col>" + ", " + "<col=ff0000>" + "Snare" + "</col>" + " and " + "<col=ff0000>" + "Entangle" + "</col>" + " spells are allowed.", int0, int2, int1, 0);
            } else {
                [int0, int2] = clanwars_updateside_textbox("The " + "<col=ff0000>" + "Bind" + "</col>" + " spell is allowed.", int0, int2, int1, 0);
            }
            break;
        case 3:
            [int0, int2] = clanwars_updateside_textbox("<col=ff0000>" + "Magical combat" + "</col>" + " is forbidden.", int0, int2, int1, 0);
            break;
    }

    if (varc_clanwars_rulevarc_noranged == false) {
        [int0, int2] = clanwars_updateside_textbox("Ranged combat is allowed.", int0, int2, int1, 0);
    } else {
        [int0, int2] = clanwars_updateside_textbox("<col=ff0000>" + "Ranged combat" + "</col>" + " is forbidden.", int0, int2, int1, 0);
    }

    if (varc_clanwars_rulevarc_noprayer == false) {
        [int0, int2] = clanwars_updateside_textbox("Prayer is allowed.", int0, int2, int1, 0);
    } else {
        [int0, int2] = clanwars_updateside_textbox("<col=ff0000>" + "Prayer" + "</col>" + " is forbidden.", int0, int2, int1, 0);
    }

    if (mapMembers() == 1) {
        if (varc_clanwars_rulevarc_nosummoning == false) {
            [int0, int2] = clanwars_updateside_textbox("Summoning is allowed.", int0, int2, int1, 0);
        } else {
            [int0, int2] = clanwars_updateside_textbox("<col=ff0000>" + "Summoning" + "</col>" + " is forbidden." + "<br>" + "Familiars will be dismissed.", int0, int2, int1, 0);
        }
    }

    if (varc_clanwars_rulevarc_nofood == false) {
        [int0, int2] = clanwars_updateside_textbox("Food is allowed.", int0, int2, int1, 0);
    } else {
        [int0, int2] = clanwars_updateside_textbox("<col=ff0000>" + "Food" + "</col>" + " is forbidden.", int0, int2, int1, 0);
    }

    if (varc_clanwars_rulevarc_nopotions == false) {
        [int0, int2] = clanwars_updateside_textbox("Potions are allowed.", int0, int2, int1, 0);
    } else {
        [int0, int2] = clanwars_updateside_textbox("<col=ff0000>" + "Potions" + "</col>" + " are forbidden." + "<br>" + "Boosted stats will be reset (excluding Prayer boosts).", int0, int2, int1, 0);
    }
    int0 = int0 + 7;
    [int0, int2] = clanwars_updateside_textbox("~ Arena ~", int0, int2, int1, 1);
    [int0, int2] = clanwars_updateside_textbox(structParam(enumOp(type_int, type_struct, Enum.clanwars_arena_options, varc_clanwars_rulevarc_arenachoice), Param.clanwars_arena_name), int0, int2, int1, 0);

    if (int0 > ifGetHeight(Component.clanwars_setup_side.contents)) {
        ifSetHide(false, Component.clanwars_setup_side.scrollbar);
        ifSetPosition(7, 46, 0, 0, Component.clanwars_setup_side.contents);
        ifSetScrollSize(0, int0, Component.clanwars_setup_side.contents);
        proc_scrollbar_vertical(Component.clanwars_setup_side.scrollbar, Component.clanwars_setup_side.contents, Graphic.scrollbar_dragger_v2_3, Graphic.scrollbar_dragger_v2_0, Graphic.scrollbar_dragger_v2_1, Graphic.scrollbar_dragger_v2_2, Graphic.scrollbar_v2_0, Graphic.scrollbar_v2_1);
        if (ccFind(Component.clanwars_setup_side.scrollbar, 1) == 1) {
            scrollbar_vertical_doscroll(Component.clanwars_setup_side.scrollbar, Component.clanwars_setup_side.contents, ifGetScrollY(Component.clanwars_setup_side.contents), true);
        }
    } else {
        ccDeleteAll(Component.clanwars_setup_side.scrollbar);
        ifSetHide(true, Component.clanwars_setup_side.scrollbar);
        ifSetPosition(15, 46, 0, 0, Component.clanwars_setup_side.contents);
        ifSetScrollSize(0, 0, Component.clanwars_setup_side.contents);
        ifSetScrollPos(0, 0, Component.clanwars_setup_side.contents);
    }
}
