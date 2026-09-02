/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_495

function cs2_495(intArg0: component): void {
    let int1: number = 0;

    switch (intArg0) {
        case Component.interface_1015.component_1015_144:
            int1 = varbit_conq_unit_1_type;
            break;
        case Component.interface_1015.component_1015_146:
            int1 = varbit_conq_unit_2_type;
            break;
        case Component.interface_1015.component_1015_148:
            int1 = varbit_conq_unit_3_type;
            break;
        case Component.interface_1015.component_1015_150:
            int1 = varbit_conq_unit_4_type;
            break;
        case Component.interface_1015.component_1015_152:
            int1 = varbit_conq_unit_5_type;
            break;
        case Component.interface_1015.component_1015_154:
            int1 = varbit_conq_unit_6_type;
            break;
        case Component.interface_1015.component_1015_156:
            int1 = varbit_conq_unit_7_type;
            break;
        case Component.interface_1015.component_1015_158:
            int1 = varbit_conq_unit_8_type;
            break;
        case Component.interface_1015.component_1015_160:
            int1 = varbit_conq_unit_9_type;
            break;
        case Component.interface_1015.component_1015_162:
            int1 = varbit_conq_unit_10_type;
            break;
        default:
            return;
    }

    if (int1 == 0) {
        ifSetColour(colour(0x585042), intArg0);
    } else {
        ifSetColour(colour(0xE6CA98), intArg0);
    }
}
