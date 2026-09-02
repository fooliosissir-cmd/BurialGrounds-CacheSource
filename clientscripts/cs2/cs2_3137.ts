/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3137

function cs2_3137(intArg0: number): void {
    if (varc_998 > 0 && varc_999 > 0) {
        cs2_3143(1, "Please delete one of your existing favourite worlds before setting another.");
        return;
    } else if (varc_998 < 1) {
        cs2_1857(intArg0);
    } else if (varc_999 < 1) {
        cs2_1858(intArg0);
    }
    varc_998 = cs2_1853();
    varc_999 = cs2_1854();
    lobby_worldswitcher_drawlist();
    let str0: string = "Your changes cannot be saved because" + "<br>" + "you are using the unsigned client.";
    cs2_3143(0, "World " + tostring(intArg0) + " has been added to your favourites.");
    cs2_3065(1);
}
