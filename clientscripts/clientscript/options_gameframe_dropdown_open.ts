/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,options_gameframe_dropdown_open]

function options_gameframe_dropdown_open(): void {
    if (ifGetHide(Component.interface_261.gameframe_dropdown_list) == 1) {
        ifSetHide(false, Component.interface_261.gameframe_dropdown_list);
    } else {
        ifSetHide(true, Component.interface_261.gameframe_dropdown_list);
    }
}
