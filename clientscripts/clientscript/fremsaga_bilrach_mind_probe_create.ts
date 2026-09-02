/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,fremsaga_bilrach_mind_probe_create]

function fremsaga_bilrach_mind_probe_create(): void {
    if (varc_fremsaga_bilrach_mind_probe_placed == 1) {
        return;
    }
    varc_fremsaga_bilrach_mind_probe_placed = 1;
    let int0: number = -1;
    let int1: number = 0;
    let int2: number = 0;

    if (ifGetHide(Component.interface_1270.component_1270_107) == 0) {
        int2 = int2 + 1;
    }

    if (ifGetHide(Component.interface_1270.component_1270_111) == 0) {
        int2 = int2 + 1;
    }

    if (ifGetHide(Component.interface_1270.component_1270_115) == 0) {
        int2 = int2 + 1;
    }

    switch (int2) {
        case 0:
            int1 = varc_fremsaga_bilrach_mind_layer_id_1;
            break;
        case 1:
            int1 = varc_fremsaga_bilrach_mind_layer_id_2;
            break;
        case 2:
            int1 = varc_fremsaga_bilrach_mind_layer_id_3;
            break;
        default:
            return;
    }
    let int3: component = cs2_6139(int1);
    ifSetHide(false, int3);
    let int4: number = 0;
    let int5: number = 0;
    let int6: number = 256;

    if (ccFind(int3, 0) == 1) {
        int4 = varc_fremsaga_bilrach_mind_mouse_x - ifGetX(int3);
        int5 = varc_fremsaga_bilrach_mind_mouse_y - ifGetY(int3);
        int4 = int4 - ifGetWidth(int3) / 2;
        int5 = int5 - ifGetHeight(int3) / 2;
        ccSetPosition(int4, int5, 1, 1);
        int6 = ccGetWidth();
    }
    ifSetOnTimer(hook(cs2_6141, "Iiiiiiiiiii", [event_com, int1, int4, int5, 0, 0, 0, 0, 0, 0, 0]), int3);
    int2 = int2 + 1;

    if (int2 > 0) {
        ifSetGraphic(Graphic.aif_frem_sagas_2_probe_icon_tga_4, Component.interface_1270.component_1270_42);
    }

    if (int2 > 1) {
        ifSetGraphic(Graphic.aif_frem_sagas_2_probe_icon_tga_4, Component.interface_1270.component_1270_43);
    }

    if (int2 > 2) {
        ifSetGraphic(Graphic.aif_frem_sagas_2_probe_icon_tga_4, Component.interface_1270.component_1270_44);
    }
    soundVorbisVolume(14660, 1, 0, 120);
}
