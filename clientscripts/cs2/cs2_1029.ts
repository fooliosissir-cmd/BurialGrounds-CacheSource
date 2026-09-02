/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1029

function cs2_1029(intArg0: Enum, intArg1: number): void {
    ccDeleteAll(Component.interface_157.component_157_23);
    ccDeleteAll(Component.interface_157.component_157_25);
    ifSetText("Quick-chat - Shortcut Reference", Component.interface_157.component_157_14);
    ifSetHide(false, Component.interface_157.component_157_35);
    ifSetHide(true, Component.interface_157.component_157_17);
    ifSetOnClick(hook(clientscript_quickchat_tutorial_showpage, "gii", [Enum.enum_1486, 0, 7]), Component.interface_157.component_157_30);
    ifSetText("User Guide", Component.interface_157.component_157_30);
    let int2: number = 0;
    let int3: number = 20;
    let int4: number = 0;
    let int5: number = 0;
    let int6: number = 0;
    let str0: string = "";
    ccCreate(Component.interface_157.component_157_25, 5, int4);
    ccSetGraphic(Graphic.graphic_1074);
    ccSetPosition(35, int3 - 22, 0, 0);
    ccSetSize(400, 32, 0, 0);
    int4 = int4 + 1;

    while (int2 < intArg1) {
        int2 = int2 + 1;
        quickchat_tutorial_addtext(int4, 35, int3, 400, 100, enumOp(type_int, type_string, intArg0, int5), colour(0xFFFF00));
        int4 = int4 + 1;
        int5 = int5 + 1;
        str0 = enumOp(type_int, type_string, intArg0, int5);
        int6 = paraheight(str0, 300, Graphic.p12_full) * 12;
        quickchat_tutorial_addtext(int4, 150, int3, 300, int6, str0, colour(0xFFFFFF));
        int4 = int4 + 1;
        int5 = int5 + 1;
        int3 = int3 + int6 + 10;
        ccCreate(Component.interface_157.component_157_25, 5, int4);
        ccSetGraphic(Graphic.graphic_1074);
        ccSetPosition(35, int3 - 20, 0, 0);
        ccSetSize(400, 32, 0, 0);
        int4 = int4 + 1;
    }

    if (int3 > ifGetHeight(Component.interface_157.component_157_25)) {
        ifSetScrollSize(0, int3, Component.interface_157.component_157_25);
        proc_scrollbar_vertical(Component.interface_157.component_157_24, Component.interface_157.component_157_25, Graphic.scrollbar_dragger_v2_3, Graphic.scrollbar_dragger_v2_0, Graphic.scrollbar_dragger_v2_1, Graphic.scrollbar_dragger_v2_2, Graphic.scrollbar_v2_0, Graphic.scrollbar_v2_1);
    }
}
