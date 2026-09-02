/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,magictraining_shop]

function magictraining_shop(): void {
    let int0: number = 0;
    let int1: number = 0;
    let int2: number = 25;
    let int3: number = 20;
    let int4: number = 0;
    let int5: number = 0;
    let int6: number = (ifGetWidth(Component.interface_197.component_197_16) - int2) / (int2 + 36);

    while (int0 <= invSize(347)) {
        ccCreate(Component.interface_197.component_197_16, 5, int0);
        ccSetSize(36, 32, 0, 0);
        ccSetPosition(int2 + (36 + int2) * (int0 - int1 * int6), int3 + int1 * (32 + int3), 0, 0);
        int4 = int2 + (36 + int2) * (int0 - int1 * int6);
        int5 = int3 + int1 * (32 + int3);
        if (invGetobj(347, int0) != -1) {
            if (invGetobj(347, int0) == Obj.magictraining_wand_appr) {
                ifSetPosition(int4 - 8, int5 + 94, 0, 0, Component.interface_197.component_197_12);
            }
            if (invGetobj(347, int0) == Obj.magictraining_wand_teach) {
                ifSetPosition(int4 - 8, int5 + 94, 0, 0, Component.interface_197.component_197_14);
            }
            if (invGetobj(347, int0) == Obj.magictraining_wand_master) {
                ifSetPosition(int4 - 8, int5 + 94, 0, 0, Component.interface_197.component_197_13);
            }
            ccSetObject(invGetobj(347, int0), invGetNum(347, int0));
            ccSetGraphicShadow(0);
            ccSetOpBase("<col=ff9040>" + ocName(invGetobj(347, int0)));
            ccSetOutline(1);
            ccSetOp(1, "Value");
            ccSetOp(2, "Buy");
            ccSetOp(10, "Examine");
        }
        int0 = int0 + 1;
        if (int0 % int6 == 0) {
            int1 = int1 + 1;
        }
    }
}
