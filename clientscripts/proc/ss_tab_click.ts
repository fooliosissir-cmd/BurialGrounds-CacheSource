/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,ss_tab_click]

function proc_ss_tab_click(intArg0: number): void {
    soundVorbisVolume(14378, 1, 0, 255);
    let int1: number = 0;
    let int2: component = -1;
    let int3: component = -1;
    let int4: component = -1;
    let int5: component = -1;
    let int6: component = -1;

    if (ifGetGraphic(Component.interface_1308.component_1308_78) == Graphic.aif_button_large_text_orange_9) {
        int1 = 1;
    } else if (ifGetGraphic(Component.interface_1308.component_1308_132) == Graphic.aif_button_large_text_orange_9) {
        int1 = 2;
    } else if (ifGetGraphic(Component.interface_1308.component_1308_136) == Graphic.aif_button_large_text_orange_9) {
        int1 = 3;
    } else if (ifGetGraphic(Component.interface_1308.component_1308_140) == Graphic.aif_button_large_text_orange_9) {
        int1 = 4;
    }

    if (int1 == 0) {
        return;
    }

    switch (int1) {
        case 1:
            int2 = Component.interface_1308.component_1308_43;
            int4 = Component.interface_1308.component_1308_78;
            int5 = Component.interface_1308.component_1308_79;
            int6 = Component.interface_1308.component_1308_80;
            break;
        case 2:
            int2 = Component.interface_1308.component_1308_44;
            int4 = Component.interface_1308.component_1308_132;
            int5 = Component.interface_1308.component_1308_133;
            int6 = Component.interface_1308.component_1308_134;
            break;
        case 3:
            int2 = Component.interface_1308.component_1308_45;
            int4 = Component.interface_1308.component_1308_136;
            int5 = Component.interface_1308.component_1308_137;
            int6 = Component.interface_1308.component_1308_138;
            break;
        case 4:
            int2 = Component.interface_1308.component_1308_129;
            int4 = Component.interface_1308.component_1308_140;
            int5 = Component.interface_1308.component_1308_141;
            int6 = Component.interface_1308.component_1308_142;
            cs2_6404();
            break;
        default:
            return;
    }

    if (int2 == -1 || int4 == -1 || int6 == -1 || int5 == -1) {
        return;
    }
    ifSetHide(true, int2);
    cs2_6401(int4, int5, int6);
    int4 = -1;
    int5 = -1;
    int6 = -1;

    switch (intArg0) {
        case 85721170:
            int3 = Component.interface_1308.component_1308_43;
            int4 = Component.interface_1308.component_1308_78;
            int5 = Component.interface_1308.component_1308_79;
            int6 = Component.interface_1308.component_1308_80;
            break;
        case 85721172:
            int3 = Component.interface_1308.component_1308_44;
            int4 = Component.interface_1308.component_1308_132;
            int5 = Component.interface_1308.component_1308_133;
            int6 = Component.interface_1308.component_1308_134;
            cs2_6408();
            break;
        case 85721174:
            int3 = Component.interface_1308.component_1308_45;
            int4 = Component.interface_1308.component_1308_136;
            int5 = Component.interface_1308.component_1308_137;
            int6 = Component.interface_1308.component_1308_138;
            cs2_6410();
            break;
        case 85721176:
            int3 = Component.interface_1308.component_1308_129;
            int4 = Component.interface_1308.component_1308_140;
            int5 = Component.interface_1308.component_1308_141;
            int6 = Component.interface_1308.component_1308_142;
            cs2_6413();
            break;
        default:
            return;
    }

    if (int3 == -1 || int4 == -1 || int6 == -1 || int5 == -1) {
        return;
    }
    ifSetHide(false, int3);
    cs2_6402(int4, int5, int6);
}
