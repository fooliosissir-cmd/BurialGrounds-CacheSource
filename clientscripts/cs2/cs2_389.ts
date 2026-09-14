/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_389

function cs2_389(): void {
    ccDeleteAll(Component.interface_1028.component_1028_65);
    let int0: number = ifGetWidth(Component.interface_1028.component_1028_65);
    let int1: number = enumGetoutputcount(Enum.player_kit_skin_index_to_basecolour);
    let int2: number = (int0 - 22) / int1;
    let int3: number = (int0 - int1 * int2) / 2 + 1;
    let int4: number = int1 + 6;
    let int5: number = 0;
    let int6: graphic = -1;
    let int7: number = -1;

    while (int5 < int1) {
        ccCreate(Component.interface_1028.component_1028_65, 3, int5);
        ccSetSize(int2 - 2, 6, 0, 1);
        ccSetPosition(int3 + int5 * int2, 3, 0, 2);
        ccSetfill(true);
        ccSetColour(enumOp(type_int, type_int, Enum.enum_746, int5));
        ccSetOp(1, enumOp(type_int, type_string, Enum.enum_747, int5));
        int6 = enumOp(type_int, type_int, Enum.player_kit_skin_index_to_basecolour, int5);
        if (varc_1019 == int6) {
            int7 = int5;
        } else {
            ccSetOnOp(hook(cs2_357, "iii", [event_opindex, int6, 4]));
            ccSetOnMouseOver(hook(cs2_375, "IIiiiii", [event_com, event_com, event_comsubid, colour(0xBFA549), colour(0xBFA549), 1, int4]));
            ccSetOnMouseLeave(hook(cs2_377, "Ii", [event_com, int4]));
        }
        int5 = int5 + 1;
    }

    if (int7 != -1) {
        cs2_376(Component.interface_1028.component_1028_65, Component.interface_1028.component_1028_65, int7, colour(0xDFBA38), colour(0xC37C00), 1, int1);
    } else {
        cs2_376(Component.interface_1028.component_1028_65, -1, -1, colour(0x000000), colour(0x000000), 1, int1);
    }
}
