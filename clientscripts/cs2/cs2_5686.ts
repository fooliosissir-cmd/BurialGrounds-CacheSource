/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5686

function cs2_5686(intArg0: number, strArg0: string): number {
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
    ccCreate(Component.interface_1218.component_1218_72, 5, ifGetNextSubId(Component.interface_1218.component_1218_72));
    ccSetGraphic(Graphic.quest_rating_icon_5);
    ccSetSize(64, 64, 0, 0);
    ccSetPosition(30, intArg0 + 25, 0, 0);
    ccCreate(Component.interface_1218.component_1218_72, 4, ifGetNextSubId(Component.interface_1218.component_1218_72));
    ccSetPosition(135, intArg0, 0, 0);
    ccSetTextFont(Graphic.graphic_4040);
    ccSetTextShadow(false);
    ccSetColour(colour(0x000000));
    ccSetTextAlign(1, 1, 15);
    ccSetSize(380, 100, 0, 0);
    ccSetText(strArg0);
    return intArg0 + 105;
}
