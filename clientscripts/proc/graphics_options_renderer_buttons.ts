/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,graphics_options_renderer_buttons]

function graphics_options_renderer_buttons(intArg0: number, intArg1: number): void {
    ifSetHide(true, Component.interface_977.component_977_55);
    ifSetHide(true, Component.interface_977.component_977_56);
    ifSetHide(true, Component.interface_977.component_977_58);
    ifSetHide(true, Component.interface_977.component_977_60);
    ifSetHide(true, Component.interface_977.component_977_62);
    let int2: boolean = true;
    let int3: boolean = true;
    let int4: boolean = true;
    if (detailcanmodToolkit() == 1) {
        if (detailGetCanchoosesafemode() == 1 || intArg0 == 0) {
            int2 = false;
        }
        if (detailcansetRenderer(1) < 3) {
            int3 = false;
        }
        if (detailcansetRenderer(3) < 3) {
            int4 = false;
        }
    } else {
        switch (intArg0) {
            case 0:
                int2 = false;
                break;
            case 1:
                int3 = false;
                break;
            case 3:
                int4 = false;
                break;
        }
    }
    let int5: number = stringWidth("Modern OpenGL", Graphic.verdana_11pt_regular) + 30;
    let int6: number = 0;
    if (int2 == false) {
        int6 = int6 + 1;
    }
    if (int3 == false) {
        int6 = int6 + 1;
    }
    if (int4 == false) {
        int6 = int6 + 1;
    }
    let int7: number = (ifGetWidth(Component.interface_977.component_977_51) - (int6 * int5 + (int6 - 1) * 16)) / 2;
    ifSetHide(int2, Component.interface_977.component_977_52);
    if (int2 == false) {
        graphics_options_renderer_button(intArg1, Component.interface_977.component_977_52, 0, "Safe Mode", int5, int7);
        int7 = int7 + int5 + 16;
    }
    ifSetHide(int3, Component.interface_977.component_977_53);
    if (int3 == false) {
        graphics_options_renderer_button(intArg1, Component.interface_977.component_977_53, 1, "Legacy OpenGL", int5, int7);
        int7 = int7 + int5 + 16;
    }
    ifSetHide(int4, Component.interface_977.component_977_54);
    if (int4 == false) {
        graphics_options_renderer_button(intArg1, Component.interface_977.component_977_54, 3, "Modern OpenGL", int5, int7);
    }
    ifSetSize(ifGetWidth(Component.interface_977.component_977_4), ifGetHeight(Component.interface_977.component_977_50), 0, 0, Component.interface_977.component_977_49);
}
