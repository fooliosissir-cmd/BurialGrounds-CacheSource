/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5462

function cs2_5462(intArg0: number, intArg1: number): void {
    let int2: graphic = -1;
    let str0: string = "";

    switch (intArg0) {
        case 1:
            int2 = Graphic.aif_dominion_tower_handicap_icons_small_0;
            str0 = "Reduced melee attack";
            break;
        case 2:
            int2 = Graphic.aif_dominion_tower_handicap_icons_small_6;
            str0 = "No shield";
            break;
        case 3:
            int2 = Graphic.aif_dominion_tower_handicap_icons_small_7;
            str0 = "No food";
            break;
        case 4:
            int2 = Graphic.aif_dominion_tower_handicap_icons_small_3;
            str0 = "Reduced melee defence";
            break;
        case 5:
            int2 = Graphic.aif_dominion_tower_handicap_icons_small_9;
            str0 = "Random freeze";
            break;
        case 6:
            int2 = Graphic.aif_dominion_tower_handicap_icons_small_10;
            str0 = "Halved HP";
            break;
        case 7:
            int2 = Graphic.aif_dominion_tower_handicap_icons_small_8;
            str0 = "No body armour";
            break;
        case 8:
            int2 = Graphic.aif_dominion_tower_handicap_icons_small_1;
            str0 = "Reduced ranged attack";
            break;
        case 9:
            int2 = Graphic.aif_dominion_tower_handicap_icons_small_13;
            str0 = "No familiar";
            break;
        case 10:
            int2 = Graphic.aif_dominion_tower_handicap_icons_small_21;
            str0 = "Monster stun";
            break;
        case 11:
            int2 = Graphic.aif_dominion_tower_handicap_icons_small_15;
            str0 = "No prayers";
            break;
        case 12:
            int2 = Graphic.aif_dominion_tower_handicap_icons_small_12;
            str0 = "Slippery fingers";
            break;
        case 13:
            int2 = Graphic.aif_dominion_tower_handicap_icons_small_2;
            str0 = "Reduced magic attack";
            break;
        case 14:
            int2 = Graphic.aif_dominion_tower_handicap_icons_small_14;
            str0 = "Diseased";
            break;
        case 15:
            int2 = Graphic.aif_dominion_tower_handicap_icons_small_17;
            str0 = "No special attacks";
            break;
        case 16:
            int2 = Graphic.aif_dominion_tower_handicap_icons_small_5;
            str0 = "Reduced magic defence";
            break;
        case 17:
            int2 = Graphic.aif_dominion_tower_handicap_icons_small_18;
            str0 = "Random daze";
            break;
        case 18:
            int2 = Graphic.aif_dominion_tower_handicap_icons_small_11;
            str0 = "Poisoned";
            break;
        case 19:
            int2 = Graphic.aif_dominion_tower_handicap_icons_small_4;
            str0 = "Reduced ranged defence";
            break;
        case 20:
            int2 = Graphic.aif_dominion_tower_handicap_icons_small_19;
            str0 = "No powerups";
            break;
        case 21:
            int2 = Graphic.aif_dominion_tower_handicap_icons_small_16;
            str0 = "No potions";
            break;
        case 22:
            int2 = Graphic.aif_dominion_tower_handicap_icons_small_20;
            str0 = "Life saver";
            break;
        default:
            int2 = Graphic.aif_dominion_tower_handicap_icons_small_0;
            break;
    }
    ccCreate(Component.dom_battle_overlay.handicap_icons_layer, 5, intArg1);
    ccSetGraphic(int2);
    ccSetSize(23, 23, 0, 0);
    ccSetPosition(varc_dom_battle_current_x, varc_dom_battle_current_z, 2, 2);
    varc_dom_battle_current_x = varc_dom_battle_current_x + 24;

    if (varc_dom_battle_current_x > 180) {
        varc_dom_battle_current_x = 0;
        varc_dom_battle_current_z = varc_dom_battle_current_z + 24;
    }
    cs2_5464();
    ccSetOnMouseRepeat(hook(cs2_568, "IiIsii", [event_com, intArg1, Component.dom_battle_overlay.tooltip, str0, 10, 100]));
    ccSetOnMouseLeave(hook(clientscript_deltooltip, "I", [Component.dom_battle_overlay.tooltip]));
}
