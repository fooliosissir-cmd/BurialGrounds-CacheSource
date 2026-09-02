/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,interface_invother_update_big]

function proc_interface_invother_update_big(intArg0: component, intArg1: inv, intArg2: number, intArg3: number, intArg4: number, intArg5: component, strArg0: string, strArg1: string, strArg2: string, strArg3: string, strArg4: string, strArg5: string, strArg6: string, strArg7: string, strArg8: string): void {
    ccDeleteAll(intArg0);
    let int6: number = 0;
    let int7: number = 0;

    if (ifGetScrollWidth(intArg0) > 0) {
        int6 = (ifGetScrollWidth(intArg0) - 36 * intArg2) / (intArg2 - 1);
    } else {
        int6 = (ifGetWidth(intArg0) - 36 * intArg2) / (intArg2 - 1);
    }

    if (ifGetScrollHeight(intArg0) > 0) {
        int7 = (ifGetScrollHeight(intArg0) - 32 * intArg3) / (intArg3 - 1);
    } else {
        int7 = (ifGetHeight(intArg0) - 32 * intArg3) / (intArg3 - 1);
    }
    let int8: number = 0;

    while (int8 <= intArg2 * intArg3) {
        ccCreate(intArg0, 5, int8);
        ccSetSize(36, 32, 0, 0);
        ccSetPosition((36 + int6) * (int8 % intArg2), int8 / intArg2 * (32 + int7), 0, 0);
        interface_invother_draw_slot_big(intArg1, int8, intArg0, int8, intArg4, intArg5, strArg0, strArg1, strArg2, strArg3, strArg4, strArg5, strArg6, strArg7, strArg8);
        int8 = int8 + 1;
    }
}
