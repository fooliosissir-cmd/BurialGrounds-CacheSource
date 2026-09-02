/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2700

function cs2_2700(intArg0: number, intArg1: number, intArg2: boolean, intArg3: boolean): void {
    let int4: number = clientClock() + 750;

    if (intArg1 == 1) {
        ifSetOnTimer(hook(cs2_2703, "iii11", [int4, intArg0, intArg1, intArg2, intArg3]), Component.interface_746.component_746_35);
        ifSetOnTimer(hook(cs2_2703, "iii11", [int4, intArg0, intArg1, intArg2, intArg3]), Component.interface_548.component_548_46);
        cs2_2701(intArg0, intArg2, intArg3);
    } else if (intArg1 == 2) {
        ifSetOnTimer(hook(cs2_2703, "iii11", [int4, intArg0, intArg1, intArg2, intArg3]), Component.interface_906.component_906_0);
        lobbyscreen_countdown();
        ifSetOnOpt(hook(cs2_2704, "1ii11", [true, intArg0, intArg1, intArg2, intArg3]), Component.interface_906.component_906_142);
        ifSetOnOpt(hook(cs2_2704, "1ii11", [false, intArg0, intArg1, intArg2, intArg3]), Component.interface_906.component_906_144);
    } else {
        ifSetOnTimer(hook(cs2_2703, "iii11", [int4, intArg0, intArg1, intArg2, intArg3]), Component.interface_744.component_744_17);
        proc_loginscreen_setactivemenu(10);
        ifSetOnClick(hook(cs2_2704, "1ii11", [true, intArg0, intArg1, intArg2, intArg3]), Component.interface_744.component_744_56);
        ifSetOnClick(hook(cs2_2704, "1ii11", [false, intArg0, intArg1, intArg2, intArg3]), Component.interface_744.component_744_57);
    }
}
