/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4948

function cs2_4948(intArg0: number): number {
    let int1: number = cs2_4951(intArg0);

    if (clanProfileFind() == 1) {
        if (int1 == 1) {
            return 1;
        } else if (int1 == 2) {
            return 2;
        } else if (int1 == 3) {
            return 3;
        } else if (int1 == 4) {
            if (loadClanVarbit<2553>() == intArg0) {
                return 4;
            } else if (loadClanVarbit<2554>() == intArg0) {
                return 5;
            } else if (loadClanVarbit<2555>() == intArg0) {
                return 6;
            } else if (loadClanVarbit<2556>() == intArg0) {
                return 7;
            } else if (loadClanVarbit<2557>() == intArg0) {
                return 8;
            } else if (loadClanVarbit<2558>() == intArg0) {
                return 9;
            } else if (loadClanVarbit<2560>() == intArg0) {
                return 10;
            } else if (loadClanVarbit<2561>() == intArg0) {
                return 11;
            } else if (loadClanVarbit<2562>() == intArg0) {
                return 12;
            } else if (loadClanVarbit<2563>() == intArg0) {
                return 13;
            } else if (loadClanVarbit<2564>() == intArg0) {
                return 14;
            } else if (loadClanVarbit<2565>() == intArg0) {
                return 15;
            }
        } else if (int1 == 5 || int1 == 6) {
            switch (intArg0) {
                case 16:
                    return 16;
                case 17:
                    return 17;
                case 18:
                    return 18;
                case 19:
                    return 19;
                case 20:
                    return 20;
                case 21:
                    return 21;
                case 22:
                    return 22;
                case 23:
                    return 23;
                case 24:
                    return 24;
                case 25:
                    return 25;
                case 26:
                    return 26;
                case 27:
                    return 27;
                case 28:
                    return 28;
                case 29:
                    return 29;
                case 30:
                    return 30;
                case 31:
                    return 31;
                case 32:
                    return 32;
                case 33:
                    return 33;
                case 34:
                    return 34;
                case 35:
                    return 35;
                case 36:
                    return 36;
                case 37:
                    return 40;
                case 38:
                    return 38;
                case 39:
                    return 39;
                case 40:
                    return 40;
                case 41:
                    return 41;
                case 42:
                    return 42;
                case 43:
                    return 43;
                case 44:
                    return 44;
                case 45:
                    return 45;
                case 46:
                    return 46;
                case 47:
                    return 47;
                case 48:
                    return 48;
            }
        }
    }
    return -1;
}
