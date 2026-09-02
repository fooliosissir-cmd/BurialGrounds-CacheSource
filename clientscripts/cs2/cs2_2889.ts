/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2889

function cs2_2889(): void {
    let int0: npc = enumOp(type_int, type_npc, Enum.sfa_rogues, varbit_sfa_rogue_type);
    let int1: number = -1;
    let int2: number = -1;

    if (int0 != -1) {
        if (npcParam(int0, Param.sfa_huntedby1) != -1) {
            ifSetModel(enumOp(type_npc, type_model, Enum.sfa_fam_models, npcParam(int0, Param.sfa_huntedby1)), Component.sfa.fam1);
            ifSetModelAnim(enumOp(type_npc, type_seq, Enum.sfa_fam_anims, npcParam(int0, Param.sfa_huntedby1)), Component.sfa.fam1);
            ifSetGraphic(enumOp(type_npc, type_graphic, Enum.sfa_fam_graphic, npcParam(int0, Param.sfa_huntedby1)), Component.sfa.graphic_fam1);
            ifSetText(enumOp(type_npc, type_string, Enum.sfa_fam2string, npcParam(int0, Param.sfa_huntedby1)), Component.sfa.fam1_text);
        }
        if (npcParam(int0, Param.sfa_huntedby2) != -1) {
            ifSetModel(enumOp(type_npc, type_model, Enum.sfa_fam_models, npcParam(int0, Param.sfa_huntedby2)), Component.sfa.fam2);
            ifSetModelAnim(enumOp(type_npc, type_seq, Enum.sfa_fam_anims, npcParam(int0, Param.sfa_huntedby2)), Component.sfa.fam2);
            ifSetGraphic(enumOp(type_npc, type_graphic, Enum.sfa_fam_graphic, npcParam(int0, Param.sfa_huntedby2)), Component.sfa.graphic_fam2);
            ifSetText(enumOp(type_npc, type_string, Enum.sfa_fam2string, npcParam(int0, Param.sfa_huntedby2)), Component.sfa.fam2_text);
        }
        ifSetGraphic(enumOp(type_npc, type_graphic, Enum.sfa_rogue_graphic, int0), Component.sfa.graphic_you);
        ifSetModel(enumOp(type_npc, type_model, Enum.sfa_fam_models, int0), Component.sfa.player);
        ifSetModelAnim(enumOp(type_npc, type_seq, Enum.sfa_fam_anims, int0), Component.sfa.player);
    }
}
