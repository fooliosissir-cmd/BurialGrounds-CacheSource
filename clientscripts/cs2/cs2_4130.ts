/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4130

function cs2_4130(intArg0: component): void {
    let int1: number = 0;

    switch (varc_glo3_cutscene) {
        case 1:
            ccCreate(intArg0, 3, int1);
            ccSetfill(true);
            ccSetColour(colour(0xEEEEAA));
            ccSetSize(30, 0, 0, 1);
            ccSetPosition(0, 0, 0, 0);
            ccSetHide(true);
            int1 = int1 + 1;
            ccCreate(intArg0, 5, int1);
            ccSetGraphic(Graphic.rand_framea_centre_gradient_alpha_horiz);
            ccSetSize(30, 0, 0, 1);
            ccSetPosition(0, 0, 0, 0);
            ccSetHide(true);
            int1 = int1 + 1;
            ccCreate(intArg0, 3, int1);
            ccSetfill(true);
            ccSetColour(colour(0xEEEEAA));
            ccSetSize(30, 0, 0, 1);
            ccSetPosition(0, 0, 2, 2);
            ccSetHide(true);
            int1 = int1 + 1;
            ccCreate(intArg0, 5, int1);
            ccSetGraphic(Graphic.rand_framea_centre_gradient_alpha_horiz_t);
            ccSetSize(30, 0, 0, 1);
            ccSetPosition(0, 0, 2, 2);
            ccSetHide(true);
            int1 = int1 + 1;
            cs2_665(colour(0x000000), 50, intArg0, int1);
            break;
        case 2:
            while (int1 < 4) {
                if (ccFind(intArg0, int1) == 1) {
                    ccSetHide(false);
                }
                int1 = int1 + 1;
            }
            cs2_667(50, intArg0, int1);
            break;
        case 3:
            cs2_665(colour(0x000000), 50, intArg0, 4);
            break;
        case 4:
            while (int1 < 4) {
                if (ccFind(intArg0, int1) == 1) {
                    ccSetHide(true);
                }
                int1 = int1 + 1;
            }
            cs2_667(50, intArg0, int1);
            break;
        case 5:
            ccDeleteAll(intArg0);
            break;
    }
}
