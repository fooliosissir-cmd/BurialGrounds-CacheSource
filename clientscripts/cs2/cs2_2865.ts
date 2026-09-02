/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2865

function cs2_2865(intArg0: coord, intArg1: number): coord {
    let int2: coord = intArg0;

    switch (intArg1) {
        case 0:
            int2 = moveCoord(intArg0, 0, 0, 4);
            break;
        case 1:
            int2 = moveCoord(intArg0, 1, 0, 4);
            break;
        case 2:
            int2 = moveCoord(intArg0, 2, 0, 3);
            break;
        case 3:
            int2 = moveCoord(intArg0, 3, 0, 2);
            break;
        case 4:
            int2 = moveCoord(intArg0, 4, 0, 1);
            break;
        case 5:
            int2 = moveCoord(intArg0, 4, 0, 0);
            break;
        case 6:
            int2 = moveCoord(intArg0, 4, 0, -1);
            break;
        case 7:
            int2 = moveCoord(intArg0, 3, 0, -2);
            break;
        case 8:
            int2 = moveCoord(intArg0, 2, 0, -3);
            break;
        case 9:
            int2 = moveCoord(intArg0, 1, 0, -4);
            break;
        case 10:
            int2 = moveCoord(intArg0, 0, 0, -4);
            break;
        case 11:
            int2 = moveCoord(intArg0, -1, 0, -4);
            break;
        case 12:
            int2 = moveCoord(intArg0, -2, 0, -3);
            break;
        case 13:
            int2 = moveCoord(intArg0, -3, 0, -2);
            break;
        case 14:
            int2 = moveCoord(intArg0, -4, 0, -1);
            break;
        case 15:
            int2 = moveCoord(intArg0, -4, 0, 0);
            break;
        case 16:
            int2 = moveCoord(intArg0, -4, 0, 1);
            break;
        case 17:
            int2 = moveCoord(intArg0, -3, 0, 2);
            break;
        case 18:
            int2 = moveCoord(intArg0, -2, 0, 3);
            break;
        case 19:
            int2 = moveCoord(intArg0, -1, 0, 4);
            break;
    }
    return int2;
}
