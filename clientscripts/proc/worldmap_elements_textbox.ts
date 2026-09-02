/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,worldmap_elements_textbox]

function worldmap_elements_textbox(intArg0: coord, intArg1: boolean, strArg0: string, intArg2: struct, intArg3: component, intArg4: number, intArg5: number, intArg6: number, intArg7: number, intArg8: number): number {
    let [int9, int10] = worldmap_elements_chooseposition(intArg0, intArg1, intArg3, intArg4, intArg5, intArg6, intArg7);
    let int11: number = structParam(intArg2, Param.worldmap_overlay_textbox_marginwidth);
    let int12: number = structParam(intArg2, Param.worldmap_overlay_textbox_marginheight);
    let int13: number = parawidth(strArg0, 512, Graphic.menu_font_small) + int11 + int11;
    let int14: number = paraheight(strArg0, ifGetWidth(intArg3), Graphic.menu_font_small) * 13 + 2 + int12 + int12;
    let int15: graphic = structParam(intArg2, Param.worldmap_overlay_textbox_lefttop);
    let int16: graphic = structParam(intArg2, Param.worldmap_overlay_textbox_top);
    let int17: graphic = structParam(intArg2, Param.worldmap_overlay_textbox_left);
    let int18: colour = structParam(intArg2, Param.worldmap_overlay_text_colour);
    let int19: number = (int13 - int11) / 2;
    let int20: number = (int14 - int12) / 2;

    if (ccFind(intArg3, intArg8) == 1) {
        ccSetPosition(int9, int10, 1, 1);
    } else {
        ccCreate(intArg3, 5, intArg8);
        ccSetPosition(int9, int10, 1, 1);
        ccSetSize(int13 - int11 * 2, int14 - int12 * 2, 0, 0);
        ccSetGraphic(structParam(intArg2, Param.worldmap_overlay_textbox_filler));
        ccSettiling(true);
    }
    intArg8 = intArg8 + 1;

    if (ccFind(intArg3, intArg8) == 1) {
        ccSetPosition(int9, int10 - int20, 1, 1);
    } else {
        ccCreate(intArg3, 5, intArg8);
        ccSetPosition(int9, int10 - int20, 1, 1);
        ccSetSize(int13 - int11 * 2, int12, 0, 0);
        ccSetGraphic(int16);
        ccSettiling(true);
        ccSetvflip(false);
        ccSethflip(false);
    }
    intArg8 = intArg8 + 1;

    if (ccFind(intArg3, intArg8) == 1) {
        ccSetPosition(int9, int10 + int20, 1, 1);
    } else {
        ccCreate(intArg3, 5, intArg8);
        ccSetPosition(int9, int10 + int20, 1, 1);
        ccSetSize(int13 - int11 * 2, int12, 0, 0);
        ccSetGraphic(int16);
        ccSettiling(true);
        ccSetvflip(true);
        ccSethflip(false);
    }
    intArg8 = intArg8 + 1;

    if (ccFind(intArg3, intArg8) == 1) {
        ccSetPosition(int9 - int19, int10, 1, 1);
    } else {
        ccCreate(intArg3, 5, intArg8);
        ccSetPosition(int9 - int19, int10, 1, 1);
        ccSetSize(int11, int14 - int12 * 2, 0, 0);
        ccSetGraphic(int17);
        ccSettiling(true);
        ccSetvflip(false);
        ccSethflip(false);
    }
    intArg8 = intArg8 + 1;

    if (ccFind(intArg3, intArg8) == 1) {
        ccSetPosition(int9 + int19, int10, 1, 1);
    } else {
        ccCreate(intArg3, 5, intArg8);
        ccSetPosition(int9 + int19, int10, 1, 1);
        ccSetSize(int11, int14 - int12 * 2, 0, 0);
        ccSetGraphic(int17);
        ccSettiling(true);
        ccSetvflip(false);
        ccSethflip(true);
    }
    intArg8 = intArg8 + 1;

    if (ccFind(intArg3, intArg8) == 1) {
        ccSetPosition(int9 - int19, int10 - int20, 1, 1);
    } else {
        ccCreate(intArg3, 5, intArg8);
        ccSetPosition(int9 - int19, int10 - int20, 1, 1);
        ccSetSize(int11, int12, 0, 0);
        ccSetGraphic(int15);
        ccSettiling(false);
        ccSetvflip(false);
        ccSethflip(false);
    }
    intArg8 = intArg8 + 1;

    if (ccFind(intArg3, intArg8) == 1) {
        ccSetPosition(int9 + int19, int10 - int20, 1, 1);
    } else {
        ccCreate(intArg3, 5, intArg8);
        ccSetPosition(int9 + int19, int10 - int20, 1, 1);
        ccSetSize(int11, int12, 0, 0);
        ccSetGraphic(int15);
        ccSettiling(false);
        ccSetvflip(false);
        ccSethflip(true);
    }
    intArg8 = intArg8 + 1;

    if (ccFind(intArg3, intArg8) == 1) {
        ccSetPosition(int9 - int19, int10 + int20, 1, 1);
    } else {
        ccCreate(intArg3, 5, intArg8);
        ccSetPosition(int9 - int19, int10 + int20, 1, 1);
        ccSetSize(int11, int12, 0, 0);
        ccSetGraphic(int15);
        ccSettiling(false);
        ccSetvflip(true);
        ccSethflip(false);
    }
    intArg8 = intArg8 + 1;

    if (ccFind(intArg3, intArg8) == 1) {
        ccSetPosition(int9 + int19, int10 + int20, 1, 1);
    } else {
        ccCreate(intArg3, 5, intArg8);
        ccSetPosition(int9 + int19, int10 + int20, 1, 1);
        ccSetSize(int11, int12, 0, 0);
        ccSetGraphic(int15);
        ccSettiling(false);
        ccSetvflip(true);
        ccSethflip(true);
    }
    intArg8 = intArg8 + 1;

    if (ccFind(intArg3, intArg8) == 1) {
        ccSetPosition(int9 + 1, int10 + 1, 1, 1);
    } else {
        ccCreate(intArg3, 4, intArg8);
        ccSetPosition(int9 + 1, int10 + 1, 1, 1);
        ccSetSize(int13, int14, 0, 0);
        ccSetColour(structParam(intArg2, Param.worldmap_overlay_text_shadowcolour));
        ccSetTextAlign(1, 1, 13);
        ccSetTextFont(Graphic.menu_font_small);
        ccSetText(strArg0);
    }
    intArg8 = intArg8 + 1;

    if (ccFind(intArg3, intArg8) == 1) {
        ccSetPosition(int9, int10, 1, 1);
    } else {
        ccCreate(intArg3, 4, intArg8);
        ccSetPosition(int9, int10, 1, 1);
        ccSetSize(int13, int14, 0, 0);
        ccSetColour(int18);
        ccSetTextAlign(1, 1, 13);
        ccSetTextFont(Graphic.menu_font_small);
        ccSetText(strArg0);
    }
    intArg8 = intArg8 + 1;
    return intArg8;
}
