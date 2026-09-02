/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,wof_login_popup_setup]

function wof_login_popup_setup(): void {
    ifSetText("Do not show again", Component.interface_1316.component_1316_1);
    ifSetText("Continue", Component.interface_1316.component_1316_42);
    let int0: graphic = -1;
    let int1: graphic = -1;
    let int2: graphic = -1;
    let int3: graphic = -1;

    switch (mapLang()) {
        case 2:
            int0 = Graphic.graphic_11923;
            int1 = Graphic.graphic_11924;
            int2 = Graphic.graphic_11925;
            int3 = Graphic.graphic_11926;
            break;
        case 3:
            int0 = Graphic.graphic_11927;
            int1 = Graphic.graphic_11928;
            int2 = Graphic.graphic_11929;
            int3 = Graphic.graphic_11930;
            break;
        case 1:
            int0 = Graphic.graphic_11919;
            int1 = Graphic.graphic_11920;
            int2 = Graphic.graphic_11921;
            int3 = Graphic.graphic_11922;
            break;
        default:
            int0 = Graphic.graphic_11915;
            int1 = Graphic.graphic_11916;
            int2 = Graphic.graphic_11917;
            int3 = Graphic.graphic_11918;
            break;
    }
    ifSetGraphic(int0, Component.interface_1316.component_1316_3);
    ifSetGraphic(int1, Component.interface_1316.component_1316_4);
    ifSetGraphic(int2, Component.interface_1316.component_1316_5);
    ifSetGraphic(int3, Component.interface_1316.component_1316_6);
}
