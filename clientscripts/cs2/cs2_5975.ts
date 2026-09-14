/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5975

function cs2_5975(): void {
    let int0: number = 0;

    if (clanProfileFind() == 1) {
        if (varbit_clan_stronghold_main_selected_layout_varp != pushVarClanBit<2074>()) {
            int0 = 1;
        }
        if (varbit_clan_stronghold_main_selected_daynight_varp != pushVarClanBit<2075>()) {
            int0 = 1;
        }
        if (varbit_clan_stronghold_main_selected_daynight_varp == 0) {
            ifSetHide(true, Component.interface_1259.component_1259_107);
            ifSetHide(false, Component.interface_1259.component_1259_101);
        } else {
            ifSetHide(false, Component.interface_1259.component_1259_107);
            ifSetHide(true, Component.interface_1259.component_1259_101);
        }
    }

    if (int0 == 1) {
        ifSetHide(true, Component.interface_1259.component_1259_71);
        ifSetHide(true, Component.interface_1259.component_1259_78);
    } else {
        ifSetHide(false, Component.interface_1259.component_1259_71);
        ifSetHide(false, Component.interface_1259.component_1259_78);
    }
}
