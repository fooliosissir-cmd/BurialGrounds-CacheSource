/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2102

function cs2_2102(): void {
    proc_scrollbar_vertical(Component.interface_297.component_297_6, Component.interface_297.component_297_4, Graphic.scrollbar_parchment_dragger_v2_3, Graphic.scrollbar_parchment_dragger_v2_0, Graphic.scrollbar_parchment_dragger_v2_1, Graphic.scrollbar_parchment_dragger_v2_2, Graphic.scrollbar_parchment_v2_0, Graphic.scrollbar_parchment_v2_1);
    let int0: number = paraheight(ifGetText(Component.interface_297.component_297_7), ifGetWidth(Component.interface_297.component_297_7), Graphic.p12_full) * 12 + 5;
    ifSetSize(ifGetWidth(Component.interface_297.component_297_7), int0, 0, 0, Component.interface_297.component_297_7);
    ifSetPosition(ifGetX(Component.interface_297.component_297_49), ifGetY(Component.interface_297.component_297_7) + int0 + 5, 0, 0, Component.interface_297.component_297_49);
    cs2_2104(0);
}
