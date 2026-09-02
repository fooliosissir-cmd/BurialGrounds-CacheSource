/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,fremsaga_bilrach_mind_cursor_pulse]

function fremsaga_bilrach_mind_cursor_pulse(intArg0: number): void {
    let int1: number = varc_fremsaga_bilrach_mind_cursor_animation_counter;

    varc_fremsaga_bilrach_mind_cursor_animation_counter = varc_fremsaga_bilrach_mind_cursor_animation_counter + intArg0;

    if (varc_fremsaga_bilrach_mind_cursor_animation_counter > 300) {
        varc_fremsaga_bilrach_mind_cursor_animation_counter = varc_fremsaga_bilrach_mind_cursor_animation_counter - 300;
    }
    let int2: number = varc_fremsaga_bilrach_mind_cursor_animation_counter;
    let int3: number = 300 / 2;

    if (int1 <= int3 && varc_fremsaga_bilrach_mind_cursor_animation_counter >= int3) {
        switch (intArg0) {
            case 4:
                soundVorbisVolume(14584, 1, 0, 50);
                break;
            case 8:
                soundVorbisVolume(14662, 1, 0, 60);
                break;
            case 12:
                soundVorbisVolume(14608, 1, 0, 70);
                break;
        }
    }

    if (int2 > int3) {
        int2 = 300 - int2;
    }
    int2 = scale(int2, int3, 200);
    ifSetTrans(int2, Component.interface_1270.component_1270_36);
}
