/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,mah3_strip_down]

function mah3_strip_down(): void {
    let int0: component = enumOp(type_int, type_component, Enum.enum_2566, varbit_mah3_strip_select);
    let int1: component = enumOp(type_int, type_component, Enum.enum_2565, varbit_mah3_strip_select);

    if (ifGetY(int0) < 293) {
        soundVorbisVolume(7570, 1, 0, 50);
        ifSetPosition(ifGetX(int0), ifGetY(int0) + 2, 0, 0, int0);
        ifSetPosition(ifGetX(int1), ifGetY(int1) + 2, 0, 0, int1);
    }
}
