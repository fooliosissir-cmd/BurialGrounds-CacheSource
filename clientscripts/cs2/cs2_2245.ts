/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2245

function cs2_2245(intArg0: number, intArg1: number, intArg2: number, intArg3: component, intArg4: component): number {
    if (intArg2 == intArg0) {
        return intArg2;
    }

    if (intArg2 < intArg0) {
        intArg2 = intArg2 + (intArg1 + 49) / 50;
        if (intArg2 > intArg0) {
            intArg2 = intArg0;
        }
    } else if (intArg2 > intArg0) {
        intArg2 = intArg2 - (intArg1 + 49) / 50;
        if (intArg2 < intArg0) {
            intArg2 = intArg0;
        }
    }
    ifSetSize(1 + 223 * intArg2 / intArg1, 10, 0, 0, intArg3);
    ifSetText(tostring(intArg2), intArg4);
    return intArg2;
}
