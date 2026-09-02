/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1291

function cs2_1291(intArg0: component): void {
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetSize(3, 34, 1, 0);
    ccSetPosition(0, 0, 1, 1);
    ccSetGraphic(Graphic.task_colour_select_1);
    ccSettiling(true);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetSize(12, 34, 0, 0);
    ccSetPosition(0, 0, 0, 0);
    ccSetGraphic(Graphic.task_colour_select_0);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetSize(12, 34, 0, 0);
    ccSetPosition(0, 0, 2, 2);
    ccSetGraphic(Graphic.task_colour_select_0);
    ccSethflip(true);
}
