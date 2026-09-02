/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4876

function cs2_4876(intArg0: number): void {
    let int1: number = 0 + 1;

    while (int1 <= 10) {
        ifSetHide(true, cs2_4872(int1));
        int1 = int1 + 1;
    }
    ifSetHide(false, cs2_4872(intArg0));
}
