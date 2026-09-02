/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2914

function cs2_2914(intArg0: component, intArg1: number, intArg2: number): void {
    let int3: number = ifGetWidth(intArg0);
    let int4: number = ifGetHeight(intArg0);
    let int5: number = ifGetNextSubId(intArg0);

    ccCreate(intArg0, 5, int5);
    ccSetPosition(0, 0, 1, 0);
    ccSetSize(4, 32, 1, 0);
    ccSetGraphic(Graphic.graphic_1124);
    ccSettiling(true);
    int5 = int5 + 1;
    ccCreate(intArg0, 5, int5);
    ccSetPosition(0, -12, 1, 2);
    ccSetSize(4, 32, 1, 0);
    ccSetGraphic(Graphic.graphic_822);
    ccSettiling(true);
    int5 = int5 + 1;
    ccCreate(intArg0, 5, int5);
    ccSetPosition(-13, 0, 0, 1);
    ccSetSize(32, 4, 0, 1);
    ccSetGraphic(Graphic.graphic_821);
    ccSettiling(true);
    int5 = int5 + 1;
    ccCreate(intArg0, 5, int5);
    ccSetPosition(-12, 0, 2, 1);
    ccSetSize(32, 4, 0, 1);
    ccSetGraphic(Graphic.graphic_823);
    ccSettiling(true);
    int5 = int5 + 1;
    ccCreate(intArg0, 5, int5);
    ccSetPosition(0, 0, 0, 0);
    ccSetSize(32, 32, 0, 0);
    ccSetGraphic(Graphic.graphic_1123);
    int5 = int5 + 1;
    ccCreate(intArg0, 5, int5);
    ccSetPosition(0, 0, 2, 0);
    ccSetSize(32, 32, 0, 0);
    ccSetGraphic(Graphic.graphic_1125);
    int5 = int5 + 1;
    ccCreate(intArg0, 5, int5);
    ccSetPosition(0, 0, 0, 2);
    ccSetSize(32, 32, 0, 0);
    ccSetGraphic(Graphic.graphic_826);
    int5 = int5 + 1;
    ccCreate(intArg0, 5, int5);
    ccSetPosition(0, 0, 2, 2);
    ccSetSize(32, 32, 0, 0);
    ccSetGraphic(Graphic.graphic_827);
    int5 = int5 + 1;

    if (intArg2 > 0) {
        ccCreate(intArg0, 3, int5);
        ccSetPosition(8, 7, 0, 1);
        ccSetSize(1, 30, 0, 1);
        ccSetColour(colour(0x000000));
        ccSetTrans(200);
        ccSetfill(true);
        int5 = int5 + 1;
        ccCreate(intArg0, 3, int5);
        ccSetPosition(8, 7, 0, 1);
        ccSetSize(3, 30, 0, 1);
        ccSetColour(colour(0x000000));
        ccSetTrans(220);
        ccSetfill(true);
        int5 = int5 + 1;
        ccCreate(intArg0, 3, int5);
        ccSetPosition(8, 7, 0, 1);
        ccSetSize(5, 30, 0, 1);
        ccSetColour(colour(0x000000));
        ccSetTrans(220);
        ccSetfill(true);
        int5 = int5 + 1;
        ccCreate(intArg0, 3, int5);
        ccSetPosition(8, 7, 2, 1);
        ccSetSize(7, 30, 0, 1);
        ccSetColour(colour(0xFFFFFF));
        ccSetTrans(250);
        ccSetfill(true);
        int5 = int5 + 1;
        ccCreate(intArg0, 3, int5);
        ccSetPosition(8, 7, 2, 1);
        ccSetSize(5, 30, 0, 1);
        ccSetColour(colour(0x000000));
        ccSetTrans(245);
        ccSetfill(true);
        int5 = int5 + 1;
        ccCreate(intArg0, 3, int5);
        ccSetPosition(8, 7, 2, 1);
        ccSetSize(1, 30, 0, 1);
        ccSetColour(colour(0x000000));
        ccSetTrans(200);
        ccSetfill(true);
        int5 = int5 + 1;
        ccCreate(intArg0, 3, int5);
        ccSetPosition(8, 7, 2, 1);
        ccSetSize(3, 30, 0, 1);
        ccSetColour(colour(0x000000));
        ccSetTrans(220);
        ccSetfill(true);
        int5 = int5 + 1;
        ccCreate(intArg0, 3, int5);
        ccSetPosition(1, 8, 1, 2);
        ccSetSize(24, 3, 1, 0);
        ccSetColour(colour(0x000000));
        ccSetTrans(235);
        ccSetfill(true);
        int5 = int5 + 1;
        ccCreate(intArg0, 3, int5);
        ccSetPosition(-1, 22, 1, 0);
        ccSetSize(28, 3, 1, 0);
        ccSetColour(colour(0xFFFFFF));
        ccSetTrans(250);
        ccSetfill(true);
        int5 = int5 + 1;
        ccCreate(intArg0, 3, int5);
        ccSetPosition(0, 7, 1, 2);
        ccSetSize(14, 28, 1, 1);
        ccSetColour(colour(0x000000));
        ccSetfill(false);
        int5 = int5 + 1;
    }

    if (intArg1 > 0) {
        ccCreate(intArg0, 5, int5);
        ccSetPosition(0, intArg1 - 5, 1, 0);
        ccSetSize(4, 32, 1, 0);
        ccSetGraphic(Graphic.graphic_828);
        ccSettiling(true);
        int5 = int5 + 1;
        ccCreate(intArg0, 5, int5);
        ccSetPosition(0, intArg1 - 3, 0, 0);
        ccSetSize(32, 32, 0, 0);
        ccSetGraphic(Graphic.graphic_829);
        int5 = int5 + 1;
        ccCreate(intArg0, 5, int5);
        ccSetPosition(0, intArg1 - 3, 2, 0);
        ccSetSize(32, 32, 0, 0);
        ccSetGraphic(Graphic.graphic_830);
        int5 = int5 + 1;
    }
}
