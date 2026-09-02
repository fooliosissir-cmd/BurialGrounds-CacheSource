/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_122

function cs2_122(intArg0: component): void {
    let int1: number = clientClock() % 100;

    if (int1 > 50) {
        int1 = 100 - int1;
    }
    int1 = 255 - int1;
    ifSetTrans(int1, intArg0);
}
