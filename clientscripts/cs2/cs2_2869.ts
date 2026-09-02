/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2869

function cs2_2869(intArg0: coord): number {
    if (machinima_inarea(intArg0, coord(2190, 3280, 0), coord(2285, 3375, 0)) == 1) {
        return 1;
    }

    if (machinima_inarea(intArg0, coord(3205, 2764, 0), coord(3259, 2807, 0)) == 1) {
        return 1;
    }
    return 0;
}
