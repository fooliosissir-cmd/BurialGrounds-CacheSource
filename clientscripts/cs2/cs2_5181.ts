/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5181

function cs2_5181(intArg0: number): void {
    if (ifGetScrollWidth(Component.interface_1122.component_1122_82) == 0) {
        return;
    }
    ifSetScrollPos(ifGetScrollX(Component.interface_1122.component_1122_82) + 8 * intArg0, 0, Component.interface_1122.component_1122_82);
    cs2_5182();
}
