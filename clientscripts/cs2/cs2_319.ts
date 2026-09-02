/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_319

function cs2_319(intArg0: component, intArg1: number, intArg2: number, strArg0: string, strArg1: string, strArg2: string, strArg3: string, strArg4: string, strArg5: string, intArg3: number, intArg4: number): void {
    ccDeleteAll(intArg0);
    let int5: number = 0;
    let int6: number = 0;
    ifSetScrollSize(0, ((intArg4 - intArg3) / intArg1 + 1) * 57, intArg0);
    let int7: number = 0;
    let int8: number = 1;
    let int9: number = 0;
    let int10: number = 0;
    let int11: number = -1;
    let str6: string = "hello";
    let int12: number = 0;
    defineArray(0, type_obj, 10);
    let int13: obj = -1;
    let int14: number = 0;
    let int15: number = 0;

    while (int7 <= intArg4 - intArg3) {
        int5 = 16 + int7 % intArg1 * 48 + int7 % intArg1 * 5;
        int6 = int7 / intArg1 * 52 + int7 / intArg1 * 5;
        ccCreate(intArg0, 5, int15);
        int15 = int15 + 1;
        ccSetSize(48, 52, 0, 0);
        ccSetPosition(int5, int6, 0, 0);
        ccSetGraphic(Graphic.km_shoptile_0);
        ccHookMouseEnter(hook(cs2_6114, "Ii1", [event_com, int15, false]));
        ccHookMouseExit(hook(cs2_6114, "Ii1", [event_com, int15, true]));
        ccCreate(intArg0, 5, int15);
        int15 = int15 + 1;
        ccSetSize(48, 52, 0, 0);
        ccSetPosition(int5, int6, 0, 0);
        ccSetGraphic(Graphic.km_shoptile_1);
        ccSetHide(true);
        ccCreate(intArg0, 5, int15);
        ccSetSize(36, 32, 0, 0);
        ccSetPosition(int5 + 6, int6 + 4, 0, 0);
        int13 = enumOp(type_int, type_obj, Enum.enum_1182, int8);
        int14 = enumOp(type_obj, type_int, Enum.lore_levels_enum, ocUncert(int13));
        if (int13 == Obj.lore_pouch_grey) {
            lore_interface_inv_draw_slot(int13, int13, intArg0, int15, strArg0, strArg1, strArg2, strArg3, strArg4, strArg5);
        } else if ((invTotal(Inv.inv, int13) > 0 || invTotal(Inv.inv, ocCert(int13)) > 0) && statBase(23) >= enumOp(type_int, type_int, Enum.bogrog_swap_requirements_reverse, int14)) {
            lore_interface_inv_draw_slot(int13, int13, intArg0, int15, strArg0, strArg1, strArg2, strArg3, strArg4, strArg5);
        } else {
            lore_interface_inv_draw_slot(enumOp(type_int, type_obj, Enum.lore_null_enum, int8), int13, intArg0, int15, strArg0, strArg1, strArg2, strArg3, strArg4, strArg5);
        }
        int15 = int15 + 1;
        ccCreate(intArg0, 5, int15);
        int15 = int15 + 1;
        ccSetSize(12, 12, 0, 0);
        ccSetPosition(int5 + 2, int6 + 38, 0, 0);
        ccSetObjectNonum(Obj.lore_spirit_shard, 1);
        ccCreate(intArg0, 4, int15);
        int15 = int15 + 1;
        ccSetSize(31, 12, 0, 0);
        ccSetPosition(int5 + 13, int6 + 39, 0, 0);
        ccSetTextFont(Graphic.p11_full);
        ccSetColour(colour(0xFFFFFF));
        ccSetTextAlign(2, 1, 0);
        ccSetText(cs2_940(ocParam(int13, Param.lore_shards_returned)));
        ccSetTextShadow(true);
        int7 = int7 + 1;
        int8 = int8 + 1;
    }
}
