/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1566

function cs2_1566(intArg0: number, intArg1: number): number {
    if (intArg0 == 7 && intArg1 == 0) {
        return 1;
    }

    if (intArg0 == 4) {
        switch (intArg1) {
            case 0:
            case 1:
            case 2:
                return 1;
        }
    }
    return 0;
}
