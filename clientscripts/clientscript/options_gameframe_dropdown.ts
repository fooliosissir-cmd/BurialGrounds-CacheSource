/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,options_gameframe_dropdown]

function options_gameframe_dropdown(): void {
    ifSetHide(true, Component.interface_261.gameframe_dropdown_list);
    if (varbit_option_gameframe_skin == 1) {
        ifSetText("2011", Component.interface_261.gameframe_dropdown_text);
    } else {
        ifSetText("2012", Component.interface_261.gameframe_dropdown_text);
    }
}
