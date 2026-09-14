/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4858

function cs2_4858(): void {
    let int0: number = 0;

    if (clanProfileFind() == 1) {
        ifSetHide(true, Component.interface_1261.component_1261_48);
        ifSetHide(true, Component.interface_1261.component_1261_50);
        ifSetHide(true, Component.interface_1261.component_1261_52);
        int0 = cs2_4948(varbit_clan_stronghold_main_selected_building_varp);
        if (int0 <= 0) {
            return;
        }
        ifSetHide(true, cs2_4968(int0));
        if (pushVarClanBit<2076>() >= 4 && pushVarClanBit<2076>() != 4) {
            ifSetHide(true, Component.interface_1261.component_1261_12);
        }
        if (pushVarClanBit<2077>() >= 4 && pushVarClanBit<2077>() != 5) {
            ifSetHide(true, Component.interface_1261.component_1261_14);
        }
        if (pushVarClanBit<2078>() >= 4 && pushVarClanBit<2078>() != 6) {
            ifSetHide(true, Component.interface_1261.component_1261_16);
        }
        if (pushVarClanBit<2079>() >= 4 && pushVarClanBit<2079>() != 7) {
            ifSetHide(true, Component.interface_1261.component_1261_18);
        }
        if (pushVarClanBit<2080>() >= 4 && pushVarClanBit<2080>() != 8) {
            ifSetHide(true, Component.interface_1261.component_1261_20);
        }
        if (pushVarClanBit<2081>() >= 4 && pushVarClanBit<2081>() != 9) {
            ifSetHide(true, Component.interface_1261.component_1261_22);
        }
        if (pushVarClanBit<2082>() >= 4 && pushVarClanBit<2082>() != 10) {
            ifSetHide(true, Component.interface_1261.component_1261_24);
        }
        if (pushVarClanBit<2083>() >= 4 && pushVarClanBit<2083>() != 11) {
            ifSetHide(true, Component.interface_1261.component_1261_26);
        }
        if (pushVarClanBit<2084>() >= 4 && pushVarClanBit<2084>() != 12) {
            ifSetHide(true, Component.interface_1261.component_1261_28);
        }
        if (pushVarClanBit<2085>() >= 4 && pushVarClanBit<2085>() != 13) {
            ifSetHide(true, Component.interface_1261.component_1261_30);
        }
        if (pushVarClanBit<2086>() >= 4 && pushVarClanBit<2086>() != 14) {
            ifSetHide(true, Component.interface_1261.component_1261_32);
        }
        if (pushVarClanBit<2087>() >= 4 && pushVarClanBit<2087>() != 15) {
            ifSetHide(true, Component.interface_1261.component_1261_34);
        }
    }
}
