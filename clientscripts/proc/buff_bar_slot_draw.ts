/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,buff_bar_slot_draw]

function buff_bar_slot_draw(intArg0: number): void {
    let int1: number = buff_bar_slot_icon(intArg0);

    if (int1 == 0 || varbit_option_buff_bar == 0) {
        buff_bar_slot_clear(intArg0);
        return;
    }
    let [int2, int3, int4] = buff_bar_slot_components(intArg0);

    ifSetOnTimer(noHook(""), int2);

    if (buff_bar_slot_sprite(intArg0) == 0) {
        ifSetObject(int1, -1, int2);
        ifSetHide(true, int3);
    } else {
        ifSetObject(-1, -1, int2);
        ifSetGraphic(int1, int3);
        ifSetHide(false, int3);
    }
    let int5: number = buff_bar_slot_seconds(intArg0);

    if (int5 <= 0) {
        ifSetText("", int4);
        ifSetHide(true, int4);
        return;
    }
    ifSetText(buff_bar_time_text(int5), int4);
    ifSetHide(false, int4);
    ifSetOnTimer(hook(buff_bar_countdown, "iiI", [intArg0, clientClock() + int5 * 50, int4]), int2);
}
