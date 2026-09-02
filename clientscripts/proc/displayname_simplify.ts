/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,displayname_simplify]

function displayname_simplify(strArg0: string): string {
    strArg0 = lowercase(removetags(strArg0));
    let int0: number = stringLength(strArg0);
    let int1: number = 0;
    strArg0 = cs2_2332(strArg0, "_", "\xa0");
    strArg0 = cs2_2332(strArg0, "-", "\xa0");
    strArg0 = cs2_2332(strArg0, " ", "\xa0");

    while (stringIndexofString(strArg0, " ", 0) == 0 && int0 > 0) {
        strArg0 = subString(strArg0, 1, int0);
        int0 = stringLength(strArg0);
    }

    while (stringIndexofString(strArg0, " ", int0 - 1) == int0 - 1 && int0 > 0) {
        strArg0 = subString(strArg0, 0, int0 - 1);
        int0 = stringLength(strArg0);
    }

    while (stringIndexofString(strArg0, "\xa0", 0) == 0 && int0 > 0) {
        strArg0 = subString(strArg0, 1, int0);
        int0 = stringLength(strArg0);
    }

    while (stringIndexofString(strArg0, "\xa0", int0 - 1) == int0 - 1 && int0 > 0) {
        strArg0 = subString(strArg0, 0, int0 - 1);
        int0 = stringLength(strArg0);
    }
    return strArg0;
}
