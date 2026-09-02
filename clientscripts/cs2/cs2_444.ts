/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_444

function cs2_444(): void {
    let int0: number = 0;
    let int1: number = 0;
    let int2: obj = -1;
    let str0: string = "";
    let str1: string = "";

    defineArray(0, type_obj, invSize(583));
    defineArray(1, type_int, invSize(583));
    let int3: number = 0;
    let int4: number = 99;
    let int5: number = 0;

    while (int0 < invSize(583)) {
        int2 = invGetobj(583, int0);
        int1 = invGetNum(583, int0);
        if (int2 != -1) {
            int4 = 99;
            int5 = 0;
            while (int5 < invSize(583)) {
                if (array0[int5] != -1) {
                    if (array0[int5] == int2) {
                        int4 = int5;
                        int5 = invSize(583);
                    }
                    int5 = int5 + 1;
                } else {
                    int5 = invSize(583);
                }
            }
            if (int4 == 99) {
                array0[int3] = int2;
                array1[int3] = int1;
                int3 = int3 + 1;
            } else {
                array1[int4] = array1[int4] + int1;
            }
        }
        int0 = int0 + 1;
    }
    int3 = 0;

    while (int3 < invSize(583)) {
        int2 = array0[int3];
        if (int2 != -1) {
            int1 = array1[int3];
            str0 = append(str0, cs2_446(int1, int2));
        } else {
            int3 = invSize(583);
        }
        int3 = int3 + 1;
    }
    int0 = 0;
    int3 = 0;

    while (int3 < invSize(583)) {
        array0[int3] = -1;
        array1[int3] = 0;
        int3 = int3 + 1;
    }
    int3 = 0;
    int5 = 0;

    while (int0 < invSize(583)) {
        int2 = invotherGetobj(583, int0);
        int1 = invotherGetNum(583, int0);
        if (int2 != -1) {
            int4 = 99;
            int5 = 0;
            while (int5 < invSize(583)) {
                if (array0[int5] != -1) {
                    if (array0[int5] == int2) {
                        int4 = int5;
                        int5 = invSize(583);
                    }
                    int5 = int5 + 1;
                } else {
                    int5 = invSize(583);
                }
            }
            if (int4 == 99) {
                array0[int3] = int2;
                array1[int3] = int1;
                int3 = int3 + 1;
            } else {
                array1[int4] = array1[int4] + int1;
            }
        }
        int0 = int0 + 1;
    }
    int3 = 0;

    while (int3 < invSize(583)) {
        int2 = array0[int3];
        if (int2 != -1) {
            int1 = array1[int3];
            str1 = append(str1, cs2_446(int1, int2));
        } else {
            int3 = invSize(583);
        }
        int3 = int3 + 1;
    }

    if (stringLength(str0) > 0) {
        ifSetText(str0, Component.interface_1023.component_1023_14);
        cs2_447(Component.interface_1023.component_1023_15, Component.interface_1023.component_1023_13, Component.interface_1023.component_1023_14);
        ifSetHide(true, Component.interface_1023.component_1023_12);
    } else {
        ifSetHide(false, Component.interface_1023.component_1023_12);
    }

    if (stringLength(str1) > 0) {
        ifSetText(str1, Component.interface_1023.component_1023_21);
        cs2_447(Component.interface_1023.component_1023_22, Component.interface_1023.component_1023_20, Component.interface_1023.component_1023_21);
        ifSetHide(true, Component.interface_1023.component_1023_19);
    } else {
        ifSetHide(false, Component.interface_1023.component_1023_19);
    }
}
