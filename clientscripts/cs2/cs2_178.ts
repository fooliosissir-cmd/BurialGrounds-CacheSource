/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_178

function cs2_178(): void {
    ifSetonsubchange(hook(cs2_177, "", []), 49217539);
    let int0: number = 0;
    let int1: number = 0;
    let int2: number = 8;

    if (getWindowMode() >= 2) {
        ifSetHide(false, Component.interface_751.component_751_4);
        ifSetSize(ifGetWidth(Component.interface_751.component_751_3), 27, 0, 0, Component.interface_751.component_751_3);
        ifSetPosition(-3, 0, 0, 0, Component.interface_751.component_751_5);
        ifSetSize(63, 27, 0, 0, Component.interface_751.component_751_14);
        ifSetGraphic(Graphic.graphic_8558, Component.interface_751.component_751_15);
        while (int0 < int2) {
            if (varc_42 == int0 && varc_chat_view == int0) {
                ifSetGraphic(Graphic.graphic_8562, enumOp(type_int, type_component, Enum.enum_683, int0));
            } else if (varc_42 == int0) {
                ifSetGraphic(Graphic.graphic_8560, enumOp(type_int, type_component, Enum.enum_683, int0));
            } else if (varc_chat_view == int0) {
                ifSetGraphic(Graphic.graphic_8561, enumOp(type_int, type_component, Enum.enum_683, int0));
            } else if (cs2_179(int0) / 25 % 2 == 1) {
                ifSetGraphic(Graphic.graphic_8559, enumOp(type_int, type_component, Enum.enum_683, int0));
            } else {
                ifSetGraphic(Graphic.graphic_8558, enumOp(type_int, type_component, Enum.enum_683, int0));
            }
            int0 = int0 + 1;
        }
    } else {
        ifSetHide(true, Component.interface_751.component_751_4);
        ifSetSize(ifGetWidth(Component.interface_751.component_751_3), 22, 0, 0, Component.interface_751.component_751_3);
        ifSetPosition(0, 0, 0, 0, Component.interface_751.component_751_5);
        ifSetSize(57, 22, 0, 0, Component.interface_751.component_751_14);
        ifSetGraphic(Graphic.graphic_1024, Component.interface_751.component_751_15);
        while (int0 < int2) {
            if (varc_42 == int0 && varc_chat_view == int0) {
                ifSetGraphic(Graphic.small_button_pressed_highlight, enumOp(type_int, type_component, Enum.enum_683, int0));
            } else if (varc_42 == int0) {
                ifSetGraphic(Graphic.small_button_highlight, enumOp(type_int, type_component, Enum.enum_683, int0));
            } else if (varc_chat_view == int0) {
                ifSetGraphic(Graphic.small_button_pressed, enumOp(type_int, type_component, Enum.enum_683, int0));
            } else if (cs2_179(int0) / 25 % 2 == 1) {
                ifSetGraphic(Graphic.small_button_blue, enumOp(type_int, type_component, Enum.enum_683, int0));
            } else {
                ifSetGraphic(Graphic.small_button, enumOp(type_int, type_component, Enum.enum_683, int0));
            }
            int0 = int0 + 1;
        }
    }

    if (cs2_185(1) == 1) {
        ifSetText("<col=ffff00>" + "Filter", enumOp(type_int, type_component, Enum.enum_684, 1));
    } else {
        ifSetText("All", enumOp(type_int, type_component, Enum.enum_684, 1));
    }
    int0 = 2;

    while (int0 < int2) {
        int1 = cs2_185(int0);
        if (int0 == 3 && int1 == 1 && friendCount() < 0) {
            ifSetText("<col=ffff00>" + "Loading", enumOp(type_int, type_component, Enum.enum_684, int0));
        } else if (int1 == 1) {
            ifSetText("<col=ffff00>" + "Friends", enumOp(type_int, type_component, Enum.enum_684, int0));
        } else if (int1 == 2) {
            ifSetText("<col=ff0000>" + "Off", enumOp(type_int, type_component, Enum.enum_684, int0));
        } else if (int1 == 3) {
            ifSetText("<col=00ffff>" + "Hide", enumOp(type_int, type_component, Enum.enum_684, int0));
        } else {
            ifSetText("On", enumOp(type_int, type_component, Enum.enum_684, int0));
        }
        int0 = int0 + 1;
    }
    ifSetHide(false, Component.interface_751.component_751_5);
}
