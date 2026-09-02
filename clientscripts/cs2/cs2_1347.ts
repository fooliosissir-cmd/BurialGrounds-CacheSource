/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1347

function cs2_1347(intArg0: Enum, intArg1: number, intArg2: component, intArg3: graphic, intArg4: component, intArg5: component, intArg6: component, intArg7: colour, intArg8: colour, intArg9: colour, intArg10: graphic, intArg11: number, intArg12: number, intArg13: graphic, intArg14: graphic, intArg15: graphic, intArg16: graphic, intArg17: graphic, intArg18: graphic): void {
    if (ifGetHide(intArg2) == 1) {
        ifSetScrollPos(0, 0, intArg4);
        cs2_1348(intArg0, intArg1, intArg2, intArg3, intArg4, intArg5, intArg6, intArg7, intArg8, intArg9, intArg10, intArg11, intArg12, intArg13, intArg14, intArg15, intArg16, intArg17, intArg18);
    } else {
        cs2_1349(intArg6, intArg2, intArg4, intArg5, intArg12);
    }
}
