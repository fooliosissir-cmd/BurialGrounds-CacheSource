/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,aif_textinputbox]

function proc_aif_textinputbox(intArg0: component): void {
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetSize(40, 52, 1, 1);
    ccSetPosition(0, 0, 1, 1);
    ccSetGraphic(Graphic.aif_lrgtxtinput_crntop_3);
    ccSettiling(true);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetSize(40, 26, 1, 0);
    ccSetPosition(0, 0, 1, 0);
    ccSetGraphic(Graphic.aif_lrgtxtinput_crntop_1);
    ccSettiling(true);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetSize(40, 26, 1, 0);
    ccSetPosition(0, 0, 1, 2);
    ccSetGraphic(Graphic.aif_lrgtxtinput_crntop_1);
    ccSettiling(true);
    ccSetvflip(true);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetSize(10, 52, 0, 1);
    ccSetPosition(0, 0, 0, 1);
    ccSetGraphic(Graphic.aif_lrgtxtinput_crntop_2);
    ccSettiling(true);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetSize(10, 52, 0, 1);
    ccSetPosition(0, 0, 2, 1);
    ccSetGraphic(Graphic.aif_lrgtxtinput_crntop_2);
    ccSettiling(true);
    ccSethflip(true);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetSize(20, 26, 0, 0);
    ccSetPosition(0, 0, 0, 0);
    ccSetGraphic(Graphic.aif_lrgtxtinput_crntop_0);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetSize(20, 26, 0, 0);
    ccSetPosition(0, 0, 2, 0);
    ccSetGraphic(Graphic.aif_lrgtxtinput_crntop_0);
    ccSethflip(true);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetSize(20, 26, 0, 0);
    ccSetPosition(0, 0, 0, 2);
    ccSetGraphic(Graphic.aif_lrgtxtinput_crntop_0);
    ccSetvflip(true);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetSize(20, 26, 0, 0);
    ccSetPosition(0, 0, 2, 2);
    ccSetGraphic(Graphic.aif_lrgtxtinput_crntop_0);
    ccSetvflip(true);
    ccSethflip(true);
}
