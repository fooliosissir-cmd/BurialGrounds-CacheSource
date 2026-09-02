/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2654

function cs2_2654(): void {
    let int0: component = Component.interface_748.component_748_4;
    let int1: component = Component.interface_748.component_748_5;
    let int2: graphic = Graphic.topstat_icon_0;
    let int3: graphic = Graphic.topstat_fill_full_0;
    let int4: graphic = Graphic.topstat_fill_full_9;
    let int5: graphic = Graphic.topstat_fill_full_10;

    if (getWindowMode() >= 2) {
        int2 = Graphic.aif_topstat_icon_0;
        int3 = Graphic.aif_topstat_fill_full_0;
        int4 = Graphic.aif_topstat_fill_full_9;
        int5 = Graphic.aif_topstat_fill_full_10;
        ifSetSize(67, 34, 0, 0, Component.interface_748.component_748_0);
        ifSetPosition(2, 2, 2, 0, Component.interface_748.component_748_3);
        ifSetGraphic(Graphic.graphic_8625, Component.interface_748.component_748_1);
        ifSetGraphic(Graphic.graphic_8625, Component.interface_748.component_748_2);
        ifSetPosition(3, 15, 0, 0, Component.interface_748.component_748_8);
        ifSetSize(34, 14, 0, 0, Component.interface_748.component_748_8);
    } else {
        ifSetSize(57, 34, 0, 0, Component.interface_748.component_748_0);
        ifSetPosition(1, 1, 0, 0, Component.interface_748.component_748_3);
        ifSetGraphic(Graphic.topstat_slot_full, Component.interface_748.component_748_1);
        ifSetGraphic(Graphic.topstat_slot_full, Component.interface_748.component_748_2);
        ifSetPosition(31, 15, 0, 0, Component.interface_748.component_748_8);
        ifSetSize(24, 14, 0, 0, Component.interface_748.component_748_8);
    }
    ifSetGraphic(int2, Component.interface_748.component_748_7);

    if (varp_102 > 0) {
        ifSetGraphic(int5, int0);
        ifSetGraphic(int5, int1);
    } else if (varp_456 > 0) {
        ifSetGraphic(int4, int0);
        ifSetGraphic(int4, int1);
    } else {
        ifSetGraphic(int3, int0);
        ifSetGraphic(int3, int1);
    }
}
