/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2200

function cs2_2200(): void {
    switch (random(4)) {
        case 0:
            varc_easter10_currentmodel = Component.easter10_nuts.badnut1;
            break;
        case 1:
            varc_easter10_currentmodel = Component.easter10_nuts.badnut2;
            break;
        case 2:
            varc_easter10_currentmodel = Component.easter10_nuts.badnut3;
            break;
        case 3:
            varc_easter10_currentmodel = Component.easter10_nuts.badnut4;
            break;
    }
}
