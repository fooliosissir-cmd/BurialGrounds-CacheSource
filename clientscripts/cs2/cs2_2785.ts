/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2785

function cs2_2785(intArg0: worldmap): worldmap {
    switch (intArg0) {
        case Worldmap.tutorial3_1:
        case Worldmap.tutorial3_2:
        case Worldmap.tutorial3_3:
            if (varp_tutorial < 93) {
                return Worldmap.tutorial3_1;
            }
            if (varp_tutorial < 120) {
                return Worldmap.tutorial3_2;
            }
            return Worldmap.tutorial3_3;
        case Worldmap.carni_sewervariants:
            varc_worldmap_focus = moveCoord(coord(1792, 6336, 0), 24, 0, 8);
            return Worldmap.ardougne_underground;
    }
    return intArg0;
}
