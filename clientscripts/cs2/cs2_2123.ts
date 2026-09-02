/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2123

function cs2_2123(intArg0: number, intArg1: number, intArg2: component, intArg3: number): void {
    ccCreate(intArg2, 5, intArg0);
    ccSetPosition(5 + (36 + 20) * intArg1, intArg3 + 22, 0, 0);
    ccSetSize(36, 32, 0, 0);
    let int4: obj = enumOp(type_int, type_obj, Enum.ame_costumes, intArg0);

    if (int4 != -1) {
        ccSetOutline(1);
        ccSetGraphicShadow(3153952);
        ccSetObject(int4, -1);
        ccSetOp(1, "Claim");
        ccSetOp(10, "Examine");
        ccSetOpBase("<col=ff9040>" + ocName(int4) + "</col>");
        if (invTotal(Inv.inv, int4) + invTotal(Inv.worn, int4) + invTotal(Inv.bank, int4) + invTotal(Inv.inv_530, int4) > 0) {
            ccSetTrans(200);
        } else if (intArg0 / 10 == 1 / 10) {
            if (varbit_poh_costume_ame_mime > 0) {
                ccSetTrans(200);
            } else {
                ccSetTrans(0);
            }
        } else if (intArg0 == 11) {
            if (varbit_poh_costume_frog_mask > 0) {
                ccSetTrans(200);
            } else {
                ccSetTrans(0);
            }
        } else if (intArg0 / 10 == 11 / 10) {
            if (varbit_poh_costume_ame_frog > 0) {
                ccSetTrans(200);
            } else {
                ccSetTrans(0);
            }
        } else if (intArg0 / 10 == 21 / 10) {
            if (varbit_poh_costume_ame_gravedigger > 0) {
                ccSetTrans(200);
            } else {
                ccSetTrans(0);
            }
        } else if (intArg0 / 10 == 31 / 10) {
            if (varbit_poh_costume_ame_drilldemon > 0) {
                ccSetTrans(200);
            } else {
                ccSetTrans(0);
            }
        } else if (intArg0 / 10 == 41 / 10) {
            if (varbit_poh_costume_ame_forester > 0) {
                ccSetTrans(200);
            } else {
                ccSetTrans(0);
            }
        } else {
            ccSetTrans(0);
        }
    }
}
