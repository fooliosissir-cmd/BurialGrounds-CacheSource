/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,clanwars_end_setup]

function clanwars_end_setup(intArg0: component, intArg1: component, intArg2: component, intArg3: component, intArg4: component, intArg5: component): void {
    switch (varc_clanwars_endtype) {
        case 4:
            clanwars_end_victory(intArg0, intArg1, intArg2, intArg3, intArg4, intArg5);
            ifSetText("Your clan knocked the enemy right out of the arena.", intArg2);
            break;
        case 5:
            clanwars_end_victory(intArg0, intArg1, intArg2, intArg3, intArg4, intArg5);
            ifSetText("Your clan reached the target kill-count.", intArg2);
            break;
        case 6:
            clanwars_end_victory(intArg0, intArg1, intArg2, intArg3, intArg4, intArg5);
            ifSetText("Your clan had the highest kill-count when the time expired.", intArg2);
            break;
        case 7:
            clanwars_end_victory(intArg0, intArg1, intArg2, intArg3, intArg4, intArg5);
            ifSetText("Your clan had the most survivors when the time expired.", intArg2);
            break;
        case 8:
            clanwars_end_defeat(intArg0, intArg1, intArg2, intArg3, intArg4, intArg5);
            ifSetText("Your clan was knocked right out of the arena.", intArg2);
            break;
        case 9:
            clanwars_end_defeat(intArg0, intArg1, intArg2, intArg3, intArg4, intArg5);
            ifSetText("Your enemy reached the target kill-count.", intArg2);
            break;
        case 10:
            clanwars_end_defeat(intArg0, intArg1, intArg2, intArg3, intArg4, intArg5);
            ifSetText("Your enemy had the highest kill-count when the time expired.", intArg2);
            break;
        case 11:
            clanwars_end_defeat(intArg0, intArg1, intArg2, intArg3, intArg4, intArg5);
            ifSetText("Your enemy had the most survivors when the time expired.", intArg2);
            break;
        case 1:
            clanwars_end_draw(intArg0, intArg1, intArg2, intArg3, intArg4, intArg5);
            ifSetText("The match was aborted due to a lack of fighters.", intArg2);
            break;
        case 2:
            clanwars_end_draw(intArg0, intArg1, intArg2, intArg3, intArg4, intArg5);
            ifSetText("Your kill-counts were equal.", intArg2);
            break;
        case 3:
            clanwars_end_draw(intArg0, intArg1, intArg2, intArg3, intArg4, intArg5);
            ifSetText("You had equal numbers of survivors.", intArg2);
            break;
        default:
            ifSetHide(true, intArg0);
            ifSetHide(true, intArg1);
            ifSetHide(true, intArg2);
            ifSetHide(true, intArg3);
            ifSetHide(true, intArg4);
            ifSetHide(true, intArg5);
            break;
    }
}
