/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,rden2_event_received]

function rden2_event_received(intArg0: number): void {
    let int1: number = 1;
    let str0: string = "0";
    let int2: component = -1;
    let int3: component = -1;
    let int4: component = -1;
    let int5: number = 1;

    switch (intArg0) {
        case 0:
            int1 = varc_rden2_event_0_pulse;
            str0 = varcstr_rden2_event_0s;
            int2 = Component.rden2_overlay.event_layer_0;
            int3 = Component.rden2_overlay.event_text_0;
            int4 = Component.rden2_overlay.event_bg_0;
            break;
        case 1:
            int1 = varc_rden2_event_1_pulse;
            str0 = varcstr_rden2_event_1s;
            int2 = Component.rden2_overlay.event_layer_1;
            int3 = Component.rden2_overlay.event_text_1;
            int4 = Component.rden2_overlay.event_bg_1;
            int5 = -1;
            break;
        case 2:
            int1 = varc_rden2_event_2_pulse;
            str0 = varcstr_rden2_event_2s;
            int2 = Component.rden2_overlay.event_layer_2;
            int3 = Component.rden2_overlay.event_text_2;
            int4 = Component.rden2_overlay.event_bg_2;
            break;
        case 3:
            int1 = varc_rden2_event_3_pulse;
            str0 = varcstr_rden2_event_3s;
            int2 = Component.rden2_overlay.event_layer_3;
            int3 = Component.rden2_overlay.event_text_3;
            int4 = Component.rden2_overlay.event_bg_3;
            int5 = -1;
            break;
        case 4:
            int1 = varc_rden2_event_4_pulse;
            str0 = varcstr_rden2_event_4s;
            int2 = Component.rden2_overlay.event_layer_4;
            int3 = Component.rden2_overlay.event_text_4;
            int4 = Component.rden2_overlay.event_bg_4;
            break;
        case 5:
            int1 = varc_rden2_event_5_pulse;
            str0 = varcstr_rden2_event_5s;
            int2 = Component.rden2_overlay.event_layer_5;
            int3 = Component.rden2_overlay.event_text_5;
            int4 = Component.rden2_overlay.event_bg_5;
            int5 = -1;
            break;
        case 6:
            int1 = varc_rden2_event_6_pulse;
            str0 = varcstr_rden2_event_6s;
            int2 = Component.rden2_overlay.event_layer_6;
            int3 = Component.rden2_overlay.event_text_6;
            int4 = Component.rden2_overlay.event_bg_6;
            break;
        case 7:
            int1 = varc_rden2_event_7_pulse;
            str0 = varcstr_rden2_event_7s;
            int2 = Component.rden2_overlay.event_layer_7;
            int3 = Component.rden2_overlay.event_text_7;
            int4 = Component.rden2_overlay.event_bg_7;
            int5 = -1;
            break;
        case 8:
            int1 = varc_rden2_event_8_pulse;
            str0 = varcstr_rden2_event_8s;
            int2 = Component.rden2_overlay.event_layer_8;
            int3 = Component.rden2_overlay.event_text_8;
            int4 = Component.rden2_overlay.event_bg_8;
            break;
        case 9:
            int1 = varc_rden2_event_9_pulse;
            str0 = varcstr_rden2_event_9s;
            int2 = Component.rden2_overlay.event_layer_9;
            int3 = Component.rden2_overlay.event_text_9;
            int4 = Component.rden2_overlay.event_bg_9;
            int5 = -1;
            break;
    }

    if (int1 != 0 || compare(str0, "0") == 0) {
        return;
    }

    if (compare(str0, "") == 0) {
        ifSetHide(true, int2);
    } else {
        ifSetHide(false, int2);
        ifSetText(str0, int3);
        ifSetTrans(0, int4);
        ifSetPosition(int5 * 150, -30, 1, 1, int2);
        ifSetOnTimer(hook(rden2_event_position, "i", [intArg0]), int2);
    }
}
