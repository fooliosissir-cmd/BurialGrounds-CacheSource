/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,loginscreen_link_nologin]

function proc_loginscreen_link_nologin(strArg0: string, intArg0: boolean): void {
    if (compare(strArg0, "") != 0) {
        openurl(strArg0, intArg0);
    }
}
