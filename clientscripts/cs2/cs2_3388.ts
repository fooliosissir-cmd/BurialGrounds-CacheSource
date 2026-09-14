/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3388

function cs2_3388(intArg0: number, intArg1: number, intArg2: boolean): void {
    let int3: number = 4;

    switch (intArg0) {
        case 1:
            if (autosetupGetLevel() != 1) {
                autosetupSetMin();
            } else {
                return;
            }
            break;
        case 2:
            if (int3 >= 2) {
                if (autosetupGetLevel() != 2) {
                    autosetupSetLow();
                } else {
                    return;
                }
            } else {
                cs2_3413(intArg1);
            }
            break;
        case 3:
            if (int3 >= 3) {
                if (autosetupGetLevel() != 3) {
                    autosetupSetmedium();
                } else {
                    return;
                }
            } else {
                cs2_3413(intArg1);
            }
            break;
        case 4:
            if (int3 >= 4) {
                if (autosetupGetLevel() != 4) {
                    autosetupSetHigh();
                } else {
                    return;
                }
            } else {
                cs2_3413(intArg1);
            }
            break;
        case 0:
            if (intArg2 == true) {
                if (autosetupGetLevel() != 0) {
                    autosetupSetCustom();
                } else {
                    return;
                }
            }
            break;
        case -1:
            proc_autosetup(intArg1);
            break;
    }
    let int4: number = detailGetToolkit();

    if (intArg0 == 0 || intArg2 == true) {
        cs2_3387(int4, getWindowMode(), ...graphics_options_reviewoptions(int4), intArg1);
    } else {
        proc_graphics_options_rebuild(int4, getWindowMode(), ...graphics_options_reviewoptions(int4), intArg1);
    }
}
