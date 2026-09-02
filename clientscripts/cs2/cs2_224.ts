/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_224

function cs2_224(): void {
    let int0: number = ifGetHide(Component.interface_594.component_594_61);
    let str0: string = removetags(chatPlayerNameUnfiltered());
    let str1: string = "";

    if (int0 == 1) {
        ifSetHide(false, Component.interface_594.component_594_61);
    }
    let int1: number = 100;
    let str2: string = "";
    let int2: number = 0;
    let int3: number = 0;
    let int4: number = 1;
    let str3: string = "";
    let int5: number = 0;
    let int6: number = 0;
    ccDeleteAll(Component.interface_594.component_594_94);
    ccDeleteAll(Component.interface_594.component_594_93);
    ccDeleteAll(Component.interface_594.component_594_92);
    ifSetScrollSize(0, 0, Component.interface_594.component_594_94);
    ifSetScrollPos(0, 0, Component.interface_594.component_594_94);

    while (int1 >= 0) {
        int3 = chatGettypebyline(int1);
        if (int3 != 0 && int3 != 4 && int3 != 27 && int3 != 28 && int3 != 29 && int3 != 43 && int3 != 103 && int3 != 104 && int3 != 26 && int3 != 30 && int3 != 31 && compare(chatLineGetcrownedname(int1), "") != 0 && compare(chatGetbyline(int1), "") != 0) {
            if (int3 != 6 && int3 != 19) {
                if (int3 == 41 || int3 == 44 || int3 == 9) {
                    if (compare(str0, str1) != 0 && int3 != 6 && int3 != 19) {
                        int5 = 0;
                    } else {
                        int5 = 14798;
                    }
                    str3 = "<col=$text_colour>" + "[" + "</col>" + "<col=0000ff>" + chatGetClan(int1) + "</col>" + "<col=$text_colour>" + "]" + chatLineGetcrownedname(int1) + ": " + chatGetbyline(int1);
                } else {
                    str3 = " " + chatLineGetcrownedname(int1) + ": " + chatGetbyline(int1);
                }
            } else {
                str3 = "To " + chatLineGetcrownedname(int1) + ": " + chatGetbyline(int1);
            }
            int4 = paraheight(str3, ifGetWidth(Component.interface_594.component_594_94) - 5, Graphic.p12_full);
            if (compare(removetags(chatLineGetcrownedname(int1)), chatPlayerName()) != 0 && int3 != 6 && int3 != 19) {
                int6 = 1;
                ccCreate(Component.interface_594.component_594_93, 3, ifGetNextSubId(Component.interface_594.component_594_93));
                ccSetPosition(0, int2 * 15 + 2, 0, 0);
                ccSetSize(451, int4 * 15, 0, 0);
                ccSetColour(colour(0x678AB0));
                ccSetTrans(255);
                ccSetfill(true);
                ccHookMouseEnter(hook(cs2_237, "i", [event_comsubid]));
                ccHookMouseExit(hook(cs2_238, "i", [event_comsubid]));
                ccCreate(Component.interface_594.component_594_92, 3, ifGetNextSubId(Component.interface_594.component_594_92));
                ccSetPosition(0, int2 * 15 + 2, 0, 0);
                ccSetSize(450, int4 * 15, 0, 0);
                ccSetColour(colour(0x678AB0));
                ccSetTrans(255);
                ccSetfill(true);
                ccHookMouseEnter(hook(clientscript_snapshot_selected_highlight, "i", [event_comsubid]));
            }
            ccCreate(Component.interface_594.component_594_94, 4, ifGetNextSubId(Component.interface_594.component_594_94));
            ccSetPosition(5, int2 * 15, 0, 0);
            ccSetSize(5, 15 * int4, 1, 0);
            ccSetText(str3);
            ccSetColour(colour(0x777777));
            str1 = removetags(chatLineGetName(int1));
            if (compare(str0, str1) != 0 && int3 != 6 && int3 != 19) {
                ccSetOpBase(str1);
                ccSetOp(1, "Report");
                ccSetOnOpt(hook(cs2_234, "i", [event_comsubid]));
                ccSetColour(colour(0x000000));
            }
            ccSetTextFont(Graphic.p12_full);
            ccSetTextAlign(0, 0, 15);
            int2 = int2 + int4;
        }
        int1 = int1 - 1;
    }

    if (int6 == 0) {
        ccCreate(Component.interface_594.component_594_94, 4, ifGetNextSubId(Component.interface_594.component_594_94));
        ccSetPosition(5, int2 * 15, 0, 0);
        ccSetSize(16384, 15, 2, 0);
        ccSetText("There is no chat to report at the moment.");
        ccSetColour(colour(0x000099));
        ccSetTextFont(Graphic.p12_full);
        ccSetTextAlign(0, 0, 15);
        int2 = int2 + 1;
    }
    ifSetScrollSize(ifGetWidth(Component.interface_594.component_594_91), 2 + int2 * 15, Component.interface_594.component_594_91);
    proc_scrollbar_vertical(Component.interface_594.component_594_86, Component.interface_594.component_594_91, Graphic.scrollbar_dragger_v2_3, Graphic.scrollbar_dragger_v2_0, Graphic.scrollbar_dragger_v2_1, Graphic.scrollbar_dragger_v2_2, Graphic.scrollbar_v2_0, Graphic.scrollbar_v2_1);

    if (ccFind(Component.interface_594.component_594_86, 1) == 1) {
        scrollbar_vertical_doscroll(Component.interface_594.component_594_86, Component.interface_594.component_594_91, ifGetScrollHeight(Component.interface_594.component_594_91), true);
    }

    if (int0 == 1) {
        ifSetHide(true, Component.interface_594.component_594_61);
    }
}
