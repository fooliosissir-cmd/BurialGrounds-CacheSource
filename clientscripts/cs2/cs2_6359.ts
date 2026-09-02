/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6359

function cs2_6359(): void {
    if (varc_if_highlight_blocker_server_set != -1) {
        cs2_6360(varc_if_highlight_blocker_server_set);
        varc_if_highlight_blocker_server_set = -1;
    }

    if (varc_if_highlight_blocker_server_clear != -1) {
        cs2_6364(varc_if_highlight_blocker_server_clear);
        varc_if_highlight_blocker_server_clear = -1;
    }
}
