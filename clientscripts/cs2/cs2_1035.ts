/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1035

function cs2_1035(intArg0: number, intArg1: number, intArg2: number, intArg3: number, strArg0: string): void {
    let int4: number = 0;

    ccCreate(Component.interface_157.component_157_23, 5, int4);
    ccSetGraphic(Graphic.graphic_846);
    ccSetPosition(intArg0, intArg1, 0, 0);
    ccSetSize(32, 32, 0, 0);
    int4 = int4 + 1;
    ccCreate(Component.interface_157.component_157_23, 5, int4);
    ccSetGraphic(Graphic.graphic_828);
    ccSetPosition(intArg0, intArg1 - 14, 0, 0);
    ccSetSize(intArg2, 32, 0, 0);
    int4 = int4 + 1;
    ccCreate(Component.interface_157.component_157_23, 5, int4);
    ccSetGraphic(Graphic.graphic_847);
    ccSetPosition(intArg2 + intArg0 - 32, intArg1, 0, 0);
    ccSetSize(32, 32, 0, 0);
    int4 = int4 + 1;
    ccCreate(Component.interface_157.component_157_23, 5, int4);
    ccSetGraphic(Graphic.graphic_841);
    ccSetPosition(intArg0 - 14, intArg1, 0, 0);
    ccSetSize(32, intArg3, 0, 0);
    int4 = int4 + 1;
    ccCreate(Component.interface_157.component_157_23, 5, int4);
    ccSetGraphic(Graphic.graphic_841);
    ccSetPosition(intArg0 + intArg2 - 20, intArg1, 0, 0);
    ccSetSize(32, intArg3, 0, 0);
    int4 = int4 + 1;
    ccCreate(Component.interface_157.component_157_23, 5, int4);
    ccSetGraphic(Graphic.graphic_848);
    ccSetPosition(intArg0, intArg1 + intArg3 - 32, 0, 0);
    ccSetSize(32, 32, 0, 0);
    int4 = int4 + 1;
    ccCreate(Component.interface_157.component_157_23, 5, int4);
    ccSetGraphic(Graphic.graphic_849);
    ccSetPosition(intArg0 + intArg2 - 32, intArg1 + intArg3 - 32, 0, 0);
    ccSetSize(32, 32, 0, 0);
    int4 = int4 + 1;
    ccCreate(Component.interface_157.component_157_23, 5, int4);
    ccSetGraphic(Graphic.graphic_828);
    ccSetPosition(intArg0, intArg1 + intArg3 - 20, 0, 0);
    ccSetSize(intArg2, 32, 0, 0);
    int4 = int4 + 1;
    ccCreate(Component.interface_157.component_157_23, 3, int4);
    ccSetPosition(intArg0 + 6, intArg1 + 6, 0, 0);
    ccSetSize(intArg2 - 12, intArg3 - 12, 0, 0);
    ccSetColour(colour(0x83765E));
    ccSetfill(true);
    int4 = int4 + 1;
    ccCreate(Component.interface_157.component_157_23, 3, int4);
    ccSetPosition(intArg0 + 3, intArg1 + 3, 0, 0);
    ccSetSize(intArg2, intArg3, 0, 0);
    ccSetColour(colour(0x000000));
    ccSetfill(true);
    ccSetTrans(200);
    int4 = int4 + 1;
    ccCreate(Component.interface_157.component_157_23, 4, int4);
    ccSetPosition(10, 10, 0, 0);
    ccSetSize(400, 50, 0, 0);
    ccSetColour(colour(0xFFFFFF));
    ccSetTextShadow(true);
    ccSetTextFont(Graphic.p12_full);
    ccSetText(strArg0);
}
