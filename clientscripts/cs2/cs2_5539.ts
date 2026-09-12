/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5539

function cs2_5539(): void {
    let int0: obj = ifGetInvObject(Component.interface_1178.component_1178_19);
    let int1: number = -1;

    if (varc_1725 == 1) {
        if (varc_1808 == 1) {
            int1 = 256;
        } else if (varc_1808 == 4) {
            int1 = 256;
        }
    }

    switch (ifGetGraphic(Component.interface_1178.component_1178_17)) {
        case Graphic.aif_tool_btn_50_0:
        case Graphic.aif_tool_btn_50_1:
            ifSetGraphic(Graphic.graphic_8751, Component.interface_1178.component_1178_29);
            if (int0 != -1) {
                ifSetHide(true, Component.interface_1178.component_1178_30);
                ifSetHide(false, Component.interface_1178.tiered_tool_model);
                ifSetObject(int0, -1, Component.interface_1178.tiered_tool_model);
                if (int1 != -1) {
                    ifSetModelAngle(ifGetmodelxof(Component.interface_1178.tiered_tool_model), ifGetmodelyof(Component.interface_1178.tiered_tool_model), ifGetModelAngleX(Component.interface_1178.tiered_tool_model), ifGetModelAngleY(Component.interface_1178.tiered_tool_model), int1, ifGetModelZoom(Component.interface_1178.tiered_tool_model), Component.interface_1178.tiered_tool_model);
                }
            } else {
                ifSetHide(false, Component.interface_1178.component_1178_30);
                ifSetHide(true, Component.interface_1178.tiered_tool_model);
                ifSetGraphic(cs2_5552(ifGetGraphic(Component.interface_1178.component_1178_18)), Component.interface_1178.component_1178_30);
                ifSetObject(-1, -1, Component.interface_1178.component_1178_30);
                ifSetObject(-1, -1, Component.interface_1178.tiered_tool_model);
            }
            break;
        case Graphic.aif_tool_btn_50_2:
        case Graphic.aif_tool_btn_50_3:
            ifSetGraphic(Graphic.graphic_8752, Component.interface_1178.component_1178_29);
            if (int0 != -1) {
                ifSetHide(true, Component.interface_1178.component_1178_30);
                ifSetHide(false, Component.interface_1178.tiered_tool_model);
                ifSetObject(int0, -1, Component.interface_1178.tiered_tool_model);
                if (int1 != -1) {
                    ifSetModelAngle(ifGetmodelxof(Component.interface_1178.tiered_tool_model), ifGetmodelyof(Component.interface_1178.tiered_tool_model), ifGetModelAngleX(Component.interface_1178.tiered_tool_model), ifGetModelAngleY(Component.interface_1178.tiered_tool_model), int1, ifGetModelZoom(Component.interface_1178.tiered_tool_model), Component.interface_1178.tiered_tool_model);
                }
            } else {
                ifSetHide(false, Component.interface_1178.component_1178_30);
                ifSetHide(true, Component.interface_1178.tiered_tool_model);
                ifSetGraphic(cs2_5552(ifGetGraphic(Component.interface_1178.component_1178_18)), Component.interface_1178.component_1178_30);
                ifSetObject(-1, -1, Component.interface_1178.component_1178_30);
                ifSetObject(-1, -1, Component.interface_1178.tiered_tool_model);
            }
            break;
    }
}
