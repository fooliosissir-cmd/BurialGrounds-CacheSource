/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,money_pouch_anim_move]

function money_pouch_anim_move(intArg0: number): void {
    let int1: number = clientClock() - intArg0 - 50;

    if (int1 > 0) {
        int1 = 0;
    }
    ifSetPosition(int1, 0, 2, 0, Component.interface_746.component_746_214);
    ifSetPosition(int1, 0, 2, 0, Component.interface_548.component_548_203);

    if (clientClock() < intArg0 + 150) {
        return;
    }
    ifSetHide(true, Component.interface_746.component_746_213);
    ifSetHide(true, Component.interface_548.component_548_202);
    ifSetPosition(-50, 0, 2, 0, Component.interface_746.component_746_214);
    ifSetPosition(-50, 0, 2, 0, Component.interface_548.component_548_203);
    ifSetOnTimer(noHook(""), Component.interface_746.component_746_213);
    ifSetOnTimer(noHook(""), Component.interface_548.component_548_202);
}
