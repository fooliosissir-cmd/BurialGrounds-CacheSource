/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_328

function cs2_328(intArg0: component): void {
    ccDeleteAll(intArg0);
    let int1: number = 5;
    let int2: number = 5;
    let int3: number = 0;
    let int4: number = 0;
    let int5: number = 0;
    let str0: string = " ";
    let int6: Enum = -1;

    if (gender() == 1) {
        int4 = enumGetoutputcount(Enum.player_kit_bracelet_f_silver_getidkit);
        if (varc_783 == 0) {
            int6 = Enum.player_kit_bracelet_f_silver_names;
        } else {
            int6 = Enum.player_kit_bracelet_f_gold_names;
        }
    } else {
        int4 = enumGetoutputcount(Enum.player_kit_bracelet_m_silver_getidkit);
        if (varc_783 == 0) {
            int6 = Enum.player_kit_bracelet_m_silver_names;
        } else {
            int6 = Enum.player_kit_bracelet_m_gold_names;
        }
    }
    let int7: number = int4 * 2;

    while (int3 < int4) {
        ccCreate(intArg0, 5, int3);
        ccSetSize(36, 36, 0, 0);
        ccSetPosition(int1, int2, 0, 0);
        ccSetGraphic(gameframe_skin_graphic(Graphic.miscgraphics_10));
        ccSetOp(1, "Select" + "<col=ff9040>");
        ccSetOnOp(hook(cs2_331, "Ii", [event_com, event_comsubid]));
        int3 = int3 + 1;
        int2 = 28 + int2;
    }
    int2 = 5;

    while (int3 < int7) {
        str0 = enumOp(type_int, type_string, int6, int5);
        ccCreate(intArg0, 4, int3);
        ccSetText(str0);
        ccSetSize(124, 16, 0, 0);
        ccSetPosition(int1 + 20, int2, 0, 0);
        ccSetColour(colour(0xFFFFFF));
        ccSetTextFont(Graphic.p11_full);
        ccSetTextShadow(false);
        ccSetTextAlign(0, 1, 0);
        ccSetOp(1, "Select" + "<col=ff9040>");
        ccSetOnOp(hook(cs2_331, "Ii", [event_com, int3 - int4]));
        int3 = int3 + 1;
        int5 = int5 + 1;
        int2 = 28 + int2;
    }
}
