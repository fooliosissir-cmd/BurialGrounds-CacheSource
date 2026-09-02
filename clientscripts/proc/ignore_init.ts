/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,ignore_init]

function proc_ignore_init(): void {
    ifSetOnFriendTransmit(hook(ignore_transmit, "", []), Component.interface_550.component_550_4);
    proc_scrollbar_vertical(Component.interface_550.component_550_30, Component.interface_550.component_550_3, Graphic.aif_scrollbar_dragger_2_3, Graphic.aif_scrollbar_dragger_2_0, Graphic.aif_scrollbar_dragger_2_1, Graphic.aif_scrollbar_dragger_2_2, Graphic.aif_scrollbar_arrow_2_1, Graphic.aif_scrollbar_arrow_2_0);
    ifSetScrollSize(0, 0, Component.interface_550.component_550_3);
    ifSetScrollPos(0, 0, Component.interface_550.component_550_3);
    ignore_update();
}
