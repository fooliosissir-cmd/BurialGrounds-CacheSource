/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,carni_treasurechest_side_refresh]

function proc_carni_treasurechest_side_refresh(intArg0: component, intArg1: number): void {
    let int2: number = 0;
    let int3: obj = -1;
    let int4: number = 0;

    while (int2 < intArg1) {
        if (ccFind(intArg0, int2) == 1) {
            int3 = invGetobj(93, int2);
            if (int3 != -1) {
                ccSetHide(false);
                int4 = invGetNum(93, int2);
                ccSetObject(int3, int4);
                ccSetOpBase(cs2_4033(int3) + ocName(int3));
                ccClearops();
                if (int4 > 2) {
                    ccSetOp(1, "Add-1");
                    ccSetOp(2, "Add-All");
                    ccSetOp(3, "Add-X");
                } else if (int4 == 2) {
                    ccSetOp(1, "Add-1");
                    ccSetOp(2, "Add-All");
                } else {
                    ccSetOp(1, "Add");
                }
                ccSetOp(10, "Examine");
            } else {
                ccSetHide(true);
            }
        }
        int2 = int2 + 1;
    }
}
