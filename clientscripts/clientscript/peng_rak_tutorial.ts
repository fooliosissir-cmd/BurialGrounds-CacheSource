/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,peng_rak_tutorial]

function peng_rak_tutorial(): void {
    ifSetModel(Model.peng_rak_panel_wrench_dark, Component.interface_674.component_674_13);
    ifSetModel(Model.peng_rak_panel_wire_cutters_dark, Component.interface_674.component_674_15);
    ifSetModel(Model.peng_rak_panel_spare_wire_dark, Component.interface_674.component_674_14);
    ifSetModel(Model.peng_rak_panel_tape_dark, Component.interface_674.component_674_16);
    ifSetModel(Model.peng_rak_panel_belows_dark, Component.interface_674.component_674_17);

    if (varc_peng_rak_eng_tutorial == 1) {
        ifSetModel(Model.peng_rak_panel_wrench, Component.interface_674.component_674_13);
        soundSynth(Sound.sound_6691, 1, 0);
        ifSetHide(true, Component.interface_674.component_674_10);
    } else if (varc_peng_rak_eng_tutorial == 2) {
        ifSetModel(Model.peng_rak_panel_wire_cutters, Component.interface_674.component_674_15);
        soundSynth(Sound.sound_6694, 1, 0);
        ifSetModel(Model.peng_rak_panel_wires_cut, Component.interface_674.component_674_6);
    } else if (varc_peng_rak_eng_tutorial == 3) {
        ifSetModel(Model.peng_rak_panel_spare_wire, Component.interface_674.component_674_14);
        ifSetModel(Model.peng_rak_panel_wires_wire, Component.interface_674.component_674_6);
    } else if (varc_peng_rak_eng_tutorial == 4) {
        ifSetModel(Model.peng_rak_panel_tape, Component.interface_674.component_674_16);
        soundSynth(Sound.sound_6695, 1, 0);
        ifSetModel(Model.peng_rak_panel_wires_tape, Component.interface_674.component_674_6);
    } else if (varc_peng_rak_eng_tutorial == 5) {
        ifSetModel(Model.peng_rak_panel_belows, Component.interface_674.component_674_17);
        soundSynth(Sound.sound_6690, 1, 0);
        ifSetHide(false, Component.interface_674.component_674_5);
    } else if (varc_peng_rak_eng_tutorial == 6) {
        ifSetModelAnim(11761, Component.interface_674.component_674_9);
    } else if (varc_peng_rak_eng_tutorial == 7) {
        ifSetModelAnim(11760, Component.interface_674.component_674_9);
    } else if (varc_peng_rak_eng_tutorial == 8) {
        ifSetModelAnim(11759, Component.interface_674.component_674_9);
    } else if (varc_peng_rak_eng_tutorial == 9) {
        ifSetModelAnim(11763, Component.interface_674.component_674_9);
    } else if (varc_peng_rak_eng_tutorial == 10) {
        ifSetModelAnim(11764, Component.interface_674.component_674_9);
    } else if (varc_peng_rak_eng_tutorial == 11) {
        ifSetModelAnim(11765, Component.interface_674.component_674_9);
    }
}
