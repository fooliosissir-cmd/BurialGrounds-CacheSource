/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,gravestone_shop_setup]

function gravestone_shop_setup(intArg0: component, intArg1: component, intArg2: component, intArg3: component, intArg4: component, intArg5: component): void {
    ccDeleteAll(intArg0);
    ifSetScrollPos(0, 0, intArg0);
    ccDeleteAll(intArg1);
    ccDeleteAll(intArg2);
    ifSetText("Gravestones", intArg4);
    ifSetText("Please make your selection from the list.", intArg5);
    ifSetText("", intArg3);
    gravestone_shop_createbutton(intArg0, Graphic.emotes_40, 0, intArg2, intArg3, intArg4, intArg5);
    let int6: number = 1;
    let int7: number = 0;

    while (int7 <= 26) {
        if (testBit(varbit_gravestone_transmit, int7) == 1) {
            gravestone_shop_createbutton(intArg0, int7 + 1, int6, intArg2, intArg3, intArg4, intArg5);
            int6 = int6 + 1;
        }
        int7 = int7 + 1;
    }
    let int8: number = (ifGetWidth(intArg0) - 164) / 2;
    let int9: number = int8 + (146 + int8) * int6;

    if (int9 > ifGetHeight(intArg0)) {
        ifSetScrollSize(0, int9, intArg0);
        proc_scrollbar_vertical(intArg1, intArg0, Graphic.scrollbar_dragger_v2_3, Graphic.scrollbar_dragger_v2_0, Graphic.scrollbar_dragger_v2_1, Graphic.scrollbar_dragger_v2_2, Graphic.scrollbar_v2_0, Graphic.scrollbar_v2_1);
    }
}
