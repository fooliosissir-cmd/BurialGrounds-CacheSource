/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6185

function cs2_6185(intArg0: obj, intArg1: component): number {
    let int2: number = 0;
    let int3: number = 4;
    let int4: struct = -1;

    if (invGetobj(94, 3) == Obj.rcsiphonxp_charged_greater_runic_staff || invGetobj(94, 3) == Obj.rcsiphonxp_charged_runic_staff) {
        if (enumGetreversecount(type_component, Enum.enum_2191, intArg1) != 0) {
            int2 = enumGetreverseindex(type_component, type_int, Enum.enum_2191, intArg1, 0);
            int3 = 0;
        } else if (enumGetreversecount(type_component, Enum.enum_2185, intArg1) != 0) {
            int2 = enumGetreverseindex(type_component, type_int, Enum.enum_2185, intArg1, 0);
            int3 = 1;
        } else if (enumGetreversecount(type_component, Enum.enum_2178, intArg1) != 0) {
            int2 = enumGetreverseindex(type_component, type_int, Enum.enum_2178, intArg1, 0);
            int3 = 2;
        }
        if (int2 != 0 && int2 == varc_1913 && int3 == varc_1912) {
            switch (int3) {
                case 0:
                    int4 = enumOp(type_int, type_struct, Enum.enum_5769, int2);
                    break;
                case 1:
                    int4 = enumOp(type_int, type_struct, Enum.enum_5775, int2);
                    break;
                case 2:
                    int4 = enumOp(type_int, type_struct, Enum.enum_5772, int2);
                    break;
            }
            if (int4 != -1) {
                switch (intArg0) {
                    case Obj.airrune:
                        return structParam(int4, Param.param_2359) * varc_1914;
                    case Obj.waterrune:
                        return structParam(int4, Param.param_2361) * varc_1914;
                    case Obj.earthrune:
                        return structParam(int4, Param.param_2360) * varc_1914;
                    case Obj.firerune:
                        return structParam(int4, Param.param_2362) * varc_1914;
                    case Obj.bodyrune:
                        return structParam(int4, Param.param_2364) * varc_1914;
                    case Obj.mindrune:
                        return structParam(int4, Param.param_2363) * varc_1914;
                    case Obj.chaosrune:
                        return structParam(int4, Param.param_2365) * varc_1914;
                    case Obj.astralrune:
                        return structParam(int4, Param.param_2369) * varc_1914;
                    case Obj.cosmicrune:
                        return structParam(int4, Param.param_2371) * varc_1914;
                    case Obj.lawrune:
                        return structParam(int4, Param.param_2372) * varc_1914;
                    case Obj.naturerune:
                        return structParam(int4, Param.param_2370) * varc_1914;
                    case Obj.bloodrune:
                        return structParam(int4, Param.param_2367) * varc_1914;
                    case Obj.deathrune:
                        return structParam(int4, Param.param_2366) * varc_1914;
                    case Obj.soulrune:
                        return structParam(int4, Param.param_2368) * varc_1914;
                    case Obj.mah5_armadyl_rune:
                        return structParam(int4, Param.param_2373) * varc_1914;
                    case Obj.slayer_staff:
                        return 1;
                }
            }
        }
    }
    return 0;
}
