/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5647

function cs2_5647(strArg0: string): void {
    let int0: number = 5;
    let int1: number = 13;

    ifSetHide(false, Component.interface_1215.component_1215_13);
    ifSetText(strArg0, Component.interface_1215.component_1215_16);
    let int2: number = int0 * 2 + parawidth(strArg0, 500, ifGetfontmetrics(Component.interface_1215.component_1215_16));
    let int3: number = int0 * 2 + paraheight(strArg0, int2, ifGetfontmetrics(Component.interface_1215.component_1215_16)) * int1;
    ifSetSize(int2, int3, 0, 0, Component.interface_1215.component_1215_13);
    int3 = varbit_xpdisplay_counter_1_on * 25 + varbit_xpdisplay_counter_2_on * 25 + varbit_xpdisplay_counter_3_on * 25;
    ifSetPosition(0, int3, 2, 0, Component.interface_1215.component_1215_13);
}
