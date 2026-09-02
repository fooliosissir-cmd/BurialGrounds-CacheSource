/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4532

function cs2_4532(intArg0: component): void {
    let int1: component = ifGetLayer(intArg0);

    if (int1 == -1) {
        return;
    }

    if (ifFind(int1) == 1) {
        ccSetPosition(0, 4, 1, 0);
        ccSetSize(16384, 23, 2, 0);
    }
    cs2_4211(intArg0, Graphic.palatino_linotype_18pt_regular, colour(0xEBE0BC), colour(0x000000));
}
