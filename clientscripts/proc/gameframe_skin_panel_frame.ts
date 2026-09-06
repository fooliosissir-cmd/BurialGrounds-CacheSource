/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,gameframe_skin_panel_frame]

function gameframe_skin_panel_frame(intArg0: component): void {
    let int1: number = ifGetWidth(intArg0);
    let int2: number = ifGetHeight(intArg0);
    let int3: number = ifGetNextSubId(intArg0);

    ccCreate(intArg0, 5, int3);
    ccSetPosition(10, 10, 0, 0);
    ccSetSize(int1 - 20, 3, 0, 0);
    ccSetGraphic(Graphic.graphic_1121);
    ccSettiling(true);
    int3 = int3 + 1;
    ccCreate(intArg0, 5, int3);
    ccSetPosition(10, 10, 0, 2);
    ccSetSize(int1 - 20, 3, 0, 0);
    ccSetGraphic(Graphic.graphic_1121);
    ccSettiling(true);
    int3 = int3 + 1;
    ccCreate(intArg0, 5, int3);
    ccSetPosition(10, 10, 0, 0);
    ccSetSize(3, int2 - 20, 0, 0);
    ccSetGraphic(Graphic.graphic_1122);
    ccSettiling(true);
    int3 = int3 + 1;
    ccCreate(intArg0, 5, int3);
    ccSetPosition(10, 10, 2, 0);
    ccSetSize(3, int2 - 20, 0, 0);
    ccSetGraphic(Graphic.graphic_1122);
    ccSettiling(true);
}
