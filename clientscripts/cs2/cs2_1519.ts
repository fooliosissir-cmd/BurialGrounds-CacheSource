/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1519

function cs2_1519(): number {
    let int0: number = varbit_atar_manta + varbit_atar_titan + varbit_atar_pick_yanille + varbit_atar_pouch;

    if (varbit_atar_rune_xbow == 63) {
        int0 = int0 + 1;
    }
    return int0;
}
