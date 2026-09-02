/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,fremsaga_completed]

function fremsaga_completed(intArg0: number): [number, number] {
    switch (intArg0) {
        case 1:
            if (varbit_fremsaga_signature_abridged == 1) {
                if (varbit_fremsaga_signature_unabridged == 1) {
                    return [1, 1];
                } else {
                    return [1, 0];
                }
            }
            break;
        case 2:
            if (varbit_fremsaga_vengeance_abridged == 1) {
                if (varbit_fremsaga_vengeance_unabridged == 1) {
                    return [1, 1];
                } else {
                    return [1, 0];
                }
            }
            break;
        case 4:
            if (varbit_fremsaga_thok_abridged == 1) {
                if (varbit_fremsaga_thok_unabridged == 1) {
                    return [1, 1];
                } else {
                    return [1, 0];
                }
            }
            break;
        case 3:
            if (varbit_fremsaga_bilrach_abridged == 1) {
                if (varbit_fremsaga_bilrach_unabridged == 1) {
                    return [1, 1];
                } else {
                    return [1, 0];
                }
            }
            break;
        case 6:
            if (varbit_fremsaga_thok2_abridged == 1) {
                if (varbit_fremsaga_thok2_unabridged == 1) {
                    return [1, 1];
                } else {
                    return [1, 0];
                }
            }
            break;
        default:
            return [0, 0];
    }
    return [0, 0];
}
