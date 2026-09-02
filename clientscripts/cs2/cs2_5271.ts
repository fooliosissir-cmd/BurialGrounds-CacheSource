/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5271

function cs2_5271(intArg0: component, strArg0: string, intArg1: number, intArg2: number, intArg3: number): number {
    let str1: string = "";

    if (intArg1 == -1) {
        str1 = "Your coord";
    } else if (intArg1 == -2) {
        str1 = "Safe Clanwars";
    } else {
        str1 = mescoord(intArg1);
    }
    let str2: string = " - ";

    if (ifGetWidth(intArg0) < 260) {
        str2 = "<br>";
    }
    let str3: string = "max";

    if (intArg2 >= 0) {
        str3 = tostring(intArg2);
    }
    ccCreate(intArg0, 4, intArg3);
    ccSetText(strArg0 + str2 + "@ " + str1 + " - Max: " + str3);
    ccSetTextShadow(true);
    ccSetColour(colour(0xCCCCCC));
    ccSetTextAlign(1, 1, 0);
    ccHookMouseEnter(hook(cc_text_colour_swapper, "Iii", [event_com, event_comsubid, colour(0xFFFFFF)]));
    ccHookMouseExit(hook(cc_text_colour_swapper, "Iii", [event_com, event_comsubid, colour(0xCCCCCC)]));
    ccSetOp(1, "Spawn");
    ccSetOp(2, "Pick spawn number");
    ccSetOp(3, "Kill");
    ccCreate(intArg0, 3, intArg3 + 1);
    ccSetColour(colour(0xFFFFFF));
    ccSetTrans(226);
    ccSetfill(true);
    return intArg3 + 2;
}
