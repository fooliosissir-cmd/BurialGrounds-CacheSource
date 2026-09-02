/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5368

function cs2_5368(intArg0: number): void {
    varc_agidad_ifcv_fade_elapsed = varc_agidad_ifcv_fade_elapsed + 1;
    let int1: number = varc_agidad_ifcv_fade_elapsed * 255 / varc_agidad_ifcv_timer_segment_fade_duration;
    int1 = min(255, max(0, int1));

    if (ccFind(Component.agidad_overlay.foreground, intArg0) == 1) {
        ccSetTrans(int1);
    }
}
