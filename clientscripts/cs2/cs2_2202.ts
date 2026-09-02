/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2202

function cs2_2202(strArg0: string): number {
    let int0: number = stringLength(strArg0);
    let int1: number = 0;

    while (int1 < int0) {
        if (stringIndexofString("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", subString(strArg0, int1, int1 + 1), 0) == -1) {
            return 1;
        }
        int1 = int1 + 1;
    }
    return 0;
}
