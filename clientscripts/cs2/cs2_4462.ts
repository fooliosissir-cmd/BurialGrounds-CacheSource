/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4462

function cs2_4462(): void {
    let int0: number = 0;
    let int1: number = 0;
    let int2: number = 19;
    let str0: string = "";
    let int3: component = Component.interface_1110.component_1110_11;
    let int4: component = Component.interface_1110.component_1110_42;
    let int5: component = Component.interface_1110.component_1110_41;
    let int6: component = Component.interface_1110.component_1110_10;
    let int7: number = ifGetHeight(int4) / 19;
    let int8: number = 0;

    ccDeleteAll(int3);
    ccDeleteAll(int6);

    if (activeClanSettingsFindAffined() == 1) {
        ifSetText("", Component.interface_1110.component_1110_72);
        ifSetHide(true, Component.interface_1110.component_1110_43);
        int1 = activeClanSettingsGetbannedcount();
        while (int0 < int1) {
            int8 = int0 * 19;
            str0 = activeClanSettingsGetbanneddisplayname(int0);
            ccCreate(int3, 4, ifGetNextSubId(int3));
            ccSetText(str0);
            ccSetPosition(0, int0 * int2, 0, 0);
            ccSetSize(16384, int2, 2, 0);
            ccSetColour(colour(0xA4997D));
            ccSetTextFont(Graphic.verdana_11pt_regular);
            ccSetTextShadow(true);
            ccSetOpBase("<col=ffffff>" + str0);
            ccSetOp(1, "Remove ban");
            ccSetOnOp(hook(cs2_4580, "", []));
            ccSetTextAlign(0, 0, 0);
            if (int0 % 2 != 0) {
                ccCreate(int6, 3, ifGetNextSubId(int6));
                ccSetSize(16384, int2, 2, 0);
                ccSetPosition(0, int0 * int2, 0, 0);
                ccSetColour(colour(0x232220));
                ccSetfill(true);
                ccSetTrans(128);
            }
            int0 = int0 + 1;
        }
        while (int0 < int7) {
            int8 = int0 * int2;
            if (int0 % 2 != 0) {
                ccCreate(int6, 3, ifGetNextSubId(int6));
                ccSetSize(16384, int2, 2, 0);
                ccSetPosition(0, int8, 0, 0);
                ccSetColour(colour(0x232220));
                ccSetfill(true);
                ccSetTrans(128);
            }
            int0 = int0 + 1;
        }
    } else {
        ifSetHide(false, Component.interface_1110.component_1110_43);
        ifSetText("You must be part of a clan to" + "<br>" + "view the ban list.", Component.interface_1110.component_1110_72);
        ccDeleteAll(int3);
        ccDeleteAll(int6);
    }
    ifSetHide(false, int5);
    let int9: number = ifGetScrollY(Component.interface_1110.component_1110_42);
    ifSetScrollSize(ifGetWidth(Component.interface_1110.component_1110_42), int2 * max(int1, int7), Component.interface_1110.component_1110_42);
    int9 = min(int9, ifGetScrollHeight(Component.interface_1110.component_1110_42));
    ifSetScrollPos(0, int9, Component.interface_1110.component_1110_42);
    proc_scrollbar_vertical(Component.interface_1110.component_1110_41, Component.interface_1110.component_1110_42, Graphic.aif_scrollbar_dragger_2_3, Graphic.aif_scrollbar_dragger_2_0, Graphic.aif_scrollbar_dragger_2_1, Graphic.aif_scrollbar_dragger_2_2, Graphic.aif_scrollbar_arrow_2_1, Graphic.aif_scrollbar_arrow_2_0);
}
