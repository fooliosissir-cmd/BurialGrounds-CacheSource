/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,cc_gety_absolute]

function cc_gety_absolute(): number {
    let int0: number = ccGetY();
    let int1: component = ccGetLayer();

    while (int1 != -1) {
        int0 = int0 + ifGetY(int1) - ifGetScrollY(int1);
        int1 = ifGetLayer(int1);
    }
    return int0;
}
