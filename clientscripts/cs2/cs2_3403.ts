/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3403

function cs2_3403(intArg0: number, intArg1: boolean): void {
    let int2: number = ifGetHeight(Component.interface_909.component_909_13) - ifGetY(Component.interface_909.component_909_61) - 35 - intArg0 - 7;

    if (intArg1 == true) {
        int2 = int2 - int2 % 15;
    }

    if (int2 < 113) {
        int2 = 113;
    }
    ifSetSize(20, int2, 1, 0, Component.interface_909.component_909_49);
    varc_1274 = intArg0;
    ifSetPosition(0, ifGetY(Component.interface_909.component_909_49) - ifGetY(Component.interface_909.component_909_61) - 7, 0, 0, Component.interface_909.component_909_62);
    let int3: number = int2 - 8;
    int3 = int3 - int3 % 15;
    ifSetSize(ifGetWidth(Component.interface_909.component_909_52), int3, 0, 0, Component.interface_909.component_909_52);
    varc_1122 = varc_1122 - (int3 - int3);
    proc_lobbyscreen_pane_friendslist_chat_build(Component.interface_909.component_909_49);
    ifSetSize(ifGetWidth(Component.interface_909.component_909_16), int2 + 86, 0, 1, Component.interface_909.component_909_16);
    ifSetSize(ifGetWidth(Component.interface_909.component_909_48), int2 + 86, 0, 1, Component.interface_909.component_909_48);
    cs2_3029(Component.interface_909.component_909_45, Component.interface_909.component_909_44, Component.interface_909.component_909_46, Component.interface_909.component_909_42, Component.interface_909.component_909_41, Component.interface_909.component_909_47);
    cs2_3041(Component.interface_909.component_909_87, Component.interface_909.component_909_86, Component.interface_909.component_909_84, Component.interface_909.component_909_78, Component.interface_909.component_909_79);
}
