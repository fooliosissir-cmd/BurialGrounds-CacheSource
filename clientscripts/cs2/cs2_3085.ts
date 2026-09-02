/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3085

function cs2_3085(intArg0: component, intArg1: number, intArg2: number, strArg0: string, intArg3: number, intArg4: number): void {
    let int5: number = 0;
    let int6: number = 0;
    let int7: number = 0;
    let int8: component = intArg0;

    if (clientClock() > intArg2) {
        ifSetText(strArg0, Component.interface_906.component_906_240);
        ifSetSize(ifGetX(Component.interface_906.component_906_240) * 2 + stringWidth(strArg0, Graphic.p12_full), ifGetHeight(Component.interface_906.component_906_234), 0, 0, Component.interface_906.component_906_234);
        while (int7 == 0) {
            if (int8 == Component.interface_906.component_906_32) {
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
        int6 = int6 + intArg4 - 3 - ifGetHeight(Component.interface_906.component_906_234);
        if (int5 + ifGetWidth(Component.interface_906.component_906_234) > ifGetWidth(Component.interface_906.component_906_0)) {
            int5 = ifGetWidth(Component.interface_906.component_906_0) - ifGetWidth(Component.interface_906.component_906_234);
        }
        if (int6 < 0) {
            int6 = 0;
        }
        ifSetPosition(int5, int6, 0, 0, Component.interface_906.component_906_234);
        ifSetHide(false, Component.interface_906.component_906_234);
        if (intArg1 < 0) {
            ifSetOnMouseOver(noHook(""), intArg0);
        } else if (ccFind(intArg0, intArg1) == 1) {
            ccSetOnMouseOver(noHook(""));
        }
    }
}
