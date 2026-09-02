/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,trh_esc_mouseleave]

function trh_esc_mouseleave(intArg0: component): number {
    let int1: number = ifGetY(intArg0);
    let int2: component = ifGetLayer(intArg0);

    while (int2 != -1) {
        int1 = int1 + ifGetY(int2) - ifGetScrollY(int2);
        int2 = ifGetLayer(int2);
    }
    return int1;
}
