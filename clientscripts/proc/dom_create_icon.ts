/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,dom_create_icon]

function dom_create_icon(intArg0: number, intArg1: number): void {
    let int2: graphic = Graphic.aif_dominion_tower_handicap_icons_0;

    switch (varc_dom_next_icon) {
        case 1:
            int2 = Graphic.aif_dominion_tower_handicap_icons_0;
            break;
        case 2:
            int2 = Graphic.aif_dominion_tower_handicap_icons_6;
            break;
        case 3:
            int2 = Graphic.aif_dominion_tower_handicap_icons_7;
            break;
        case 4:
            int2 = Graphic.aif_dominion_tower_handicap_icons_3;
            break;
        case 5:
            int2 = Graphic.aif_dominion_tower_handicap_icons_9;
            break;
        case 6:
            int2 = Graphic.aif_dominion_tower_handicap_icons_10;
            break;
        case 7:
            int2 = Graphic.aif_dominion_tower_handicap_icons_8;
            break;
        case 8:
            int2 = Graphic.aif_dominion_tower_handicap_icons_1;
            break;
        case 9:
            int2 = Graphic.aif_dominion_tower_handicap_icons_13;
            break;
        case 10:
            int2 = Graphic.aif_dominion_tower_handicap_icons_21;
            break;
        case 11:
            int2 = Graphic.aif_dominion_tower_handicap_icons_15;
            break;
        case 12:
            int2 = Graphic.aif_dominion_tower_handicap_icons_12;
            break;
        case 13:
            int2 = Graphic.aif_dominion_tower_handicap_icons_2;
            break;
        case 14:
            int2 = Graphic.aif_dominion_tower_handicap_icons_14;
            break;
        case 15:
            int2 = Graphic.aif_dominion_tower_handicap_icons_17;
            break;
        case 16:
            int2 = Graphic.aif_dominion_tower_handicap_icons_5;
            break;
        case 17:
            int2 = Graphic.aif_dominion_tower_handicap_icons_18;
            break;
        case 18:
            int2 = Graphic.aif_dominion_tower_handicap_icons_11;
            break;
        case 19:
            int2 = Graphic.aif_dominion_tower_handicap_icons_4;
            break;
        case 20:
            int2 = Graphic.aif_dominion_tower_handicap_icons_19;
            break;
        case 21:
            int2 = Graphic.aif_dominion_tower_handicap_icons_16;
            break;
        case 22:
            int2 = Graphic.aif_dominion_tower_handicap_icons_20;
            break;
        default:
            int2 = Graphic.aif_dominion_tower_handicap_icons_0;
            break;
    }
    ccCreate(Component.interface_1167.component_1167_1, 5, intArg0);
    ccSetGraphic(int2);
    ccSetSize(80, 80, 0, 0);
    ccSetPosition(0, intArg1, 1, 0);

    if (varc_dom_next_icon < 22) {
        varc_dom_next_icon = varc_dom_next_icon + 1;
    } else {
        varc_dom_next_icon = 1;
    }
}
