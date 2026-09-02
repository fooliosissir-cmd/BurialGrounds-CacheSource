/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,partyroom_interface_setup]

function partyroom_interface_setup(): void {
    proc_scrollbar_vertical(Component.interface_647.component_647_19, Component.interface_647.component_647_23, Graphic.scrollbar_dragger_v2_3, Graphic.scrollbar_dragger_v2_0, Graphic.scrollbar_dragger_v2_1, Graphic.scrollbar_dragger_v2_2, Graphic.scrollbar_v2_0, Graphic.scrollbar_v2_1);
    ifSetScrollPos(0, 0, Component.interface_647.component_647_19);
    scrollbar_ondrag_doscroll(Component.interface_647.component_647_19, Component.interface_647.component_647_23, 0, 1);
    proc_scrollbar_vertical(Component.interface_647.component_647_20, Component.interface_647.component_647_24, Graphic.scrollbar_dragger_v2_3, Graphic.scrollbar_dragger_v2_0, Graphic.scrollbar_dragger_v2_1, Graphic.scrollbar_dragger_v2_2, Graphic.scrollbar_v2_0, Graphic.scrollbar_v2_1);
    ifSetScrollPos(0, 0, Component.interface_647.component_647_20);
    scrollbar_ondrag_doscroll(Component.interface_647.component_647_20, Component.interface_647.component_647_24, 0, 1);
}
