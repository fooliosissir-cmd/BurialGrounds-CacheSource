/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,mah3_strip_align]

function mah3_strip_align(): void {
    let int0: component = enumOp(type_int, type_component, Enum.enum_2566, varbit_mah3_strip_select);
    let int1: component = enumOp(type_int, type_component, Enum.enum_2565, varbit_mah3_strip_select);

    if (ifGetX(int0) < 17 || ifGetX(int0) > 57) {
        return;
    } else if (ifGetY(int0) > 12 && ifGetY(int0) < 32) {
        ifSetPosition(37, 22, 0, 0, int0);
        ifSetPosition(37, 22, 0, 0, int1);
        return;
    } else if (ifGetY(int0) > 38 && ifGetY(int0) < 58) {
        ifSetPosition(37, 48, 0, 0, int0);
        ifSetPosition(37, 48, 0, 0, int1);
        return;
    } else if (ifGetY(int0) > 70 && ifGetY(int0) < 90) {
        ifSetPosition(37, 80, 0, 0, int0);
        ifSetPosition(37, 80, 0, 0, int1);
        return;
    } else if (ifGetY(int0) > 98 && ifGetY(int0) < 118) {
        ifSetPosition(37, 108, 0, 0, int0);
        ifSetPosition(37, 108, 0, 0, int1);
        return;
    } else if (ifGetY(int0) > 128 && ifGetY(int0) < 148) {
        ifSetPosition(37, 138, 0, 0, int0);
        ifSetPosition(37, 138, 0, 0, int1);
        return;
    } else if (ifGetY(int0) > 156 && ifGetY(int0) < 176) {
        ifSetPosition(37, 166, 0, 0, int0);
        ifSetPosition(37, 166, 0, 0, int1);
        return;
    } else if (ifGetY(int0) > 184 && ifGetY(int0) < 204) {
        ifSetPosition(37, 194, 0, 0, int0);
        ifSetPosition(37, 194, 0, 0, int1);
        return;
    } else if (ifGetY(int0) > 214 && ifGetY(int0) < 234) {
        ifSetPosition(37, 224, 0, 0, int0);
        ifSetPosition(37, 224, 0, 0, int1);
        return;
    } else if (ifGetY(int0) > 242 && ifGetY(int0) < 262) {
        ifSetPosition(37, 252, 0, 0, int0);
        ifSetPosition(37, 252, 0, 0, int1);
        return;
    }
}
