/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_394

function cs2_394(intArg0: component): void {
    if (varc_conq_vk3_commorb_bar_delay == 0) {
        ifSetTrans(max(ifGetTrans(intArg0) - 10, 0), intArg0);
        if (ifGetTrans(intArg0) == 0) {
            varc_conq_vk3_commorb_bar_delay = 1;
        }
    } else {
        ifSetTrans(min(ifGetTrans(intArg0) + 10, 255), intArg0);
        if (ifGetTrans(intArg0) == 255) {
            varc_conq_vk3_commorb_bar_delay = 0;
        }
    }
}
