/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,text_plural]

function text_plural(intArg0: number, strArg0: string, strArg1: string): string {
    if (intArg0 == 1) {
        return strArg0;
    }
    return strArg1;
}
