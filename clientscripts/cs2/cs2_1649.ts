/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1649

function cs2_1649(intArg0: number, intArg1: boolean): void {
    if (intArg1 == true) {
        if (intArg0 < 0) {
            intArg0 = 0;
        } else {
            intArg0 = intArg0 - intArg0 % 14 + 1;
        }
    }
    chatbox_resize(intArg0, intArg1);
}
