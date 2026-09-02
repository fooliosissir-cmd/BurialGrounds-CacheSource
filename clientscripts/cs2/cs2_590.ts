/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_590

function cs2_590(intArg0: number, intArg1: number): void {
    if (intArg1 == 1) {
        varp_1112 = intArg0;
        varp_1109 = -1;
        if (stockmarketIsofferempty(intArg0) == 1) {
            varp_1113 = -1;
            varp_1111 = 1;
            varp_1110 = 0;
        }
        cs2_621();
    }
}
