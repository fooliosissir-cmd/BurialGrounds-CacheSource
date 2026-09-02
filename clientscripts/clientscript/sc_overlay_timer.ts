/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,sc_overlay_timer]

function sc_overlay_timer(): void {
    let int0: number = varp_sc_score_clay_gathered + varp_sc_score_clay_processed + varp_sc_score_damage_inflicted + 2 * (varp_sc_score_clay_deposited - varp_sc_score_clay_taken);

    ifSetText("Score: " + tostring(int0), Component.interface_809.component_809_17);

    if (varc_sc_end_time_clientclock == 0) {
        return;
    }
    let int1: number = varc_sc_end_time_clientclock - clientClock();
    let int2: number = int1 / 3000;
    let int3: number = int1 / 50 % 60;

    if (int2 < 0 || int3 < 0) {
        ifSetText("Game ending", Component.interface_809.component_809_15);
        ifSetTextShadow(true, Component.interface_809.component_809_15);
        cs2_1942();
    } else if (int2 == 0 && int3 == 0) {
        ifSetText("Game ending", Component.interface_809.component_809_15);
    } else if (int3 < 10) {
        ifSetText(tostring(int2) + ":0" + tostring(int3), Component.interface_809.component_809_15);
    } else {
        ifSetText(tostring(int2) + ":" + tostring(int3), Component.interface_809.component_809_15);
    }

    if (int2 < 1) {
        ifSetColour(colour(0xFF0000), Component.interface_809.component_809_15);
        ifSetTextShadow(true, Component.interface_809.component_809_15);
        cs2_1942();
    } else if (ifGetHide(Component.interface_809.component_809_18) == 0) {
        ifSetHide(true, Component.interface_809.component_809_18);
    }
}
