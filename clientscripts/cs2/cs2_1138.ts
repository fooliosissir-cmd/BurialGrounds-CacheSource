/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1138

function cs2_1138(intArg0: component): void {
    let int1: colour = colour(0xD5D9D3);

    if (varp_sa_attack > 0) {
        int1 = colour(0xFF981F);
    }
    let str0: string = ifGetText(intArg0);
    cs2_4212(intArg0, str0, Graphic.verdana_11pt_regular, int1, colour(0x000000));
}
