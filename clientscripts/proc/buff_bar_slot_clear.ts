/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,buff_bar_slot_clear]

function buff_bar_slot_clear(intArg0: number): void {
    let [int1, int2, int3] = buff_bar_slot_components(intArg0);

    ifSetOnTimer(noHook(""), int1);
    ifSetObject(-1, -1, int1);
    ifSetHide(true, int2);
    ifSetText("", int3);
    ifSetHide(true, int3);
}
