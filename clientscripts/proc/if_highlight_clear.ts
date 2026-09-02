/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,if_highlight_clear]

function if_highlight_clear(intArg0: component, intArg1: component): void {
    ifSetOnTimer(noHook(""), intArg1);
    ifSetSize(0, 0, 0, 0, cs2_6358(intArg1));
    ifSetHide(true, cs2_6358(intArg1));

    switch (intArg0) {
        case Component._100guide_eggs_overlay._100_q5:
            varc_if_highlight_static_0 = -1;
            varc_if_highlight_ccid_0 = -1;
            break;
        case Component._100guide_eggs_overlay._100_q_anim5:
            varc_if_highlight_static_1 = -1;
            varc_if_highlight_ccid_1 = -1;
            break;
        case Component._100guide_eggs_overlay._100_egg_anim5:
            varc_if_highlight_static_2 = -1;
            varc_if_highlight_ccid_2 = -1;
            break;
        case Component._100guide_eggs_overlay._100_q_anim4:
            varc_if_highlight_static_3 = -1;
            varc_if_highlight_ccid_3 = -1;
            break;
        case Component._100guide_eggs_overlay._100_egg_anim4:
            varc_if_highlight_static_4 = -1;
            varc_if_highlight_ccid_4 = -1;
            break;
        case Component._100guide_eggs_overlay._100_q_anim3:
            varc_if_highlight_static_5 = -1;
            varc_if_highlight_ccid_5 = -1;
            break;
        case Component._100guide_eggs_overlay._100_egg_anim3:
            varc_if_highlight_static_6 = -1;
            varc_if_highlight_ccid_6 = -1;
            break;
        case Component._100guide_eggs_overlay._100_q_anim2:
            varc_if_highlight_static_7 = -1;
            varc_if_highlight_ccid_7 = -1;
            break;
    }
}
