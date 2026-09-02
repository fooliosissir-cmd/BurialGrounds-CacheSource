/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,sellprice]

function sellprice(intArg0: obj): obj {
    if (intArg0 == -1) {
        return Obj.mcannonremains;
    }
    intArg0 = ocUncert(intArg0);
    let int1: obj = enumOp(type_obj, type_int, Enum.shop_exceptions_shopsell_tokkul, intArg0);

    if (varp_currency == Obj.tzhaar_token && int1 != -1) {
        return int1;
    }
    int1 = enumOp(type_obj, type_int, Enum.shop_exceptions_shopsell, intArg0);

    if (int1 != -1 && int1 > Obj.mcannonremains) {
        return int1;
    }
    int1 = max(1, scale(ocCost(intArg0), 100, 30));
    return int1;
}
