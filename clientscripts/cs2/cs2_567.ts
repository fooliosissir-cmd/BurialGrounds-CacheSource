/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_567

function cs2_567(intArg0: number): void {
    let int1: number = 0;
    let int2: number = 0;
    let int3: number = 0;
    let int4: number = 0;

    if (intArg0 == 70254793) {
        switch (varbit_artisan_grade_choice) {
            case 0:
                int1 = 1;
                break;
            case 1:
                int1 = 9;
                break;
            case 2:
                int1 = 12;
                break;
            case 3:
                int1 = 75;
                break;
        }
        int3 = int1 * varbit_artisan_temp_bar_number;
        if (varbit_artisan_iron_ores - int3 > 0) {
            ifSetColour(colour(0x00FF00), Component.interface_1072.component_1072_53);
            int3 = varbit_artisan_iron_ores - int3;
        } else {
            ifSetColour(colour(0xFF0000), Component.interface_1072.component_1072_53);
            int3 = 0;
        }
    } else if (intArg0 == 70254805) {
        switch (varbit_artisan_grade_choice) {
            case 0:
                int1 = 1;
                int2 = 2;
                break;
            case 1:
                int1 = 4;
                int2 = 7;
                break;
            case 2:
                int1 = 9;
                int2 = 17;
                break;
            case 3:
                int1 = 40;
                int2 = 80;
                break;
        }
        int3 = int1 * varbit_artisan_temp_bar_number;
        if (varbit_artisan_iron_ores - int3 > 0) {
            ifSetColour(colour(0x00FF00), Component.interface_1072.component_1072_53);
            int3 = varbit_artisan_iron_ores - int3;
        } else {
            ifSetColour(colour(0xFF0000), Component.interface_1072.component_1072_53);
            int3 = 0;
        }
        int4 = int2 * varbit_artisan_temp_bar_number;
        if (varbit_artisan_coal - int4 > 0) {
            ifSetColour(colour(0x00FF00), Component.interface_1072.component_1072_49);
            int4 = varbit_artisan_coal - int4;
        } else {
            ifSetColour(colour(0xFF0000), Component.interface_1072.component_1072_49);
            int4 = 0;
        }
    } else if (intArg0 == 70254817) {
        switch (varbit_artisan_grade_choice) {
            case 0:
                int1 = 1;
                int2 = 4;
                break;
            case 1:
                int1 = 3;
                int2 = 12;
                break;
            case 2:
                int1 = 6;
                int2 = 24;
                break;
            case 3:
                int1 = 30;
                int2 = 120;
                break;
        }
        int3 = int1 * varbit_artisan_temp_bar_number;
        if (varbit_artisan_mithril_ores - int3 > 0) {
            ifSetColour(colour(0x00FF00), Component.interface_1072.component_1072_57);
            int3 = varbit_artisan_mithril_ores - int3;
        } else {
            ifSetColour(colour(0xFF0000), Component.interface_1072.component_1072_57);
            int3 = 0;
        }
        int4 = int2 * varbit_artisan_temp_bar_number;
        if (varbit_artisan_coal - int4 > 0) {
            ifSetColour(colour(0x00FF00), Component.interface_1072.component_1072_49);
            int4 = varbit_artisan_coal - int4;
        } else {
            ifSetColour(colour(0xFF0000), Component.interface_1072.component_1072_49);
            int4 = 0;
        }
    } else if (intArg0 == 70254829) {
        switch (varbit_artisan_grade_choice) {
            case 0:
                int1 = 1;
                int2 = 6;
                break;
            case 1:
                int1 = 3;
                int2 = 14;
                break;
            case 2:
                int1 = 4;
                int2 = 22;
                break;
            case 3:
                int1 = 25;
                int2 = 150;
                break;
        }
        int3 = int1 * varbit_artisan_temp_bar_number;
        if (varbit_artisan_adamant_ores - int3 > 0) {
            ifSetColour(colour(0x00FF00), Component.interface_1072.component_1072_61);
            int3 = varbit_artisan_adamant_ores - int3;
        } else {
            ifSetColour(colour(0xFF0000), Component.interface_1072.component_1072_61);
            int3 = 0;
        }
        int4 = int2 * varbit_artisan_temp_bar_number;
        if (varbit_artisan_coal - int4 > 0) {
            ifSetColour(colour(0x00FF00), Component.interface_1072.component_1072_49);
            int4 = varbit_artisan_coal - int4;
        } else {
            ifSetColour(colour(0xFF0000), Component.interface_1072.component_1072_49);
            int4 = 0;
        }
    } else if (intArg0 == 70254841) {
        switch (varbit_artisan_grade_choice) {
            case 0:
                int1 = 1;
                int2 = 8;
                break;
            case 1:
                int1 = 2;
                int2 = 16;
                break;
            case 2:
                int1 = 4;
                int2 = 30;
                break;
            case 3:
                int1 = 18;
                int2 = 144;
                break;
        }
        int3 = int1 * varbit_artisan_temp_bar_number;
        if (varbit_artisan_rune_ores - int3 > 0) {
            ifSetColour(colour(0x00FF00), Component.interface_1072.component_1072_65);
            int3 = varbit_artisan_rune_ores - int3;
        } else {
            ifSetColour(colour(0xFF0000), Component.interface_1072.component_1072_65);
            int3 = 0;
        }
        int4 = int2 * varbit_artisan_temp_bar_number;
        if (varbit_artisan_coal - int4 > 0) {
            ifSetColour(colour(0x00FF00), Component.interface_1072.component_1072_49);
            int4 = varbit_artisan_coal - int4;
        } else {
            ifSetColour(colour(0xFF0000), Component.interface_1072.component_1072_49);
            int4 = 0;
        }
    }
}
