/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4017

function cs2_4017(intArg0: number, intArg1: number): void {
    if (intArg0 <= 11) {
        ifSetScrollSize(404, 215, Component.interface_1245.component_1245_324);
        proc_scrollbar_vertical(Component.interface_1245.component_1245_325, Component.interface_1245.component_1245_324, Graphic.aif_scrollbar_dragger_2_3, Graphic.aif_scrollbar_dragger_2_0, Graphic.aif_scrollbar_dragger_2_1, Graphic.aif_scrollbar_dragger_2_2, Graphic.aif_scrollbar_arrow_2_1, Graphic.aif_scrollbar_arrow_2_0);
    } else {
        ifSetScrollSize(404, intArg0 * 20, Component.interface_1245.component_1245_324);
        ifSetScrollPos(0, intArg0 * 20 - 180, Component.interface_1245.component_1245_324);
        proc_scrollbar_vertical(Component.interface_1245.component_1245_325, Component.interface_1245.component_1245_324, Graphic.aif_scrollbar_dragger_2_3, Graphic.aif_scrollbar_dragger_2_0, Graphic.aif_scrollbar_dragger_2_1, Graphic.aif_scrollbar_dragger_2_2, Graphic.aif_scrollbar_arrow_2_1, Graphic.aif_scrollbar_arrow_2_0);
    }
}
