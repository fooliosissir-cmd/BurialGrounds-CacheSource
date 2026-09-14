/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4973

function cs2_4973(intArg0: number): graphic {
    let int1: number = 0;
    let int2: number = 0;

    if (clanProfileFind() == 1) {
        int1 = cs2_4949(intArg0);
        switch (intArg0) {
            case 1:
                return Graphic.aif_clan_building_icons_1;
            case 2:
                return Graphic.aif_clan_building_icons_0;
            case 3:
                return Graphic.aif_clan_building_icons_3;
            case 4:
                return cs2_4974(pushVarClanBit<2553>());
            case 5:
                return cs2_4974(pushVarClanBit<2554>());
            case 6:
                return cs2_4974(pushVarClanBit<2555>());
            case 7:
                return cs2_4974(pushVarClanBit<2556>());
            case 8:
                return cs2_4974(pushVarClanBit<2557>());
            case 9:
                return cs2_4974(pushVarClanBit<2558>());
            case 10:
                return cs2_4974(pushVarClanBit<2560>());
            case 11:
                return cs2_4974(pushVarClanBit<2561>());
            case 12:
                return cs2_4974(pushVarClanBit<2562>());
            case 13:
                return cs2_4974(pushVarClanBit<2563>());
            case 14:
                return cs2_4974(pushVarClanBit<2564>());
            case 15:
                return cs2_4974(pushVarClanBit<2565>());
            case 16:
            case 17:
            case 18:
            case 19:
            case 20:
            case 21:
            case 22:
            case 23:
            case 24:
            case 25:
            case 26:
            case 27:
            case 28:
            case 29:
            case 30:
            case 31:
            case 32:
            case 33:
            case 34:
                return cs2_4974(int1);
            case 35:
            case 36:
            case 37:
            case 40:
            case 38:
            case 39:
            case 41:
            case 42:
            case 43:
            case 45:
            case 46:
            case 47:
            case 48:
            case 44:
                return enumOp(type_int, type_graphic, Enum.clan_custom_blanket_types_id2gfx, int1);
        }
    }
    return -1;
}
