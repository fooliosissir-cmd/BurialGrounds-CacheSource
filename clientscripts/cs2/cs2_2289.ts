/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2289

function cs2_2289(intArg0: component, intArg1: component, intArg2: number): void {
    if (cs2_2296(intArg2) == 0) {
        if (cs2_2295(intArg2) == 0) {
            return;
        }
        if (ccFind(intArg0, intArg2) == 1) {
            ccSetOp(1, "Deactivate");
        }
        if (ccFind(intArg1, intArg2) == 1) {
            ccSetGraphic(Graphic.prayerglow);
        }
    } else {
        if (ccFind(intArg0, intArg2) == 1) {
            ccSetOp(1, "Activate");
        }
        if (ccFind(intArg1, intArg2) == 1) {
            ccSetGraphic(-1);
        }
    }
}
