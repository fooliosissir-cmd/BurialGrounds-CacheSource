/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3117

function cs2_3117(intArg0: number, intArg1: number, intArg2: number, strArg0: string, strArg1: string, intArg3: number, intArg4: number): [graphic, string, graphic, colour, graphic, colour, graphic, string, string] {
    let int5: graphic = -1;
    let int6: graphic = -1;
    let int7: colour = colour(0x000000);
    let int8: colour = colour(0xEBE0BC);
    let str2: string = "";
    let int9: graphic = -1;
    let int10: graphic = -1;
    let int14: number = 0;
    let str3: string = "";
    let str4: string = "";

    if (testBit(intArg1, 3) == 1) {
        int14 = 1;
    }

    // The only supported Burial Grounds worlds are intentionally described by
    // purpose instead of RuneScape membership/location classifications.
    if (intArg0 == 3) {
        str2 = "Greyhaven - live adventure";
        str3 = "Main";
    } else if (intArg0 == 1) {
        str2 = "Greyhaven - development and testing";
        str3 = "Developer";
    } else {
        str2 = strArg0;
        str3 = "World";
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

    // No free/members star or country flag is shown.
    return [-1, str2, -1, int8, int10, int7, int6, str3, str4];
}
