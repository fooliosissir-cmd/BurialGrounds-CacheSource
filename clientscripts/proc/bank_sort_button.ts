/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,bank_sort_button]

function proc_bank_sort_button(): void {
    let str0: string = "";

    if (varp_304 == 0) {
        ifSetGraphic(Graphic.bank_buttons_new2_0, Component.interface_762.component_762_15);
        ifSetGraphic(Graphic.bank_buttons_new1_2, Component.interface_762.component_762_16);
        str0 = "Switch to insert items mode";
    } else {
        ifSetGraphic(Graphic.bank_buttons_new2_2, Component.interface_762.component_762_15);
        ifSetGraphic(Graphic.bank_buttons_new1_3, Component.interface_762.component_762_16);
        str0 = "Switch to swap items mode";
    }
    ifSetOp(1, str0, Component.interface_762.component_762_15);
    ifSetOnMouseRepeat(hook(cs2_38, "IIsii", [event_com, Component.interface_762.component_762_121, str0, 25, 150]), Component.interface_762.component_762_15);
}
