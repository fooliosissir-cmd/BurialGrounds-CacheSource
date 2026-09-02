/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,topstat_prayer_button_update]

function proc_topstat_prayer_button_update(): void {
    let int0: number = 1245;
    let int1: graphic = Graphic.topstat_fill_full_1;
    let int2: graphic = Graphic.topstat_fill_full_5;
    let int3: graphic = Graphic.topstat_icon_1;

    if (getWindowMode() >= 2) {
        int0 = 8645;
        int1 = Graphic.aif_topstat_fill_full_1;
        int2 = Graphic.aif_topstat_fill_full_5;
        int3 = Graphic.aif_topstat_icon_1;
        if (ifGetGraphic(Component.interface_749.component_749_4) != Graphic.graphic_8625 && ifGetGraphic(Component.interface_749.component_749_4) != Graphic.graphic_8624) {
            ifSetGraphic(Graphic.graphic_8625, Component.interface_749.component_749_4);
        }
        ifSetSize(67, 34, 0, 0, Component.interface_749.component_749_3);
        ifSetPosition(2, 1, 2, 0, Component.interface_749.component_749_5);
        ifSetPosition(3, 15, 0, 0, Component.interface_749.component_749_6);
        ifSetSize(34, 14, 0, 0, Component.interface_749.component_749_6);
    } else {
        if (ifGetGraphic(Component.interface_749.component_749_4) != Graphic.topstat_slot_full && ifGetGraphic(Component.interface_749.component_749_4) != Graphic.topstat_slot_roll_empty) {
            ifSetGraphic(Graphic.topstat_slot_full, Component.interface_749.component_749_4);
        }
        ifSetSize(57, 34, 0, 0, Component.interface_749.component_749_3);
        ifSetPosition(1, 1, 0, 0, Component.interface_749.component_749_5);
        ifSetPosition(31, 15, 0, 0, Component.interface_749.component_749_6);
        ifSetSize(24, 14, 0, 0, Component.interface_749.component_749_6);
    }
    ifSetGraphic(int3, Component.interface_749.component_749_2);

    if (bool_to_int(varc_182) == 1) {
        ifSetGraphic(int2, Component.interface_749.component_749_0);
        if (varbit_prayer_mode == 1) {
            ifSetOp(1, "Turn curses off", Component.interface_749.component_749_4);
        } else {
            ifSetOp(1, "Turn prayers off", Component.interface_749.component_749_4);
        }
    } else {
        ifSetGraphic(int1, Component.interface_749.component_749_0);
        if (varbit_prayer_mode == 1) {
            ifSetOp(1, "Turn quick curses on", Component.interface_749.component_749_4);
        } else {
            ifSetOp(1, "Turn quick prayers on", Component.interface_749.component_749_4);
        }
    }
}
