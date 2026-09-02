/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_798

function cs2_798(intArg0: component, intArg1: number, intArg2: number, strArg0: string, strArg1: string, strArg2: string, strArg3: string, strArg4: string, intArg3: number, intArg4: number): void {
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
    let str5: string = "hello";
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
        int12 = enumOp(type_int, type_obj, Enum.enum_1277, int8);
        int13 = enumOp(type_int, type_obj, Enum.lore_spell_pouch_type_enum, int8);
        if (int8 == 1) {
            if (cs2_799(int13) == 1) {
                lore_interface_inv_draw_slot(int13, int13, intArg0, int15, strArg0, strArg1, strArg2, strArg3, strArg4, "");
            } else {
                lore_interface_inv_draw_slot(enumOp(type_int, type_obj, Enum.lore_null_spell_enum, int8), int13, intArg0, int15, strArg0, strArg1, strArg2, strArg3, strArg4, "");
            }
        } else if (int13 == Obj.lore_pouch_spell_grey) {
            lore_interface_inv_draw_slot(int13, int13, intArg0, int15, strArg0, strArg1, strArg2, strArg3, strArg4, "");
        } else {
            lore_interface_inv_draw_slot(enumOp(type_int, type_obj, Enum.lore_null_spell_enum, int8), int13, intArg0, int15, strArg0, strArg1, strArg2, strArg3, strArg4, "");
        }
        str5 = enumOp(type_obj, type_string, Enum.enum_1187, int13);
        int14 = enumOp(type_obj, type_int, Enum.lore_levels_enum, int12);
        if (int8 == 1) {
            ccSetOnMouseOver(hook(cs2_770, "iIIisoioioioioioioioioioi", [event_comsubid, Component.interface_666.component_666_23, Component.interface_666.component_666_16, int14, str5, Obj.obj_12526, 1, -1, 0, -1, 0, -1, 0, -1, 0, -1, 0, -1, 0, -1, 0, -1, 0, -1, 0]));
            ccHookMouseExit(hook(clientscript_deltooltip, "I", [Component.interface_666.component_666_23]));
        } else {
            str5 = "You do not have access to this type of scroll.";
            ccSetOnMouseOver(hook(cs2_800, "iIIis", [event_comsubid, Component.interface_666.component_666_23, Component.interface_666.component_666_16, int14, str5]));
            ccHookMouseExit(hook(clientscript_deltooltip, "I", [Component.interface_666.component_666_23]));
        }
        int15 = int15 + 1;
        ccCreate(intArg0, 5, int15);
        int15 = int15 + 1;
        ccSetSize(12, 12, 0, 0);
        ccSetPosition(int5 + 2, int6 + 38, 0, 0);
        ccSetObjectNonum(int12, 1);
        ccCreate(intArg0, 4, int15);
        int15 = int15 + 1;
        ccSetSize(31, 12, 0, 0);
        ccSetPosition(int5 + 13, int6 + 39, 0, 0);
        ccSetTextFont(Graphic.p11_full);
        ccSetColour(colour(0xFFFFFF));
        ccSetTextAlign(2, 1, 0);
        ccSetText("1");
        ccSetTextShadow(true);
        int7 = int7 + 1;
        int8 = int8 + 1;
    }
}
