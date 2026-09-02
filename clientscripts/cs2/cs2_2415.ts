/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2415

function cs2_2415(): void {
    ifSetModel(Model.peng_rak_panel_wrench_dark, Component.interface_765.component_765_14);
    ifSetModel(Model.peng_rak_panel_wire_cutters_dark, Component.interface_765.component_765_16);
    ifSetModel(Model.peng_rak_panel_spare_wire_dark, Component.interface_765.component_765_15);
    ifSetModel(Model.peng_rak_panel_tape_dark, Component.interface_765.component_765_17);
    ifSetModel(Model.peng_rak_panel_belows_dark, Component.interface_765.component_765_18);
    ifSetModel(Model.peng_rak_panel_swordfish_dark, Component.interface_765.component_765_33);
    ifSetModel(Model.peng_rak_panel_crab_dark, Component.interface_765.component_765_34);
    ifSetModel(Model.peng_rak_panel_tooth_dark, Component.interface_765.component_765_35);
    ifSetModel(Model.peng_rak_panel_eel_dark, Component.interface_765.component_765_36);
    ifSetModel(Model.peng_rak_panel_seaweed_dark, Component.interface_765.component_765_37);
    ifSetModel(Model.peng_rak_panel_puffer_dark, Component.interface_765.component_765_38);
    ifSetModel(Model.peng_rak_panel_octopuss_dark, Component.interface_765.component_765_39);

    if (varc_peng_rak_eng_tools == 1) {
        ifSetModel(Model.peng_rak_panel_wrench, Component.interface_765.component_765_14);
    } else if (varc_peng_rak_eng_tools == 2) {
        ifSetModel(Model.peng_rak_panel_wire_cutters, Component.interface_765.component_765_16);
    } else if (varc_peng_rak_eng_tools == 3) {
        ifSetModel(Model.peng_rak_panel_spare_wire, Component.interface_765.component_765_15);
    } else if (varc_peng_rak_eng_tools == 4) {
        ifSetModel(Model.peng_rak_panel_tape, Component.interface_765.component_765_17);
    } else if (varc_peng_rak_eng_tools == 5) {
        ifSetModel(Model.peng_rak_panel_belows, Component.interface_765.component_765_18);
    } else if (varc_peng_rak_eng_tools == 6) {
        ifSetModel(Model.peng_rak_panel_swordfish, Component.interface_765.component_765_33);
    } else if (varc_peng_rak_eng_tools == 7) {
        ifSetModel(Model.peng_rak_panel_crab, Component.interface_765.component_765_34);
    } else if (varc_peng_rak_eng_tools == 8) {
        ifSetModel(Model.peng_rak_panel_tooth, Component.interface_765.component_765_35);
    } else if (varc_peng_rak_eng_tools == 9) {
        ifSetModel(Model.peng_rak_panel_eel, Component.interface_765.component_765_36);
    } else if (varc_peng_rak_eng_tools == 10) {
        ifSetModel(Model.peng_rak_panel_seaweed, Component.interface_765.component_765_37);
    } else if (varc_peng_rak_eng_tools == 11) {
        ifSetModel(Model.peng_rak_panel_puffer, Component.interface_765.component_765_38);
    } else if (varc_peng_rak_eng_tools == 12) {
        ifSetModel(Model.peng_rak_panel_octopuss, Component.interface_765.component_765_39);
    }
}
