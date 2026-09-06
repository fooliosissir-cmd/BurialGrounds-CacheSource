/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2968

function cs2_2968(intArg0: component): void {
    if (varbit_option_gameframe_skin == 1) {
        ccDeleteAll(intArg0);
        gameframe_skin_panel_frame(intArg0);
        return;
    }
    let int1: number = ifGetWidth(intArg0);
    let int2: number = ifGetHeight(intArg0);
    let int3: number = ifGetNextSubId(intArg0);

    ccCreate(intArg0, 5, int3);
    ccSetPosition(0, 1, 1, 0);
    ccSetSize(192, 21, 1, 0);
    ccSetGraphic(Graphic.graphic_8623);
    ccSettiling(true);
    int3 = int3 + 1;
    ccCreate(intArg0, 5, int3);
    ccSetPosition(0, 1, 1, 2);
    ccSetSize(192, 21, 1, 0);
    ccSetGraphic(Graphic.graphic_8613);
    ccSettiling(true);
    int3 = int3 + 1;
    ccCreate(intArg0, 5, int3);
    ccSetPosition(1, 44, 0, 0);
    ccSetSize(21, 56, 0, 0);
    ccSetGraphic(Graphic.graphic_8616);
    int3 = int3 + 1;
    ccCreate(intArg0, 5, int3);
    ccSetPosition(1, 0, 0, 1);
    ccSetSize(21, 200, 0, 1);
    ccSetGraphic(Graphic.graphic_8615);
    ccSettiling(true);
    int3 = int3 + 1;
    ccCreate(intArg0, 5, int3);
    ccSetPosition(0, 22, 0, 2);
    ccSetSize(22, 78, 0, 0);
    ccSetGraphic(Graphic.graphic_8614);
    int3 = int3 + 1;
    ccCreate(intArg0, 5, int3);
    ccSetPosition(1, 44, 2, 0);
    ccSetSize(21, 56, 0, 0);
    ccSetGraphic(Graphic.graphic_8616);
    ccSethflip(true);
    int3 = int3 + 1;
    ccCreate(intArg0, 5, int3);
    ccSetPosition(1, 0, 2, 1);
    ccSetSize(21, 200, 0, 1);
    ccSetGraphic(Graphic.graphic_8615);
    ccSettiling(true);
    ccSethflip(true);
    int3 = int3 + 1;
    ccCreate(intArg0, 5, int3);
    ccSetPosition(0, 22, 2, 2);
    ccSetSize(22, 78, 0, 0);
    ccSetGraphic(Graphic.graphic_8614);
    ccSethflip(true);
    int3 = int3 + 1;
    ccCreate(intArg0, 5, int3);
    ccSetPosition(0, 0, 0, 0);
    ccSetSize(96, 44, 0, 0);
    ccSetGraphic(Graphic.graphic_8621);
    int3 = int3 + 1;
    ccCreate(intArg0, 5, int3);
    ccSetPosition(0, 0, 2, 0);
    ccSetSize(96, 44, 0, 0);
    ccSetGraphic(Graphic.graphic_8621);
    ccSethflip(true);
    int3 = int3 + 1;
    ccCreate(intArg0, 5, int3);
    ccSetPosition(0, 0, 0, 2);
    ccSetSize(96, 22, 0, 0);
    ccSetGraphic(Graphic.graphic_8611);
    int3 = int3 + 1;
    ccCreate(intArg0, 5, int3);
    ccSetPosition(0, 0, 2, 2);
    ccSetSize(96, 22, 0, 0);
    ccSetGraphic(Graphic.graphic_8611);
    ccSethflip(true);
    int3 = int3 + 1;
}
