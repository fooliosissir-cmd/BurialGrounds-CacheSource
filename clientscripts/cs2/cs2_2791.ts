/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2791

function cs2_2791(intArg0: number): [model, string, number, number, seq] {
    let int1: model = structParam(enumOp(type_int, type_struct, Enum.enum_869, intArg0), Param.contact_spell_model);
    let str0: string = structParam(enumOp(type_int, type_struct, Enum.enum_869, intArg0), Param.contact_spell_caption);
    let int2: seq = structParam(enumOp(type_int, type_struct, Enum.enum_869, intArg0), Param.param_939);
    let int3: number = structParam(enumOp(type_int, type_struct, Enum.enum_869, intArg0), Param.contact_spell_model_zoom);
    let int4: number = 1;
    let int5: number = 0;

    if (structParam(enumOp(type_int, type_struct, Enum.enum_869, intArg0), Param.contact_spell_can_be_different) == 1) {
        switch (intArg0) {
            case 0:
                if (statBase(7) < 40) {
                    int1 = structParam(enumOp(type_int, type_struct, Enum.enum_869, intArg0), Param.contact_spell_model_blank);
                    int4 = 0;
                }
                break;
            case 1:
                if (varbit_handsand_quest < 160) {
                    int1 = structParam(enumOp(type_int, type_struct, Enum.enum_869, intArg0), Param.contact_spell_model_blank);
                    int4 = 0;
                }
                break;
            case 2:
                if (varp_359 < 100) {
                    int1 = structParam(enumOp(type_int, type_struct, Enum.enum_869, intArg0), Param.contact_spell_model_blank);
                    int4 = 0;
                }
                break;
            case 3:
                if (varbit_luc2_main_quest > 370) {
                    int5 = 1;
                }
                break;
            case 5:
                if (varbit_ics_little_var < 26) {
                    int1 = structParam(enumOp(type_int, type_struct, Enum.enum_869, intArg0), Param.contact_spell_model_blank);
                    int4 = 0;
                }
                break;
            case 6:
                if (varbit_luc2_hero_part_1_vis == 1) {
                    int5 = 1;
                }
                break;
            case 7:
                if (varbit_luc2_main_quest > 370) {
                    int5 = 1;
                }
                break;
            case 9:
                if (statBase(10) < 15) {
                    int1 = structParam(enumOp(type_int, type_struct, Enum.enum_869, intArg0), Param.contact_spell_model_blank);
                    int4 = 0;
                }
                break;
            case 11:
                if (varbit_dream_prog < 16 || varbit_luc2_cyrisus_recruit == 1) {
                    int1 = structParam(enumOp(type_int, type_struct, Enum.enum_869, intArg0), Param.contact_spell_model_blank);
                    int4 = 0;
                }
                break;
            case 12:
                if (varbit_peng_quest < 135) {
                    int1 = structParam(enumOp(type_int, type_struct, Enum.enum_869, intArg0), Param.contact_spell_model_blank);
                    int4 = 0;
                } else if (varbit_peng_rak_quest == 140) {
                    int5 = 1;
                }
                break;
            case 19:
                if (varbit_dream_prog < 28) {
                    int1 = structParam(enumOp(type_int, type_struct, Enum.enum_869, intArg0), Param.contact_spell_model_blank);
                    int4 = 0;
                }
                break;
            case 14:
                if (varp_492 < 4) {
                    int1 = structParam(enumOp(type_int, type_struct, Enum.enum_869, intArg0), Param.contact_spell_model_blank);
                    int4 = 0;
                }
                break;
            case 16:
                if (varbit_lunarfm_spells_unlocked < 8) {
                    int1 = structParam(enumOp(type_int, type_struct, Enum.enum_869, intArg0), Param.contact_spell_model_blank);
                    int4 = 0;
                }
                break;
            case 18:
                if (varp_517 < 2) {
                    int1 = structParam(enumOp(type_int, type_struct, Enum.enum_869, intArg0), Param.contact_spell_model_blank);
                    int4 = 0;
                }
                break;
        }
        if (int5 == 1) {
            int1 = structParam(enumOp(type_int, type_struct, Enum.enum_869, intArg0), Param.contact_spell_different_model);
            int4 = 1;
            str0 = structParam(enumOp(type_int, type_struct, Enum.enum_869, intArg0), Param.contact_spell_different_caption);
            int3 = structParam(enumOp(type_int, type_struct, Enum.enum_869, intArg0), Param.contact_spell_different_model_zoom);
            int2 = structParam(enumOp(type_int, type_struct, Enum.enum_869, intArg0), Param.contact_spell_different_animation);
        }
    }
    return [int1, str0, int4, int3, int2];
}
