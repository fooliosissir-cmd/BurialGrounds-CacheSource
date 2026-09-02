/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3089

function cs2_3089(intArg0: boolean, strArg0: string, strArg1: string): void {
    if (compare(strArg0, "") != 0 && compare(strArg1, "") != 0) {
        openurl("loginapplet/loginapplet.ws?ssl=1&expired=0&mod=" + strArg0 + "&dest=" + strArg1, intArg0);
    }
}
