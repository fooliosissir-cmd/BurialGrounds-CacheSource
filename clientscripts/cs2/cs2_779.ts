/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_779

function cs2_779(intArg0: component, intArg1: component, intArg2: number, intArg3: number, strArg0: string): void {
    ccDeleteAll(intArg1);

    if (compare(strArg0, "Call familiar") == 0 && enumOp(type_obj, type_obj, Enum.lore_pouch_count_enum, varp_follower_obj) == 526) {
        strArg0 = "Call pet";
    }

    if (compare(strArg0, "Dismiss familiar") == 0 && enumOp(type_obj, type_obj, Enum.lore_pouch_count_enum, varp_follower_obj) == 526) {
        strArg0 = "Dismiss pet";
    }
    let int4: number = 2 + 13 * paraheight(strArg0, 125, Graphic.p12_full);
    let int5: number = 2 + int4 + 32 + 14 + 2;
    let int6: number = 1;
    let int7: number = 1;
    int5 = int5 - 32 - 14;
    let int8: number = ifGetY(intArg0);

    if (int8 == 225 && ifGetX(intArg0) == 83) {
        int8 = 180;
    }
    let int9: number = ifGetX(intArg0) - 60;

    if (int9 < 0) {
        int9 = 5;
    }

    if (int9 > 70) {
        int9 = 65;
    }
    ccCreate(intArg1, 3, 0);
    ccSetPosition(int9, int8, 0, 0);
    ccSetSize(128, int5, 0, 0);
    ccSetfill(true);
    ccSetColour(colour(0x0E0E0E));
    ccCreate(intArg1, 3, 1);
    ccSetPosition(int9 + 1, int8 + 1, 0, 0);
    ccSetSize(127, int5 - 1, 0, 0);
    ccSetfill(false);
    ccSetColour(colour(0xEBECE6));
    ccCreate(intArg1, 3, 2);
    ccSetPosition(int9, int8, 0, 0);
    ccSetSize(127, int5 - 1, 0, 0);
    ccSetfill(false);
    ccSetColour(colour(0xEBECE6));
    ccCreate(intArg1, 4, 3);
    ccSetPosition(int9 + 2, int8 + 2, 0, 0);
    ccSetSize(125, int4, 0, 0);
    ccSetTextAlign(1, 1, 0);
    ccSetTextFont(Graphic.p12_full);
    ccSetColour(colour(0xF5B241));
    ccSetTextShadow(false);
    ccSetText(strArg0);
}
