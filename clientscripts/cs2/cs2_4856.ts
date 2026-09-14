/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4856

function cs2_4856(): void {
    if (clanProfileFind() == 1) {
        if (pushVarClanBit<2580>() < 7) {
            ifSetHide(true, Component.interface_1261.component_1261_28);
            ifSetHide(true, Component.interface_1261.component_1261_30);
            ifSetHide(true, Component.interface_1261.component_1261_32);
            ifSetHide(true, Component.interface_1261.component_1261_34);
        }
        if (pushVarClanBit<2580>() < 5) {
            ifSetHide(true, Component.interface_1261.component_1261_26);
            ifSetHide(true, Component.interface_1261.component_1261_24);
            ifSetHide(true, Component.interface_1261.component_1261_22);
            ifSetHide(true, Component.interface_1261.component_1261_20);
        }
        if (pushVarClanBit<2580>() < 3) {
            ifSetHide(true, Component.interface_1261.component_1261_18);
            ifSetHide(true, Component.interface_1261.component_1261_16);
        }
    }
}
