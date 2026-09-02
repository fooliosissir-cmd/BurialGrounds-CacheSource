/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6111

function cs2_6111(): void {
    let int0: obj = invGetobj(varp_shop_last_viewed_inventory, varp_shop_last_viewed_slot);
    let int1: number = ocWearPos(int0);

    if (int1 == -1) {
        return;
    }
    let int2: obj = invGetobj(94, int1);
    cs2_6112(ocParam(int0, Param.slashdefence), ocParam(int2, Param.slashdefence), Component.interface_1265.component_1265_112, Component.interface_1265.component_1265_113);
    cs2_6112(ocParam(int0, Param.slashattack), ocParam(int2, Param.slashattack), Component.interface_1265.component_1265_107, Component.interface_1265.component_1265_108);
    cs2_6112(ocParam(int0, Param.stabdefence), ocParam(int2, Param.stabdefence), Component.interface_1265.component_1265_118, Component.interface_1265.component_1265_119);
    cs2_6112(ocParam(int0, Param.stabattack), ocParam(int2, Param.stabattack), Component.interface_1265.component_1265_115, Component.interface_1265.component_1265_116);
    cs2_6112(ocParam(int0, Param.crushdefence), ocParam(int2, Param.crushdefence), Component.interface_1265.component_1265_124, Component.interface_1265.component_1265_125);
    cs2_6112(ocParam(int0, Param.crushattack), ocParam(int2, Param.crushattack), Component.interface_1265.component_1265_121, Component.interface_1265.component_1265_122);
    cs2_6112(ocParam(int0, Param.rangedefence), ocParam(int2, Param.rangedefence), Component.interface_1265.component_1265_130, Component.interface_1265.component_1265_131);
    cs2_6112(ocParam(int0, Param.rangeattack), ocParam(int2, Param.rangeattack), Component.interface_1265.component_1265_127, Component.interface_1265.component_1265_128);
    cs2_6112(ocParam(int0, Param.magicdefence), ocParam(int2, Param.magicdefence), Component.interface_1265.component_1265_136, Component.interface_1265.component_1265_137);
    cs2_6112(ocParam(int0, Param.magicattack), ocParam(int2, Param.magicattack), Component.interface_1265.component_1265_133, Component.interface_1265.component_1265_134);
    cs2_6112(ocParam(int0, Param.lore_defence), ocParam(int2, Param.lore_defence), Component.interface_1265.component_1265_139, Component.interface_1265.component_1265_140);
    cs2_6112(ocParam(int0, Param.melee_damage_reduction), ocParam(int2, Param.melee_damage_reduction), Component.interface_1265.component_1265_151, Component.interface_1265.component_1265_152);
    cs2_6112(ocParam(int0, Param.ranged_damage_reduction), ocParam(int2, Param.ranged_damage_reduction), Component.interface_1265.component_1265_154, Component.interface_1265.component_1265_155);
    cs2_6112(ocParam(int0, Param.magic_damage_reduction), ocParam(int2, Param.magic_damage_reduction), Component.interface_1265.component_1265_157, Component.interface_1265.component_1265_158);
    cs2_6112(ocParam(int0, Param.melee_strength), ocParam(int2, Param.melee_strength), Component.interface_1265.component_1265_142, Component.interface_1265.component_1265_143);
    cs2_6112(ocParam(int0, Param.ranged_strength), ocParam(int2, Param.ranged_strength), Component.interface_1265.component_1265_145, Component.interface_1265.component_1265_146);
    cs2_6112(ocParam(int0, Param.magic_damage_modifier), ocParam(int2, Param.magic_damage_modifier), Component.interface_1265.component_1265_148, Component.interface_1265.component_1265_149);
    cs2_6112(ocParam(int0, Param.prayerbonus), ocParam(int2, Param.prayerbonus), Component.interface_1265.component_1265_160, Component.interface_1265.component_1265_161);

    if (int1 == 3 && enumOp(type_obj, type_boolean, Enum.enum_3446, int0) == 0) {
        cs2_6112(ocParam(int0, Param.attackrate), ocParam(int2, Param.attackrate), Component.interface_1265.component_1265_165, Component.interface_1265.component_1265_166);
    }
    ifSetText(cs2_2001(int0), Component.interface_1265.component_1265_163);
    ifSetText("Stats for " + ocName(int0) + ":", Component.interface_1265.component_1265_101);
}
