/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3117

function cs2_3117(intArg0: number, intArg1: number, intArg2: number, strArg0: string, strArg1: string, intArg3: number, intArg4: number): [graphic, string, graphic, colour, graphic, colour, graphic, string, string] {
    let int5: graphic = -1;
    let int6: graphic = -1;
    let int7: colour = colour(0x000000);
    let int8: colour = colour(0x000000);
    let str2: string = "";
    let int9: graphic = -1;
    let int10: graphic = -1;
    let int11: number = 0;
    let int12: number = 0;
    let int13: number = 0;
    let int14: number = 0;
    let int15: number = 0;
    let str3: string = "";
    let str4: string = "";

    if (testBit(intArg1, 0) == 1) {
        int11 = 1;
    } else {
        int11 = 0;
    }

    if (testBit(intArg1, 1) == 1) {
        int12 = 1;
    } else {
        int12 = 0;
    }

    if (testBit(intArg1, 2) == 1) {
        int13 = 1;
    } else {
        int13 = 0;
    }

    if (testBit(intArg1, 3) == 1) {
        int14 = 1;
    } else {
        int14 = 0;
    }

    if (testBit(intArg1, 4) == 1) {
        int15 = 1;
    } else {
        int15 = 0;
    }

    if (mapLang() == 0) {
        if (int15 == 1) {
            int9 = enumOp(type_int, type_graphic, Enum.enum_730, 1);
            str2 = strArg0;
        } else if (stringLength(strArg0) > 1) {
            int9 = enumOp(type_int, type_graphic, Enum.enum_730, 1);
            str2 = strArg0;
        } else {
            int9 = enumOp(type_int, type_graphic, Enum.enum_1810, intArg4);
            str2 = strArg1;
        }
    } else {
        if (mapLang() == 1) {
            int9 = Graphic.graphic_1517;
        } else if (mapLang() == 2) {
            int9 = enumOp(type_int, type_graphic, Enum.enum_1810, 74);
        } else if (mapLang() == 3) {
            int9 = enumOp(type_int, type_graphic, Enum.enum_1810, 31);
        }
        if (int15 == 1) {
            str2 = strArg0;
        } else if (stringLength(strArg0) > 1) {
            str2 = strArg0;
        } else if (mapLang() == 1) {
            str2 = "German";
        } else if (mapLang() == 2) {
            str2 = "French";
        } else if (mapLang() == 3) {
            str2 = "Portuguese";
        }
    }

    if (int11 == 0) {
        int5 = Graphic.world_select_stars_1;
        int8 = colour(0xFCFCFC);
        str3 = "Free";
    } else {
        int5 = Graphic.world_select_stars_0;
        int8 = colour(0xFCFC64);
        str3 = "Members";
    }

    if (int14 == 1) {
        int10 = Graphic.options_radio_buttons_2;
    } else {
        int10 = Graphic.options_radio_buttons_1;
    }

    if (intArg0 == varc_998) {
        int7 = colour(0x203211);
        int6 = Graphic.graphic_1541;
    } else if (intArg0 == varc_999) {
        int7 = colour(0x203C11);
        int6 = Graphic.graphic_1541;
    } else {
        if (intArg2 % 2 == 0) {
            int7 = colour(0x201911);
        } else {
            int7 = colour(0x292016);
        }
        int6 = Graphic.graphic_1545;
    }

    if (intArg3 >= 1980) {
        str4 = "FULL";
    } else if (intArg3 >= 0) {
        str4 = tostring(intArg3);
    } else {
        str4 = "OFFLINE";
    }
    return [int9, str2, int5, int8, int10, int7, int6, str3, str4];
}
