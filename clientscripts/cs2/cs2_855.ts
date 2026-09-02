/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_855

function cs2_855(intArg0: number): number {
    if (intArg0 == 10) {
        return 0;
    }

    if (intArg0 == 0) {
        return varbit_catcon_2x1_side;
    }

    if (intArg0 == 1) {
        return varbit_catcon_3x1_side;
    }

    if (intArg0 == 2) {
        return varbit_catcon_4x1_side;
    }

    if (intArg0 == 3) {
        return varbit_catcon_5x1_side;
    }

    if (intArg0 == 4) {
        return varbit_catcon_t_side;
    }

    if (intArg0 == 5) {
        return varbit_catcon_t_left_side;
    }

    if (intArg0 == 6) {
        return varbit_catcon_t_right_side;
    }

    if (intArg0 == 7) {
        return varbit_catcon_r_3x2_side;
    }

    if (intArg0 == 8) {
        return varbit_catcon_r_4x2_side;
    }

    if (intArg0 == 9) {
        return varbit_catcon_z_side;
    }
    return 0;
}
