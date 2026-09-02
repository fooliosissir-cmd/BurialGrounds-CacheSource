/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6292

function cs2_6292(intArg0: number): void {
    ifSetScrollPos(0, 0, Component.interface_1296.component_1296_9);
    let int1: number = intArg0 * 12;
    ifSetScrollSize(0, int1, Component.interface_1296.component_1296_9);

    if (int1 > ifGetHeight(Component.interface_1296.component_1296_9)) {
        ifSetHide(false, Component.interface_1296.component_1296_10);
        proc_scrollbar_vertical(Component.interface_1296.component_1296_10, Component.interface_1296.component_1296_9, Graphic.aif_scrollbar_dragger_5_3, Graphic.aif_scrollbar_dragger_5_0, Graphic.aif_scrollbar_dragger_5_1, Graphic.aif_scrollbar_dragger_5_2, Graphic.aif_scrollbar_arrow_5_1, Graphic.aif_scrollbar_arrow_5_0);
    } else {
        ifSetHide(true, Component.interface_1296.component_1296_10);
    }
}
