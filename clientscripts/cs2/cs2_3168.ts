/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3168

function cs2_3168(intArg0: component, intArg1: number, intArg2: number, intArg3: number, intArg4: number, strArg0: string): void {
    let int5: number = 0;
    let int6: number = 0;

    if (clientClock() > intArg2 && ccFind(intArg0, intArg1) == 1) {
        ifSetHide(false, Component.interface_912.component_912_30);
        ifSetText(strArg0, Component.interface_912.component_912_34);
        ifSetSize(ifGetX(Component.interface_912.component_912_34) * 2 + stringWidth(strArg0, Graphic.p12_full), ifGetHeight(Component.interface_912.component_912_30), 0, 0, Component.interface_912.component_912_30);
        int5 = ccGetX() + intArg3 + 3 - ifGetScrollX(intArg0);
        int6 = ccGetY() + intArg4 + ifGetY(Component.interface_912.component_912_36) + ifGetY(Component.interface_912.component_912_45) - 3 - ifGetHeight(Component.interface_912.component_912_30) - ifGetScrollY(Component.interface_912.component_912_45);
        if (int5 + ifGetWidth(Component.interface_912.component_912_30) > ifGetWidth(Component.interface_912.component_912_29)) {
            int5 = ifGetWidth(Component.interface_912.component_912_29) - ifGetWidth(Component.interface_912.component_912_30);
        }
        if (int6 < 0) {
            int6 = 0;
        }
        ifSetPosition(int5, int6, 0, 0, Component.interface_912.component_912_30);
        ccSetOnMouseOver(noHook(""));
    }
}
