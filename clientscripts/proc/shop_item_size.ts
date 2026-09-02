/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,shop_item_size]

function shop_item_size(intArg0: number): [number, number] {
    let int1: number = 0;
    let int2: number = 52 + 2 + 2;

    if (intArg0 == 0) {
        int1 = 48 + 2 + 2;
    } else {
        int1 = 151 + 2 + 2;
    }
    return [int1, int2];
}
