/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,ring_of_charos_check]

function ring_of_charos_check(): number {
    if (invTotal(Inv.worn, Obj.ring_of_charos_unlocked) > 0 || invTotal(Inv.worn, Obj.mob_ring_of_charos_unlocked) > 0) {
        return 1;
    } else {
        return 0;
    }
}
