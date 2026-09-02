/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,topstat_lore_button_update]

function topstat_lore_button_update(): void {
    let int0: graphic = Graphic.topstat_icon_3;

    if (getWindowMode() >= 2) {
        int0 = Graphic.aif_topstat_icon_3;
        ifSetSize(67, 34, 0, 0, Component.interface_747.component_747_3);
        ifSetPosition(2, 2, 2, 0, Component.interface_747.component_747_6);
        ifSetGraphic(Graphic.graphic_8625, Component.interface_747.component_747_5);
        ifSetPosition(3, 15, 0, 0, Component.interface_747.component_747_7);
        ifSetSize(34, 14, 0, 0, Component.interface_747.component_747_7);
    } else {
        ifSetSize(57, 34, 0, 0, Component.interface_747.component_747_3);
        ifSetPosition(1, 1, 0, 0, Component.interface_747.component_747_6);
        ifSetGraphic(Graphic.topstat_slot_full, Component.interface_747.component_747_5);
        ifSetPosition(31, 15, 0, 0, Component.interface_747.component_747_7);
        ifSetSize(24, 14, 0, 0, Component.interface_747.component_747_7);
    }
    ifSetGraphic(int0, Component.interface_747.component_747_2);
}
