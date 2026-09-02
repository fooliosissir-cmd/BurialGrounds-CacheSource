/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,easter08_chocatrice_hatching_update]

function easter08_chocatrice_hatching_update(): void {
    if (varbit_easter08_fade_to_black == 1 && varc_easter08_cl_fade_amount < 253) {
        varc_easter08_cl_fade_amount = varc_easter08_cl_fade_amount + 3;
        ifSetTrans(255 - varc_easter08_cl_fade_amount, Component.easter08_chocatrice_hatching.blackout_rect);
    } else if (varbit_easter08_fade_to_black == 0 && varc_easter08_cl_fade_amount > 3) {
        varc_easter08_cl_fade_amount = varc_easter08_cl_fade_amount - 3;
        ifSetTrans(255 - varc_easter08_cl_fade_amount, Component.easter08_chocatrice_hatching.blackout_rect);
    }
}
