/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,clan_field_yah]

function clan_field_yah(intArg0: component, intArg1: number): void {
    let int2: number = 0;
    let int3: number = 0;
    let int4: number = 0;

    if (ccFind(intArg0, intArg1) == 1) {
        if (varc_evq_region_sw == -1) {
            ccSetHide(true);
            return;
        }
        [int2, int3] = [coordX(coord()) - coordX(varc_evq_region_sw), coordZ(coord()) - coordZ(varc_evq_region_sw)];
        if (int2 < 0 || int2 >= 112 || int3 < 0 || int3 >= 112) {
            ccSetHide(true);
            return;
        }
        int4 = varc_hw10_cutscene + 1;
        ccSetHide(false);
        ccSetPosition((int2 + 2) * varc_hw10_cutscene - 1, ifGetScrollHeight(intArg0) - ((int3 + 2) * varc_hw10_cutscene + int4), 0, 0);
        ccSetSize(int4, int4, 0, 0);
        if (clientClock() % 40 < 20) {
            ccSetColour(colour(0x8F8F8F));
        } else {
            ccSetColour(colour(0xDDDD00));
        }
    }
}
