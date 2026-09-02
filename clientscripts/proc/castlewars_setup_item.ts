/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,castlewars_setup_item]

function castlewars_setup_item(intArg0: component, intArg1: component): void {
    let int2: obj = enumOp(type_component, type_obj, Enum.enum_3058, intArg1);
    let int3: number = enumOp(type_obj, type_int, Enum.castlewars_reward_cost, int2);

    if (int2 == Obj.obj_4055) {
        ifSetText("Free!", intArg0);
    } else {
        ifSetText(tostring(int3), intArg0);
    }
    ifSetObject(int2, -1, intArg1);
    ifSetOutline(1, intArg1);
    ifSetGraphicShadow(3355443, intArg1);
}
