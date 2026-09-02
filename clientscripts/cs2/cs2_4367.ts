/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4367

function cs2_4367(): void {
    let str0: string = escape(getclipboard());

    if (stringLength(str0) <= 13) {
        varcstr_qfc_input_varc = str0;
        varc_qfc_input_caret_varc = stringLength(varcstr_qfc_input_varc);
        varc_qfc_input_caret_varc = cs2_1552(varc_qfc_input_caret_varc, varcstr_qfc_input_varc, Graphic.graphic_5631, Component.interface_1100.component_1100_38, -1);
        ifSetPosition(varc_qfc_input_caret_varc, ifGetY(Component.interface_1100.component_1100_39), 0, 0, Component.interface_1100.component_1100_39);
        ifSetText(varcstr_qfc_input_varc, Component.interface_1100.component_1100_38);
    }
}
