/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6313

function cs2_6313(strArg0: string, intArg0: number, intArg1: number): string {
    if (intArg1 <= 0 || intArg0 == -1) {
        return strArg0;
    }

    if (stringLength(strArg0) > 0) {
        strArg0 = append(strArg0, "<br>");
    }

    if (intArg0 == 1539) {
        return append(strArg0, "Nails: " + tostring(intArg1));
    }
    return append(strArg0, ocName(intArg0) + ": " + tostring(intArg1));
}
