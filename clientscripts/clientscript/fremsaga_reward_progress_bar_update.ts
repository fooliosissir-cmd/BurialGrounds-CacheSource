/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,fremsaga_reward_progress_bar_update]

function fremsaga_reward_progress_bar_update(): void {
    let int0: number = varbit_fremsaga_completion * 10;
    let int1: number = 0;

    if (varc_fremsaga_varc_completed < int0) {
        varc_fremsaga_varc_completed = varc_fremsaga_varc_completed + 1;
        soundVorbisVolume(5251, 1, 0, 255);
    }
    proc_aif_progressbar_set(varc_fremsaga_varc_completed, Component.interface_102.component_102_100, Component.interface_102.component_102_105);

    switch (varbit_fremsaga_current_saga) {
        case 1:
            int1 = varbit_fremsaga_collected_1 * 10;
            break;
        case 2:
            int1 = varbit_fremsaga_collected_2 * 10;
            break;
        case 3:
            int1 = varbit_fremsaga_collected_3 * 10;
            break;
        case 4:
            int1 = varbit_fremsaga_collected_4 * 10;
            break;
        case 5:
            int1 = varbit_fremsaga_collected_5 * 10;
            break;
        case 6:
            int1 = varbit_fremsaga_collected_6 * 10;
            break;
    }

    if (varc_fremsaga_varc_completed >= int0 && varc_fremsaga_varc_best >= int1) {
        fremsaga_reward_book_setup(varbit_fremsaga_current_saga);
    }

    if (varc_fremsaga_varc_best < int1) {
        varc_fremsaga_varc_best = varc_fremsaga_varc_best + 1;
    }
    proc_aif_progressbar_set(varc_fremsaga_varc_best, Component.interface_102.component_102_110, Component.interface_102.component_102_115);
}
