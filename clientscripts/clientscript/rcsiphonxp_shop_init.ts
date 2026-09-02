/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,rcsiphonxp_shop_init]

function rcsiphonxp_shop_init(): void {
    proc_rcsiphonxp_shop_update_points();

    switch (mapLang()) {
        case 1:
            ifSetGraphic(Graphic.aif_runecrafting_pyramid_title_2, Component.interface_1273.component_1273_41);
            break;
        case 2:
            ifSetGraphic(Graphic.aif_runecrafting_pyramid_title_3, Component.interface_1273.component_1273_41);
            break;
        case 3:
            ifSetGraphic(Graphic.aif_runecrafting_pyramid_title_1, Component.interface_1273.component_1273_41);
            break;
        default:
            ifSetGraphic(Graphic.aif_runecrafting_pyramid_title_0, Component.interface_1273.component_1273_41);
            break;
    }
    ifSetOnTimer(hook(cs2_6164, "Ii", [Component.interface_1273.component_1273_13, 0]), Component.interface_1273.component_1273_13);

    if (mapMembers() == 0) {
        ifSetHide(false, Component.interface_1273.component_1273_30);
    }
}
