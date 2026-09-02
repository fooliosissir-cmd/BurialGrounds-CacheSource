/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,dream_bank_init]

function dream_bank_init(): void {
    let int0: number = 3;
    let int1: number = 5;
    let int2: number = 0;

    while (int0 < 255) {
        while (int1 < 235) {
            ccCreate(Component.interface_260.component_260_42, 5, int2);
            ccSetSize(36, 32, 0, 0);
            ccSetPosition(int1, int0, 0, 0);
            if (invGetobj(514, int2) != -1) {
                ccSetObject(invGetobj(514, int2), invGetNum(514, int2));
                ccSetOpBase(ocName(invGetobj(514, int2)));
                ccSetOp(1, "Withdraw");
                ccSetGraphicShadow(1118481);
                ccSetOutline(1);
            }
            int1 = int1 + 40;
            int2 = int2 + 1;
        }
        int0 = int0 + 44;
        int1 = 5;
    }
}
