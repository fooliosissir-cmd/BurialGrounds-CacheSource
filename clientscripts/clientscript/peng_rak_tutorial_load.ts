/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,peng_rak_tutorial_load]

function peng_rak_tutorial_load(): void {
    ifSetHide(true, Component.interface_674.component_674_18);
    ifSetHide(false, Component.interface_674.component_674_19);
    ifSetModelAnim(-1, Component.interface_674.component_674_19);
    ifSetModelAnim(-1, Component.interface_674.component_674_9);
    ifSetHide(false, Component.interface_674.component_674_10);
    ifSetModel(Model.peng_rak_panel_wires, Component.interface_674.component_674_6);
    ifSetHide(true, Component.interface_674.component_674_5);
    ifSetModelAnim(11762, Component.interface_674.component_674_9);
    varc_peng_rak_eng_tutorial = 0;
}
