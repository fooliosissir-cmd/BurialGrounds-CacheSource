/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,fremsaga_thok2_overlay_update_scores]

function fremsaga_thok2_overlay_update_scores(): void {
    if (compare("", ifGetText(Component.interface_621.component_621_3)) == 0) {
        ifSetText(tostring(varbit_fremsaga_thok2_killcount_thok), Component.interface_621.component_621_3);
    } else if (compare(tostring(varbit_fremsaga_thok2_killcount_thok), ifGetText(Component.interface_621.component_621_3)) != 0) {
        ifSetText(ifGetText(Component.interface_621.component_621_3), Component.interface_621.component_621_2);
        ifSetPosition(58, -4, 0, 0, Component.interface_621.component_621_2);
        ifSetOnTimer(hook(cs2_6123, "Iii", [event_com, 14, 5]), Component.interface_621.component_621_2);
        ifSetPosition(58, -22, 0, 0, Component.interface_621.component_621_3);
        ifSetOnTimer(hook(cs2_6123, "Iii", [event_com, -4, 5]), Component.interface_621.component_621_3);
        ifSetText(tostring(varbit_fremsaga_thok2_killcount_thok), Component.interface_621.component_621_3);
    }

    if (compare("", ifGetText(Component.interface_621.component_621_5)) == 0) {
        ifSetText(tostring(varbit_fremsaga_thok2_killcount_marmaros), Component.interface_621.component_621_5);
    }

    if (compare(tostring(varbit_fremsaga_thok2_killcount_marmaros), ifGetText(Component.interface_621.component_621_5)) != 0) {
        ifSetText(ifGetText(Component.interface_621.component_621_5), Component.interface_621.component_621_4);
        ifSetPosition(394, -4, 0, 0, Component.interface_621.component_621_4);
        ifSetOnTimer(hook(cs2_6123, "Iii", [event_com, 14, 5]), Component.interface_621.component_621_4);
        ifSetPosition(394, -22, 0, 0, Component.interface_621.component_621_5);
        ifSetOnTimer(hook(cs2_6123, "Iii", [event_com, -4, 5]), Component.interface_621.component_621_5);
        ifSetText(tostring(varbit_fremsaga_thok2_killcount_marmaros), Component.interface_621.component_621_5);
    }
    let int0: number = varbit_fremsaga_thok2_killcount_thok - varbit_fremsaga_thok2_killcount_marmaros;
    int0 = max(min(int0, 20), 0 - 20);
    let int1: number = 16;
    let int2: number = 10;
    let int3: number = ifGetWidth(Component.interface_621.component_621_16) - (int1 + int2) * 2;
    let int4: number = int3 / (20 * 2);
    ifSetSize(int2 + int4 * (20 + int0), ifGetHeight(Component.interface_621.component_621_19), 0, 0, Component.interface_621.component_621_19);
    ifSetSize(int2 + int4 * (20 - int0), ifGetHeight(Component.interface_621.component_621_20), 0, 0, Component.interface_621.component_621_20);
    ifSetPosition(int1 + int2 + int4 * (20 + int0) - 16, ifGetY(Component.interface_621.component_621_25), 0, 0, Component.interface_621.component_621_25);
}
