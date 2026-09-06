/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,options_gameframe_dropdown_close]

function options_gameframe_dropdown_close(): void {
    ifSetHide(true, Component.interface_261.gameframe_dropdown_list);
}
