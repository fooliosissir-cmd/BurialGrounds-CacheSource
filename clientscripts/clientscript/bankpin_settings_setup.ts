/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,bankpin_settings_setup]

function bankpin_settings_setup(): void {
    let int0: number = 0;

    if (testBit(varc_98, 31) == 1) {
        ifSetHide(true, Component.interface_14.component_14_13);
        ifSetHide(false, Component.interface_14.component_14_31);
        cs2_915(Component.interface_14.component_14_33);
        cs2_915(Component.interface_14.component_14_35);
    } else {
        ifSetHide(false, Component.interface_14.component_14_13);
        ifSetHide(true, Component.interface_14.component_14_31);
        cs2_1088(Component.interface_14.component_14_14, 0);
        cs2_1298(Component.interface_14.component_14_16, 0, 0, 0);
        cs2_1088(Component.interface_14.component_14_21, 19);
        int0 = ifGetHeight(Component.interface_14.component_14_16) - 14;
        switch (varc_98 & 0x3) {
            case 0:
                ifSetText("No PIN set", Component.interface_14.component_14_23);
                int0 = int0 / 2;
                cs2_4147(Component.interface_14.component_14_18, int0, (0 - int0) / 2, "Set a PIN");
                cs2_4147(Component.interface_14.component_14_19, int0, int0 / 2, "Change recovery delay");
                ifSetHide(true, Component.interface_14.component_14_20);
                break;
            case 3:
                ifSetText("PIN coming soon", Component.interface_14.component_14_23);
                int0 = min(int0, 50);
                cs2_4147(Component.interface_14.component_14_18, int0, 0, "Cancel the PIN");
                ifSetHide(true, Component.interface_14.component_14_19);
                ifSetHide(true, Component.interface_14.component_14_20);
                break;
            default:
                ifSetText("You have a PIN", Component.interface_14.component_14_23);
                int0 = int0 / 3;
                cs2_4147(Component.interface_14.component_14_18, int0, 0 - int0, "Change your PIN");
                cs2_4147(Component.interface_14.component_14_19, int0, 0, "Delete your PIN");
                cs2_4147(Component.interface_14.component_14_20, int0, int0, "Change recovery delay");
                break;
        }
        if (testBit(varc_98, 10) == 1) {
            ifSetText("7 days", Component.interface_14.component_14_25);
        } else {
            ifSetText("3 days", Component.interface_14.component_14_25);
        }
    }
    ccDeleteAll(Component.interface_14.component_14_28);
    ccCreate(Component.interface_14.component_14_28, 4, 0);
    ccSetTextFont(Graphic.p12_full);
    ccSetColour(colour(0xFF981F));
    ccSetTextShadow(true);
    ccSetTextAlign(0, 1, 0);
    ccSetText(varcstr_344);

    if (paraheight(varcstr_344, ifGetWidth(ifGetLayer(Component.interface_14.component_14_28)) - 14, Graphic.p12_full) * 12 + 5 <= ifGetHeight(Component.interface_14.component_14_28)) {
        ifSetSize(14, 40, 1, 1, Component.interface_14.component_14_28);
        ifSetScrollSize(0, 0, Component.interface_14.component_14_28);
        ccSetPosition(0, 0, 1, 1);
        ccSetSize(0, 0, 1, 1);
        ifSetHide(true, Component.interface_14.component_14_29);
        return;
    }
    ifSetSize(31, 40, 1, 1, Component.interface_14.component_14_28);
    int0 = paraheight(varcstr_344, ifGetWidth(Component.interface_14.component_14_28), Graphic.p12_full) * 12 + 5;
    ifSetScrollSize(0, int0, Component.interface_14.component_14_28);
    ifSetScrollPos(0, 0, Component.interface_14.component_14_28);
    ccSetPosition(0, 0, 1, 0);
    ccSetSize(0, int0, 1, 0);
    ifSetHide(false, Component.interface_14.component_14_29);
    proc_scrollbar_vertical(Component.interface_14.component_14_29, Component.interface_14.component_14_28, Graphic.scrollbar_dragger_v2_3, Graphic.scrollbar_dragger_v2_0, Graphic.scrollbar_dragger_v2_1, Graphic.scrollbar_dragger_v2_2, Graphic.scrollbar_v2_0, Graphic.scrollbar_v2_1);
}
