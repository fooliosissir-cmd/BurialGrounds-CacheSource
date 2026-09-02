/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,clan_chat_clearlist]

function clan_chat_clearlist(): void {
    ifSetHide(true, Component.interface_1110.component_1110_28);
    ifClearops(Component.interface_1110.component_1110_28);
    ifSetScrollPos(0, 0, Component.interface_1110.component_1110_26);
    ifSetHide(false, Component.interface_1110.component_1110_30);
    proc_scrollbar_vertical(Component.interface_1110.component_1110_30, Component.interface_1110.component_1110_26, Graphic.aif_scrollbar_dragger_2_3, Graphic.aif_scrollbar_dragger_2_0, Graphic.aif_scrollbar_dragger_2_1, Graphic.aif_scrollbar_dragger_2_2, Graphic.aif_scrollbar_arrow_2_1, Graphic.aif_scrollbar_arrow_2_0);
    ifSetGraphic(Graphic.aif_clanchat_icons_13, Component.interface_1110.component_1110_83);
    ifSetHide(true, Component.interface_1110.component_1110_13);
    ifSetSize(1, 19, 0, 0, Component.interface_1110.component_1110_20);
    varc_clan_chat_selected_slot = -1;
    varcstr_clan_channel_selected_name = "";
    ifSetText("", Component.interface_1110.component_1110_27);
}
