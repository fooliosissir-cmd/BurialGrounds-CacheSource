/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6115

function cs2_6115(intArg0: number): void {
    let int1: number = 1;
    let int2: number = 255;

    if (intArg0 == 1) {
        int1 = 0;
        int2 = 0;
    }

    switch (varc_fremsaga_thok2_ending_montage_last_direction) {
        case 0:
        case 2:
            cs2_6116(Component.fremsaga_thok2_ending_montage.top_horz_1, 0, 40);
            cs2_6116(Component.fremsaga_thok2_ending_montage.top_horz_2, 10, 40);
            cs2_6116(Component.fremsaga_thok2_ending_montage.top_horz_3, 20, 40);
            cs2_6116(Component.fremsaga_thok2_ending_montage.top_horz_4, 30, 40);
            cs2_6116(Component.fremsaga_thok2_ending_montage.top_horz_5, 40, 40);
            break;
        case 1:
        case 3:
            cs2_6116(Component.fremsaga_thok2_ending_montage.top_vert_1, 0, 40);
            cs2_6116(Component.fremsaga_thok2_ending_montage.top_vert_2, 10, 40);
            cs2_6116(Component.fremsaga_thok2_ending_montage.top_vert_3, 20, 40);
            cs2_6116(Component.fremsaga_thok2_ending_montage.top_vert_4, 30, 40);
            cs2_6116(Component.fremsaga_thok2_ending_montage.top_vert_5, 40, 40);
            break;
    }
}
