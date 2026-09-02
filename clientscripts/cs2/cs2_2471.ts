/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2471

function cs2_2471(): void {
    ifSetHide(true, enumOp(type_npc, type_component, Enum.enum_1092, varp_lore_npc_head));

    if (getWindowMode() >= 2) {
        ifSetGraphic(Graphic.aif_topstat_fill_full_3, Component.interface_747.component_747_0);
        ifSetGraphic(Graphic.aif_topstat_fill_full_4, Component.interface_747.component_747_1);
    } else {
        ifSetGraphic(Graphic.topstat_fill_full_3, Component.interface_747.component_747_0);
        ifSetGraphic(Graphic.topstat_fill_full_4, Component.interface_747.component_747_1);
    }
    ifSetHide(true, Component.interface_747.component_747_9);
}
