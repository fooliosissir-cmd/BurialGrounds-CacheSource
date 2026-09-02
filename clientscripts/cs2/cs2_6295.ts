/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6295

function cs2_6295(intArg0: number, intArg1: number, intArg2: component): void {
    let int3: number = max(ifGetWidth(ifGetParentLayer(intArg2)) / 2 - intArg0, (ifGetWidth(ifGetParentLayer(intArg2)) / 2 - intArg0) * -1);
    let int4: number = max(ifGetHeight(ifGetParentLayer(intArg2)) / 2 - intArg1, (ifGetHeight(ifGetParentLayer(intArg2)) / 2 - intArg1) * -1);
    let int5: number = max(ifGetWidth(ifGetParentLayer(intArg2)) / 2 - ifGetX(intArg2), (ifGetWidth(ifGetParentLayer(intArg2)) / 2 - ifGetX(intArg2)) * -1);
    let int6: number = max(ifGetHeight(ifGetParentLayer(intArg2)) / 2 - ifGetY(intArg2), (ifGetHeight(ifGetParentLayer(intArg2)) / 2 - ifGetY(intArg2)) * -1);

    if (int5 >= int3 || int6 >= int4) {
        ifSetPosition(intArg0, intArg1, 0, 0, intArg2);
        return;
    }
    let int7: number = intArg0 - ifGetX(intArg2);
    let int8: number = intArg1 - ifGetY(intArg2);
    let int9: number = invpow(pow(int7, 2) + pow(int8, 2), 2);
    int7 = int7 * 100 / int9 * 25 / 100;
    int8 = int8 * 100 / int9 * 25 / 100;
    ifSetPosition(ifGetX(intArg2) + int7, ifGetY(intArg2) + int8, 0, 0, intArg2);
}
