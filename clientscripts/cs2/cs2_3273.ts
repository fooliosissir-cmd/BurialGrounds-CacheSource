/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3273

function cs2_3273(): [number, number, number] {
    let int0: number = 0;
    let int1: number = varc_1191 / 10;
    let int2: number = varc_1191 - varc_1191 / 10 * 10;

    switch (int1) {
        case 1:
            switch (int2) {
                case 1:
                    int0 = 0;
                    break;
            }
            break;
        case 2:
            switch (int2) {
                case 1:
                    int0 = -760;
                    break;
                case 2:
                    int0 = 507;
                    break;
            }
            break;
        case 3:
            switch (int2) {
                case 1:
                    int0 = -1520;
                    break;
                case 2:
                    int0 = 190;
                    break;
                case 3:
                    int0 = 950;
                    break;
            }
            break;
        case 4:
            switch (int2) {
                case 1:
                    int0 = -2280;
                    break;
                case 2:
                    int0 = -760;
                    break;
                case 3:
                    int0 = 633;
                    break;
                case 4:
                    int0 = 1457;
                    break;
            }
            break;
        case 5:
            switch (int2) {
                case 1:
                    int0 = -3040;
                    break;
                case 2:
                    int0 = -1267;
                    break;
                case 3:
                    int0 = 380;
                    break;
                case 4:
                    int0 = 1140;
                    break;
                case 5:
                    int0 = 1900;
                    break;
            }
            break;
    }
    return [int1, int2, int0];
}
