/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,mob_quest_kit_update]

function mob_quest_kit_update(): void {
    let int0: number = 0;
    let int1: number = 0;
    let int2: Enum = -1;
    let int3: number = 5;
    let int4: number = (ifGetWidth(Component.interface_842.component_842_17) - 36 * int3) / (int3 - 1);
    let int5: number = (ifGetHeight(Component.interface_842.component_842_17) - 128) / 3;

    if (invTotal(Inv.inv, Obj.mob_quest_kit_low) > 0) {
        int2 = Enum.mob_quest_kit_objects_low;
    } else if (invTotal(Inv.inv, Obj.mob_quest_kit_med) > 0) {
        int2 = Enum.mob_quest_kit_objects_med;
    } else if (invTotal(Inv.inv, Obj.mob_quest_kit_high) > 0) {
        int2 = Enum.mob_quest_kit_objects_high;
    } else if (invTotal(Inv.inv, Obj.mob_quest_kit_elite) > 0) {
        int2 = Enum.enum_1999;
    }

    while (int1 == 0) {
        if (enumOp(type_int, type_obj, int2, int0) != 1511) {
            ccCreate(Component.interface_842.component_842_17, 5, int0);
            ccSetSize(36, 32, 0, 0);
            ccSetPosition((36 + int4) * (int0 % int3), int0 / int3 * (32 + int5), 0, 0);
            ccSetObject(enumOp(type_int, type_obj, int2, int0), -1);
            ccSetOpBase("<col=ff981f>" + ocName(enumOp(type_int, type_obj, int2, int0)));
            ccSetOp(1, "Withdraw");
            ccSetOp(2, "Examine");
            ccSetGraphicShadow(3355443);
            ccSetOutline(1);
            int0 = int0 + 1;
        } else {
            int1 = 1;
        }
    }
}
