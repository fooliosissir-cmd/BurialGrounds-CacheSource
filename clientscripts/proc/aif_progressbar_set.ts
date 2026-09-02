/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,aif_progressbar_set]

function proc_aif_progressbar_set(intArg0: number, intArg1: component, intArg2: component): void {
    intArg0 = min(100, intArg0);
    intArg0 = max(0, intArg0);

    if (intArg1 == -1) {
        return;
    }
    let int3: number = intArg0 * 16384 / 100;
    ifSetSize(int3, ifGetHeight(intArg1), 2, 0, intArg1);
    cs2_4212(intArg2, tostring(intArg0) + "%", Graphic.verdana_11pt_regular, colour(0xD5D9D3), colour(0x000000));
}
