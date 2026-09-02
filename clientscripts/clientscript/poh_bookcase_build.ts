/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,poh_bookcase_build]

function poh_bookcase_build(intArg0: component, intArg1: component): void {
    ccDeleteAll(intArg0);
    let int2: number = 0;
    defineArray(0, type_int, 105);
    let int3: number = 0;
    let int4: number = 0;
    let int5: number = -1;

    while (int4 == 0 && int2 < 105) {
        int5 = enumOp(type_int, type_struct, Enum.enum_845, int2);
        if (int5 == 345) {
            int4 = 1;
        } else {
            ccCreate(intArg0, 3, int2);
            if (cs2_1694(int2) == 1 && int5 != -1) {
                array0[int3] = int2;
                int3 = int3 + 1;
            } else {
                ccSetHide(true);
            }
        }
        int2 = int2 + 1;
    }
    cs2_1693(0, 0, int3 - 1);
    let int6: number = 0;
    let int7: number = -1;
    int2 = 0;

    while (int2 < int3) {
        if (ccFind(intArg0, array0[int2]) == 1) {
            [int6, int7] = cs2_1692(intArg0, int6, array0[int2]);
        }
        int2 = int2 + 1;
    }

    if (int6 <= ifGetHeight(intArg0)) {
        ifSetScrollSize(0, 0, intArg0);
        ccDeleteAll(intArg1);
        ifSetHide(true, intArg1);
    } else {
        if (int7 != -1 && ccFind(intArg0, int7) == 1) {
            ccDelete();
        }
        ifSetScrollSize(0, int6, intArg0);
        ifSetHide(false, intArg1);
        proc_scrollbar_vertical(intArg1, intArg0, Graphic.scrollbar_parchment_dragger_v2_3, Graphic.scrollbar_parchment_dragger_v2_0, Graphic.scrollbar_parchment_dragger_v2_1, Graphic.scrollbar_parchment_dragger_v2_2, Graphic.scrollbar_parchment_v2_0, Graphic.scrollbar_parchment_v2_1);
    }
}
