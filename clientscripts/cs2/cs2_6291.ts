/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6291

function cs2_6291(): void {
    let int0: number = 0;

    if (clientClock() % 4 == 0 && ccFind(Component.interface_1296.component_1296_3, 0) == 1) {
        if (varc_cruc_overlay_fee_pause == 0) {
            int0 = ccGetY();
            int0 = int0 + 1;
            if (int0 > 30) {
                varc_cruc_overlay_fee_pause = 1;
            } else {
                ccSetPosition(0, int0, 0, 0);
            }
        } else {
            varc_cruc_overlay_fee_pause = varc_cruc_overlay_fee_pause + 1;
            if (varc_cruc_overlay_fee_pause == 30) {
                ccDelete();
                ifSetOnTimer(noHook(""), Component.interface_1296.component_1296_3);
            }
        }
    }
}
