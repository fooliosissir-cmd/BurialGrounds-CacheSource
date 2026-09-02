/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,info_box_build]

function info_box_build(): void {
    info_reset();
    ccCreate(Component.interface_1177.component_1177_0, 5, 0);
    ccSetPosition(0, 0, 1, 1);
    ccSetSize(20, 22, 1, 1);
    ccSettiling(true);
    ccCreate(Component.interface_1177.component_1177_0, 5, 1);
    ccSetSize(10, 22, 0, 1);
    ccSetPosition(0, 0, 0, 1);
    ccSettiling(true);
    ccCreate(Component.interface_1177.component_1177_0, 5, 2);
    ccSetSize(10, 22, 0, 1);
    ccSetPosition(0, 0, 2, 1);
    ccSettiling(true);
    ccCreate(Component.interface_1177.component_1177_0, 5, 3);
    ccSetSize(20, 11, 1, 0);
    ccSetPosition(0, 0, 1, 0);
    ccSettiling(true);
    ccCreate(Component.interface_1177.component_1177_0, 5, 4);
    ccSetSize(20, 11, 1, 0);
    ccSetPosition(0, 0, 1, 2);
    ccSettiling(true);
    ccCreate(Component.interface_1177.component_1177_0, 5, 5);
    ccSetSize(10, 11, 0, 0);
    ccSetPosition(0, 0, 2, 0);
    ccCreate(Component.interface_1177.component_1177_0, 5, 6);
    ccSetSize(10, 11, 0, 0);
    ccSetPosition(0, 0, 0, 0);
    ccCreate(Component.interface_1177.component_1177_0, 5, 7);
    ccSetSize(10, 11, 0, 0);
    ccSetPosition(0, 0, 0, 2);
    ccCreate(Component.interface_1177.component_1177_0, 5, 8);
    ccSetSize(10, 11, 0, 0);
    ccSetPosition(0, 0, 2, 2);
    ccCreate(Component.interface_1177.component_1177_0, 4, 9);
    ccSetSize(20, 22, 1, 1);
    ccSetPosition(0, 0, 1, 1);
    ccSetTextFont(Graphic.b12_full);
    ccSetColour(varc_info_box_text_col);
    ccSetTextAlign(1, 1, 15);
    ccSetTextShadow(false);
    ccCreate(Component.interface_1177.component_1177_0, 5, 10);
    ccSetSize(50, 50, 0, 0);
    ccSetPosition(0, 0, 1, 1);
    let int0: number = 0;

    while (int0 < 11) {
        if (varc_info_box_type == -1 || varc_info_box_type == 0) {
            switch (int0) {
                case 0:
                    if (ccFind(Component.interface_1177.component_1177_0, int0) == 1) {
                        ccSetGraphic(Graphic.aif_examine_text_frame_1_4);
                    }
                    break;
                case 1:
                    if (ccFind(Component.interface_1177.component_1177_0, int0) == 1) {
                        ccSetGraphic(Graphic.aif_examine_text_frame_1_3);
                    }
                    break;
                case 2:
                    if (ccFind(Component.interface_1177.component_1177_0, int0) == 1) {
                        ccSetGraphic(Graphic.aif_examine_text_frame_1_5);
                    }
                    break;
                case 3:
                    if (ccFind(Component.interface_1177.component_1177_0, int0) == 1) {
                        ccSetGraphic(Graphic.aif_examine_text_frame_1_1);
                    }
                    break;
                case 4:
                    if (ccFind(Component.interface_1177.component_1177_0, int0) == 1) {
                        ccSetGraphic(Graphic.aif_examine_text_frame_1_7);
                    }
                    break;
                case 5:
                    if (ccFind(Component.interface_1177.component_1177_0, int0) == 1) {
                        ccSetGraphic(Graphic.aif_examine_text_frame_1_2);
                    }
                    break;
                case 6:
                    if (ccFind(Component.interface_1177.component_1177_0, int0) == 1) {
                        ccSetGraphic(Graphic.aif_examine_text_frame_1_0);
                    }
                    break;
                case 7:
                    if (ccFind(Component.interface_1177.component_1177_0, int0) == 1) {
                        ccSetGraphic(Graphic.aif_examine_text_frame_1_6);
                    }
                    break;
                case 8:
                    if (ccFind(Component.interface_1177.component_1177_0, int0) == 1) {
                        ccSetGraphic(Graphic.aif_examine_text_frame_1_8);
                    }
                    break;
                case 9:
                    if (ccFind(Component.interface_1177.component_1177_0, int0) == 1) {
                        ccSetText(varcstr_info_box_text);
                    }
                    break;
                case 10:
                    if (ccFind(Component.interface_1177.component_1177_0, int0) != 1) {
                        break;
                    }
                    ccSetGraphic(varc_info_box_icon);
                    break;
            }
        } else if (varc_info_box_type == 1) {
            switch (int0) {
                case 0:
                    if (ccFind(Component.interface_1177.component_1177_0, int0) == 1) {
                        ccSetGraphic(Graphic.aif_examine_text_frame_2_4);
                    }
                    break;
                case 1:
                    if (ccFind(Component.interface_1177.component_1177_0, int0) == 1) {
                        ccSetGraphic(Graphic.aif_examine_text_frame_2_3);
                    }
                    break;
                case 2:
                    if (ccFind(Component.interface_1177.component_1177_0, int0) == 1) {
                        ccSetGraphic(Graphic.aif_examine_text_frame_2_5);
                    }
                    break;
                case 3:
                    if (ccFind(Component.interface_1177.component_1177_0, int0) == 1) {
                        ccSetGraphic(Graphic.aif_examine_text_frame_2_1);
                    }
                    break;
                case 4:
                    if (ccFind(Component.interface_1177.component_1177_0, int0) == 1) {
                        ccSetGraphic(Graphic.aif_examine_text_frame_2_7);
                    }
                    break;
                case 5:
                    if (ccFind(Component.interface_1177.component_1177_0, int0) == 1) {
                        ccSetGraphic(Graphic.aif_examine_text_frame_2_2);
                    }
                    break;
                case 6:
                    if (ccFind(Component.interface_1177.component_1177_0, int0) == 1) {
                        ccSetGraphic(Graphic.aif_examine_text_frame_2_0);
                    }
                    break;
                case 7:
                    if (ccFind(Component.interface_1177.component_1177_0, int0) == 1) {
                        ccSetGraphic(Graphic.aif_examine_text_frame_2_6);
                    }
                    break;
                case 8:
                    if (ccFind(Component.interface_1177.component_1177_0, int0) == 1) {
                        ccSetGraphic(Graphic.aif_examine_text_frame_2_8);
                    }
                    break;
                case 9:
                    if (ccFind(Component.interface_1177.component_1177_0, int0) == 1) {
                        ccSetText(varcstr_info_box_text);
                    }
                    break;
                case 10:
                    if (ccFind(Component.interface_1177.component_1177_0, int0) != 1) {
                        break;
                    }
                    ccSetGraphic(varc_info_box_icon);
                    break;
            }
        }
        int0 = int0 + 1;
    }
}
