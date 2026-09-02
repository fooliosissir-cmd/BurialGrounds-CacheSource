/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1176

function cs2_1176(intArg0: component, intArg1: number, intArg2: number, intArg3: number, intArg4: number, intArg5: number, intArg6: number, intArg7: number, intArg8: number, intArg9: number, intArg10: number): void {
    if (intArg1 < intArg7 + scale(1, 3, intArg9)) {
        if (intArg2 < intArg8 + scale(1, 3, intArg10)) {
            ifSetModelAngle(0, 0, 512, 768, 0, 1000, intArg0);
            ifSetSize(50, 50, 0, 0, intArg0);
            ifSetPosition(max(intArg5 + intArg3, 0), max(intArg6 + intArg4, 22), 0, 0, intArg0);
        } else {
            ifSetModelAngle(0, 0, 512, 256, 0, 1000, intArg0);
            ifSetSize(50, 50, 0, 0, intArg0);
            ifSetPosition(max(intArg5 + intArg3, 0), min(intArg6, intArg10) - ifGetHeight(intArg0), 0, 0, intArg0);
        }
    } else if (intArg2 < intArg8 + scale(1, 3, intArg10)) {
        ifSetModelAngle(0, 0, 512, 1280, 0, 1000, intArg0);
        ifSetSize(50, 50, 0, 0, intArg0);
        ifSetPosition(min(intArg5 - ifGetWidth(intArg0), intArg9), max(intArg6 + intArg4, 22), 0, 0, intArg0);
    } else {
        ifSetModelAngle(0, 0, 512, 1792, 0, 1000, intArg0);
        ifSetSize(50, 50, 0, 0, intArg0);
        ifSetPosition(min(intArg5 - ifGetWidth(intArg0), intArg9), min(intArg6, intArg10) - ifGetHeight(intArg0), 0, 0, intArg0);
    }
}
