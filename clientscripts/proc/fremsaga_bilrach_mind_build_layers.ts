/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,fremsaga_bilrach_mind_build_layers]

function fremsaga_bilrach_mind_build_layers(intArg0: number): void {
    let int1: number = 30;
    let int2: number = 180;
    let int3: number = 0;
    let int4: number = 14;
    let int5: number = (int2 - int1) / int4;
    let int6: number = ifGetWidth(Component.interface_1270.component_1270_34) + int1;
    let int7: number = ifGetHeight(Component.interface_1270.component_1270_34) + int1;
    let int8: component = -1;
    let int9: graphic = -1;
    let int10: number = int6 / 2;
    let int11: number = int7 / 2;
    let int12: number = 0;
    let int13: number = 0;
    let int14: number = 0;
    let int15: number = 212;
    let int16: number = 324;
    let int17: number = 0;
    let int18: number = 0;
    let int19: number = 0;
    let int20: boolean = true;
    let int21: boolean = true;

    while (int3 <= int4) {
        int8 = cs2_6139(int3);
        ifSetSize(int6, int7, 0, 0, int8);
        if (random(2) == 0) {
            int9 = Graphic.graphic_10556;
        } else {
            int9 = Graphic.graphic_10557;
        }
        int14 = int15 + scale(int3, int4, int16 - int15);
        int14 = scale(75 + random(50), 100, int14);
        int17 = int14 - int14 / 20;
        int18 = int14 + int14 / 20;
        int19 = 4 + random(4);
        if (random(2) == 0) {
            int19 = 0 - int19;
        }
        if (random(2) == 1) {
            int20 = false;
        }
        if (random(2) == 1) {
            int21 = false;
        }
        switch (int3) {
            case 0:
                ccCreate(int8, 5, 0);
                ccSetSize(768, 512, 0, 0);
                ccSetPosition(0, 0, 0, 0);
                ccSetGraphic(Graphic.graphic_10560);
                break;
            case 4:
            case 8:
            case 12:
                ccCreate(int8, 5, 0);
                ccSetSize(int14, int14, 0, 0);
                ccSetGraphic(Graphic.graphic_10558);
                ifSetHide(true, int8);
                break;
            default:
                ccCreate(int8, 5, 0);
                ccSetSize(int14, int14, 0, 0);
                int12 = int10 - random(int6);
                int13 = int11 - random(int7);
                ccSetPosition(int12, int13, 1, 1);
                ifSetOnTimer(hook(cs2_6141, "Iiiiiiiiiii", [event_com, int3, int12, int13, 0, 0, 0, 0, 0, 0, intArg0]), int8);
                if (intArg0 == 1) {
                    ccSetColour(rgb_to_hex(128 + random(120), 0, 0));
                }
                ccSethflip(int20);
                ccSetvflip(int21);
                ccSetGraphic(int9);
                break;
        }
        int6 = int6 + int5;
        int7 = int7 + int5;
        int10 = int6 / 2;
        int11 = int7 / 2;
        int3 = int3 + 1;
    }
    int10 = ifGetWidth(Component.interface_1270.component_1270_34) / 2;
    int11 = ifGetHeight(Component.interface_1270.component_1270_34) / 2;
    fremsaga_bilrach_mind_reposition(int10, int11);
    varc_fremsaga_bilrach_mind_current_x = int10 * 100;
    varc_fremsaga_bilrach_mind_current_y = int11 * 100;
}
