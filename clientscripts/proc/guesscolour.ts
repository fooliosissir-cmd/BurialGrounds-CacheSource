/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,guesscolour]

function guesscolour(intArg0: colour): string {
    let int1: number = 1;
    let str0: string = "";
    let str1: string = "";

    let [int2, int3, int4] = hex_to_rgb(intArg0);
    [int2, int3, int4] = rgb_to_hsl(int2, int3, int4);

    if (int4 == 0) {
        return "Black";
    } else if (int4 == 255) {
        return "White";
    } else if (int4 < 97) {
        str0 = "Dark ";
    } else if (int4 == 127 && int3 >= 240) {
        str0 = "Vivid ";
    } else if (int4 > 157) {
        str0 = "Light ";
    } else {
        int1 = 0;
    }

    switch (intArg0) {
        case colour(0xFF0000):
        case colour(0xFF8000):
        case colour(0xFFFF00):
        case colour(0x00FF00):
        case colour(0x00FFFF):
        case colour(0x0000FF):
        case colour(0x4000FF):
        case colour(0x8000FF):
        case colour(0xFF00FF):
            str0 = "Pure ";
            int1 = 1;
            break;
    }

    if (int1 == 1) {
        if (int3 == 0) {
            str1 = "grey";
        }
        if (int2 < 10) {
            str1 = "red";
        } else if (int2 < 45) {
            str1 = "orange";
        } else if (int2 < 75) {
            str1 = "yellow";
        } else if (int2 < 140) {
            str1 = "green";
        } else if (int2 < 160) {
            str1 = "turquoise";
        } else if (int2 < 195) {
            str1 = "cyan";
        } else if (int2 < 250) {
            str1 = "blue";
        } else if (int2 < 265) {
            str1 = "indigo";
        } else if (int2 < 280) {
            str1 = "violet";
        } else if (int2 < 290) {
            str1 = "purple";
        } else if (int2 < 305) {
            str1 = "magenta";
        } else if (int2 < 345) {
            str1 = "pink";
        } else {
            str1 = "red";
        }
    } else {
        if (int3 == 0) {
            str1 = "Grey";
        }
        if (int2 < 10) {
            str1 = "Red";
        } else if (int2 < 45) {
            str1 = "Orange";
        } else if (int2 < 75) {
            str1 = "Yellow";
        } else if (int2 < 140) {
            str1 = "Green";
        } else if (int2 < 160) {
            str1 = "Turquoise";
        } else if (int2 < 195) {
            str1 = "Cyan";
        } else if (int2 < 250) {
            str1 = "Blue";
        } else if (int2 < 265) {
            str1 = "Indigo";
        } else if (int2 < 280) {
            str1 = "Violet";
        } else if (int2 < 290) {
            str1 = "Purple";
        } else if (int2 < 305) {
            str1 = "Magenta";
        } else if (int2 < 345) {
            str1 = "Pink";
        } else {
            str1 = "Red";
        }
    }
    return str0 + str1 + ".";
}
