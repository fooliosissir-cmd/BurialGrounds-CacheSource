/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,lobbyscreen_pane_clanchat_clear]

function lobbyscreen_pane_clanchat_clear(intArg0: component, intArg1: component, intArg2: component, intArg3: component, intArg4: component, intArg5: component): void {
    ccDeleteAll(intArg0);
    ccDeleteAll(intArg1);
    ccDeleteAll(intArg2);
    ccDeleteAll(intArg3);
    ifSetHide(false, Component.interface_912.component_912_39);
    ifSetText("Not in chat", Component.interface_912.component_912_17);
    ifSetSize(ifGetWidth(Component.interface_912.component_912_38), ifGetHeight(Component.interface_912.component_912_37), 0, 0, Component.interface_912.component_912_38);
    ifSetScrollSize(0, 0, Component.interface_912.component_912_45);
    ifSetScrollPos(0, 0, Component.interface_912.component_912_45);
    scrollbar_resize(Component.interface_912.component_912_46, Component.interface_912.component_912_45, 0);
}
