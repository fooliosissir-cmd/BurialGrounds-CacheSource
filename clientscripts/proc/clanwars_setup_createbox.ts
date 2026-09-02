/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,clanwars_setup_createbox]

function proc_clanwars_setup_createbox(intArg0: component, intArg1: number, intArg2: number, intArg3: number): void {
    ccDeleteAll(intArg0);
    let int4: number = ifGetWidth(intArg0);
    let int5: number = ifGetHeight(intArg0);
    let int6: number = 0;

    if (intArg1 > 0) {
        ccCreate(intArg0, 5, int6);
        ccSetPosition(0, intArg1, 0, 0);
        ccSetSize(int4, 32, 0, 0);
        ccSetGraphic(Graphic.graphic_1076);
        ccSettiling(true);
        int6 = int6 + 1;
    }

    if (intArg2 > 0) {
        ccCreate(intArg0, 5, int6);
        ccSetPosition(0, intArg2, 0, 0);
        ccSetSize(int4, 32, 0, 0);
        ccSetGraphic(Graphic.graphic_1076);
        ccSettiling(true);
        int6 = int6 + 1;
    }

    if (intArg3 > 0) {
        ccCreate(intArg0, 5, int6);
        ccSetPosition(0, intArg3, 0, 0);
        ccSetSize(int4, 32, 0, 0);
        ccSetGraphic(Graphic.graphic_1076);
        ccSettiling(true);
        int6 = int6 + 1;
    }
    ccCreate(intArg0, 5, int6);
    ccSetPosition(0, 0, 0, 0);
    ccSetSize(int4, 32, 0, 0);
    ccSetGraphic(Graphic.graphic_1076);
    ccSettiling(true);
    int6 = int6 + 1;
    ccCreate(intArg0, 5, int6);
    ccSetPosition(0, int5 - 32, 0, 0);
    ccSetSize(int4, 32, 0, 0);
    ccSetGraphic(Graphic.graphic_1076);
    ccSettiling(true);
    ccSetvflip(true);
    int6 = int6 + 1;
    ccCreate(intArg0, 5, int6);
    ccSetPosition(0, 1, 0, 0);
    ccSetSize(32, int5 - 2, 0, 0);
    ccSetGraphic(Graphic.graphic_1077);
    ccSettiling(true);
    int6 = int6 + 1;
    ccCreate(intArg0, 5, int6);
    ccSetPosition(int4 - 32, 1, 0, 0);
    ccSetSize(32, int5 - 2, 0, 0);
    ccSetGraphic(Graphic.graphic_1077);
    ccSettiling(true);
    ccSethflip(true);
    int6 = int6 + 1;
}
