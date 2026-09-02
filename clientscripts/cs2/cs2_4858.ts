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
        if (loadClanVarbit<2076>() >= 4 && loadClanVarbit<2076>() != 4) {
            ifSetHide(true, Component.interface_1261.component_1261_12);
        }
        if (loadClanVarbit<2077>() >= 4 && loadClanVarbit<2077>() != 5) {
            ifSetHide(true, Component.interface_1261.component_1261_14);
        }
        if (loadClanVarbit<2078>() >= 4 && loadClanVarbit<2078>() != 6) {
            ifSetHide(true, Component.interface_1261.component_1261_16);
        }
        if (loadClanVarbit<2079>() >= 4 && loadClanVarbit<2079>() != 7) {
            ifSetHide(true, Component.interface_1261.component_1261_18);
        }
        if (loadClanVarbit<2080>() >= 4 && loadClanVarbit<2080>() != 8) {
            ifSetHide(true, Component.interface_1261.component_1261_20);
        }
        if (loadClanVarbit<2081>() >= 4 && loadClanVarbit<2081>() != 9) {
            ifSetHide(true, Component.interface_1261.component_1261_22);
        }
        if (loadClanVarbit<2082>() >= 4 && loadClanVarbit<2082>() != 10) {
            ifSetHide(true, Component.interface_1261.component_1261_24);
        }
        if (loadClanVarbit<2083>() >= 4 && loadClanVarbit<2083>() != 11) {
            ifSetHide(true, Component.interface_1261.component_1261_26);
        }
        if (loadClanVarbit<2084>() >= 4 && loadClanVarbit<2084>() != 12) {
            ifSetHide(true, Component.interface_1261.component_1261_28);
        }
        if (loadClanVarbit<2085>() >= 4 && loadClanVarbit<2085>() != 13) {
            ifSetHide(true, Component.interface_1261.component_1261_30);
        }
        if (loadClanVarbit<2086>() >= 4 && loadClanVarbit<2086>() != 14) {
            ifSetHide(true, Component.interface_1261.component_1261_32);
        }
        if (loadClanVarbit<2087>() >= 4 && loadClanVarbit<2087>() != 15) {
            ifSetHide(true, Component.interface_1261.component_1261_34);
        }
    }
}
