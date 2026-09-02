/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,notes_init]

function notes_init(): void {
    varcstr_notes0 = "";
    varcstr_notes1 = "";
    varcstr_notes2 = "";
    varcstr_notes3 = "";
    varcstr_notes4 = "";
    varcstr_notes5 = "";
    varcstr_notes6 = "";
    varcstr_notes7 = "";
    varcstr_notes8 = "";
    varcstr_notes9 = "";
    varcstr_notes10 = "";
    varcstr_notes11 = "";
    varcstr_notes12 = "";
    varcstr_notes13 = "";
    varcstr_notes14 = "";
    varcstr_notes15 = "";
    varcstr_notes16 = "";
    varcstr_notes17 = "";
    varcstr_notes18 = "";
    varcstr_notes19 = "";
    varcstr_notes20 = "";
    varcstr_notes21 = "";
    varcstr_notes22 = "";
    varcstr_notes23 = "";
    varcstr_notes24 = "";
    varcstr_notes25 = "";
    varcstr_notes26 = "";
    varcstr_notes27 = "";
    varcstr_notes28 = "";
    varcstr_notes29 = "";
    ifSetOnVarcStrTransmit(hook(clientscript_notes_update, "Y", [], [149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178]), Component.interface_34.component_34_9);
    ifSetOnVarTransmit(hook(clientscript_notes_click, "iiY", [1, -1], [1439]), Component.interface_34.component_34_9);
    ifSetOnVarTransmit(hook(clientscript_notes_update, "Y", [], [1440, 1441]), Component.interface_34.component_34_6);
    ifSetHide(true, Component.interface_34.component_34_16);
    ccDeleteAll(Component.interface_34.component_34_15);
    ifSetScrollPos(0, 0, Component.interface_34.component_34_15);
    ifSetScrollSize(0, 0, Component.interface_34.component_34_15);
    proc_scrollbar_vertical(Component.interface_34.component_34_15, Component.interface_34.component_34_9, Graphic.scrollbar_dragger_v2_3, Graphic.scrollbar_dragger_v2_0, Graphic.scrollbar_dragger_v2_1, Graphic.scrollbar_dragger_v2_2, Graphic.scrollbar_v2_0, Graphic.scrollbar_v2_1);
}
