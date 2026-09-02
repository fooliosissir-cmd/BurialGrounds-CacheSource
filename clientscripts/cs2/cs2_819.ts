/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_819

function cs2_819(): void {
    if (varp_lore_npc_head != -1 && varp_lore_npc_head != Npc.hans) {
        ifSetNpcHead(varp_lore_npc_head, Component.interface_663.component_663_3);
    } else {
        ifSetModel(-1, Component.interface_663.component_663_3);
    }

    if (varbit_cat_namevar_set == 1) {
        ifSetText(cs2_821(), Component.interface_663.component_663_25);
    } else if (varp_follower_obj != -1) {
        ifSetText(ocName(varp_follower_obj), Component.interface_663.component_663_25);
    } else {
        ifSetText("", Component.interface_663.component_663_25);
    }

    if (varbit_lore_interface_boolean > 50) {
        varbit_lore_interface_boolean = varbit_lore_interface_boolean - 50;
        ifSetModelAnim(enumOp(type_int, type_seq, Enum.lore_chathead_anim_sad, varbit_lore_interface_boolean), Component.interface_663.component_663_3);
    } else {
        ifSetModelAnim(enumOp(type_int, type_seq, Enum.lore_chathead_anim_idle, varbit_lore_interface_boolean), Component.interface_663.component_663_3);
    }
}
