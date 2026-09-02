/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6150

function cs2_6150(intArg0: number, intArg1: number, intArg2: coord): [coord, coord, coord, coord] {
    while (intArg0 < 0) {
        intArg0 = intArg0 + 8;
    }

    while (intArg0 > 7) {
        intArg0 = intArg0 - 8;
    }
    let int3: coord = -1;
    let int4: coord = -1;
    let int5: coord = -1;
    let int6: coord = -1;

    switch (intArg0) {
        case 0:
            int3 = moveCoord(intArg2, 0, 0, 3);
            int5 = moveCoord(intArg2, 0, 0, -3);
            if (intArg1 > 0) {
                int4 = moveCoord(int3, 1, 0, 0);
                int6 = moveCoord(int5, -1, 0, 0);
            } else {
                int4 = moveCoord(int3, -1, 0, 0);
                int6 = moveCoord(int5, 1, 0, 0);
            }
            break;
        case 1:
            int3 = moveCoord(intArg2, 2, 0, 2);
            int5 = moveCoord(intArg2, -2, 0, -2);
            if (intArg1 > 0) {
                int4 = moveCoord(int3, 1, 0, -1);
                int6 = moveCoord(int5, -1, 0, 1);
            } else {
                int4 = moveCoord(int3, -1, 0, 1);
                int6 = moveCoord(int5, 1, 0, -1);
            }
            break;
        case 2:
            int3 = moveCoord(intArg2, 3, 0, 0);
            int5 = moveCoord(intArg2, -3, 0, 0);
            if (intArg1 > 0) {
                int4 = moveCoord(int3, 0, 0, -1);
                int6 = moveCoord(int5, 0, 0, 1);
            } else {
                int4 = moveCoord(int3, 0, 0, 1);
                int6 = moveCoord(int5, 0, 0, -1);
            }
            break;
        case 3:
            int3 = moveCoord(intArg2, 2, 0, -2);
            int5 = moveCoord(intArg2, -2, 0, 2);
            if (intArg1 > 0) {
                int4 = moveCoord(int3, -1, 0, -1);
                int6 = moveCoord(int5, 1, 0, 1);
            } else {
                int4 = moveCoord(int3, 1, 0, 1);
                int6 = moveCoord(int5, -1, 0, -1);
            }
            break;
        case 4:
            int3 = moveCoord(intArg2, 0, 0, -3);
            int5 = moveCoord(intArg2, 0, 0, 3);
            if (intArg1 > 0) {
                int4 = moveCoord(int3, -1, 0, 0);
                int6 = moveCoord(int5, 1, 0, 0);
            } else {
                int4 = moveCoord(int3, 1, 0, 0);
                int6 = moveCoord(int5, -1, 0, 0);
            }
            break;
        case 5:
            int3 = moveCoord(intArg2, -2, 0, -2);
            int5 = moveCoord(intArg2, 2, 0, 2);
            if (intArg1 > 0) {
                int4 = moveCoord(int3, -1, 0, 1);
                int6 = moveCoord(int5, 1, 0, -1);
            } else {
                int4 = moveCoord(int3, 1, 0, -1);
                int6 = moveCoord(int5, -1, 0, 1);
            }
            break;
        case 6:
            int3 = moveCoord(intArg2, -3, 0, 0);
            int5 = moveCoord(intArg2, 3, 0, 0);
            if (intArg1 > 0) {
                int4 = moveCoord(int3, 0, 0, 1);
                int6 = moveCoord(int5, 0, 0, -1);
            } else {
                int4 = moveCoord(int3, 0, 0, -1);
                int6 = moveCoord(int5, 0, 0, 1);
            }
            break;
        case 7:
            int3 = moveCoord(intArg2, -2, 0, 2);
            int5 = moveCoord(intArg2, 2, 0, -2);
            if (intArg1 > 0) {
                int4 = moveCoord(int3, 1, 0, 1);
                int6 = moveCoord(int5, -1, 0, -1);
            } else {
                int4 = moveCoord(int3, -1, 0, -1);
                int6 = moveCoord(int5, 1, 0, 1);
            }
            break;
    }
    return [int3, int4, int5, int6];
}
