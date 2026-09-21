/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1453

function cs2_1453(intArg0: number, strArg0: string): void {
    let int1: obj = invGetobj(Inv.bank, intArg0);
    let int2: number = invGetNum(Inv.bank, intArg0);

    ccSetOpBase("<col=ff981f>" + ocName(int1));

    if (int2 == 0) {
        ccSetObjectNonum(int1, 0);
        ccSetTrans(128);
        if (stringLength(ccGetOp(9)) == 0) {
            ccSetOp(1, "");
            ccSetOp(2, "");
            ccSetOp(3, "");
            ccSetOp(4, "");
            ccSetOp(5, "");
            ccSetOp(6, "");
            ccSetOp(7, "");
            ccSetOp(9, "Release");
        }
    } else {
        ccSetObject(int1, int2);
        ccSetTrans(0);
        if (stringLength(ccGetOp(9)) == 0) {
            ccSetOp(4, strArg0);
        } else {
            ccSetOp(1, "Withdraw-1");
            ccSetOp(2, "Withdraw-5");
            ccSetOp(3, "Withdraw-10");
            ccSetOp(4, strArg0);
            ccSetOp(5, "Withdraw-X");
            ccSetOp(6, "Withdraw-All");
            ccSetOp(7, "Withdraw-All but one");
            ccSetOp(9, "");
        }
    }
}
