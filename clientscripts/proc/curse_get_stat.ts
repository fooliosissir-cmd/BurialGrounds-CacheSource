/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,curse_get_stat]

function curse_get_stat(intArg0: stat): number {
    switch (intArg0) {
        case 0:
            return varbit_curse_attack_adjust - 30;
        case 2:
            return varbit_curse_strength_adjust - 30;
        case 1:
            return varbit_curse_defence_adjust - 30;
        case 4:
            return varbit_curse_ranged_adjust - 30;
        case 6:
            return varbit_curse_magic_adjust - 30;
        default:
            return 0;
    }
}
