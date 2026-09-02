/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3978

function cs2_3978(intArg0: number, intArg1: number, strArg0: string, intArg2: component, intArg3: number, intArg4: component, intArg5: component): number {
    ifSetHide(false, intArg2);
    ifSetText(strArg0, intArg2);
    ifSetTextFont(Graphic.verdana_11pt_regular, intArg2);
    ifSetTextAlign(0, 1, 13, intArg2);
    let int6: number = ifGetWidth(intArg5) - 18;

    if (cs2_3999(intArg3) == 1) {
        int6 = int6 + 9;
    }
    let int7: number = 0;

    if (intArg4 != -1) {
        int7 = ifGetHeight(intArg4);
        int6 = int6 - 21;
    }
    let int8: number = max(int7 + 5, 15 * paraheight(strArg0, int6, Graphic.verdana_11pt_regular));
    ifSetSize(int6, int8, 0, 0, intArg2);
    ifSetPosition(9, intArg1, 0, 0, intArg2);

    if (cs2_3999(intArg3) == 0 && intArg4 != -1) {
        ifSetHide(false, intArg4);
        ifSetPosition(2, intArg1 + (int8 - ifGetHeight(intArg4)) / 2, 2, 0, intArg4);
        if (varbit_8578 == intArg0 && varbit_task_hint_task == intArg3) {
            ifSetGraphic(Graphic.aif_help_button_0, intArg4);
        } else {
            ifSetGraphic(Graphic.aif_help_button_3, intArg4);
        }
    }
    return intArg1 + int8;
}
