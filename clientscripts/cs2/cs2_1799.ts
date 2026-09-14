/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1799

function cs2_1799(intArg0: component, intArg1: component): void {
    let int2: number = 0;
    let int3: number = 0;
    let int4: struct = -1;

    while (int2 <= 4) {
        int4 = enumOp(type_int, type_struct, Enum.clanwars_arena_options, int2);
        ccCreate(intArg0, 5, int2 * 4);
        ccSetPosition(4, int3, 0, 0);
        ccSetSize(17, 17, 0, 0);
        if (mapMembers() == 0 && structParam(int4, Param.clanwars_arena_membersonly) == 1) {
            ccSetGraphic(Graphic.options_radio_buttons_1);
        } else if (int2 == 0) {
            ccSetGraphic(Graphic.options_radio_buttons_2);
        } else {
            ccSetGraphic(Graphic.options_radio_buttons_0);
        }
        ccCreate(intArg0, 4, int2 * 4 + 1);
        ccSetPosition(25, int3, 0, 0);
        ccSetSize(25, 17, 1, 0);
        ccSetText(structParam(int4, Param.clanwars_arena_name));
        ccSetTextFont(Graphic.p12_full);
        ccSetTextAlign(0, 0, 0);
        ccSetColour(colour(0xC8AA64));
        ccSetTextShadow(true);
        ccCreate(intArg0, 4, int2 * 4 + 2);
        ccSetPosition(4, int3 + 17, 0, 0);
        ccSetSize(8, paraheight(structParam(int4, Param.clanwars_arena_desc), ifGetWidth(intArg0) - 8, Graphic.p11_full) * 10 + 3, 1, 0);
        ccSetText(structParam(int4, Param.clanwars_arena_desc));
        ccSetTextFont(Graphic.p11_full);
        ccSetTextAlign(0, 0, 0);
        ccSetColour(colour(0xC8AA64));
        ccSetTextShadow(true);
        ccCreate<1>(intArg0, 3, int2 * 4 + 3);
        ccSetPosition<1>(4, int3, 0, 0);
        ccSetSize<1>(8, 17 + ccGetHeight(), 1, 0);
        ccSetTrans<1>(255);
        ccSetOp<1>(1, structParam(int4, Param.clanwars_arena_name));
        ccSetOnOp<1>(hook(cs2_1833, "ii", [event_opindex, int2]));
        int3 = int3 + ccGetHeight<1>();
        if (int2 < 4) {
            int3 = int3 + 3;
        }
        int2 = int2 + 1;
    }
    ifSetScrollSize(0, int3, intArg0);
    ifSetScrollPos(0, 0, intArg0);
    proc_scrollbar_vertical(intArg1, intArg0, Graphic.scrollbar_dragger_v2_3, Graphic.scrollbar_dragger_v2_0, Graphic.scrollbar_dragger_v2_1, Graphic.scrollbar_dragger_v2_2, Graphic.scrollbar_v2_0, Graphic.scrollbar_v2_1);
}
