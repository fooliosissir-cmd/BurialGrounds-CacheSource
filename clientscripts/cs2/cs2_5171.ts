/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5171

function cs2_5171(intArg0: number): graphic {
    let int1: Enum = cs2_4827(intArg0);

    if (int1 == -1) {
        return -1;
    }
    let int2: number = 0;

    switch (intArg0) {
        case 21:
            int2 = loadClanVarbit<2330>();
            break;
        case 22:
            int2 = loadClanVarbit<2340>();
            break;
        case 23:
            int2 = loadClanVarbit<2350>();
            break;
        case 24:
            int2 = loadClanVarbit<2360>();
            break;
        case 25:
            int2 = loadClanVarbit<2370>();
            break;
        case 26:
            int2 = loadClanVarbit<2380>();
            break;
        case 27:
            int2 = loadClanVarbit<2390>();
            break;
        case 28:
            int2 = loadClanVarbit<2400>();
            break;
        case 31:
            int2 = loadClanVarbit<2460>();
            break;
        case 32:
            int2 = loadClanVarbit<2470>();
            break;
        case 33:
            int2 = loadClanVarbit<2480>();
            break;
        case 34:
            int2 = loadClanVarbit<2490>();
            break;
        case 35:
            int2 = loadClanVarbit<2500>();
            break;
        case 41:
            int2 = loadClanVarbit<2410>();
            break;
        case 42:
            int2 = loadClanVarbit<2420>();
            break;
        case 43:
            int2 = loadClanVarbit<2430>();
            break;
        case 44:
            int2 = loadClanVarbit<2440>();
            break;
        case 45:
            int2 = loadClanVarbit<2450>();
            break;
        case 51:
            int2 = loadClanVarbit<2510>();
            break;
        case 100:
            int2 = loadClanVarbit<2210>();
            break;
        case 101:
            int2 = loadClanVarbit<2220>();
            break;
        case 102:
            int2 = loadClanVarbit<2240>();
            break;
        case 103:
            int2 = loadClanVarbit<2190>();
            break;
        case 104:
            int2 = loadClanVarbit<2230>();
            break;
        case 105:
            int2 = loadClanVarbit<2200>();
            break;
        case 106:
            int2 = loadClanVarbit<2260>();
            break;
        case 107:
            int2 = loadClanVarbit<2270>();
            break;
        case 108:
            int2 = loadClanVarbit<2280>();
            break;
        case 109:
            int2 = loadClanVarbit<2250>();
            break;
        case 110:
            int2 = loadClanVarbit<2290>();
            break;
        case 111:
            int2 = loadClanVarbit<2300>();
            break;
        case 112:
            int2 = loadClanVarbit<2310>();
            break;
        case 113:
            int2 = loadClanVarbit<2320>();
            break;
    }

    if (int2 <= 0) {
        return -1;
    }

    if (int1 == -1) {
        return -1;
    }
    let int3: graphic = enumOp(type_int, type_graphic, int1, int2);
    return int3;
}
