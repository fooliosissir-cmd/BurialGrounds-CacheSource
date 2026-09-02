/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,clan_field_gameover]

function proc_clan_field_gameover(): void {
    switch (varbit_clan_field_limbo) {
        case 1:
            ifSetText("Unable to load your clan data.", Component.clan_field_gameover.header);
            ifSetText("Sorry!", Component.clan_field_gameover.winner);
            ifSetGraphic(Graphic.aif_clans_battle_game_over_1_2, Component.clan_field_gameover.image);
            ifSetText("Please try again later when the system is less busy.", Component.clan_field_gameover.message);
            break;
        case 2:
            ifSetText("And the winner is:", Component.clan_field_gameover.header);
            ifSetText("<col=ff7f7f>" + "Red Team!" + "</col>", Component.clan_field_gameover.winner);
            ifSetGraphic(Graphic.aif_clans_battle_game_over_1_1, Component.clan_field_gameover.image);
            if (varbit_clan_field_team == 1) {
                ifSetText("Congratulations, your team won!", Component.clan_field_gameover.message);
            } else if (varbit_clan_field_team == 2) {
                ifSetText("Oh dear, better luck next time.", Component.clan_field_gameover.message);
            } else {
                ifSetText("Better luck next time to the Blue Team.", Component.clan_field_gameover.message);
            }
            break;
        case 3:
            ifSetText("And the winner is:", Component.clan_field_gameover.header);
            ifSetText("<col=7f7fff>" + "Blue Team!" + "</col>", Component.clan_field_gameover.winner);
            ifSetGraphic(Graphic.aif_clans_battle_game_over_1_0, Component.clan_field_gameover.image);
            if (varbit_clan_field_team == 2) {
                ifSetText("Congratulations, your team won!", Component.clan_field_gameover.message);
            } else if (varbit_clan_field_team == 1) {
                ifSetText("Oh dear, better luck next time.", Component.clan_field_gameover.message);
            } else {
                ifSetText("Better luck next time to the Red Team.", Component.clan_field_gameover.message);
            }
            break;
        case 5:
            ifSetText("And the result is:", Component.clan_field_gameover.header);
            ifSetText("It's a draw!", Component.clan_field_gameover.winner);
            ifSetGraphic(Graphic.aif_clans_battle_game_over_1_2, Component.clan_field_gameover.image);
            ifSetText("Well done, everyone!", Component.clan_field_gameover.message);
            break;
        case 4:
            ifSetText("And the winner is:", Component.clan_field_gameover.header);
            if (stringLength(varcstr_clan_field_setup_name) > 0) {
                ifSetText(varcstr_clan_field_setup_name, Component.clan_field_gameover.winner);
            } else {
                ifSetText("... missing!", Component.clan_field_gameover.winner);
            }
            ifSetGraphic(Graphic.aif_clans_battle_game_over_1_2, Component.clan_field_gameover.image);
            ifSetText("Better luck next time to everyone else.", Component.clan_field_gameover.message);
            break;
        case 6:
            ifSetText("And the winner is:", Component.clan_field_gameover.header);
            ifSetText("YOU!", Component.clan_field_gameover.winner);
            ifSetGraphic(Graphic.aif_clans_battle_game_over_1_2, Component.clan_field_gameover.image);
            ifSetText("Congratulations!", Component.clan_field_gameover.message);
            break;
        default:
            ifSetText("", Component.clan_field_gameover.header);
            ifSetText("", Component.clan_field_gameover.winner);
            ifSetGraphic(-1, Component.clan_field_gameover.image);
            ifSetText("", Component.clan_field_gameover.message);
            break;
    }
}
