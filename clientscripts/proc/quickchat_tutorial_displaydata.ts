/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,quickchat_tutorial_displaydata]

function quickchat_tutorial_displaydata(strArg0: string): void {
    let str1: string = "";
    let int0: number = stringIndexofString(strArg0, "|", 0);

    if (int0 != -1) {
        str1 = subString(strArg0, int0 + 1, stringLength(strArg0));
    } else {
        str1 = strArg0;
    }
    ifSetText(subString(strArg0, 0, int0), Component.interface_157.component_157_14);
    let int1: number = paraheight(str1, 400, Graphic.p12_full) * 12;
    let int2: number = ifGetHeight(Component.interface_157.component_157_25);
    int2 = ifGetHeight(Component.interface_157.component_157_25) / 2 - int1 / 2;
    quickchat_tutorial_addtext(0, 35, int2, 400, 100, str1, colour(0xFFFFFF));
    ccCreate(Component.interface_157.component_157_25, 5, 1);
    ccSetGraphic(Graphic.graphic_1074);
    ccSetPosition(35, int2 - 25, 0, 0);
    ccSetSize(400, 32, 0, 0);
    ccCreate(Component.interface_157.component_157_25, 5, 2);
    ccSetGraphic(Graphic.graphic_1074);
    ccSetPosition(35, int2 + int1, 0, 0);
    ccSetSize(400, 32, 0, 0);
}
