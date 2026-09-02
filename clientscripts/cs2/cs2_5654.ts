/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5654

function cs2_5654(): void {
    if (varp_1801 == 2147483647) {
        ifSetText("Lots!", Component.interface_1215.component_1215_4);
    } else {
        ifSetText(tostringLocalised(varp_1801 / 10, 1), Component.interface_1215.component_1215_4);
    }

    if (varp_2475 == 2147483647) {
        ifSetText("Lots!", Component.interface_1215.component_1215_6);
    } else {
        ifSetText(tostringLocalised(varp_2475 / 10, 1), Component.interface_1215.component_1215_6);
    }

    if (varp_2476 == 2147483647) {
        ifSetText("Lots!", Component.interface_1215.component_1215_8);
    } else {
        ifSetText(tostringLocalised(varp_2476 / 10, 1), Component.interface_1215.component_1215_8);
    }
    ifSetSize(stringWidth(ifGetText(Component.interface_1215.component_1215_4), ifGetfontmetrics(Component.interface_1215.component_1215_4)), ifGetHeight(Component.interface_1215.component_1215_4), 0, 0, Component.interface_1215.component_1215_4);
    ifSetSize(stringWidth(ifGetText(Component.interface_1215.component_1215_6), ifGetfontmetrics(Component.interface_1215.component_1215_6)), ifGetHeight(Component.interface_1215.component_1215_6), 0, 0, Component.interface_1215.component_1215_6);
    ifSetSize(stringWidth(ifGetText(Component.interface_1215.component_1215_8), ifGetfontmetrics(Component.interface_1215.component_1215_8)), ifGetHeight(Component.interface_1215.component_1215_8), 0, 0, Component.interface_1215.component_1215_8);
    let int0: number = max(max(ifGetWidth(Component.interface_1215.component_1215_4), ifGetWidth(Component.interface_1215.component_1215_6)), ifGetWidth(Component.interface_1215.component_1215_8));
    int0 = int0 + 33;
    cs2_5660();
    ifSetHide(true, Component.interface_1215.component_1215_4);
    ifSetHide(true, Component.interface_1215.component_1215_6);
    ifSetHide(true, Component.interface_1215.component_1215_8);
    ifSetHide(true, Component.interface_1215.component_1215_5);
    ifSetHide(true, Component.interface_1215.component_1215_7);
    ifSetHide(true, Component.interface_1215.component_1215_9);
    let int1: number = 0;

    if (varbit_xpdisplay_counter_1_on == 1) {
        ifSetHide(false, Component.interface_1215.component_1215_4);
        ifSetHide(false, Component.interface_1215.component_1215_5);
        ifSetPosition(int0, int1, 2, 0, Component.interface_1215.component_1215_10);
        int1 = ifGetY(Component.interface_1215.component_1215_5) + ifGetHeight(Component.interface_1215.component_1215_5);
    }

    if (varbit_xpdisplay_counter_2_on == 1) {
        ifSetHide(false, Component.interface_1215.component_1215_6);
        ifSetHide(false, Component.interface_1215.component_1215_7);
        ifSetPosition(28, int1, 2, 0, Component.interface_1215.component_1215_6);
        ifSetPosition(ifGetX(Component.interface_1215.component_1215_7), int1, 0, 0, Component.interface_1215.component_1215_7);
        ifSetPosition(int0, int1, 2, 0, Component.interface_1215.component_1215_11);
        int1 = ifGetY(Component.interface_1215.component_1215_7) + ifGetHeight(Component.interface_1215.component_1215_7);
    }

    if (varbit_xpdisplay_counter_3_on == 1) {
        ifSetHide(false, Component.interface_1215.component_1215_8);
        ifSetHide(false, Component.interface_1215.component_1215_9);
        ifSetPosition(28, int1, 2, 0, Component.interface_1215.component_1215_8);
        ifSetPosition(ifGetX(Component.interface_1215.component_1215_9), int1, 0, 0, Component.interface_1215.component_1215_9);
        ifSetPosition(int0, int1, 2, 0, Component.interface_1215.component_1215_12);
    }
    cs2_5652();
}
