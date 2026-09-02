/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,buyprice]

function buyprice(intArg0: obj): obj {
    if (intArg0 == -1) {
        return Obj.mcannonremains;
    }
    intArg0 = ocUncert(intArg0);
    let int1: obj = enumOp(type_obj, type_int, Enum.shop_exceptions_shopbuy_tokkul, intArg0);

    if (varp_currency == Obj.tzhaar_token && int1 != -1 && int1 > Obj.mcannonremains) {
        return int1;
    }
    int1 = enumOp(type_obj, type_int, Enum.shop_exceptions_shopbuy, intArg0);

    if (int1 != -1 && int1 > Obj.mcannonremains) {
        return int1;
    }

    if (ocParam(intArg0, Param.skillcape) == 1 || ocParam(intArg0, Param.skillcape_trimmed) == 1) {
        return 99000;
    }
    int1 = ocCost(intArg0);

    if (varp_currency == Obj.tzhaar_token) {
        int1 = scale(3, 2, int1);
    }
    return max(int1, 1);
}
