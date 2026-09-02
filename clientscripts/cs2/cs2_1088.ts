/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1088

function cs2_1088(intArg0: component, intArg1: number): void {
    let int2: number = ifGetWidth(intArg0);
    let int3: number = ifGetHeight(intArg0);
    let int4: number = ifGetNextSubId(intArg0);

    ccCreate(intArg0, 5, int4);
    ccSetPosition(0, -13, 1, 0);
    ccSetSize(4, 32, 1, 0);
    ccSetGraphic(Graphic.graphic_820);
    ccSettiling(true);
    int4 = int4 + 1;
    ccCreate(intArg0, 5, int4);
    ccSetPosition(0, -12, 1, 2);
    ccSetSize(4, 32, 1, 0);
    ccSetGraphic(Graphic.graphic_822);
    ccSettiling(true);
    int4 = int4 + 1;
    ccCreate(intArg0, 5, int4);
    ccSetPosition(-13, 0, 0, 1);
    ccSetSize(32, 4, 0, 1);
    ccSetGraphic(Graphic.graphic_821);
    ccSettiling(true);
    int4 = int4 + 1;
    ccCreate(intArg0, 5, int4);
    ccSetPosition(-12, 0, 2, 1);
    ccSetSize(32, 4, 0, 1);
    ccSetGraphic(Graphic.graphic_823);
    ccSettiling(true);
    int4 = int4 + 1;
    ccCreate(intArg0, 5, int4);
    ccSetPosition(0, 0, 0, 0);
    ccSetSize(32, 32, 0, 0);
    ccSetGraphic(Graphic.graphic_824);
    int4 = int4 + 1;
    ccCreate(intArg0, 5, int4);
    ccSetPosition(0, 0, 2, 0);
    ccSetSize(32, 32, 0, 0);
    ccSetGraphic(Graphic.graphic_825);
    int4 = int4 + 1;
    ccCreate(intArg0, 5, int4);
    ccSetPosition(0, 0, 0, 2);
    ccSetSize(32, 32, 0, 0);
    ccSetGraphic(Graphic.graphic_826);
    int4 = int4 + 1;
    ccCreate(intArg0, 5, int4);
    ccSetPosition(0, 0, 2, 2);
    ccSetSize(32, 32, 0, 0);
    ccSetGraphic(Graphic.graphic_827);
    int4 = int4 + 1;

    if (intArg1 > 0) {
        ccCreate(intArg0, 5, int4);
        ccSetPosition(0, intArg1 - 5, 1, 0);
        ccSetSize(4, 32, 1, 0);
        ccSetGraphic(Graphic.graphic_828);
        ccSettiling(true);
        int4 = int4 + 1;
        ccCreate(intArg0, 5, int4);
        ccSetPosition(0, intArg1 - 3, 0, 0);
        ccSetSize(32, 32, 0, 0);
        ccSetGraphic(Graphic.graphic_829);
        int4 = int4 + 1;
        ccCreate(intArg0, 5, int4);
        ccSetPosition(0, intArg1 - 3, 2, 0);
        ccSetSize(32, 32, 0, 0);
        ccSetGraphic(Graphic.graphic_830);
        int4 = int4 + 1;
    }
}
