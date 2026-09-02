/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1212

function cs2_1212(strArg0: string, intArg0: number, intArg1: number): void {
    ccDeleteAll(Component.interface_746.component_746_46);
    ccDeleteAll(Component.interface_1177.component_1177_0);
    let int2: number = 0;
    ccCreate(Component.interface_746.component_746_46, 5, int2);
    ccSetPosition(0, 0, 1, 1);
    ccSetSize(20, 22, 1, 1);
    ccSettiling(true);
    int2 = int2 + 1;
    ccCreate(Component.interface_746.component_746_46, 5, int2);
    ccSetSize(10, 22, 0, 1);
    ccSetPosition(0, 0, 0, 1);
    ccSettiling(true);
    int2 = int2 + 1;
    ccCreate(Component.interface_746.component_746_46, 5, int2);
    ccSetSize(10, 22, 0, 1);
    ccSetPosition(0, 0, 2, 1);
    ccSettiling(true);
    int2 = int2 + 1;
    ccCreate(Component.interface_746.component_746_46, 5, int2);
    ccSetSize(20, 11, 1, 0);
    ccSetPosition(0, 0, 1, 0);
    ccSettiling(true);
    int2 = int2 + 1;
    ccCreate(Component.interface_746.component_746_46, 5, int2);
    ccSetSize(20, 11, 1, 0);
    ccSetPosition(0, 0, 1, 2);
    ccSettiling(true);
    int2 = int2 + 1;
    ccCreate(Component.interface_746.component_746_46, 5, int2);
    ccSetSize(10, 11, 0, 0);
    ccSetPosition(0, 0, 2, 0);
    int2 = int2 + 1;
    ccCreate(Component.interface_746.component_746_46, 5, int2);
    ccSetSize(10, 11, 0, 0);
    ccSetPosition(0, 0, 0, 0);
    int2 = int2 + 1;
    ccCreate(Component.interface_746.component_746_46, 5, int2);
    ccSetSize(10, 11, 0, 0);
    ccSetPosition(0, 0, 0, 2);
    int2 = int2 + 1;
    ccCreate(Component.interface_746.component_746_46, 5, int2);
    ccSetSize(10, 11, 0, 0);
    ccSetPosition(0, 0, 2, 2);
    int2 = int2 + 1;
    ccCreate(Component.interface_746.component_746_46, 4, int2);
    ccSetSize(22, 20, 1, 1);
    ccSetPosition(0, 0, 1, 1);
    ccSetTextFont(Graphic.b12_full);
    ccSetColour(colour(0xEBE0BC));
    ccSetTextAlign(1, 1, 15);
    ccSetTextShadow(false);
    ccSetText(strArg0);
    int2 = int2 + 1;
    int2 = 0;

    while (int2 < 9) {
        if (varc_info_box_type == -1 || varc_info_box_type == 0) {
            switch (int2) {
                case 0:
                    if (ccFind(Component.interface_746.component_746_46, int2) == 1) {
                        ccSetGraphic(Graphic.aif_examine_text_frame_1_4);
                    }
                    break;
                case 1:
                    if (ccFind(Component.interface_746.component_746_46, int2) == 1) {
                        ccSetGraphic(Graphic.aif_examine_text_frame_1_3);
                    }
                    break;
                case 2:
                    if (ccFind(Component.interface_746.component_746_46, int2) == 1) {
                        ccSetGraphic(Graphic.aif_examine_text_frame_1_5);
                    }
                    break;
                case 3:
                    if (ccFind(Component.interface_746.component_746_46, int2) == 1) {
                        ccSetGraphic(Graphic.aif_examine_text_frame_1_1);
                    }
                    break;
                case 4:
                    if (ccFind(Component.interface_746.component_746_46, int2) == 1) {
                        ccSetGraphic(Graphic.aif_examine_text_frame_1_7);
                    }
                    break;
                case 5:
                    if (ccFind(Component.interface_746.component_746_46, int2) == 1) {
                        ccSetGraphic(Graphic.aif_examine_text_frame_1_2);
                    }
                    break;
                case 6:
                    if (ccFind(Component.interface_746.component_746_46, int2) == 1) {
                        ccSetGraphic(Graphic.aif_examine_text_frame_1_0);
                    }
                    break;
                case 7:
                    if (ccFind(Component.interface_746.component_746_46, int2) == 1) {
                        ccSetGraphic(Graphic.aif_examine_text_frame_1_6);
                    }
                    break;
                case 8:
                    if (ccFind(Component.interface_746.component_746_46, int2) != 1) {
                        break;
                    }
                    ccSetGraphic(Graphic.aif_examine_text_frame_1_8);
                    break;
            }
            int2 = int2 + 1;
        } else if (varc_info_box_type == 1) {
            switch (int2) {
                case 0:
                    if (ccFind(Component.interface_746.component_746_46, int2) == 1) {
                        ccSetGraphic(Graphic.aif_examine_text_frame_2_4);
                    }
                    break;
                case 1:
                    if (ccFind(Component.interface_746.component_746_46, int2) == 1) {
                        ccSetGraphic(Graphic.aif_examine_text_frame_2_3);
                    }
                    break;
                case 2:
                    if (ccFind(Component.interface_746.component_746_46, int2) == 1) {
                        ccSetGraphic(Graphic.aif_examine_text_frame_2_5);
                    }
                    break;
                case 3:
                    if (ccFind(Component.interface_746.component_746_46, int2) == 1) {
                        ccSetGraphic(Graphic.aif_examine_text_frame_2_1);
                    }
                    break;
                case 4:
                    if (ccFind(Component.interface_746.component_746_46, int2) == 1) {
                        ccSetGraphic(Graphic.aif_examine_text_frame_2_7);
                    }
                    break;
                case 5:
                    if (ccFind(Component.interface_746.component_746_46, int2) == 1) {
                        ccSetGraphic(Graphic.aif_examine_text_frame_2_2);
                    }
                    break;
                case 6:
                    if (ccFind(Component.interface_746.component_746_46, int2) == 1) {
                        ccSetGraphic(Graphic.aif_examine_text_frame_2_0);
                    }
                    break;
                case 7:
                    if (ccFind(Component.interface_746.component_746_46, int2) == 1) {
                        ccSetGraphic(Graphic.aif_examine_text_frame_2_6);
                    }
                    break;
                case 8:
                    if (ccFind(Component.interface_746.component_746_46, int2) != 1) {
                        break;
                    }
                    ccSetGraphic(Graphic.aif_examine_text_frame_2_8);
                    break;
            }
            int2 = int2 + 1;
        }
    }
}
