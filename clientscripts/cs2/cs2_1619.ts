/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1619

function cs2_1619(intArg0: number, intArg1: number, intArg2: obj): void {
    if (intArg0 < 0 || intArg0 >= 5 || intArg1 < 0 || intArg1 >= 5) {
        mes("Nothing happens, as if something has gone wrong.");
        return;
    }
    let int3: Enum = enumOp(type_int, type_enum, Enum.mm_reinit_int_to_row_enum, intArg1);
    let int4: component = enumOp(type_int, type_component, int3, intArg0);
    ifSetModel(enumOp(type_obj, type_model, Enum.mm_reinit_obj_to_model, intArg2), int4);
    ifSetModelAngle(0, 0, 520, 0, 0, 2180, int4);
}
