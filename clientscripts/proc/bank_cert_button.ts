/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,bank_cert_button]

function proc_bank_cert_button(): void {
    let str0: string = "";

    if (varp_115 == 0) {
        ifSetGraphic(Graphic.bank_buttons_new2_0, Component.interface_762.component_762_19);
        ifSetGraphic(Graphic.bank_buttons_new1_4, Component.interface_762.component_762_20);
        str0 = "Switch to note withdrawal mode";
    } else {
        ifSetGraphic(Graphic.bank_buttons_new2_2, Component.interface_762.component_762_19);
        ifSetGraphic(Graphic.bank_buttons_new1_5, Component.interface_762.component_762_20);
        str0 = "Switch to item withdrawal mode";
    }
    ifSetOp(1, str0, Component.interface_762.component_762_19);
    ifSetOnMouseRepeat(hook(cs2_38, "IIsii", [event_com, Component.interface_762.component_762_121, str0, 25, 150]), Component.interface_762.component_762_19);
}
