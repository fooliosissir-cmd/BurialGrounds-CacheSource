/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4886

function cs2_4886(intArg0: number): number {
    switch (intArg0) {
        case 21:
        case 22:
        case 31:
        case 32:
        case 33:
        case 34:
        case 35:
        case 41:
        case 42:
            return 1;
    }
    let int1: number = 0;

    if (clanProfileFind() == 1) {
        int1 = loadClanVarbit<2580>();
        if (int1 >= 2) {
            switch (intArg0) {
                case 23:
                case 24:
                    return 1;
            }
        }
        if (int1 >= 4) {
            switch (intArg0) {
                case 25:
                case 26:
                case 43:
                case 44:
                    return 1;
            }
        }
        if (int1 >= 6) {
            return 1;
        }
    }
    return 0;
}
