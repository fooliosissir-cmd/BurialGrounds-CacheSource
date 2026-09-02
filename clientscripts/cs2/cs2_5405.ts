/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5405

function cs2_5405(intArg0: number, intArg1: component, intArg2: component): void {
    let int3: number = 0;

    if (clientClock() % 1 == 0) {
        int3 = ifGetWidth(intArg2);
        int3 = int3 - 490;
        if (varc_dom_taunt_x_pos > int3) {
            ifSetOnTimer(noHook(""), Component.interface_1172.component_1172_5);
            return;
        }
        if (intArg0 == 0) {
            ifSetPosition(varc_dom_taunt_x_pos, 100, 0, 0, intArg1);
        } else {
            ifSetPosition(varc_dom_taunt_x_pos, 100, 2, 2, intArg1);
        }
        if (varc_dom_taunt_x_pos < 25) {
            varc_dom_taunt_x_pos = varc_dom_taunt_x_pos + 14;
        } else if (varc_dom_taunt_x_pos < 50) {
            varc_dom_taunt_x_pos = varc_dom_taunt_x_pos + 12;
        } else if (varc_dom_taunt_x_pos < 100) {
            varc_dom_taunt_x_pos = varc_dom_taunt_x_pos + 10;
        } else if (varc_dom_taunt_x_pos < 150) {
            varc_dom_taunt_x_pos = varc_dom_taunt_x_pos + 8;
        } else if (varc_dom_taunt_x_pos < 200) {
            varc_dom_taunt_x_pos = varc_dom_taunt_x_pos + 5;
        } else if (varc_dom_taunt_x_pos < 250) {
            varc_dom_taunt_x_pos = varc_dom_taunt_x_pos + 3;
        } else {
            varc_dom_taunt_x_pos = varc_dom_taunt_x_pos + 1;
        }
    }
}
