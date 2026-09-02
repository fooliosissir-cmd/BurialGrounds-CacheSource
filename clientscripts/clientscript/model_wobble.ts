/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,model_wobble]

function model_wobble(intArg0: component, intArg1: number, intArg2: number, intArg3: number): void {
    let int4: number = 100;

    varc_rand_display_stage = (varc_rand_display_stage + 1) % 360;
    ifSetModelAngle(ifGetmodelxof(intArg0), ifGetmodelyof(intArg0), intArg1, (intArg2 + scale(int4, 10000, enumOp(type_int, type_int, Enum.rand_sin_x, varc_rand_display_stage))) % 2048, (intArg3 + scale(int4, 10000, enumOp(type_int, type_int, Enum.rand_cos_x, varc_rand_display_stage))) % 2048, ifGetModelZoom(intArg0), intArg0);
}
