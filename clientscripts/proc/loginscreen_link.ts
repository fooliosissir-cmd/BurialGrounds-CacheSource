/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,loginscreen_link]

function proc_loginscreen_link(strArg0: string, strArg1: string, intArg0: boolean): void {
    if (compare(strArg0, "") != 0 && compare(strArg1, "") != 0) {
        openurlNoLogin("loginapplet/loginapplet.ws?ssl=1&expired=0&mod=" + strArg0 + "&dest=" + strArg1, intArg0);
    }
}
