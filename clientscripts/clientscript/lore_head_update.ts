/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,lore_head_update]

function lore_head_update(): void {
    let int0: number = -1;
    let str0: string = "";
    let int1: number = -1;

    if (varp_lore_npc_head != -1 && varp_lore_npc_head != Npc.hans) {
        str0 = enumOp(type_npc, type_string, Enum.enum_1279, varp_lore_npc_head);
        ifSetNpcHead(varp_lore_npc_head, Component.interface_662.component_662_1);
    } else if (enumOp(type_obj, type_npc, Enum.lore_emergency_creature_enum, varp_follower_obj) != 6988) {
        varp_lore_npc_head = enumOp(type_obj, type_npc, Enum.lore_emergency_creature_enum, varp_follower_obj);
        str0 = enumOp(type_npc, type_string, Enum.enum_1279, varp_lore_npc_head);
        ifSetNpcHead(varp_lore_npc_head, Component.interface_662.component_662_1);
    }

    if (compare(str0, "Animal") == 0) {
        ifSetText(ocName(varp_follower_obj), Component.interface_662.component_662_54);
    } else if (varp_follower_obj == Obj.lore_baby_troll) {
        if (varp_2480 != -1) {
            ifSetText(ocName(varp_2480), Component.interface_662.component_662_54);
        } else {
            ifSetText(str0, Component.interface_662.component_662_54);
        }
    } else {
        ifSetText(str0, Component.interface_662.component_662_54);
    }

    if (varbit_lore_interface_boolean > 50) {
        varbit_lore_interface_boolean = varbit_lore_interface_boolean - 50;
        int0 = enumOp(type_int, type_seq, Enum.lore_chathead_anim_sad, varbit_lore_interface_boolean);
        ifSetModelAnim(int0, Component.interface_662.component_662_1);
    } else {
        int0 = enumOp(type_int, type_seq, Enum.lore_chathead_anim_idle, varbit_lore_interface_boolean);
        ifSetModelAnim(int0, Component.interface_662.component_662_1);
    }

    if (enumOp(type_obj, type_obj, Enum.lore_pouch_count_enum, varp_follower_obj) != 526) {
        ifSetHide(true, Component.interface_662.component_662_71);
        if (enumOp(type_npc, type_component, Enum.enum_1282, varp_lore_npc_head) != 43384877) {
            ifSetHide(false, Component.interface_662.component_662_72);
            ifSetHide(false, Component.interface_662.component_662_66);
            ifSetHide(false, enumOp(type_npc, type_component, Enum.enum_1282, varp_lore_npc_head));
            ifSetHide(false, enumOp(type_npc, type_component, Enum.enum_1092, varp_lore_npc_head));
            if (getWindowMode() >= 2) {
                ifSetGraphic(Graphic.aif_topstat_fill_full_11, Component.interface_747.component_747_0);
                ifSetGraphic(Graphic.aif_topstat_fill_full_4, Component.interface_747.component_747_1);
            } else {
                ifSetGraphic(Graphic.topstat_fill_full_11, Component.interface_747.component_747_0);
                ifSetGraphic(Graphic.topstat_fill_full_4, Component.interface_747.component_747_1);
            }
        } else {
            ifSetHide(true, Component.interface_662.component_662_66);
        }
    } else {
        ifSetHide(false, Component.interface_662.component_662_71);
        ifSetHide(true, Component.interface_662.component_662_66);
        if (varp_follower_obj != -1 && ocParam(varp_follower_obj, Param.lore_requirement) != 0) {
            ifSetHide(false, enumOp(type_npc, type_component, Enum.enum_1092, varp_lore_npc_head));
        }
    }
    cs2_2671();
}
