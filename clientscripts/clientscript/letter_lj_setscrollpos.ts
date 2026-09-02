/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,letter_lj_setscrollpos]

function letter_lj_setscrollpos(intArg0: number): void {
    if (intArg0 <= 9) {
        ifSetScrollSize(358, 225, Component.letter_lj.lj_layer1);
        ifSetHide(true, Component.letter_lj.lj_scroll_bar);
    } else {
        ifSetHide(false, Component.letter_lj.lj_scroll_bar);
        ifSetScrollSize(358, intArg0 * 20 + 30, Component.letter_lj.lj_layer1);
        scrollbar_resize(Component.letter_lj.lj_scroll_bar, Component.letter_lj.lj_layer1, 0);
    }
}
