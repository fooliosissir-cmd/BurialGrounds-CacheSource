/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,carni_storage_refresh]

function proc_carni_storage_refresh(intArg0: component, intArg1: number): void {
    let int2: number = 0;
    let int3: number = 0;
    let int4: number = 0;
    let int5: obj = -1;

    while (int2 < intArg1) {
        if (ccFind(intArg0, int2) == 1) {
            if (cs2_6340(int2) == 1) {
                int5 = enumOp(type_int, type_obj, Enum.carni_storage_item, int2);
                int4 = enumOp(type_int, type_int, Enum.carni_storage_number, int2);
                if (ocStackable(int5) == 0 || int2 == 0) {
                    int4 = int4 - invTotal(Inv.inv, int5);
                }
                if (int4 > 0) {
                    ccSetObject(int5, int4);
                    ccSetHide(false);
                    ccSetPosition(50 * (int3 % 3), 50 * (int3 / 3), 0, 0);
                    int3 = int3 + 1;
                } else {
                    ccSetHide(true);
                }
            } else {
                ccSetHide(true);
            }
        }
        int2 = int2 + 1;
    }
}
