/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,sc_tutorial_show_title]

function sc_tutorial_show_title(): void {
    ifSetHide(false, Component.interface_802.component_802_19);
    ifSetText(varcstr_43, Component.interface_802.component_802_16);
    varc_sc_tutorial_title_visible = 1;
}
