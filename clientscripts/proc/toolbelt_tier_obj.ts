/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,toolbelt_tier_obj]

function toolbelt_tier_obj(intArg0: number, intArg1: number): obj {
    if (intArg0 == 1) {
        if (intArg1 == 1 && varbit_toolbelt_pickaxe_tier > 0) {
            return enumOp(type_int, type_obj, Enum.toolbelt_pickaxe_objects, varbit_toolbelt_pickaxe_tier);
        }
        if (intArg1 == 4 && varbit_toolbelt_hatchet_tier > 0) {
            return enumOp(type_int, type_obj, Enum.toolbelt_hatchet_objects, varbit_toolbelt_hatchet_tier);
        }
        if (intArg1 == 9 && varbit_toolbelt_machete_tier > 0) {
            return enumOp(type_int, type_obj, Enum.toolbelt_machete_objects, varbit_toolbelt_machete_tier);
        }
    } else if (intArg0 == 4 && intArg1 == 5 && varbit_toolbelt_secateurs_tier > 0) {
        return enumOp(type_int, type_obj, Enum.toolbelt_secateurs_objects, varbit_toolbelt_secateurs_tier);
    }
    return -1;
}
