/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,fishcomp_reward_tackle_box_refresh]

function proc_fishcomp_reward_tackle_box_refresh(): void {
    let int0: component = Component.interface_920.component_920_0;

    ccDeleteAll(int0);
    let int1: number = (ifGetWidth(int0) - 36 * 4) / 3;
    let int2: number = (ifGetHeight(int0) - 32 * 7) / 6;
    ccDeleteAll(Component.interface_924.component_924_39);
    let int3: number = enumGetoutputcount(Enum.enum_962);
    let int4: number = 0;
    let int5: number = 0;
    let int6: number = 0;
    let int7: number = 0;
    let int8: Enum = -1;
    let int9: obj = -1;

    while (int4 < int3) {
        if (ifFind(enumOp(type_int, type_component, Enum.enum_962, int4)) == 1) {
            int5 = ccGetX() + 2;
            int6 = ccGetY();
            int8 = enumOp(type_int, type_enum, Enum.fishcomp_reward_slot_index_to_enum, int4);
            int7 = cs2_2187(int4);
            ccCreate(Component.interface_924.component_924_39, 5, int4);
            ccSetPosition(int5 + 2, int6 + 4, 0, 0);
            ccSetSize(36, 32, 0, 0);
            ccSetOutline(1);
            if (int7 != 0) {
                int9 = enumOp(type_int, type_obj, int8, int7);
                ccSetOpBase(ocName(int9));
                ccSetOp(1, "Withdraw 1");
                if (int8 == Enum.fishcomp_reward_bait_int_to_namedobj || int8 == Enum.fishcomp_reward_fish_int_to_namedobj) {
                    ccSetOp(2, "Withdraw 5");
                    ccSetOp(3, "Withdraw 10");
                    ccSetOp(4, "Withdraw All");
                    ccSetOp(5, "Withdraw X");
                    ccSetObject(int9, cs2_2188(int4));
                } else {
                    ccSetObjectNonum(int9, 1);
                }
            }
        } else {
            mes("Nothing happens, as if something is wrong.");
            return;
        }
        int4 = int4 + 1;
    }
}
