/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2240

function cs2_2240(): number {
    let int0: number = varc_easter10_nutworkers + varc_easter10_chocworkers + varc_easter10_fruitworkers + varc_easter10_fcworkers + varc_easter10_teggworkers + varc_easter10_neggworkers;

    if (varc_easter10_neggrepair == 1) {
        int0 = int0 + 1;
    }

    if (varc_easter10_teggrepair == 1) {
        int0 = int0 + 1;
    }

    if (varc_easter10_fcrepair == 1) {
        int0 = int0 + 1;
    }
    return int0;
}
