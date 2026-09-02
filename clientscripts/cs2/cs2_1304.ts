/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1304

function cs2_1304(intArg0: number): void {
    let int1: number = cs2_1305();

    if (cs2_2709() == 0 && (intArg0 == 9 || intArg0 == 11 || intArg0 == 10)) {
        return;
    }

    if (int1 > -1) {
        if (int1 == intArg0) {
            if (getWindowMode() >= 2) {
                cs2_1306();
            } else {
                return;
            }
        } else {
            cs2_1306();
            cs2_1387(intArg0);
        }
    } else {
        cs2_1306();
        cs2_1387(intArg0);
    }
}
