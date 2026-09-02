/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5876

function cs2_5876(intArg0: number): [obj, number] {
    switch (intArg0) {
        case 1:
            return [Obj.coins, 50];
        case 2:
            return [Obj.coins, 10000];
        case 3:
            return [Obj.coins, 10000000];
        case 4:
            return [Obj.obj_24155, 1];
    }
    return [-1, 0];
}
