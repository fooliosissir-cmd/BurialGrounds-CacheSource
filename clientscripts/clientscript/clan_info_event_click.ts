/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,clan_info_event_click]

function clan_info_event_click(intArg0: component): void {
    if (ifGetHeight(ifGetLayer(intArg0)) > 69) {
        proc_sliding_popout(intArg0, -1, -1, -1, 14, 70, 3, 1);
        ifSetGraphic(Graphic.aif_symbol_set_1_5, Component.interface_1107.component_1107_58);
        ifSetGraphic(Graphic.aif_symbol_set_1_5, Component.interface_1107.component_1107_59);
        ifSetnoclickthrough(false, Component.interface_1107.component_1107_40);
    } else if (ifGetHeight(ifGetLayer(intArg0)) == 14) {
        proc_sliding_popout(intArg0, -1, -1, -1, 14, 70, 3, 1);
        ifSetGraphic(Graphic.aif_symbol_set_1_4, Component.interface_1107.component_1107_58);
        ifSetGraphic(Graphic.aif_symbol_set_1_4, Component.interface_1107.component_1107_59);
        ifSetnoclickthrough(true, Component.interface_1107.component_1107_40);
    }
}
