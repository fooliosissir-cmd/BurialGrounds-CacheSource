/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2949

function cs2_2949(strArg0: string): string {
    let int0: number = stringLength(strArg0);

    strArg0 = "";

    while (int0 > 0) {
        strArg0 = strArg0 + "*";
        int0 = int0 - 1;
    }
    return strArg0;
}
