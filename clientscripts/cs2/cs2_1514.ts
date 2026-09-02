/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1514

function cs2_1514(intArg0: number, intArg1: graphic, intArg2: number): void {
    if (intArg0 != 1) {
        return;
    }
    let int3: struct = -1;
    let int4: number = 2;
    let int5: number = 3;
    let int6: number = 4;

    if (gender() == 1) {
        [int4, int5, int6] = [9, 10, 11];
    }
    let int7: graphic = -1;

    switch (intArg2) {
        case 2:
        case 9:
            int3 = cs2_361(intArg1, 3);
            if (int3 != -1) {
                varc_1010 = structParam(int3, Param.playerdesign4_outfit_torso);
                baseIdkit(int4, varc_1010);
                varc_1011 = structParam(int3, Param.playerdesign4_outfit_arms);
                baseIdkit(int5, varc_1011);
                varc_1012 = structParam(int3, Param.playerdesign4_outfit_hands);
                baseIdkit(int6, varc_1012);
            } else {
                baseIdkit(intArg2, intArg1);
                varc_1010 = intArg1;
                if (varc_1011 == -1 || cs2_361(varc_1011, 4) != -1) {
                    if (gender() == 1) {
                        int7 = Graphic.magicon_46;
                    } else {
                        int7 = Graphic.magicon_11;
                    }
                    baseIdkit(int5, int7);
                    varc_1011 = int7;
                }
                if (varc_1012 == -1 || cs2_361(varc_1012, 5) != -1) {
                    if (gender() == 1) {
                        int7 = Graphic.graphic_68;
                    } else {
                        int7 = Graphic.magicon_19;
                    }
                    baseIdkit(int6, int7);
                    varc_1012 = int7;
                }
            }
            break;
        case 3:
        case 10:
            if (cs2_361(varc_1010, 3) == -1) {
                baseIdkit(intArg2, intArg1);
                varc_1011 = intArg1;
            }
            break;
        case 4:
        case 11:
            if (cs2_361(varc_1010, 3) == -1) {
                baseIdkit(intArg2, intArg1);
                varc_1012 = intArg1;
            }
            break;
        case 5:
        case 12:
            baseIdkit(intArg2, intArg1);
            varc_1013 = intArg1;
            break;
    }
    player_kit_body_redraw();
}
