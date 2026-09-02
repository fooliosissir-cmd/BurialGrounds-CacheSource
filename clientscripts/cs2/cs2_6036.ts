/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6036

function cs2_6036(intArg0: stat, intArg1: number, intArg2: obj): string {
    if (intArg0 == -1) {
        return "N/A";
    }
    let int3: number = 0;
    let int4: number = 0;

    if (ocParam(intArg2, Param.xpbooster_grade) > -1) {
        return enumOp(type_stat, type_string, Enum.stat_to_string, intArg0) + " XP";
    }

    switch (intArg2) {
        case Obj.obj_13732:
        case Obj.loy_wave_reward:
        case Obj.loy_def_reward:
        case Obj.wof_lamp_small:
        case Obj.wof_lamp_medium:
        case Obj.wof_lamp_large:
        case Obj.wof_lamp_huge:
        case Obj.easter12_lamp:
            return enumOp(type_stat, type_string, Enum.stat_to_string, intArg0) + " XP";
        case Obj.macro_genilamp:
        case Obj.swept_bowl:
        case Obj.humble_pie:
            int3 = statBase(intArg0) * 10;
            break;
        case Obj.pattern_reward:
            int3 = statBase(intArg0) * 15;
            break;
        case Obj.lmm_xp_lamp:
            int4 = statBase(intArg0);
            if (int4 <= 18) {
                int3 = enumOp(type_int, type_int, Enum.xp_for_level, int4 + 1) - enumOp(type_int, type_int, Enum.xp_for_level, int4);
            } else {
                int3 = statBase(intArg0) * 25;
            }
            break;
        case Obj.effi_dragonkin_lamp:
            int4 = statBase(intArg0);
            if (int4 < 30) {
                int3 = enumOp(type_int, type_int, Enum.xp_for_level, int4 + 1) - enumOp(type_int, type_int, Enum.xp_for_level, int4);
            } else {
                int3 = int4 * int4 - 2 * int4 + 100;
                int3 = int3 * (int4 * 10000 / 20);
                int3 = int3 / 10000;
            }
            break;
        case Obj.aura_multiskiller_reward:
        case Obj.clan_cloak:
            int4 = statBase(intArg0);
            int3 = pow(int4, 2);
            int3 = int3 - 2 * int4 + 100;
            break;
        default:
            int3 = intArg1 / 10;
            break;
    }
    return enumOp(type_stat, type_string, Enum.stat_to_string, intArg0) + ": " + tostringLocalised(int3, 1) + " XP";
}
