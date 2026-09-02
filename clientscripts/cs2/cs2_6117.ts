/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6117

function cs2_6117(intArg0: component, intArg1: number, intArg2: number, intArg3: number, intArg4: number): void {
    let int5: number = 20;
    let int6: number = 0;
    let int7: number = 0;
    let int8: number = 0;

    if (intArg1 > 0) {
        intArg1 = intArg1 - 1;
    } else if (intArg2 < int5) {
        intArg2 = intArg2 + 1;
        int6 = 16383;
        int8 = int5 - intArg2;
        switch (varc_fremsaga_thok2_ending_montage_last_direction) {
            case 0:
            case 1:
                int7 = 5;
                break;
            case 2:
            case 3:
                int7 = 3;
                break;
        }
        if (intArg2 == int5) {
            varc_fremsaga_thok2_ending_montage_slice_count = varc_fremsaga_thok2_ending_montage_slice_count + 1;
        }
    } else if (intArg3 > 0) {
        intArg3 = intArg3 - 1;
    } else if (intArg4 < int5) {
        intArg4 = intArg4 + 1;
        int6 = 16384;
        int8 = intArg4;
        switch (varc_fremsaga_thok2_ending_montage_last_direction) {
            case 0:
            case 1:
                int7 = 3;
                break;
            case 2:
            case 3:
                int7 = 5;
                break;
        }
    } else {
        ifSetOnTimer(noHook(""), intArg0);
        return;
    }

    if (int6 != 0) {
        switch (varc_fremsaga_thok2_ending_montage_last_direction) {
            case 0:
            case 2:
                ifSetPosition(scale(int8, int5, int6), ifGetY(intArg0), int7, 0, intArg0);
                break;
            case 1:
            case 3:
                ifSetPosition(ifGetX(intArg0), scale(int8, int5, int6), 0, int7, intArg0);
                break;
        }
    }
    ifSetOnTimer(hook(cs2_6117, "Iiiii", [event_com, intArg1, intArg2, intArg3, intArg4]), intArg0);
}
