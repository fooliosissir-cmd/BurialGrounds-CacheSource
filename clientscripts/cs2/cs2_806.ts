/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_806

function cs2_806(): colour {
    let int0: colour = colour(0x555555);

    if (runenergyVisible() > 75) {
        int0 = colour(0x00FF00);
    } else if (runenergyVisible() > 50) {
        int0 = colour(0xFFFF00);
    } else if (runenergyVisible() > 25) {
        int0 = colour(0xFF981F);
    } else {
        int0 = colour(0xFF0000);
    }
    return int0;
}
