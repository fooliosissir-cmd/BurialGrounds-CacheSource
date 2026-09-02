/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2848

function cs2_2848(intArg0: component, intArg1: number, intArg2: component, intArg3: number, intArg4: number, intArg5: number): void {
    let int6: number = 0;
    let int7: number = 0;

    if (intArg2 != -1) {
        if (intArg3 == -1) {
            if (ifFind(intArg2) == 1 && intArg2 == Component.rm_wires.wires_corral) {
                int6 = intArg4;
                int7 = intArg5;
                if (ccFind<1>(intArg0, intArg1) == 1) {
                    ccSetPosition<1>(enumOp(type_int, type_int, Enum.rm_sq_corral_x, intArg1), enumOp(type_int, type_int, Enum.rm_sq_corral_y, intArg1), 0, 0);
                }
            }
        } else {
            if (intArg3 < 9) {
                return;
            }
            if (rm_block_getvar(intArg3 - 9) == 0) {
                if (ccFind(intArg2, intArg3) == 1) {
                    int6 = ccGetX();
                    int7 = ccGetY();
                }
                if (ccFind<1>(intArg0, intArg1) == 1) {
                    switch (randominc(2)) {
                        case 0:
                            soundSynth(Sound.sound_8502, 1, 0);
                            break;
                        case 1:
                            soundSynth(Sound.sound_8518, 1, 0);
                            break;
                        case 2:
                            soundSynth(Sound.sound_8515, 1, 0);
                            break;
                    }
                    ccSetPosition<1>(int6, int7, 0, 0);
                }
            }
        }
    }
}
