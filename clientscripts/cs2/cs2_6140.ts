/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6140

function cs2_6140(intArg0: number, intArg1: number): void {
    let int2: number = 10;
    let int3: number = intArg0 * 100 - varc_fremsaga_bilrach_mind_current_x;
    let int4: number = intArg1 * 100 - varc_fremsaga_bilrach_mind_current_y;
    let int5: number = 100;

    if (int3 <= int5 && int3 >= 0 - int5 && int4 <= int5 && int4 >= 0 - int5) {
        fremsaga_bilrach_mind_reposition(intArg0, intArg1);
        varc_fremsaga_bilrach_mind_current_x = intArg0 * 100;
        varc_fremsaga_bilrach_mind_current_y = intArg1 * 100;
    } else {
        int3 = scale(int2, 100, int3);
        int4 = scale(int2, 100, int4);
        varc_fremsaga_bilrach_mind_current_x = varc_fremsaga_bilrach_mind_current_x + int3;
        varc_fremsaga_bilrach_mind_current_y = varc_fremsaga_bilrach_mind_current_y + int4;
        fremsaga_bilrach_mind_reposition(varc_fremsaga_bilrach_mind_current_x / 100, varc_fremsaga_bilrach_mind_current_y / 100);
    }
}
