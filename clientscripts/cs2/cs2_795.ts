/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_795

function cs2_795(intArg0: obj): number {
    if (invTotal(Inv.inv, Obj.wolf_bones) < 1) {
        return 0;
    }

    if (invTotal(Inv.inv, Obj.obj_12530) < 1) {
        return 0;
    }

    if (invTotal(Inv.inv, Obj.obj_12527) < 1) {
        return 0;
    }

    if (invTotal(Inv.inv, Obj.obj_12525) < 1) {
        return 0;
    }
    return 1;
}
