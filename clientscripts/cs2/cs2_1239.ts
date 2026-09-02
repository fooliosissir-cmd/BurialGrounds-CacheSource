/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1239

function cs2_1239(intArg0: number): [coord, colour] {
    let int1: number = varc_176 / 10;

    if (int1 > 5) {
        int1 = 1;
        varc_176 = int1 * 10;
    }
    let int2: coord = -1;
    let int3: colour = colour(0x000000);

    switch (int1) {
        case 0:
        case 1:
            [int2, int3] = cs2_3415(intArg0);
            break;
        case 2:
            [int2, int3] = cs2_3371(intArg0);
            break;
        case 3:
            [int2, int3] = cs2_3372(intArg0);
            break;
        case 4:
            [int2, int3] = cs2_3373(intArg0);
            break;
        case 5:
            [int2, int3] = cs2_3374(intArg0);
            break;
    }
    return [int2, int3];
}
