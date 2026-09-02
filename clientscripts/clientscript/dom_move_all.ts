/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,dom_move_all]

function dom_move_all(): void {
    let int0: number = 0;

    if (varc_dom_move_mode == 1) {
        if (varc_dom_start_slowdown == 1 && clientClock() % 50 == 0) {
            varc_dom_spin_speed = varc_dom_spin_speed + 1;
        }
        if (clientClock() % varc_dom_spin_speed == 0) {
            int0 = dom_move_icon(0);
            if (int0 == 0) {
                return;
            }
            int0 = dom_move_icon(1);
            if (int0 == 0) {
                return;
            }
            int0 = dom_move_icon(2);
            if (int0 == 0) {
                return;
            }
        }
    } else if (varc_dom_move_mode == 2 && clientClock() % varc_dom_spin_speed == 0) {
        int0 = dom_move_icon(0);
        if (int0 == 0) {
            return;
        }
        int0 = dom_move_icon(1);
        if (int0 == 0) {
            return;
        }
        int0 = dom_move_icon(2);
        if (int0 == 0) {
            return;
        }
    }
}
