/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5543

function cs2_5543(): void {
    let int0: number = cs2_5541();
    let int1: number = 0;

    if (mapMembers() == 0) {
        int0 = min(20, int0);
        int0 = max(0, int0);
        int1 = int0 * 16384 / 20;
        ifSetSize(int1, ifGetHeight(Component.interface_1178.component_1178_84), 2, 0, Component.interface_1178.component_1178_84);
        ifSetText(tostring(int0) + " / " + tostring(20), Component.interface_1178.component_1178_89);
    } else {
        int0 = min(39, int0);
        int0 = max(0, int0);
        int1 = int0 * 16384 / 39;
        ifSetSize(int1, ifGetHeight(Component.interface_1178.component_1178_84), 2, 0, Component.interface_1178.component_1178_84);
        ifSetText(tostring(int0) + " / " + tostring(39), Component.interface_1178.component_1178_89);
    }
}
