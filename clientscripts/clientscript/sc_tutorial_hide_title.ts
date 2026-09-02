/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,sc_tutorial_hide_title]

function sc_tutorial_hide_title(): void {
    ifSetText("", Component.interface_802.component_802_16);
    ifSetHide(true, Component.interface_802.component_802_19);
    varc_sc_tutorial_title_visible = 0;
}
