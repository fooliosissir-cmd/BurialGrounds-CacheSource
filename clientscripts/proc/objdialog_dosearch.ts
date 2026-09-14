/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,objdialog_dosearch]

function objdialog_dosearch(strArg0: string): void {
    let int0: number = ocFind(strArg0, 1);
    let int1: number = ifGetWidth(Component.interface_389.component_389_4);
    let int2: number = int1 - 8;

    if (int0 == -1) {
        ccCreate(Component.interface_389.component_389_4, 4, 0);
        ccSetPosition(0, 48, 0, 0);
        ccSetSize(int1, 16, 0, 0);
        ccSetTextFont(Graphic.p11_full);
        ccSetText("Too many results. Please refine your search.");
        ccSetTextAlign(1, 1, 0);
        ccSetColour(colour(0xA05A00));
        ccSetTextShadow(false);
        ifSetScrollSize(0, 15, Component.interface_389.component_389_4);
        objdialog_doscrollbar();
        return;
    }

    if (int0 == 0) {
        ccCreate(Component.interface_389.component_389_4, 4, 0);
        ccSetPosition(0, 48, 0, 0);
        ccSetSize(int1, 16, 0, 0);
        ccSetTextFont(Graphic.p11_full);
        ccSetText("No matching items found.");
        ccSetTextAlign(1, 1, 0);
        ccSetColour(colour(0xA05A00));
        ccSetTextShadow(false);
        ifSetScrollSize(0, 15, Component.interface_389.component_389_4);
        objdialog_doscrollbar();
        return;
    }
    let int3: number = 1;
    let int4: obj = ocFindNext();
    ccCreate(Component.interface_389.component_389_4, 3, 0);

    while (int4 != -1) {
        ccCreate(Component.interface_389.component_389_4, 4, int3);
        ccSetPosition(4, 15 * (int3 - 1), 0, 0);
        ccSetSize(int2, 15, 0, 0);
        ccSetColour(colour(0xA05A00));
        ccSetText(ocName(int4));
        ccSetTextFont(Graphic.p12_full);
        ccSetTextShadow(false);
        ccSetOnMouseOver(hook(objdialog_highlight, "io", [int3, int4]));
        ccSetOnClick(hook(objdialog_select, "o", [int4]));
        int4 = ocFindNext();
        int3 = int3 + 1;
    }
    ifSetScrollSize(0, 15 * (int3 - 1), Component.interface_389.component_389_4);
    objdialog_doscrollbar();
}
