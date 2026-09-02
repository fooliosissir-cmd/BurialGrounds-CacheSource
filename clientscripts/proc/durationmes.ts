/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,durationmes]

function durationmes(intArg0: number): string {
    if (intArg0 < 2) {
        return "in a minute";
    }
    let int1: number = intArg0 / 60;
    intArg0 = intArg0 % 60;

    if (int1 > 1) {
        if (intArg0 > 1) {
            return "in " + tostring(int1) + " hours " + tostring(intArg0) + " minutes";
        }
        if (intArg0 == 1) {
            return "in " + tostring(int1) + " hours 1 minute";
        }
        return "in " + tostring(int1) + " hours";
    }

    if (int1 == 1) {
        if (intArg0 > 1) {
            return "in 1 hour " + tostring(intArg0) + " minutes";
        }
        if (intArg0 == 1) {
            return "in 1 hour 1 minute";
        }
        return "in 1 hour";
    }
    return "in " + tostring(intArg0) + " minutes";
}
