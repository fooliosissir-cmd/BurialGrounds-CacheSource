/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5652

function cs2_5652(): void {
    let int0: number = max(max(ifGetWidth(Component.interface_1215.component_1215_4), ifGetWidth(Component.interface_1215.component_1215_6)), ifGetWidth(Component.interface_1215.component_1215_8));

    int0 = int0 + 43 + max(max(stringWidth(ifGetText(Component.interface_1215.component_1215_10), ifGetfontmetrics(Component.interface_1215.component_1215_10)), stringWidth(ifGetText(Component.interface_1215.component_1215_11), ifGetfontmetrics(Component.interface_1215.component_1215_11))), stringWidth(ifGetText(Component.interface_1215.component_1215_12), ifGetfontmetrics(Component.interface_1215.component_1215_12)));
    let int1: number = varbit_xpdisplay_counter_1_on * 25 + varbit_xpdisplay_counter_2_on * 25 + varbit_xpdisplay_counter_3_on * 25;
    ifSetSize(max(int0, 1), max(int1, 1), 0, 0, Component.interface_1215.component_1215_1);
}
