/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_322

function cs2_322(intArg0: component, intArg1: number, intArg2: number, strArg0: string, strArg1: string, strArg2: string, strArg3: string, strArg4: string, strArg5: string, intArg3: number, intArg4: number): void {
    ccDeleteAll(intArg0);
    let int5: number = 0;
    let int6: number = 0;
    ifSetScrollSize(0, ((intArg4 - intArg3) / intArg1 + 1) * 57, intArg0);
    let int7: number = 0;
    let int8: number = 1;
    let int9: number = 0;
    let int10: number = 0;
    let int11: number = -1;
    let int12: obj = -1;
    let int13: obj = -1;
    let str6: string = "hello";
    let int14: number = 0;
    let int15: number = 0;
    let int16: number = 0;

    while (int7 < 78) {
        int5 = 16 + int7 % intArg1 * 48 + int7 % intArg1 * 5;
        int6 = int7 / intArg1 * 52 + int7 / intArg1 * 5;
        ccCreate(intArg0, 5, int16);
        int16 = int16 + 1;
        ccSetSize(48, 52, 0, 0);
        ccSetPosition(int5, int6, 0, 0);
        ccSetGraphic(Graphic.km_shoptile_0);
        ccHookMouseEnter(hook(cs2_6114, "Ii1", [event_com, int16, false]));
        ccHookMouseExit(hook(cs2_6114, "Ii1", [event_com, int16, true]));
        ccCreate(intArg0, 5, int16);
        int16 = int16 + 1;
        ccSetSize(48, 52, 0, 0);
        ccSetPosition(int5, int6, 0, 0);
        ccSetGraphic(Graphic.km_shoptile_1);
        ccSetHide(true);
        ccCreate(intArg0, 5, int16);
        ccSetSize(36, 32, 0, 0);
        ccSetPosition(int5 + 6, int6 + 4, 0, 0);
        int12 = enumOp(type_int, type_obj, Enum.enum_1277, int8);
        int13 = enumOp(type_int, type_obj, Enum.lore_spell_pouch_type_enum, int8);
        int15 = enumOp(type_obj, type_int, Enum.lore_levels_enum, ocUncert(int12));
        if (int13 == Obj.lore_pouch_spell_grey) {
            cs2_1670(int13, int13, intArg0, int16, strArg0, strArg1, strArg2, strArg3, strArg4, strArg5);
        } else if (invTotal(Inv.inv, ocUncert(int13)) > 0 && invTotal(Inv.inv, ocUncert(int13)) >= ocParam(ocUncert(int13), Param.lore_cost_for_shard) && statBase(23) >= enumOp(type_int, type_int, Enum.bogrog_swap_requirements_reverse, int15)) {
            cs2_1670(int13, int13, intArg0, int16, strArg0, strArg1, strArg2, strArg3, strArg4, strArg5);
        } else {
            cs2_1670(enumOp(type_int, type_obj, Enum.lore_null_spell_enum, int8), int13, intArg0, int16, strArg0, strArg1, strArg2, strArg3, strArg4, strArg5);
        }
        int16 = int16 + 1;
        ccCreate(intArg0, 5, int16);
        int16 = int16 + 1;
        ccSetSize(12, 12, 0, 0);
        ccSetPosition(int5 + 2, int6 + 38, 0, 0);
        ccSetObjectNonum(Obj.lore_spirit_shard, 1);
        ccCreate(intArg0, 4, int16);
        int16 = int16 + 1;
        ccSetSize(31, 12, 0, 0);
        ccSetPosition(int5 + 13, int6 + 39, 0, 0);
        ccSetTextFont(Graphic.p11_full);
        ccSetColour(colour(0xFFFFFF));
        ccSetTextAlign(2, 1, 0);
        ccSetText(tostring(max(1, ocParam(int13, Param.lore_shards_returned))));
        ccSetTextShadow(true);
        int7 = int7 + 1;
        int8 = int8 + 1;
    }
}
