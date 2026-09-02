/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2613

function cs2_2613(): void {
    let int0: coord = 0;

    switch (cs2_2617()) {
        case 0:
            int0 = moveCoord(varc_834, 0, 0, 5);
            break;
        case 7:
            int0 = moveCoord(varc_834, -4, 0, 4);
            break;
        case 6:
            int0 = moveCoord(varc_834, -5, 0, 0);
            break;
        case 5:
            int0 = moveCoord(varc_834, -4, 0, -4);
            break;
        case 4:
            int0 = moveCoord(varc_834, 0, 0, -5);
            break;
        case 3:
            int0 = moveCoord(varc_834, 4, 0, -4);
            break;
        case 2:
            int0 = moveCoord(varc_834, 5, 0, 0);
            break;
        case 1:
            int0 = moveCoord(varc_834, 4, 0, 4);
            break;
    }
    let int1: number = coordX(int0) / 64;
    let int2: number = coordZ(int0) / 64;

    if (varc_835 != int1 || varc_836 != int2) {
        return;
    }
    varc_834 = int0;
    cs2_2612(varc_834, varc_833);
}
