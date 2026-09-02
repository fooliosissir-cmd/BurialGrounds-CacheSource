/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5456

function cs2_5456(): void {
    ifSetGraphic(Graphic.aif_pagination_buttons_5, Component.interface_1156.component_1156_101);
    ifSetGraphic(Graphic.aif_pagination_buttons_5, Component.interface_1156.component_1156_1);
    ifSetGraphic(Graphic.aif_pagination_buttons_5, Component.interface_1156.component_1156_2);
    ifSetGraphic(Graphic.aif_pagination_buttons_5, Component.interface_1156.component_1156_3);

    switch (varc_1684) {
        case 1:
            ifSetHide(false, Component.interface_1156.component_1156_96);
            ifSetHide(true, Component.interface_1156.component_1156_97);
            ifSetHide(true, Component.interface_1156.component_1156_98);
            ifSetHide(true, Component.interface_1156.component_1156_99);
            ifSetGraphic(Graphic.aif_pagination_buttons_8, Component.interface_1156.component_1156_101);
            varc_1684 = 1;
            break;
        case 2:
            ifSetHide(true, Component.interface_1156.component_1156_96);
            ifSetHide(false, Component.interface_1156.component_1156_97);
            ifSetHide(true, Component.interface_1156.component_1156_98);
            ifSetHide(true, Component.interface_1156.component_1156_99);
            ifSetGraphic(Graphic.aif_pagination_buttons_8, Component.interface_1156.component_1156_1);
            varc_1684 = 2;
            break;
        case 3:
            ifSetHide(true, Component.interface_1156.component_1156_96);
            ifSetHide(true, Component.interface_1156.component_1156_97);
            ifSetHide(false, Component.interface_1156.component_1156_98);
            ifSetHide(true, Component.interface_1156.component_1156_99);
            ifSetGraphic(Graphic.aif_pagination_buttons_8, Component.interface_1156.component_1156_2);
            varc_1684 = 3;
            break;
        case 4:
            ifSetHide(true, Component.interface_1156.component_1156_96);
            ifSetHide(true, Component.interface_1156.component_1156_97);
            ifSetHide(true, Component.interface_1156.component_1156_98);
            ifSetHide(false, Component.interface_1156.component_1156_99);
            ifSetGraphic(Graphic.aif_pagination_buttons_8, Component.interface_1156.component_1156_3);
            varc_1684 = 4;
            break;
    }
}
