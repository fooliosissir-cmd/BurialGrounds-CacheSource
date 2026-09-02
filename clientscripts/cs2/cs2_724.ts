/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_724

function cs2_724(intArg0: component, intArg1: number, intArg2: number, strArg0: string): void {
    if (intArg0 == Component.interface_745.component_745_1 && varc_616 == 0) {
        return;
    }
    let int3: number = 0;
    let int4: number = 0;
    let int5: number = 0;
    let int6: component = -1;
    let int7: component = -1;
    let int8: component = -1;

    if (varc_tooltip_time < clientClock() + 25) {
        if (varc_tooltip_time < clientClock()) {
            varc_tooltip_time = clientClock();
        }
        varc_tooltip_time = varc_tooltip_time + 2;
        return;
    }
    varc_tooltip_time = clientClock() + 25 + 10;

    if (varc_tooltip_built != 1) {
        int5 = parawidth(strArg0, 1000, Graphic.p12_full) + 8;
        if (getWindowMode() < 2) {
            int6 = Component.interface_548.component_548_41;
            int8 = Component.interface_548.component_548_197;
            int7 = Component.interface_548.component_548_40;
        } else {
            int6 = Component.interface_746.component_746_17;
            int8 = Component.interface_746.component_746_187;
            int7 = Component.interface_746.component_746_16;
        }
        int3 = ifGetX(int7) + ifGetX(intArg0) + intArg1 - int5;
        int4 = ifGetY(int7) + ifGetY(intArg0) + intArg2;
        ifSetHide(false, int6);
        ifSetSize(int5, 17, 0, 0, int6);
        ifSetPosition(int3, int4, 0, 0, int6);
        ifSetText(strArg0, int8);
        varc_tooltip_built = 1;
    }
}
