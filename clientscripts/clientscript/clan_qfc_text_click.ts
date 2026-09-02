/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,clan_qfc_text_click]

function clan_qfc_text_click(intArg0: component, intArg1: component, intArg2: number): void {
    varcstr_qfc_input_varc = ifGetText(intArg0);
    varc_qfc_input_caret_varc = cs2_1552(varc_qfc_input_caret_varc, varcstr_qfc_input_varc, Graphic.graphic_5631, intArg0, -1);
    ifSetPosition(varc_qfc_input_caret_varc, 5, 0, 0, intArg1);
}
