/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5697

function cs2_5697(intArg0: number, intArg1: struct, strArg0: string): void {
    if (stringLength(strArg0) <= 0) {
        return;
    }
    let int2: number = 0;
    let int3: number = 0;

    if (ccFind(Component.interface_1218.component_1218_30, intArg0) == 1) {
        if (ifGetHide(Component.interface_1218.component_1218_80) == 1) {
            int3 = ccGetHeight() + ccGetY() - 5;
            int2 = max(paraheight(strArg0, 500, Graphic.verdana_11pt_regular), 1) * 12 + 30;
            ifSetText(strArg0, Component.interface_1218.component_1218_181);
            ifSetColour(colour(0xDB9000), Component.interface_1218.component_1218_181);
            ifSetSize(ifGetWidth(Component.interface_1218.component_1218_80), int2, 0, 0, Component.interface_1218.component_1218_80);
            if (int3 + int2 - ifGetScrollY(Component.interface_1218.component_1218_4) > ifGetHeight(Component.interface_1218.component_1218_4)) {
                int3 = ccGetY() - (int2 - 10);
            }
            ifSetPosition(ifGetX(Component.interface_1218.component_1218_80), int3, 0, 0, Component.interface_1218.component_1218_80);
            ifSetHide(false, Component.interface_1218.component_1218_80);
        } else {
            ifSetHide(true, Component.interface_1218.component_1218_80);
        }
    }
}
