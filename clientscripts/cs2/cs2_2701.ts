/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2701

function cs2_2701(intArg0: number, intArg1: boolean, intArg2: boolean): void {
    if (getWindowMode() == 1) {
        ifOpenSubClient(Component.interface_548.component_548_46, Interface.interface_883);
    } else {
        ifOpenSubClient(Component.interface_746.component_746_35, Interface.interface_883);
    }
    ifSetHide(false, Component.interface_746.component_746_35);
    ifSetHide(false, Component.interface_548.component_548_46);
    cs2_1151(Component.interface_883.component_883_18);
    cs2_1151(Component.interface_883.component_883_21);
    hookMouseEnter(hook(cs2_2702, "1II", [true, Component.interface_883.component_883_18, Component.interface_883.component_883_19]), Component.interface_883.component_883_17);
    hookMouseExit(hook(cs2_2702, "1II", [false, Component.interface_883.component_883_18, Component.interface_883.component_883_19]), Component.interface_883.component_883_17);
    hookMouseEnter(hook(cs2_2702, "1II", [true, Component.interface_883.component_883_21, Component.interface_883.component_883_22]), Component.interface_883.component_883_20);
    hookMouseExit(hook(cs2_2702, "1II", [false, Component.interface_883.component_883_21, Component.interface_883.component_883_22]), Component.interface_883.component_883_20);
    ifSetOnClick(hook(cs2_2704, "1ii11", [true, intArg0, 1, intArg1, intArg2]), Component.interface_883.component_883_17);
    ifSetOnClick(hook(cs2_2704, "1ii11", [false, intArg0, 1, intArg1, intArg2]), Component.interface_883.component_883_20);
    ifSetHide(false, Component.interface_548.component_548_166);
    ifSetHide(false, Component.interface_548.component_548_54);
    ifSetHide(false, Component.interface_548.component_548_169);
    ifSetHide(false, Component.interface_548.component_548_175);
    ifSetHide(false, Component.interface_548.component_548_145);
    ifSetHide(false, Component.interface_548.component_548_99);
}
