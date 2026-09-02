/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1121

function cs2_1121(): void {
    let int0: component = enumOp(type_int, type_component, Enum.enum_729, varbit_276);
    let int1: number = 0;
    let int2: number = 0;
    let int3: component = -1;
    let int4: component = -1;

    switch (varbit_zaros_spellbook) {
        case 0:
            int3 = Component.interface_192.component_192_93;
            int4 = Component.interface_192.component_192_92;
            break;
        case 1:
            int3 = Component.interface_193.component_193_50;
            int4 = Component.interface_193.component_193_49;
            break;
        case 3:
            int3 = Component.interface_950.component_950_69;
            int4 = Component.interface_950.component_950_68;
            break;
        default:
            return;
    }

    if (int0 != -1 && varbit_275 == 1) {
        int1 = ifGetX(int0) - 2;
        int2 = ifGetY(int0) - 2;
        ifSetPosition(int1, int2, 0, 0, int3);
        ifSetPosition(int1, int2, 0, 0, int4);
        ifSetHide(false, int3);
        ifSetHide(false, int4);
        return;
    }
    ifSetHide(true, int3);
    ifSetHide(true, int4);
}
