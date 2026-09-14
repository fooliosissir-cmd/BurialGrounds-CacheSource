/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_793

function cs2_793(intArg0: component, intArg1: number, intArg2: number, strArg0: string, strArg1: string, strArg2: string, strArg3: string, strArg4: string, intArg3: number, intArg4: number): void {
    ccDeleteAll(intArg0);
    let int5: number = 0;
    let int6: number = 0;
    ifSetScrollSize(0, ((intArg4 - intArg3) / intArg1 + 1) * 57, intArg0);
    let int7: number = 0;
    let int8: number = 1;
    let int9: number = 0;
    let int10: number = 0;
    let int11: number = -1;
    let int12: obj = Obj.obj_12525;
    let int13: obj = Obj.obj_12530;
    let int14: obj = Obj.wolf_bones;
    let int15: obj = Obj.obj_12527;
    let int16: obj = -1;
    let int17: obj = -1;
    let int18: obj = -1;
    let int19: obj = -1;
    let int20: obj = -1;
    let int21: obj = -1;
    let int22: number = 1;
    let int23: number = 7;
    let int24: number = 1;
    let int25: number = 1;
    let int26: number = 0;
    let int27: number = 0;
    let int28: number = 0;
    let int29: number = 0;
    let int30: number = 0;
    let int31: number = 0;
    let str5: string = "hello";
    let int32: number = 0;
    defineArray(0, type_obj, 10);
    let int33: obj = -1;
    let int34: number = 0;

    while (int7 <= intArg4 - intArg3) {
        int5 = 16 + int7 % intArg1 * 48 + int7 % intArg1 * 5;
        int6 = int7 / intArg1 * 52 + int7 / intArg1 * 5;
        ccCreate(intArg0, 5, int34);
        int34 = int34 + 1;
        ccSetSize(48, 52, 0, 0);
        ccSetPosition(int5, int6, 0, 0);
        ccSetGraphic(Graphic.km_shoptile_0);
        ccSetOnMouseOver(hook(cs2_6114, "Ii1", [event_com, int34, false]));
        ccSetOnMouseLeave(hook(cs2_6114, "Ii1", [event_com, int34, true]));
        ccCreate(intArg0, 5, int34);
        int34 = int34 + 1;
        ccSetSize(48, 52, 0, 0);
        ccSetPosition(int5, int6, 0, 0);
        ccSetGraphic(Graphic.km_shoptile_1);
        ccSetHide(true);
        ccCreate(intArg0, 5, int34);
        ccSetSize(36, 32, 0, 0);
        ccSetPosition(int5 + 6, int6 + 4, 0, 0);
        int33 = enumOp(type_int, type_obj, Enum.enum_1182, int8);
        if (int8 == 1) {
            if (cs2_795(int33) == 1) {
                cs2_794(int33, int33, intArg0, int34, strArg0, strArg1, strArg2, strArg3, strArg4);
            } else {
                cs2_794(enumOp(type_int, type_obj, Enum.lore_null_enum, int8), int33, intArg0, int34, strArg0, strArg1, strArg2, strArg3, strArg4);
            }
        } else if (int33 == Obj.lore_pouch_grey) {
            cs2_794(int33, int33, intArg0, int34, strArg0, strArg1, strArg2, strArg3, strArg4);
        } else {
            cs2_794(enumOp(type_int, type_obj, Enum.lore_null_enum, int8), int33, intArg0, int34, strArg0, strArg1, strArg2, strArg3, strArg4);
        }
        str5 = enumOp(type_obj, type_string, Enum.enum_1187, int33);
        int32 = enumOp(type_obj, type_int, Enum.lore_levels_enum, int33);
        if (int8 == 1) {
            ccSetOnMouseRepeat(hook(cs2_770, "iIIisoioioioioioioioioioi", [event_comsubid, Component.interface_672.component_672_24, Component.interface_672.component_672_16, int32, str5, int12, 1, int13, int23, int14, int24, int15, int25, int16, int26, int17, int27, int18, int28, int19, int29, int20, int30, int21, int31]));
            ccSetOnMouseLeave(hook(clientscript_deltooltip, "I", [Component.interface_672.component_672_24]));
        } else {
            str5 = "You do not have access to this type of summoning pouch.";
            ccSetOnMouseRepeat(hook(cs2_800, "iIIis", [event_comsubid, Component.interface_672.component_672_24, Component.interface_672.component_672_16, int32, str5]));
            ccSetOnMouseLeave(hook(clientscript_deltooltip, "I", [Component.interface_672.component_672_24]));
        }
        int34 = int34 + 1;
        ccCreate(intArg0, 5, int34);
        int34 = int34 + 1;
        ccSetSize(12, 12, 0, 0);
        ccSetPosition(int5 + 2, int6 + 38, 0, 0);
        ccSetObjectNonum(Obj.lore_spirit_shard, 1);
        ccCreate(intArg0, 4, int34);
        int34 = int34 + 1;
        ccSetSize(31, 12, 0, 0);
        ccSetPosition(int5 + 13, int6 + 39, 0, 0);
        ccSetTextFont(Graphic.p11_full);
        ccSetColour(colour(0xFFFFFF));
        ccSetTextAlign(2, 1, 0);
        ccSetText(cs2_940(ocParam(int33, Param.param_541)));
        ccSetTextShadow(true);
        int7 = int7 + 1;
        int8 = int8 + 1;
    }
}
