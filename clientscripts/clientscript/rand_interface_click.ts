/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,rand_interface_click]

function rand_interface_click(intArg0: number): void {
    switch (intArg0) {
        case 61145353:
            if (varc_rand_player_tab != 1 && varc_rand_exists_1 == 1) {
                varc_rand_player_tab = 1;
            } else {
                varc_rand_player_tab = 0;
            }
            break;
        case 61145354:
            if (varc_rand_player_tab != 2 && varc_rand_exists_2 == 1) {
                varc_rand_player_tab = 2;
            } else {
                varc_rand_player_tab = 0;
            }
            break;
        case 61145364:
            if (varc_rand_player_tab != 3 && varc_rand_exists_3 == 1) {
                varc_rand_player_tab = 3;
            } else {
                varc_rand_player_tab = 0;
            }
            break;
        case 61145374:
            if (varc_rand_player_tab != 4 && varc_rand_exists_4 == 1) {
                varc_rand_player_tab = 4;
            } else {
                varc_rand_player_tab = 0;
            }
            break;
        case 61145384:
            if (varc_rand_player_tab != 5 && varc_rand_exists_5 == 1) {
                varc_rand_player_tab = 5;
            } else {
                varc_rand_player_tab = 0;
            }
            break;
    }
}
