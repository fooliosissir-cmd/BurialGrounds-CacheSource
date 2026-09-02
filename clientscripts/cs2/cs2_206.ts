/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_206

function cs2_206(): void {
    let int0: number = 0;
    let int1: number = 0;
    let int2: obj = -1;
    let str0: string = "";
    let str1: string = "";
    let int3: number = invSize(134);

    defineArray(0, type_obj, int3);
    defineArray(1, type_int, int3);
    let int4: number = 0;
    let int5: number = 99;
    let int6: number = 0;

    while (int0 < int3) {
        int2 = invGetobj(134, int0);
        int1 = invGetNum(134, int0);
        if (int2 != -1) {
            int5 = 99;
            int6 = 0;
            while (int6 < int3) {
                if (array0[int6] != -1) {
                    if (array0[int6] == int2) {
                        int5 = int6;
                        int6 = int3;
                    }
                    int6 = int6 + 1;
                } else {
                    int6 = int3;
                }
            }
            if (int5 == 99) {
                array0[int4] = int2;
                array1[int4] = int1;
                int4 = int4 + 1;
            } else {
                array1[int5] = array1[int5] + int1;
            }
        }
        int0 = int0 + 1;
    }
    int4 = 0;

    while (int4 < int3) {
        int2 = array0[int4];
        if (int2 != -1) {
            int1 = array1[int4];
            str0 = append(str0, cs2_207(2, int1, int2));
        } else {
            int4 = int3;
        }
        int4 = int4 + 1;
    }
    int0 = 0;
    int4 = 0;

    while (int4 < int3) {
        array0[int4] = -1;
        array1[int4] = 0;
        int4 = int4 + 1;
    }
    int4 = 0;
    int6 = 0;

    while (int0 < int3) {
        int2 = invotherGetobj(134, int0);
        int1 = invotherGetNum(134, int0);
        if (int2 != -1) {
            int5 = 99;
            int6 = 0;
            while (int6 < int3) {
                if (array0[int6] != -1) {
                    if (array0[int6] == int2) {
                        int5 = int6;
                        int6 = int3;
                    }
                    int6 = int6 + 1;
                } else {
                    int6 = int3;
                }
            }
            if (int5 == 99) {
                array0[int4] = int2;
                array1[int4] = int1;
                int4 = int4 + 1;
            } else {
                array1[int5] = array1[int5] + int1;
            }
        }
        int0 = int0 + 1;
    }
    int4 = 0;

    while (int4 < int3) {
        int2 = array0[int4];
        if (int2 != -1) {
            int1 = array1[int4];
            str1 = append(str1, cs2_207(2, int1, int2));
        } else {
            int4 = int3;
        }
        int4 = int4 + 1;
    }
    ifSetText(str0, Component.interface_626.component_626_36);
    ifSetText(str1, Component.interface_626.component_626_37);
}
