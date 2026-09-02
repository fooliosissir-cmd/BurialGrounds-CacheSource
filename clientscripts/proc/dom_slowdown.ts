/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,dom_slowdown]

function dom_slowdown(): void {
    let int0: number = 0;

    if (varc_dom_client_handicap == 1) {
        int0 = 16;
    } else if (varc_dom_client_handicap == 2) {
        int0 = 17;
    } else if (varc_dom_client_handicap == 3) {
        int0 = 18;
    } else if (varc_dom_client_handicap == 4) {
        int0 = 19;
    } else if (varc_dom_client_handicap == 5) {
        int0 = 20;
    } else if (varc_dom_client_handicap == 6) {
        int0 = 21;
    } else if (varc_dom_client_handicap == 7) {
        int0 = 22;
    } else {
        int0 = varc_dom_client_handicap - 7;
    }

    if (varc_dom_current_icon == int0) {
        varc_dom_start_slowdown = 1;
    }
}
