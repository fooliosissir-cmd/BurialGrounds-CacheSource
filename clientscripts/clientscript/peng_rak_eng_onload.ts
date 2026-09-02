/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,peng_rak_eng_onload]

function peng_rak_eng_onload(): void {
    if (varbit_peng_rak_quest == 120) {
        ifSetHide(false, Component.interface_765.component_765_4);
        ifSetHide(true, Component.interface_765.component_765_3);
        if (invTotal(Inv.inv, Obj.peng_rak_tool_swordfish) == 0) {
            ifSetHide(true, Component.interface_765.component_765_33);
        }
        if (invTotal(Inv.inv, Obj.peng_rak_hat_octopus) == 0 && invTotal(Inv.worn, Obj.peng_rak_hat_octopus) == 0) {
            ifSetHide(true, Component.interface_765.component_765_39);
        }
        if (invTotal(Inv.inv, Obj.peng_rak_tool_seaweed) == 0) {
            ifSetHide(true, Component.interface_765.component_765_37);
        }
        if (invTotal(Inv.inv, Obj.peng_rak_hat_pufferfish) == 0 && invTotal(Inv.worn, Obj.peng_rak_hat_pufferfish) == 0) {
            ifSetHide(true, Component.interface_765.component_765_38);
        }
        if (invTotal(Inv.inv, Obj.peng_rak_tool_eel) == 0) {
            ifSetHide(true, Component.interface_765.component_765_36);
        }
        if (invTotal(Inv.inv, Obj.peng_rak_tool_sharktooth) == 0) {
            ifSetHide(true, Component.interface_765.component_765_35);
        }
        if (invTotal(Inv.inv, Obj.peng_rak_tool_crab) == 0) {
            ifSetHide(true, Component.interface_765.component_765_34);
        }
    } else {
        ifSetHide(true, Component.interface_765.component_765_4);
        ifSetHide(false, Component.interface_765.component_765_3);
    }
    ifSetModelAnim(-1, Component.interface_765.component_765_10);
    ifSetHide(false, Component.interface_765.component_765_11);
    ifSetModel(Model.peng_rak_panel_wires, Component.interface_765.component_765_5);
    ifSetModelAnim(11762, Component.interface_765.component_765_10);
    ifSetHide(true, Component.interface_765.component_765_19);
    ifSetHide(false, Component.interface_765.component_765_20);
    ifSetHide(true, Component.interface_765.component_765_6);
    ifSetHide(false, Component.interface_765.component_765_18);
    ifSetModelAnim(-1, Component.interface_765.component_765_20);
    ifSetHide(true, Component.interface_765.component_765_41);
    ifSetHide(true, Component.interface_765.component_765_40);
    ifSetHide(true, Component.interface_765.component_765_7);
    varc_peng_rak_eng_tools = 0;
    varc_peng_rak_eng_state = 0;
}
