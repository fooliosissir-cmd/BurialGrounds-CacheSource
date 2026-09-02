/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2332

function cs2_2332(strArg0: string, strArg1: string, strArg2: string): string {
    let int0: number = stringIndexofString(strArg0, strArg1, 0);
    let int1: number = stringLength(strArg1);

    while (int0 != -1) {
        strArg0 = subString(strArg0, 0, int0) + strArg2 + subString(strArg0, int0 + int1, stringLength(strArg0));
        int0 = stringIndexofString(strArg0, strArg1, int0);
    }
    return strArg0;
}
