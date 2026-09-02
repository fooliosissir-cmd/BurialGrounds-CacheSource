/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3212

function cs2_3212(strArg0: string): void {
    strArg0 = strArg0 + "?cty=" + tostring(playercountry());
    proc_loginscreen_link_nologin(strArg0, true);
}
