/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5539

function cs2_5539(): void {
    switch (ifGetGraphic(Component.interface_1178.component_1178_17)) {
        case Graphic.aif_tool_btn_50_0:
        case Graphic.aif_tool_btn_50_1:
            ifSetGraphic(Graphic.graphic_8751, Component.interface_1178.component_1178_29);
            ifSetHide(false, Component.interface_1178.component_1178_30);
            ifSetGraphic(cs2_5552(ifGetGraphic(Component.interface_1178.component_1178_18)), Component.interface_1178.component_1178_30);
            break;
        case Graphic.aif_tool_btn_50_2:
        case Graphic.aif_tool_btn_50_3:
            ifSetGraphic(Graphic.graphic_8752, Component.interface_1178.component_1178_29);
            ifSetHide(false, Component.interface_1178.component_1178_30);
            ifSetGraphic(cs2_5552(ifGetGraphic(Component.interface_1178.component_1178_18)), Component.interface_1178.component_1178_30);
            break;
    }
}
