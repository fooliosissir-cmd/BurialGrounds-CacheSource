/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,interface_flash_fade]

function interface_flash_fade(intArg0: component, intArg1: number, intArg2: number, intArg3: number): void {
    let int4: number = 0;

    if (ccFind(intArg0, intArg1) == 1) {
        if (clientClock() >= intArg3) {
            ccDelete();
            return;
        } else if (clientClock() % 40 < 20) {
            int4 = clientClock() - intArg2;
            int4 = int4 * 255;
            int4 = int4 / (intArg3 - intArg2);
            ccSetTrans(int4);
        } else {
            ccSetTrans(255);
        }
    }
}
