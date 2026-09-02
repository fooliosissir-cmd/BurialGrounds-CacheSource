/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,player_prefix_check]

function player_prefix_check(intArg0: number): number {
    switch (intArg0) {
        case 1:
            if (varp_1447 < 1) {
                return 0;
            }
            break;
        case 2:
            if (varp_1447 < enumOp(type_int, type_int, Enum.mob_rank_requirements, 2)) {
                return 0;
            }
            break;
        case 3:
            if (varp_1447 < enumOp(type_int, type_int, Enum.mob_rank_requirements, 3)) {
                return 0;
            }
            break;
        case 4:
            if (varp_1447 < enumOp(type_int, type_int, Enum.mob_rank_requirements, 4)) {
                return 0;
            }
            break;
        case 5:
            if (testBit(varp_2232, 0) == 0) {
                return 0;
            }
            break;
        case 6:
            if (testBit(varp_2232, 1) == 0) {
                return 0;
            }
            break;
        case 7:
            if (testBit(varp_2232, 2) == 0) {
                return 0;
            }
            break;
        case 8:
            if (testBit(varp_2232, 3) == 0) {
                return 0;
            }
            break;
        case 9:
            if (testBit(varp_2232, 4) == 0) {
                return 0;
            }
            break;
        case 10:
            if (testBit(varp_2232, 5) == 0) {
                return 0;
            }
            break;
        case 11:
            if (testBit(varp_2232, 6) == 0) {
                return 0;
            }
            break;
        case 12:
            if (testBit(varp_2232, 7) == 0) {
                return 0;
            }
            break;
        case 13:
            if (testBit(varp_2232, 8) == 0) {
                return 0;
            }
            break;
        case 14:
            if (testBit(varp_2232, 9) == 0) {
                return 0;
            }
            break;
        case 15:
            if (testBit(varp_2232, 10) == 0) {
                return 0;
            }
            break;
        case 16:
            if (testBit(varp_2232, 11) == 0) {
                return 0;
            }
            break;
        case 17:
            if (testBit(varp_2232, 12) == 0) {
                return 0;
            }
            break;
        case 18:
            if (testBit(varp_2232, 13) == 0) {
                return 0;
            }
            break;
        case 19:
            if (testBit(varp_2232, 14) == 0) {
                return 0;
            }
            break;
        case 20:
            if (testBit(varp_2232, 15) == 0) {
                return 0;
            }
            break;
        case 21:
            if (varbit_9809 == 0) {
                return 0;
            }
            break;
        case 22:
            if (varbit_9809 == 0) {
                return 0;
            }
            break;
        case 23:
            if (varbit_9809 == 0) {
                return 0;
            }
            break;
        case 24:
            if (varbit_9809 == 0) {
                return 0;
            }
            break;
        case 25:
            if (varbit_tzhaar2_main < 170) {
                return 0;
            }
            break;
        case 26:
            if (testBit(varp_2447, 0) == 0) {
                return 0;
            }
            break;
        case 27:
            if (testBit(varp_2447, 1) == 0) {
                return 0;
            }
            break;
        case 28:
            if (testBit(varp_2447, 2) == 0) {
                return 0;
            }
            break;
        case 29:
            if (testBit(varp_2447, 3) == 0) {
                return 0;
            }
            break;
        case 30:
            if (testBit(varp_2447, 4) == 0) {
                return 0;
            }
            break;
        case 31:
            if (testBit(varp_2447, 5) == 0) {
                return 0;
            }
            break;
        case 32:
            if (testBit(varp_2447, 6) == 0) {
                return 0;
            }
            break;
        case 33:
            if (testBit(varp_2447, 7) == 0) {
                return 0;
            }
            break;
        case 34:
            if (testBit(varp_2447, 8) == 0) {
                return 0;
            }
            break;
        case 35:
            if (testBit(varp_2447, 9) == 0) {
                return 0;
            }
            break;
        case 36:
            if (testBit(varp_2447, 10) == 0) {
                return 0;
            }
            break;
        case 37:
            if (testBit(varp_2447, 11) == 0) {
                return 0;
            }
            break;
        case 38:
            if (varbit_evalid_validated == 0) {
                return 0;
            }
            break;
        case 59:
            if (varbit_11602 == 0) {
                return 0;
            }
            break;
        case 60:
            if (varbit_11603 == 0) {
                return 0;
            }
            break;
        case 61:
            if (varbit_11604 == 0) {
                return 0;
            }
            break;
        case 62:
            if (varbit_11605 == 0) {
                return 0;
            }
            break;
        case 63:
            if (varbit_11606 == 0) {
                return 0;
            }
            break;
        case 64:
            if (varbit_11607 == 0) {
                return 0;
            }
            break;
        case 65:
            if (varbit_11608 == 0) {
                return 0;
            }
            break;
        case 66:
            if (varbit_11609 == 0) {
                return 0;
            }
            break;
        case 67:
            if (varbit_11610 == 0) {
                return 0;
            }
            break;
        case 68:
            if (varbit_11611 == 0) {
                return 0;
            }
            break;
        case 69:
            if (varbit_11612 == 0) {
                return 0;
            }
            break;
        case 70:
            if (varbit_11613 == 0) {
                return 0;
            }
            break;
    }
    return 1;
}
