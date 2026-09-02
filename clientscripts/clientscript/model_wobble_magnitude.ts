/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,model_wobble_magnitude]

function model_wobble_magnitude(intArg0: component, intArg1: number, intArg2: number, intArg3: number, intArg4: number): void {
    varc_rand_display_stage = (varc_rand_display_stage + 1) % 360;
    ifSetModelAngle(ifGetmodelxof(intArg0), ifGetmodelyof(intArg0), intArg1, (intArg2 + scale(intArg4, 10000, enumOp(type_int, type_int, Enum.rand_sin_x, varc_rand_display_stage))) % 2048, (intArg3 + scale(intArg4, 10000, enumOp(type_int, type_int, Enum.rand_cos_x, varc_rand_display_stage))) % 2048, ifGetModelZoom(intArg0), intArg0);
}
