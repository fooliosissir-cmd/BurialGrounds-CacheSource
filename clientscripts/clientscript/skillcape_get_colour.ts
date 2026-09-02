/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,skillcape_get_colour]

function skillcape_get_colour(intArg0: component, intArg1: component, intArg2: component): void {
    ifSetColour(hsvtorgb(varp_skillcape_colour_interface), intArg2);
    let int3: number = ifGetHeight(intArg1);
    let int4: number = 1;

    if (varbit_9258 > colour(0x000000)) {
        int4 = max(min(int3 - varbit_9258 * 2, int3), 0);
    }
    cs2_4610(int4);
    let int5: number = ifGetHeight(intArg0);
    let int6: number = 0;

    if (varbit_9259 > 0) {
        int6 = max(min(int5 - varbit_9259 * (int5 / 8), int5), 0);
        int6 = max(min(int6 - int5 / 16, int5), 0);
    }
    let int7: number = 0;

    if (varbit_9260 > 0) {
        int7 = max(min(varbit_9260 * (int5 / 128), int5), 0);
    }
    ifSetColour(varbit_9258, intArg0);
    cs2_4609(int7, int6);
}
