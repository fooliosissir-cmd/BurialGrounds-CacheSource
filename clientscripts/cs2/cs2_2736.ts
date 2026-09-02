/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2736

function cs2_2736(): void {
    if (varbit_player_kit_beard_viewing == 1) {
        if (varc_774 == true) {
            return;
        }
        varc_774 = true;
    } else {
        if (varc_774 == false) {
            return;
        }
        varc_774 = false;
    }
    cs2_2790();
}
