/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,peng_rak_engine_update]

function peng_rak_engine_update(): void {
    if (varc_peng_rak_eng_state > 0) {
        ifSetHide(true, Component.interface_765.component_765_11);
    }

    if (varc_peng_rak_eng_state > 1) {
        ifSetModel(Model.peng_rak_panel_wires_cut, Component.interface_765.component_765_5);
    }

    if (varc_peng_rak_eng_state > 2) {
        if (varbit_peng_rak_quest == 75) {
            ifSetModel(Model.peng_rak_panel_wires_wire, Component.interface_765.component_765_5);
            ifSetHide(true, Component.interface_765.component_765_15);
        } else {
            ifSetModel(Model.peng_rak_panel_wires_eel, Component.interface_765.component_765_5);
            ifSetHide(true, Component.interface_765.component_765_36);
        }
    }

    if (varc_peng_rak_eng_state > 3) {
        if (varbit_peng_rak_quest == 75) {
            ifSetModel(Model.peng_rak_panel_wires_tape, Component.interface_765.component_765_5);
            ifSetHide(true, Component.interface_765.component_765_17);
        } else {
            ifSetModel(Model.peng_rak_panel_wires_seaweed, Component.interface_765.component_765_5);
            ifSetHide(true, Component.interface_765.component_765_37);
            ifSetOp(1, "Inspect", Component.interface_765.component_765_5);
        }
    }

    if (varbit_peng_rak_gauge == 0) {
        ifSetModelAnim(11762, Component.interface_765.component_765_10);
    } else if (varbit_peng_rak_gauge == 1) {
        ifSetModelAnim(11761, Component.interface_765.component_765_10);
    } else if (varbit_peng_rak_gauge == 2) {
        ifSetModelAnim(11760, Component.interface_765.component_765_10);
    } else if (varbit_peng_rak_gauge == 3) {
        ifSetModelAnim(11759, Component.interface_765.component_765_10);
    } else if (varbit_peng_rak_gauge == 4) {
        ifSetModelAnim(11763, Component.interface_765.component_765_10);
    } else if (varbit_peng_rak_gauge == 5) {
        ifSetModelAnim(11764, Component.interface_765.component_765_10);
    } else if (varbit_peng_rak_gauge == 6) {
        ifSetModelAnim(11765, Component.interface_765.component_765_10);
    }
}
