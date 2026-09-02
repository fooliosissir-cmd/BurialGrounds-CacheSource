/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_805

function cs2_805(intArg0: stat): colour {
    let int1: number = cs2_807(intArg0);
    let int2: colour = colour(0x555555);

    if (int1 > 75) {
        int2 = colour(0x00FF00);
    } else if (int1 > 50) {
        int2 = colour(0xFFFF00);
    } else if (int1 > 25) {
        int2 = colour(0xFF981F);
    } else {
        int2 = colour(0xFF0000);
    }
    return int2;
}
