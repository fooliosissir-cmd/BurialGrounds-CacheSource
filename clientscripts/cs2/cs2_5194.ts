/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5194

function cs2_5194(): number {
    let int0: number = -1;
    let int1: number = -1;

    switch (varbit_hcape_p_city) {
        case 1:
            [int0, int1] = cs2_5172();
            break;
        case 2:
            [int0, int1] = cs2_5173();
            break;
        case 3:
            [int0, int1] = cs2_5174();
            break;
    }
    return int0;
}
