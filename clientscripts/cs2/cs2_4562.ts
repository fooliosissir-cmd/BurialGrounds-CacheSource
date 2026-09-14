/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4562

function cs2_4562(intArg0: component, intArg1: number, intArg2: number, intArg3: number, intArg4: number, strArg0: string): void {
    let int5: number = 0;
    let int6: number = 0;

    if (clientClock() > intArg2 && ccFind(intArg0, intArg1) == 1) {
        ifSetHide(false, Component.interface_589.component_589_34);
        ifSetText(strArg0, Component.interface_589.component_589_38);
        ifSetSize(ifGetX(Component.interface_589.component_589_38) * 2 + stringWidth(strArg0, Graphic.p12_full), ifGetHeight(Component.interface_589.component_589_34), 0, 0, Component.interface_589.component_589_34);
        int5 = ccGetX() + intArg3 + 3 - ifGetScrollX(intArg0);
        int6 = ccGetY() + intArg4 + ifGetY(Component.interface_589.component_589_43) + ifGetY(Component.interface_589.component_589_51) - 3 - ifGetHeight(Component.interface_589.component_589_34) - ifGetScrollY(Component.interface_589.component_589_51);
        if (int5 + ifGetWidth(Component.interface_589.component_589_34) > ifGetWidth(Component.interface_589.component_589_32)) {
            int5 = ifGetWidth(Component.interface_589.component_589_32) - ifGetWidth(Component.interface_589.component_589_34);
        }
        if (int6 < 0) {
            int6 = 0;
        }
        ifSetPosition(int5, int6, 0, 0, Component.interface_589.component_589_34);
        ccSetOnMouseRepeat(noHook(""));
    }
}
