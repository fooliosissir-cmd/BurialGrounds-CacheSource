/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_718

function cs2_718(intArg0: number): colour {
    switch (intArg0) {
        case 1:
            return colour(0xFF0000);
        case 2:
            return colour(0xFF8000);
        case 3:
            return colour(0xFFFF00);
        case 4:
            return colour(0x00FF00);
        case 5:
            return colour(0x0000FF);
        case 6:
            return colour(0x4000FF);
        case 7:
            return colour(0x8000FF);
        default:
            return colour(0xFFFFFF);
    }
}
