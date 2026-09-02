/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,ignore_update]

function ignore_update(): void {
    ccDeleteAll(Component.interface_550.component_550_4);
    let int0: number = ignoreCount();

    if (int0 < 0) {
        ifSetText("Loading Ignore List." + "<br>" + "Please wait.", Component.interface_550.component_550_45);
        ifSetHide(false, Component.interface_550.component_550_45);
        ifSetText("", Component.interface_550.component_550_34);
        return;
    }
    ifSetText(tostring(int0) + " / " + tostring(100), Component.interface_550.component_550_34);
    ifSetText("", Component.interface_550.component_550_45);
    ifSetHide(true, Component.interface_550.component_550_45);
    let int1: component = Component.interface_550.component_550_4;
    let int2: component = Component.interface_550.component_550_2;
    let int3: component = Component.interface_550.component_550_3;
    let int4: component = Component.interface_550.component_550_30;
    let int5: number = 0;
    let str0: string = "";
    let str1: string = "";
    let str2: string = "";
    let int6: number = 0;
    let int7: number = 0;
    let str3: string = "";
    let int8: number = 0;
    let int9: number = 0;
    let int10: number = 15;
    let int11: number = ifGetHeight(int3) / int10;
    ccDeleteAll(int1);
    ccDeleteAll(int2);

    while (int5 < int0) {
        int8 = int5 * 2;
        int9 = int5 * int10;
        [str0, str1] = ignoreGetName(int5);
        if (compare(str1, "") != 0) {
            int6 = 1;
        } else {
            int6 = 0;
        }
        if (int6 == 1) {
            str2 = "      " + str0;
        } else {
            str2 = str0;
        }
        ccCreate(Component.interface_550.component_550_4, 4, int8);
        ccSetSize(168, int10, 0, 0);
        ccSetPosition(0, int9, 0, 0);
        ccSetColour(colour(0xA4997D));
        ccSetTextFont(Graphic.verdana_11pt_regular);
        ccSetTextShadow(true);
        ccSetTextAlign(0, 0, 0);
        if (int6 == 1) {
            ccSetText("      " + str2);
        } else {
            ccSetText(str2);
        }
        ccSetText(str2);
        ccSetOpBase("<col=ffffff>" + str0);
        ccSetOp(1, "Remove");
        ccSetOnOpt(hook(ignore_op, "s", [ignoreGetNameUnfiltered(int5)]));
        if (int6 == 1) {
            int7 = stringWidth("Last known as: " + str1, Graphic.verdana_11pt_regular) + 8;
            if (int7 > ifGetWidth(Component.interface_550.component_550_4)) {
                str3 = "Last known as:" + "<br>" + str1;
            } else {
                str3 = "Last known as: " + str1;
            }
            ccSetOnMouseOver(hook(cs2_1594, "IIisii", [Component.interface_550.component_550_51, event_com, event_comsubid, str3, event_mousex, event_mousey]));
            ccHookMouseExit(hook(clientscript_deltooltip, "I", [Component.interface_550.component_550_51]));
        }
        ccCreate(Component.interface_550.component_550_4, 5, int8 + 1);
        ccSetGraphic(Graphic.friends_changed_name);
        ccSetSize(14, 14, 0, 0);
        ccSetPosition(0, int9, 0, 0);
        if (int6 == 0) {
            ccSetHide(true);
        }
        if (int5 % 2 != 0) {
            ccCreate(Component.interface_550.component_550_2, 3, ifGetNextSubId(int2));
            ccSetSize(16384, int10, 2, 0);
            ccSetPosition(0, int9, 0, 0);
            ccSetColour(colour(0x232220));
            ccSetfill(true);
            ccSetTrans(128);
        }
        int5 = int5 + 1;
    }

    while (int5 < int11) {
        int9 = int5 * int10;
        if (int5 % 2 != 0) {
            ccCreate(Component.interface_550.component_550_2, 3, ifGetNextSubId(int2));
            ccSetSize(16384, int10, 2, 0);
            ccSetPosition(0, int9, 0, 0);
            ccSetColour(colour(0x232220));
            ccSetfill(true);
            ccSetTrans(128);
        }
        int5 = int5 + 1;
    }
    let int12: number = ifGetScrollY(int3);
    let int13: number = int5 * int10;
    ifSetScrollSize(ifGetWidth(int3), int13, int3);

    if (int12 > int13) {
        int12 = int13;
    }
    scrollbar_resize(int4, int3, int12);
}
