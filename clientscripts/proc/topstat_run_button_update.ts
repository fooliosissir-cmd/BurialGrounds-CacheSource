/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,topstat_run_button_update]

function proc_topstat_run_button_update(intArg0: component): void {
    let int1: graphic = Graphic.topstat_icon_2;
    let int2: graphic = Graphic.topstat_icon_4;
    let int3: graphic = Graphic.topstat_icon_5;
    let int4: graphic = Graphic.topstat_icon_6;
    let int5: graphic = Graphic.topstat_fill_full_2;
    let int6: graphic = Graphic.topstat_fill_full_6;

    if (getWindowMode() >= 2) {
        int1 = Graphic.aif_topstat_icon_2;
        int2 = Graphic.aif_topstat_icon_4;
        int3 = Graphic.aif_topstat_icon_5;
        int4 = Graphic.aif_topstat_icon_6;
        int5 = Graphic.aif_topstat_fill_full_2;
        int6 = Graphic.aif_topstat_fill_full_6;
        ifSetSize(67, 34, 0, 0, Component.interface_750.component_750_3);
        ifSetPosition(2, 2, 2, 0, Component.interface_750.component_750_5);
        ifSetGraphic(Graphic.graphic_8625, intArg0);
        ifSetPosition(3, 15, 0, 0, Component.interface_750.component_750_6);
        ifSetSize(34, 14, 0, 0, Component.interface_750.component_750_6);
    } else {
        ifSetSize(57, 34, 0, 0, Component.interface_750.component_750_3);
        ifSetPosition(1, 1, 0, 0, Component.interface_750.component_750_5);
        ifSetGraphic(Graphic.topstat_slot_full, intArg0);
        ifSetPosition(31, 15, 0, 0, Component.interface_750.component_750_6);
        ifSetSize(24, 14, 0, 0, Component.interface_750.component_750_6);
    }

    if (varc_option_run_status_varc == 1) {
        ifSetGraphic(int2, Component.interface_750.component_750_2);
        ifSetGraphic(int6, Component.interface_750.component_750_0);
        ifSetOp(1, "Turn run mode off", intArg0);
    } else if (varc_option_run_status_varc == 0) {
        ifSetGraphic(int1, Component.interface_750.component_750_2);
        ifSetGraphic(int5, Component.interface_750.component_750_0);
        ifSetOp(1, "Turn run mode on", intArg0);
    } else if (varc_option_run_status_varc == 3) {
        ifSetGraphic(int3, Component.interface_750.component_750_2);
    } else if (varc_option_run_status_varc == 4) {
        ifSetGraphic(int4, Component.interface_750.component_750_2);
    }
}
