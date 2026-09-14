/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_765

function cs2_765(intArg0: component, intArg1: number, intArg2: number, strArg0: string, strArg1: string, strArg2: string, strArg3: string, strArg4: string, intArg3: number, intArg4: number): void {
    ccDeleteAll(intArg0);
    let int5: number = 0;
    let int6: number = 0;
    ifSetScrollSize(0, ((intArg4 - intArg3) / intArg1 + 1) * 57, intArg0);
    let int7: number = 0;
    let int8: number = intArg3;
    let int9: number = 0;
    let int10: number = intArg4;
    let int11: number = 0;
    let int12: number = -1;
    let int13: obj = -1;
    let int14: obj = -1;
    let str5: string = "hello";
    let int15: number = 0;
    let int16: number = 0;
    let int17: graphic = Graphic.km_shoptile_2;
    let int18: graphic = Graphic.km_shoptile_0;

    while (int7 <= intArg4 - intArg3) {
        if (varbit_lore_creation_interface_filter == 0 || invTotal(Inv.inv, enumOp(type_int, type_obj, Enum.enum_1182, int8)) > 0) {
            int5 = 16 + int9 % intArg1 * 48 + int9 % intArg1 * 5;
            int6 = int9 / intArg1 * 52 + int9 / intArg1 * 5;
            ccCreate(intArg0, 5, int16);
            ccSetSize(48, 52, 0, 0);
            ccSetPosition(int5, int6, 0, 0);
            ccSetGraphic(Graphic.km_shoptile_0);
            ccSetOnMouseRepeat(hook(graphic_swapper_dynamic, "Iid", [event_com, int16, int17]));
            ccSetOnMouseLeave(hook(graphic_swapper_dynamic, "Iid", [event_com, int16, int18]));
            int16 = int16 + 1;
            ccCreate(intArg0, 5, int16);
            int16 = int16 + 1;
            ccSetSize(48, 52, 0, 0);
            ccSetPosition(int5, int6, 0, 0);
            ccSetGraphic(Graphic.km_shoptile_1);
            int13 = enumOp(type_int, type_obj, Enum.enum_1277, int8);
            int14 = enumOp(type_int, type_obj, Enum.lore_spell_pouch_type_enum, int8);
            if (cs2_768(int14, int13) == 1 && statBase(23) >= enumOp(type_obj, type_int, Enum.lore_levels_enum, int13)) {
                ccSetHide(false);
            } else {
                ccSetHide(true);
            }
            ccCreate(intArg0, 5, int16);
            ccSetSize(36, 32, 0, 0);
            ccSetPosition(int5 + 6, int6 + 4, 0, 0);
            if (int14 == Obj.lore_pouch_spell_grey) {
                lore_interface_inv_draw_slot(int14, int14, intArg0, int16, strArg0, strArg1, strArg2, strArg3, strArg4, "");
            } else if (cs2_768(int14, int13) == 1 && statBase(23) >= enumOp(type_obj, type_int, Enum.lore_levels_enum, int13)) {
                lore_interface_inv_draw_slot(int14, int14, intArg0, int16, strArg0, strArg1, strArg2, strArg3, strArg4, "");
            } else {
                lore_interface_inv_draw_slot(enumOp(type_int, type_obj, Enum.lore_null_spell_enum, int8), int14, intArg0, int16, strArg0, strArg1, strArg2, strArg3, strArg4, "");
            }
            if (int14 == Obj.lore_pouch_spell_grey) {
                ccSetOnMouseRepeat(hook(lore_blanktip, "iIIis", [event_comsubid, Component.interface_79.component_79_31, Component.interface_79.component_79_17, int15, str5]));
                ccSetOnMouseLeave(hook(clientscript_deltooltip, "I", [Component.interface_79.component_79_31]));
            } else {
                str5 = enumOp(type_obj, type_string, Enum.enum_1187, int14);
                int15 = enumOp(type_obj, type_int, Enum.lore_levels_enum, int13);
                ccSetOnMouseRepeat(hook(cs2_770, "iIIisoioioioioioioioioioi", [event_comsubid, Component.interface_79.component_79_31, Component.interface_79.component_79_17, int15, str5, int13, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1]));
                ccSetOnMouseLeave(hook(clientscript_deltooltip, "I", [Component.interface_79.component_79_31]));
            }
            int16 = int16 + 1;
            ccCreate(intArg0, 5, int16);
            int16 = int16 + 1;
            ccSetSize(12, 12, 0, 0);
            ccSetPosition(int5 + 2, int6 + 38, 0, 0);
            ccSetObjectNonum(int13, 1);
            ccCreate(intArg0, 4, int16);
            int16 = int16 + 1;
            ccSetSize(31, 12, 0, 0);
            ccSetPosition(int5 + 13, int6 + 39, 0, 0);
            ccSetTextFont(Graphic.p11_full);
            ccSetColour(colour(0xFFFFFF));
            ccSetTextAlign(2, 1, 0);
            ccSetText("1");
            ccSetTextShadow(true);
            int9 = int9 + 1;
        }
        int7 = int7 + 1;
        int8 = int8 + 1;
    }
}
