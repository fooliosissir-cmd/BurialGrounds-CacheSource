/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5214

function cs2_5214(intArg0: number): number {
    if (clanProfileFind() == 1) {
        switch (intArg0) {
            case 1:
                return 1;
            case 2:
                return 2;
            case 3:
                return 3;
            case 4:
                return 3;
            case 5:
                return 3;
            case 6:
                return 4;
            case 7:
                return 4;
            case 8:
                return 5;
            case 10:
                return 5;
            case 9:
                return 6;
        }
    }
    return 0;
}
