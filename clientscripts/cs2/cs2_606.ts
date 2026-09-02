/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_606

function cs2_606(): void {
    ccCreate(Component.interface_662.component_662_74, 5, 0);
    ccSetSize(32, 36, 0, 0);
    ccSetPosition(0, 0, 0, 0);
    ccCreate(Component.interface_747.component_747_18, 5, 0);
    ccSetSize(16384, 16384, 2, 2);
    ccSetPosition(0, 0, 0, 0);
    let int0: graphic = Graphic.lore_stats_side_icons_0;
    let int1: graphic = Graphic.lore_stats_side_icons_1;
    lore_magic_init_v2(Component.interface_662.component_662_73, int0, int1, ocParam(varp_follower_obj, Param.lore_requirement), varcstr_lore_spell_opbase, varcstr_205, enumOp(type_obj, type_obj, Enum.lore_pouch_count_enum, varp_follower_obj), 1, -1, 0, -1, 0, -1, 0);
    cs2_608();
}
