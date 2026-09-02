/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3152

function cs2_3152(intArg0: component, intArg1: number, intArg2: number, strArg0: string, intArg3: number, intArg4: number): void {
    let int5: number = 0;
    let int6: number = 0;
    let int7: number = 0;
    let int8: component = intArg0;

    if (clientClock() > intArg2) {
        ifSetText(strArg0, Component.interface_910.component_910_17);
        ifSetSize(ifGetX(Component.interface_910.component_910_17) * 2 + stringWidth(strArg0, Graphic.p12_full), ifGetHeight(Component.interface_910.component_910_14), 0, 0, Component.interface_910.component_910_14);
        while (int7 == 0) {
            if (int8 == Component.interface_910.component_910_13) {
                int7 = 1;
            }
            int5 = int5 + ifGetX(int8);
            int6 = int6 + ifGetY(int8);
            int8 = ifGetLayer(int8);
        }
        if (intArg1 > -1 && ccFind(intArg0, intArg1) == 1) {
            int5 = int5 + ccGetX();
            int6 = int6 + ccGetY();
        }
        int5 = int5 + intArg3 + 3;
        int6 = int6 + intArg4 - 3 - ifGetHeight(Component.interface_910.component_910_14);
        if (int5 + ifGetWidth(Component.interface_910.component_910_14) > ifGetWidth(Component.interface_910.component_910_0)) {
            int5 = ifGetWidth(Component.interface_910.component_910_0) - ifGetWidth(Component.interface_910.component_910_14);
        }
        if (int6 < 0) {
            int6 = 0;
        }
        ifSetPosition(int5, int6, 0, 0, Component.interface_910.component_910_14);
        ifSetHide(false, Component.interface_910.component_910_14);
        if (intArg1 < 0) {
            ifSetOnMouseOver(noHook(""), intArg0);
        } else if (ccFind(intArg0, intArg1) == 1) {
            ccSetOnMouseOver(noHook(""));
        }
    }
}
