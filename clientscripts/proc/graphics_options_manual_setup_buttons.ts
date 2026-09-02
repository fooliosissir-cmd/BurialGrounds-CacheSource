/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,graphics_options_manual_setup_buttons]

function graphics_options_manual_setup_buttons(intArg0: number, intArg1: boolean): void {
    let int2: component = Component.interface_978.component_978_36;
    let int3: component = Component.interface_978.component_978_37;
    let int4: component = Component.interface_978.component_978_38;
    let int5: component = Component.interface_978.component_978_39;
    let int6: component = Component.interface_978.component_978_40;
    let int7: component = Component.interface_978.component_978_1;

    if (intArg1 == true) {
        int2 = Component.interface_977.component_977_10;
        int3 = Component.interface_977.component_977_11;
        int4 = Component.interface_977.component_977_12;
        int5 = Component.interface_977.component_977_13;
        int6 = Component.interface_977.component_977_14;
    }
    graphics_options_manual_button(intArg0, intArg1, int2, 1, "MIN", stringWidth("MIN", Graphic.verdana_11pt_regular) + 30, "");
    graphics_options_manual_button(intArg0, intArg1, int3, 2, "LOW", stringWidth("LOW", Graphic.verdana_11pt_regular) + 30, "");
    graphics_options_manual_button(intArg0, intArg1, int4, 3, "MID", stringWidth("MID", Graphic.verdana_11pt_regular) + 30, "");
    graphics_options_manual_button(intArg0, intArg1, int5, 4, "HIGH", stringWidth("HIGH", Graphic.verdana_11pt_regular) + 30, "");
    graphics_options_manual_button(intArg0, intArg1, int6, 0, "CUSTOM", stringWidth("CUSTOM", Graphic.verdana_11pt_regular) + 30, "");

    if (intArg1 == false) {
        graphics_options_manual_button(intArg0, intArg1, int7, -1, "RE-RUN AUTO SETUP", stringWidth("RE-RUN AUTO SETUP", Graphic.verdana_11pt_regular) + 30, "");
    }
}
