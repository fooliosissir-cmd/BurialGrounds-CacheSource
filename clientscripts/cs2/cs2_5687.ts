/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5687

function cs2_5687(intArg0: number, intArg1: number): number {
    ccCreate(Component.interface_1218.component_1218_72, 5, ifGetNextSubId(Component.interface_1218.component_1218_72));
    ccSetGraphic(Graphic.graphic_9042);
    ccSetSize(130, 105, 0, 0);
    ccSetPosition(5, intArg0, 0, 0);
    ccCreate(Component.interface_1218.component_1218_72, 5, ifGetNextSubId(Component.interface_1218.component_1218_72));
    ccSetGraphic(Graphic.graphic_9045);
    ccSetSize(130, 105, 0, 0);
    ccSetPosition(5, intArg0, 2, 0);
    ccCreate(Component.interface_1218.component_1218_72, 5, ifGetNextSubId(Component.interface_1218.component_1218_72));
    ccSetGraphic(Graphic.graphic_9043);
    ccSetSize(138, 105, 0, 0);
    ccSetPosition(135, intArg0, 0, 0);
    ccCreate(Component.interface_1218.component_1218_72, 5, ifGetNextSubId(Component.interface_1218.component_1218_72));
    ccSetGraphic(Graphic.graphic_9044);
    ccSetSize(138, 105, 0, 0);
    ccSetPosition(135, intArg0, 2, 0);
    ccCreate(Component.interface_1218.component_1218_72, 4, ifGetNextSubId(Component.interface_1218.component_1218_72));
    ccSetPosition(10, intArg0, 0, 0);
    ccSetTextFont(Graphic.graphic_4040);
    ccSetTextShadow(false);
    ccSetColour(colour(0x000000));
    ccSetTextAlign(1, 1, 18);
    ccSetSize(530, 100, 0, 0);
    ccSetText("New unlocks below!" + "<br>" + "Click here to return to the normal skillguide");
    ccSetOp(1, "Continue");
    ccSetOnOp(hook(cs2_5688, "i", [intArg1]));
    return intArg0 + 105;
}
