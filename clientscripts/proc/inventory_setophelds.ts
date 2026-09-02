/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,inventory_setophelds]

function inventory_setophelds(intArg0: obj): void {
    ccSetOpBase(cs2_4033(intArg0) + ocName(intArg0));

    switch (intArg0) {
        case Obj.obj_6099:
        case Obj.obj_6100:
        case Obj.obj_6101:
        case Obj.obj_6102:
            cs2_2411(intArg0);
            return;
        case Obj.atlum_ring_med:
        case Obj.atlum_ring_elite:
        case Obj.atlum_ring_hard:
            cs2_2431(intArg0);
            return;
        case Obj.rand_reward_coal_bag:
            cs2_1273(intArg0);
            return;
        case Obj.rcu_pouch_small:
            cs2_5862(Obj.rcu_pouch_small);
            return;
        case Obj.rcu_pouch_medium:
        case Obj.rcu_pouch_medium_degrade:
            cs2_5862(Obj.rcu_pouch_medium);
            return;
        case Obj.rcu_pouch_large:
        case Obj.rcu_pouch_large_degrade:
            cs2_5862(Obj.rcu_pouch_large);
            return;
        case Obj.rcu_pouch_giant:
        case Obj.rcu_pouch_giant_degrade:
            cs2_5862(Obj.rcu_pouch_giant);
            return;
        case Obj.rcsiphonxp_charged_runic_staff:
        case Obj.rcsiphonxp_charged_greater_runic_staff:
        case Obj.rcsiphonxp_uncharged_runic_staff:
        case Obj.rcsiphonxp_uncharged_greater_runic_staff:
            cs2_2431(intArg0);
            return;
        case Obj.rand_bolt_blast_box:
        case Obj.rand_bolt_blast_box_b:
        case Obj.rand_wave_surge_box:
        case Obj.rand_wave_surge_box_b:
            cs2_2431(intArg0);
            return;
        case Obj.rcsiphonxp_massive_pouch_active:
            cs2_6186(intArg0);
            return;
    }

    if (ocUncert(intArg0) != intArg0 && varbit_task_priority_mode == 1) {
        inventory_setophelds_specified("Read", Cursor.cursor_read, ocIop(intArg0, 2), ocIcursor(intArg0, 2), ocIop(intArg0, 3), ocIcursor(intArg0, 3), ocIop(intArg0, 4), ocIcursor(intArg0, 4), ocIop(intArg0, 5), ocIcursor(intArg0, 5), ocName(intArg0));
        return;
    }
    ccSetOnVarTransmit(noHook(""));
    inventory_setophelds_specified(ocIop(intArg0, 1), ocIcursor(intArg0, 1), ocIop(intArg0, 2), ocIcursor(intArg0, 2), ocIop(intArg0, 3), ocIcursor(intArg0, 3), ocIop(intArg0, 4), ocIcursor(intArg0, 4), ocIop(intArg0, 5), ocIcursor(intArg0, 5), ocName(intArg0));
}
