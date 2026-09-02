/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4685

function cs2_4685(): void {
    let str0: string = tostring(varbit_loy_wave_total);
    let str1: string = "Waiting for next wave...";

    if (varc_1537 != 0) {
        ifSetHide(false, Component.loy_waves.waiting_layer);
        ifSetSize(ifGetWidth(Component.loy_waves.background), 79, 0, 0, Component.loy_waves.background);
    } else {
        ifSetHide(true, Component.loy_waves.waiting_layer);
        ifSetSize(ifGetWidth(Component.loy_waves.background), 45, 0, 0, Component.loy_waves.background);
    }
    let int0: number = 0;
    let int1: number = cs2_4699(Component.loy_waves.wave_count_layer, Component.loy_waves.gfx_box_brown_1, Component.loy_waves.gfx_box_blue_1, "Wave", str0);

    if (varc_1537 != 0) {
        int0 = cs2_4699(Component.loy_waves.waiting_layer, Component.loy_waves.gfx_box_brown_2, Component.loy_waves.gfx_box_blue_2, "Waiting?", str1);
    }
    int1 = max(int1, int0);

    if (int1 > ifGetWidth(Component.loy_waves.background)) {
        ifSetSize(int1 + 5, ifGetHeight(Component.loy_waves.background), 0, 0, Component.loy_waves.background);
    }
}
