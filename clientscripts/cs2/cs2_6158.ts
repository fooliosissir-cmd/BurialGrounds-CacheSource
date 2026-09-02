/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6158

function cs2_6158(): void {
    ifSetText(tostring(varc_1909), Component.interface_1274.component_1274_5);
    ifSetText(tostring(varc_1916), Component.interface_1274.component_1274_2);

    switch (varc_1917) {
        case 1:
            ifSetGraphic(Graphic.aif_runecrafting_overlay_icons_3, Component.interface_1274.component_1274_8);
            break;
        case 2:
            ifSetGraphic(Graphic.aif_runecrafting_overlay_icons_4, Component.interface_1274.component_1274_8);
            break;
        case 3:
            ifSetGraphic(Graphic.aif_runecrafting_overlay_icons_5, Component.interface_1274.component_1274_8);
            break;
        default:
            ifSetGraphic(Graphic.login_cross, Component.interface_1274.component_1274_8);
            break;
    }

    if (varc_1918 == 1) {
        ifSetHide(false, Component.interface_1274.component_1274_9);
    } else {
        ifSetHide(true, Component.interface_1274.component_1274_9);
    }
}
