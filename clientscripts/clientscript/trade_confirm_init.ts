/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,trade_confirm_init]

function trade_confirm_init(): void {
    if (mapLang() == 0) {
        ifSetTextFont(Graphic.p12_full, Component.interface_334.component_334_50);
        ifSetTextFont(Graphic.p12_full, Component.interface_334.component_334_52);
        ifSetTextAlign(1, 1, 17, Component.interface_334.component_334_50);
        ifSetTextAlign(1, 1, 17, Component.interface_334.component_334_52);
    } else {
        ifSetTextFont(Graphic.p11_full, Component.interface_334.component_334_50);
        ifSetTextFont(Graphic.p11_full, Component.interface_334.component_334_52);
        ifSetTextAlign(1, 1, 0, Component.interface_334.component_334_50);
        ifSetTextAlign(1, 1, 0, Component.interface_334.component_334_52);
    }
    ccDeleteAll(Component.interface_334.component_334_38);
    ccDeleteAll(Component.interface_334.component_334_39);
    ccDeleteAll(Component.interface_334.component_334_40);
    let int0: number = 0;
    let int1: obj = -1;

    if (invGetobj(90, 14) != -1 || invGetobj(90, 15) != -1 || invGetobj(90, 16) != -1 || invGetobj(90, 17) != -1 || invGetobj(90, 18) != -1 || invGetobj(90, 19) != -1 || invGetobj(90, 20) != -1 || invGetobj(90, 21) != -1 || invGetobj(90, 22) != -1 || invGetobj(90, 23) != -1 || invGetobj(90, 24) != -1 || invGetobj(90, 25) != -1 || invGetobj(90, 26) != -1 || invGetobj(90, 27) != -1) {
        ifSetHide(false, Component.interface_334.component_334_39);
        ifSetHide(false, Component.interface_334.component_334_40);
        ifSetHide(false, Component.interface_334.component_334_41);
        while (int0 < 14) {
            int1 = invGetobj(90, int0);
            if (int1 != -1) {
                ccCreate(Component.interface_334.component_334_39, 4, ifGetNextSubId(Component.interface_334.component_334_39));
                ccSetPosition(0, int0 * 12, 1, 0);
                ccSetSize(0, 12, 1, 0);
                ccSetTextAlign(0, 0, 0);
                ccSetTextFont(Graphic.p12_full);
                ccSetColour(colour(0xFFFFFF));
                ccSetTextShadow(true);
                ccSetText(cs2_4107(int1, invGetNum(90, int0)));
            }
            int0 = int0 + 1;
        }
        while (int0 < 28) {
            int1 = invGetobj(90, int0);
            if (int1 != -1) {
                ccCreate(Component.interface_334.component_334_40, 4, ifGetNextSubId(Component.interface_334.component_334_40));
                ccSetPosition(0, (int0 - 14) * 12, 1, 0);
                ccSetSize(0, 12, 1, 0);
                ccSetTextAlign(0, 0, 0);
                ccSetTextFont(Graphic.p12_full);
                ccSetColour(colour(0xFFFFFF));
                ccSetTextShadow(true);
                ccSetText(cs2_4107(int1, invGetNum(90, int0)));
            }
            int0 = int0 + 1;
        }
        cs2_4109(114, Component.interface_334.component_334_38, Component.interface_334.component_334_39, Component.interface_334.component_334_40, Component.interface_334.component_334_41, Component.interface_334.component_334_42);
        ifSetOnDrag(hook(cs2_4108, "iIIIII", [event_mousex, Component.interface_334.component_334_38, Component.interface_334.component_334_39, Component.interface_334.component_334_40, Component.interface_334.component_334_41, Component.interface_334.component_334_42]), 21889066);
        ifSetOnDragComplete(hook(cs2_4108, "iIIIII", [event_mousex, Component.interface_334.component_334_38, Component.interface_334.component_334_39, Component.interface_334.component_334_40, Component.interface_334.component_334_41, Component.interface_334.component_334_42]), 21889066);
        ifSetMouseOverCursor(Cursor.friends_arrow_cursor, Component.interface_334.component_334_42);
    } else {
        ifSetHide(true, Component.interface_334.component_334_39);
        ifSetHide(true, Component.interface_334.component_334_40);
        ifSetHide(true, Component.interface_334.component_334_41);
        while (int0 < 14) {
            int1 = invGetobj(90, int0);
            if (int1 != -1) {
                ccCreate(Component.interface_334.component_334_38, 4, ifGetNextSubId(Component.interface_334.component_334_38));
                ccSetPosition(0, int0 * 12, 1, 0);
                ccSetSize(0, 12, 1, 0);
                ccSetTextAlign(1, 0, 0);
                ccSetTextFont(Graphic.b12_full);
                ccSetColour(colour(0xFFFFFF));
                ccSetTextShadow(true);
                ccSetText(cs2_4107(int1, invGetNum(90, int0)));
            }
            int0 = int0 + 1;
        }
    }
    ccDeleteAll(Component.interface_334.component_334_49);
    ccDeleteAll(Component.interface_334.component_334_58);
    ccDeleteAll(Component.interface_334.component_334_59);
    int0 = 0;
    let int2: number = 0;

    if (invotherGetobj(90, 14) != -1 || invotherGetobj(90, 15) != -1 || invotherGetobj(90, 16) != -1 || invotherGetobj(90, 17) != -1 || invotherGetobj(90, 18) != -1 || invotherGetobj(90, 19) != -1 || invotherGetobj(90, 20) != -1 || invotherGetobj(90, 21) != -1 || invotherGetobj(90, 22) != -1 || invotherGetobj(90, 23) != -1 || invotherGetobj(90, 24) != -1 || invotherGetobj(90, 25) != -1 || invotherGetobj(90, 26) != -1 || invotherGetobj(90, 27) != -1) {
        ifSetHide(false, Component.interface_334.component_334_58);
        ifSetHide(false, Component.interface_334.component_334_59);
        ifSetHide(false, Component.interface_334.component_334_60);
        while (int0 < 14) {
            int2 = cs2_148(int0);
            if (int2 > 0 && int2 > clientClock() - 750) {
                ifSetHide(false, Component.interface_334.component_334_55);
                ccCreate(Component.interface_334.component_334_58, 3, ifGetNextSubId(Component.interface_334.component_334_58));
                ccCreate<1>(Component.interface_334.component_334_58, 3, ifGetNextSubId(Component.interface_334.component_334_58));
                ccSetPosition(0, int0 * 12, 1, 0);
                ccSetPosition<1>(0, int0 * 12, 1, 0);
                ccSetSize(0, 13, 1, 0);
                ccSetSize<1>(0, 13, 1, 0);
                ccSetColour(colour(0xFF0000));
                ccSetColour<1>(colour(0x990000));
                ccSetfill(true);
                ccSetfill<1>(false);
                ccSetOnTimer(hook(interface_flash_fade, "Iiii", [event_com, event_comsubid, int2, int2 + 750]));
                ccSetOnTimer<1>(hook(interface_flash_fade, "Iiii", [event_com, event_comsubid, int2, int2 + 750]));
            }
            int1 = invotherGetobj(90, int0);
            if (int1 != -1) {
                ccCreate(Component.interface_334.component_334_58, 4, ifGetNextSubId(Component.interface_334.component_334_58));
                ccSetPosition(0, int0 * 12, 1, 0);
                ccSetSize(0, 12, 1, 0);
                ccSetTextAlign(0, 0, 0);
                ccSetTextFont(Graphic.p12_full);
                ccSetColour(colour(0xFFFFFF));
                ccSetTextShadow(true);
                ccSetText(cs2_4107(int1, invotherGetNum(90, int0)));
            }
            int0 = int0 + 1;
        }
        while (int0 < 28) {
            int2 = cs2_148(int0);
            if (int2 > 0 && int2 > clientClock() - 750) {
                ifSetHide(false, Component.interface_334.component_334_55);
                ccCreate(Component.interface_334.component_334_59, 3, ifGetNextSubId(Component.interface_334.component_334_59));
                ccCreate<1>(Component.interface_334.component_334_59, 3, ifGetNextSubId(Component.interface_334.component_334_59));
                ccSetPosition(0, (int0 - 14) * 12, 1, 0);
                ccSetPosition<1>(0, (int0 - 14) * 12, 1, 0);
                ccSetSize(0, 13, 1, 0);
                ccSetSize<1>(0, 13, 1, 0);
                ccSetColour(colour(0xFF0000));
                ccSetColour<1>(colour(0x990000));
                ccSetfill(true);
                ccSetfill<1>(false);
                ccSetOnTimer(hook(interface_flash_fade, "Iiii", [event_com, event_comsubid, int2, int2 + 750]));
                ccSetOnTimer<1>(hook(interface_flash_fade, "Iiii", [event_com, event_comsubid, int2, int2 + 750]));
            }
            int1 = invotherGetobj(90, int0);
            if (int1 != -1) {
                ccCreate(Component.interface_334.component_334_59, 4, ifGetNextSubId(Component.interface_334.component_334_59));
                ccSetPosition(0, (int0 - 14) * 12, 1, 0);
                ccSetSize(0, 12, 1, 0);
                ccSetTextAlign(0, 0, 0);
                ccSetTextFont(Graphic.p12_full);
                ccSetColour(colour(0xFFFFFF));
                ccSetTextShadow(true);
                ccSetText(cs2_4107(int1, invotherGetNum(90, int0)));
            }
            int0 = int0 + 1;
        }
        cs2_4109(114, Component.interface_334.component_334_49, Component.interface_334.component_334_58, Component.interface_334.component_334_59, Component.interface_334.component_334_60, Component.interface_334.component_334_61);
        ifSetOnDrag(hook(cs2_4108, "iIIIII", [event_mousex, Component.interface_334.component_334_49, Component.interface_334.component_334_58, Component.interface_334.component_334_59, Component.interface_334.component_334_60, Component.interface_334.component_334_61]), 21889085);
        ifSetOnDragComplete(hook(cs2_4108, "iIIIII", [event_mousex, Component.interface_334.component_334_49, Component.interface_334.component_334_58, Component.interface_334.component_334_59, Component.interface_334.component_334_60, Component.interface_334.component_334_61]), 21889085);
        ifSetMouseOverCursor(Cursor.friends_arrow_cursor, Component.interface_334.component_334_61);
    } else {
        ifSetHide(true, Component.interface_334.component_334_58);
        ifSetHide(true, Component.interface_334.component_334_59);
        ifSetHide(true, Component.interface_334.component_334_60);
        while (int0 < 14) {
            int2 = cs2_148(int0);
            if (int2 > 0 && int2 > clientClock() - 750) {
                ifSetHide(false, Component.interface_334.component_334_55);
                ccCreate(Component.interface_334.component_334_49, 3, ifGetNextSubId(Component.interface_334.component_334_49));
                ccCreate<1>(Component.interface_334.component_334_49, 3, ifGetNextSubId(Component.interface_334.component_334_49));
                ccSetPosition(0, int0 * 12, 1, 0);
                ccSetPosition<1>(0, int0 * 12, 1, 0);
                ccSetSize(0, 13, 1, 0);
                ccSetSize<1>(0, 13, 1, 0);
                ccSetColour(colour(0xFF0000));
                ccSetColour<1>(colour(0x990000));
                ccSetfill(true);
                ccSetfill<1>(false);
                ccSetOnTimer(hook(interface_flash_fade, "Iiii", [event_com, event_comsubid, int2, int2 + 750]));
                ccSetOnTimer<1>(hook(interface_flash_fade, "Iiii", [event_com, event_comsubid, int2, int2 + 750]));
            }
            int1 = invotherGetobj(90, int0);
            if (int1 != -1) {
                ccCreate(Component.interface_334.component_334_49, 4, ifGetNextSubId(Component.interface_334.component_334_49));
                ccSetPosition(0, int0 * 12, 1, 0);
                ccSetSize(0, 12, 1, 0);
                ccSetTextAlign(1, 0, 0);
                ccSetTextFont(Graphic.b12_full);
                ccSetColour(colour(0xFFFFFF));
                ccSetTextShadow(true);
                ccSetText(cs2_4107(int1, invotherGetNum(90, int0)));
            }
            int0 = int0 + 1;
        }
    }
    int2 = cs2_148(-1);

    if (int2 > 0) {
        ifSetHide(false, Component.interface_334.component_334_55);
        ccCreate(Component.interface_334.component_334_51, 3, 0);
        ccSetHide(false);
        ccSetPosition(0, 0, 0, 0);
        ccSetSize(0, 0, 1, 1);
        ccSetColour(colour(0xFF0000));
        ccSetfill(true);
        ccSetOnTimer(hook(interface_flash_fade, "Iiii", [event_com, event_comsubid, int2, int2 + 750]));
        ccCreate(Component.interface_334.component_334_51, 3, 1);
        ccSetHide(false);
        ccSetPosition(0, 0, 0, 0);
        ccSetSize(0, 0, 1, 1);
        ccSetColour(colour(0x990000));
        ccSetfill(false);
        ccSetOnTimer(hook(interface_flash_fade, "Iiii", [event_com, event_comsubid, int2, int2 + 750]));
    }
}
