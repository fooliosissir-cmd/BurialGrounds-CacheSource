/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,rden2_event_position]

function rden2_event_position(intArg0: number): void {
    let int1: number = 0;
    let int2: component = -1;
    let int3: component = -1;
    let int4: number = 1;

    switch (intArg0) {
        case 0:
            int1 = varc_rden2_event_0_pulse;
            int2 = Component.rden2_overlay.event_layer_0;
            int3 = Component.rden2_overlay.event_bg_0;
            break;
        case 1:
            int1 = varc_rden2_event_1_pulse;
            int2 = Component.rden2_overlay.event_layer_1;
            int3 = Component.rden2_overlay.event_bg_1;
            int4 = -1;
            break;
        case 2:
            int1 = varc_rden2_event_2_pulse;
            int2 = Component.rden2_overlay.event_layer_2;
            int3 = Component.rden2_overlay.event_bg_2;
            break;
        case 3:
            int1 = varc_rden2_event_3_pulse;
            int2 = Component.rden2_overlay.event_layer_3;
            int3 = Component.rden2_overlay.event_bg_3;
            int4 = -1;
            break;
        case 4:
            int1 = varc_rden2_event_4_pulse;
            int2 = Component.rden2_overlay.event_layer_4;
            int3 = Component.rden2_overlay.event_bg_4;
            break;
        case 5:
            int1 = varc_rden2_event_5_pulse;
            int2 = Component.rden2_overlay.event_layer_5;
            int3 = Component.rden2_overlay.event_bg_5;
            int4 = -1;
            break;
        case 6:
            int1 = varc_rden2_event_6_pulse;
            int2 = Component.rden2_overlay.event_layer_6;
            int3 = Component.rden2_overlay.event_bg_6;
            break;
        case 7:
            int1 = varc_rden2_event_7_pulse;
            int2 = Component.rden2_overlay.event_layer_7;
            int3 = Component.rden2_overlay.event_bg_7;
            int4 = -1;
            break;
        case 8:
            int1 = varc_rden2_event_8_pulse;
            int2 = Component.rden2_overlay.event_layer_8;
            int3 = Component.rden2_overlay.event_bg_8;
            break;
        case 9:
            int1 = varc_rden2_event_9_pulse;
            int2 = Component.rden2_overlay.event_layer_9;
            int3 = Component.rden2_overlay.event_bg_9;
            int4 = -1;
            break;
    }
    let int5: number = scale(int1, 200, 100);
    let int6: number = -30 - scale(int5, 100, 205);
    let int7: number = scale(int5, 100, 255);
    ifSetPosition(int4 * 150, int6, 1, 1, int2);
    ifSetTrans(int7, int3);
    let int8: number = 0;

    switch (intArg0) {
        case 0:
            varc_rden2_event_0_pulse = varc_rden2_event_0_pulse + 1;
            if (varc_rden2_event_0_pulse > 200) {
                ifSetHide(true, int2);
                ifSetOnTimer(noHook(""), int2);
            }
            break;
        case 1:
            varc_rden2_event_1_pulse = varc_rden2_event_1_pulse + 1;
            if (varc_rden2_event_1_pulse > 200) {
                int8 = 1;
            }
            break;
        case 2:
            varc_rden2_event_2_pulse = varc_rden2_event_2_pulse + 1;
            if (varc_rden2_event_2_pulse > 200) {
                int8 = 1;
            }
            break;
        case 3:
            varc_rden2_event_3_pulse = varc_rden2_event_3_pulse + 1;
            if (varc_rden2_event_3_pulse > 200) {
                int8 = 1;
            }
            break;
        case 4:
            varc_rden2_event_4_pulse = varc_rden2_event_4_pulse + 1;
            if (varc_rden2_event_4_pulse > 200) {
                int8 = 1;
            }
            break;
        case 5:
            varc_rden2_event_5_pulse = varc_rden2_event_5_pulse + 1;
            if (varc_rden2_event_5_pulse > 200) {
                int8 = 1;
            }
            break;
        case 6:
            varc_rden2_event_6_pulse = varc_rden2_event_6_pulse + 1;
            if (varc_rden2_event_6_pulse > 200) {
                int8 = 1;
            }
            break;
        case 7:
            varc_rden2_event_7_pulse = varc_rden2_event_7_pulse + 1;
            if (varc_rden2_event_7_pulse > 200) {
                int8 = 1;
            }
            break;
        case 8:
            varc_rden2_event_8_pulse = varc_rden2_event_8_pulse + 1;
            if (varc_rden2_event_8_pulse > 200) {
                int8 = 1;
            }
            break;
        case 9:
            varc_rden2_event_9_pulse = varc_rden2_event_9_pulse + 1;
            if (varc_rden2_event_9_pulse > 200) {
                int8 = 1;
            }
            break;
    }

    if (int8 == 1) {
        ifSetHide(true, int2);
        ifSetOnTimer(noHook(""), int2);
    }
}
