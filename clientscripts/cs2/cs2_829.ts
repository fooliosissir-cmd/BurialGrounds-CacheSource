/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_829

function cs2_829(intArg0: struct, intArg1: Enum): number {
    if (intArg0 == Struct.struct_845) {
        return fullScreenModeCount() - 1;
    }
    return enumGetoutputcount(intArg1) - 1;
}
