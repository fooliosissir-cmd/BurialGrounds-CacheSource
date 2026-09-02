/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6500

function cs2_6500(intArg0: number): number {
    if (varbit_mtxmgt_deny == 1) {
        if (intArg0 == 1) {
            mes("You cannot display cosmetic gear at the moment.");
        }
        return 0;
    }
    return 1;
}
