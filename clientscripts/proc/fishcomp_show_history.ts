/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,fishcomp_show_history]

function proc_fishcomp_show_history(): void {
    ifSetSize(ifGetWidth(Component.interface_919.component_919_47), 200, 0, 0, Component.interface_919.component_919_47);
    proc_scrollbar_vertical(Component.interface_919.component_919_58, Component.interface_919.component_919_59, Graphic.aif_scrollbar_dragger_2_3, Graphic.aif_scrollbar_dragger_2_0, Graphic.aif_scrollbar_dragger_2_1, Graphic.aif_scrollbar_dragger_2_2, Graphic.aif_scrollbar_arrow_2_1, Graphic.aif_scrollbar_arrow_2_0);
    ifSetvflip(false, Component.interface_919.component_919_68);
    ifSetvflip(false, Component.interface_919.component_919_69);
    ifSetHide(false, Component.interface_919.component_919_48);
    ifSetHide(false, Component.interface_919.component_919_53);
    ifSetHide(false, Component.interface_919.component_919_56);
    ifSetHide(true, Component.interface_919.component_919_86);
    ifSetPosition(180, 13, 0, 2, Component.interface_919.component_919_55);
}
