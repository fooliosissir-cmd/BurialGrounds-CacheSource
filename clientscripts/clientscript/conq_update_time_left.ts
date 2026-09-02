/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,conq_update_time_left]

function conq_update_time_left(): void {
    if (varc_1362 < 1) {
        return;
    }
    let int0: number = varc_1362 * 6 / 10;
    let int1: number = 0;
    let int2: number = 0;
    let str0: string = "";

    if (int0 < 60) {
        int1 = int0;
    } else {
        int1 = int0 % 60;
        int2 = int0 / 60;
    }

    if (int1 < 10) {
        str0 = append("0", tostring(int1));
        if (int2 == 0 && varc_conq_played_low_time_warning == 0) {
            varc_conq_played_low_time_warning = 1;
            if (varbit_conq_is_active_player == 1) {
                soundVorbisVolume(3434, 1, 0, 255);
            }
        }
    } else {
        str0 = tostring(int1);
    }
    ifSetText("Turn Time Left" + "<br>" + tostring(int2) + ":" + str0, Component.interface_1010.component_1010_21);
    ifSetText(tostring(int2) + ":" + str0, Component.conq_scroll_overlay.time_left_text);
}
