/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_251

function cs2_251(intArg0: component): void {
    if (inzone(coord(2624, 5184, 0), coord(2687, 5247, 3), coord()) == 1 && detailGetFlickeringOn() == 1) {
        if (ifGetHide(intArg0) == 1) {
            ifSetHide(false, intArg0);
        }
    } else if (ifGetHide(intArg0) == 0) {
        ifSetHide(true, intArg0);
    }
}
