/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2111

function cs2_2111(intArg0: number, intArg1: number, intArg2: number, intArg3: component, intArg4: component, intArg5: component, intArg6: component): void {
    if (intArg0 != 1) {
        return;
    }
    let int7: number = 0;
    let int8: number = 0;
    soundSynth(Sound.sound_4911, 1, 0);

    if (intArg1 == 1) {
        int7 = cs2_686((varbit_macro_combilock_position_1 + intArg2) % 4, 4);
        int8 = varbit_macro_combilock_zoom_1;
    } else if (intArg1 == 2) {
        int7 = cs2_686((varbit_macro_combilock_position_2 + intArg2) % 4, 4);
        int8 = varbit_macro_combilock_zoom_2;
    } else {
        int7 = cs2_686((varbit_macro_combilock_position_3 + intArg2) % 4, 4);
        int8 = varbit_macro_combilock_zoom_3;
    }
    cs2_2112(intArg3, intArg4, intArg5, intArg6, int7, int8);
}
