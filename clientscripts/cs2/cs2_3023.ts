/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3023

function cs2_3023(): void {
    ifSetSize(ifGetX(Component.interface_909.component_909_31) - ifGetX(Component.interface_909.component_909_30), 0, 0, 1, Component.interface_909.component_909_45);
    ifSetSize(ifGetWidth(Component.interface_909.component_909_41) - ifGetWidth(Component.interface_909.component_909_45) - 2, 0, 0, 1, Component.interface_909.component_909_46);
    ifSetScrollSize(0, 0, Component.interface_909.component_909_41);
    ifSetScrollPos(0, 0, Component.interface_909.component_909_41);
    proc_scrollbar_vertical(Component.interface_909.component_909_47, Component.interface_909.component_909_41, Graphic.scrollbar_dragger_v2_3, Graphic.scrollbar_dragger_v2_0, Graphic.scrollbar_dragger_v2_1, Graphic.scrollbar_dragger_v2_2, Graphic.scrollbar_v2_0, Graphic.scrollbar_v2_1);
    ifSetScrollSize(0, 0, Component.interface_909.component_909_78);
    ifSetScrollPos(0, 0, Component.interface_909.component_909_78);
    proc_scrollbar_vertical(Component.interface_909.component_909_79, Component.interface_909.component_909_78, Graphic.scrollbar_dragger_v2_3, Graphic.scrollbar_dragger_v2_0, Graphic.scrollbar_dragger_v2_1, Graphic.scrollbar_dragger_v2_2, Graphic.scrollbar_v2_0, Graphic.scrollbar_v2_1);
    ifSetScrollSize(0, 0, Component.interface_909.component_909_52);
    ifSetScrollPos(0, 0, Component.interface_909.component_909_52);
    proc_scrollbar_vertical(Component.interface_909.component_909_53, Component.interface_909.component_909_52, Graphic.scrollbar_dragger_v2_3, Graphic.scrollbar_dragger_v2_0, Graphic.scrollbar_dragger_v2_1, Graphic.scrollbar_dragger_v2_2, Graphic.scrollbar_v2_0, Graphic.scrollbar_v2_1);
    varc_1122 = ifGetHeight(Component.interface_909.component_909_52);
    cs2_3029(Component.interface_909.component_909_45, Component.interface_909.component_909_44, Component.interface_909.component_909_46, Component.interface_909.component_909_42, Component.interface_909.component_909_41, Component.interface_909.component_909_47);
    ifSetOnFriendTransmit(hook(cs2_3028, "IIIIII", [Component.interface_909.component_909_45, Component.interface_909.component_909_44, Component.interface_909.component_909_46, Component.interface_909.component_909_42, Component.interface_909.component_909_41, Component.interface_909.component_909_47]), Component.interface_909.component_909_41);
    cs2_3041(Component.interface_909.component_909_87, Component.interface_909.component_909_86, Component.interface_909.component_909_84, Component.interface_909.component_909_78, Component.interface_909.component_909_79);
    ifSetOnFriendTransmit(hook(cs2_3040, "IIIII", [Component.interface_909.component_909_87, Component.interface_909.component_909_86, Component.interface_909.component_909_84, Component.interface_909.component_909_78, Component.interface_909.component_909_79]), Component.interface_909.component_909_78);
    cs2_3024(Component.interface_909.component_909_56);
    varcstr_276 = "";
    varc_1274 = -1;
    cs2_3401();
}
