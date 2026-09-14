/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,bank_placeholder_button]

function proc_bank_placeholder_button(): void {
    let str0: string = "";

    if (varbit_bank_placeholders == 0) {
        ifSetGraphic(Graphic.bank_buttons_new2_0, Component.interface_762.placeholder_toggle_button);
        str0 = "Switch placeholders on";
    } else {
        ifSetGraphic(Graphic.bank_buttons_new2_2, Component.interface_762.placeholder_toggle_button);
        str0 = "Switch placeholders off";
    }
    ifSetOp(1, str0, Component.interface_762.placeholder_toggle_button);
    ifSetOnMouseRepeat(hook(cs2_38, "IIsii", [event_com, Component.interface_762.component_762_121, str0, 25, 150]), Component.interface_762.placeholder_toggle_button);
}
