/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1458

function cs2_1458(intArg0: number): void {
    let int1: number = intArg0 / 10 * 44;

    if (intArg0 % 10 != 0) {
        int1 = int1 + 44;
    }
    ifSetScrollSize(ifGetWidth(Component.interface_762.component_762_95), int1, Component.interface_762.component_762_95);
    ccDeleteAll(Component.interface_762.component_762_116);

    if (int1 > ifGetHeight(Component.interface_762.component_762_95)) {
        proc_scrollbar_vertical(Component.interface_762.component_762_116, Component.interface_762.component_762_95, Graphic.scrollbar_dragger_v2_3, Graphic.scrollbar_dragger_v2_0, Graphic.scrollbar_dragger_v2_1, Graphic.scrollbar_dragger_v2_2, Graphic.scrollbar_v2_0, Graphic.scrollbar_v2_1);
    }
    scrollbar_ondrag_doscroll(Component.interface_762.component_762_116, Component.interface_762.component_762_95, ifGetScrollY(Component.interface_762.component_762_95), 1);
}
