/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,notes_convert_colour]

function notes_convert_colour(intArg0: number): colour {
    let int1: colour = colour(0xFFFFFF);

    switch (intArg0) {
        case 0:
            int1 = colour(0xFFFFFF);
            break;
        case 1:
            int1 = colour(0x00FF00);
            break;
        case 2:
            int1 = colour(0xD69C00);
            break;
        case 3:
            int1 = colour(0xFF3F3F);
            break;
    }
    return int1;
}
