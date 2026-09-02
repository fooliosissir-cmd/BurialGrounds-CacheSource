/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3139

function cs2_3139(intArg0: number): void {
    if (varc_998 == intArg0) {
        cs2_1857(cs2_1854());
        cs2_1858(0);
    } else if (varc_999 == intArg0) {
        cs2_1858(0);
    }
    varc_998 = cs2_1853();
    varc_999 = cs2_1854();
    lobby_worldswitcher_drawlist();
    let str0: string = "Your changes cannot be saved because" + "<br>" + "you are using the unsigned client.";
    cs2_3143(0, "World " + tostring(intArg0) + " has been removed from your favourites.");
    cs2_3065(1);
}
