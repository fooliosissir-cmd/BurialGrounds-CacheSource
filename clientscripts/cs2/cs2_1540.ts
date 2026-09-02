/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1540

function cs2_1540(intArg0: component): void {
    ccDeleteAll(intArg0);
    let int1: number = (ifGetWidth(intArg0) - 36 * 4) / 3;
    let int2: number = (ifGetHeight(intArg0) - 32 * 7) / 6;
    let int3: number = 0;
    let int4: number = invSize(93);
    let int5: obj = -1;
    let int6: number = 0;
    let str0: string = "";
    let str1: string = "";

    while (int3 < int4) {
        ccCreate(intArg0, 5, int3);
        ccSetSize(36, 32, 0, 0);
        ccSetPosition((36 + int1) * (int3 % 4), int3 / 4 * (32 + int2), 0, 0);
        int5 = invGetobj(93, int3);
        if (int5 != -1) {
            int6 = invTotal(Inv.inv, int5);
            [str0, str1] = [ocParam(int5, Param.bank_extra_op1), ocParam(int5, Param.bank_extra_op2)];
            if (stringLength(str0) <= 0) {
                if (testBit(varc_96, int3) == 1) {
                    str0 = ocIop(int5, 2);
                } else if (testBit(varc_95, int3) == 1) {
                    str0 = "Eat";
                }
            }
            ccSetOnMouseOver(hook(cs2_5495, "o", [int5]));
            ccHookMouseExit(hook(cs2_5495, "o", [-1]));
        } else {
            [str0, str1] = ["", ""];
            int6 = 0;
        }
        if (int6 > 5) {
            interface_inv_draw_slot_big(Inv.inv, int3, intArg0, int3, 1, -1, "Deposit-1", "Deposit-5", "Deposit-10", "Deposit-" + tostring(varp_1249), "Deposit-X", "Deposit-All", "", str0, str1);
        } else if (int6 > 1) {
            interface_inv_draw_slot_big(Inv.inv, int3, intArg0, int3, 1, -1, "Deposit-1", "Deposit-5", "", "Deposit-" + tostring(varp_1249), "Deposit-X", "Deposit-All", "", str0, str1);
        } else {
            interface_inv_draw_slot_big(Inv.inv, int3, intArg0, int3, 1, -1, "Deposit", "", "", "", "", "", "", str0, str1);
        }
        int3 = int3 + 1;
    }
}
