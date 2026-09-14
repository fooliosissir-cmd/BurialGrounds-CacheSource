/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4771

function cs2_4771(intArg0: component, intArg1: number): number {
    let int2: number = 38;
    let int3: number = intArg1 / 8;
    let int4: graphic = gameframe_skin_graphic(Graphic.window_texture_1);

    ccCreate(intArg0, 3, intArg1);
    ccSetPosition(2, int2 * int3, 0, 0);
    ccSetSize(4, 10, 1, 0);

    if (int3 % 2 == 0) {
        ccSetColour(colour(0x181715));
    } else {
        ccSetColour(colour(0x211F1C));
    }
    ccSetfill(true);
    let int5: number = intArg1 + 1;
    ccSetOnMouseOver(hook(cs2_4779, "Iii", [intArg0, int5, 1]));
    ccSetOnMouseLeave(hook(cs2_4779, "Iii", [intArg0, int5, 0]));
    intArg1 = intArg1 + 1;
    ccCreate(intArg0, 5, intArg1);
    ccSetGraphic(int4);
    ccSetSize(4, 10, 1, 0);
    ccSetPosition(2, int2 * int3, 0, 0);
    ccSetHide(true);
    intArg1 = intArg1 + 1;
    return intArg1;
}
