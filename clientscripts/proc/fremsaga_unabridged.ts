/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,fremsaga_unabridged]

function fremsaga_unabridged(intArg0: number): number {
    switch (intArg0) {
        case 1:
            if (statBase(0) >= 30 && statBase(6) >= 30 && statBase(4) >= 30) {
                return 1;
            } else {
                return 0;
            }
            break;
        case 4:
            if (statBase(2) >= 70) {
                return 1;
            } else {
                return 0;
            }
            break;
        case 2:
            if (statBase(16) >= 55 && statBase(17) >= 55) {
                return 1;
            } else {
                return 0;
            }
            break;
        case 3:
            if (statBase(17) >= 45 && statBase(0) >= 60 && statBase(24) >= 55) {
                return 1;
            } else {
                return 0;
            }
            break;
        case 6:
            if (statBase(2) >= 75) {
                return 1;
            } else {
                return 0;
            }
            break;
        default:
            return 0;
    }
}
